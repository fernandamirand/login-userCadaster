import React, {useState} from 'react'
import * as yup from 'yup'
import api from '../../services/api';
import { ButtonLogin, Container, Content, Forms, InputPassword, InputUser, RecadoError, RecadoSucess, Title } from './styles';

function Register(props) {
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    // Para receber os dados do formulario
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    
    // Para enviar os dados do form para o back-end
    const addUser = async e => {
        e.preventDefault();

        if(!(await validate())) return;

        api.post("/user/cadaster",{
            name: user.email,
            password: user.password
        })
        .then((response) => {
            if(response.data.ok){
                setStatus({
                    type: 'success',
                    mensagem: 'Cadastro feito com sucesso!'
                });
            } else {
                setStatus({
                    type: 'error',
                    mensagem: response.data.why
                });
            }       
        })
        .catch((err) => {
            setStatus({
                type: 'error',
                mensagem: 'Usuário já cadastrado. Tente fazer login.'
            });
        });
    }

    async function validate(){
        let schema = yup.object().shape({
            password: yup.string("Erro: Necessário preencher o campo senha!")
            .required("Erro: Necessário preencher o campo senha!")
            .min(6,"Erro: A senha deve ter no mínimo 6 caracteres!"),

            email: yup.string("Erro: Necessário preencher o campo e-mail!")
            .required("Erro: Necessário preencher o campo email!")
            .email("Erro: Necessário preencher o campo com e-mail válido!"),
            
            confirmPassword: yup.string("Erro: Necessário preencher o campo confirmar senha!")
            .required("Erro: Necessário preencher o campo confirmar senha!")
            .min(6,"Erro: A senha deve ter no mínimo 6 caracteres!")
            .oneOf([yup.ref('password'), null], 'As senhas digitadas não conferem!')
        });

        try{
            await schema.validate(user);
            return true;
        }catch(err){
            setStatus({
                type: 'error',
                mensagem: err.errors
            });
            return false;
        }

    }
  return (
    <Container>
        <Content>
            <Title>Cadastro</Title>

            {status.type === 'success' ? <RecadoSucess >{status.mensagem}</RecadoSucess> : ""}
            {status.type === 'error' ? <RecadoError >{status.mensagem}</RecadoError> : ""}



            <Forms onSubmit={addUser}>
               <InputUser 
                  placeholder='Usuario' 
                  name="email"
                  type='email'
                  onChange={valueInput}
                  defaultValue={user.email}    />
                  
               <InputPassword
                  placeholder='Senha' 
                  type={'password'} 
                  name="password" 
                  autoComplete='on'
                  onChange={valueInput}
                  defaultValue={user.password}   />

            <InputPassword placeholder='Confirmar senha' 
                           type={'password'} 
                           name="confirmPassword" 
                           autoComplete='on'
                           onChange={valueInput}
                           defaultValue={user.confirmPassword}/>

               <ButtonLogin type='submit'>Cadastrar</ButtonLogin>
               <ButtonLogin onClick={()=>props.backToLogin()}>Voltar</ButtonLogin>
            </Forms>
        </Content>
    </Container>
  )
}

export default Register
