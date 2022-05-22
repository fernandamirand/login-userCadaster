import React, {useState} from 'react'
import * as yup from 'yup'
import api from '../../services/api';
import Register from '../Register';
import { ButtonLogin, Container, Content, CreateAccount, CreateAccountClick, Forms, InputPassword, InputUser, RecadoError, RecadoSucess, Title } from './styles';

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const [isRegister, setRegister] = useState(false)

    // Para receber os dados do formulario
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    
    // Para enviar os dados do form para o back-end
    const addUser = async e => {
        e.preventDefault();

        if(!(await validate())) return;
        // //Requisição

        api.post("/login",{
            name: user.email,
            password: user.password
        })
        .then((response) => {
            if(response.data.ok) {
                setStatus({
                    type: 'success',
                    mensagem: 'Login feito com sucesso'
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
                mensagem: 'Email ou senha incorretos. Tente novamente.'
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
            .email("Erro: Necessário preencher o campo com e-mail válido!")    
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

    const renderForm = () => {
        if(isRegister) {
            return <Register backToLogin={()=>setRegister(false)}/>
        } else {
            return( 
            <>    
            <Title>Login</Title>   
            {status.type === 'success' ? <RecadoSucess >{status.mensagem}</RecadoSucess> : ""}
            {status.type === 'error' ? <RecadoError>{status.mensagem}</RecadoError> : ""} 
            <Forms onSubmit={addUser}>
                <InputUser
                placeholder='Usuário' 
                name="email"
                type={'email'}
                onChange={valueInput}
                defaultValue={user.email}    />
                
                <InputPassword
                placeholder='Senha' 
                type={'password'} 
                name="password" 
                autoComplete='on'
                onChange={valueInput}
                defaultValue={user.password}   />

                <ButtonLogin type='submit'>Entrar</ButtonLogin>
                <CreateAccount href='#' onClick={()=>setRegister(true)}>Não tem cadastro?</CreateAccount>
                <CreateAccountClick href='#' onClick={()=>setRegister(true)}>Clique aqui</CreateAccountClick>
            </Forms>
            </>)
        }
    }


  return (
    <Container>
        <Content>
            {renderForm()}
        </Content>
    </Container>
  )
}

export default Login

