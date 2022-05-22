import styled from "styled-components"

export const Container = styled.div`
height: 470px ;
display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #090b13;
height: 370px;
width: 350px ;
border-radius: 4%;
box-shadow: 10px 5px 5px black;
`
export const Title = styled.h1`
margin-top: 5px;
color: white;
`

export const Forms = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
`

export const InputUser = styled.input`
height: 30px;
border-radius: 4%;
border-color: white;
width: 230px;

&:focus{
 box-shadow: 0 0 0 0;
 border: 0 none;
 outline: 0; 
}
`
export const InputPassword = styled.input`
margin-top: 8px;
height: 30px;
border-radius: 4%;
border-color: white;
width: 230px;

&:focus{
 box-shadow: 0 0 0 0;
 border: 0 none;
 outline: 0; 
}
`

export const ButtonLogin = styled.button`
margin-top: 20px;
width: 100px;
height: 35px;
cursor: pointer;
border-radius: 4%;
border-color: white;
background-color: white;

  &:hover{
     background-color: #090b13 ;
     color: white;
  }
`

export const CreateAccount = styled.a`
 margin-top: 20px ;
 color: white;
 text-decoration: none;
`

export const RecadoSucess = styled.p`
 color: green;
 display: flex ;
 justify-content:center ;
`
export const RecadoError = styled.p`
 color: red;
 display: flex ;
 justify-content:center ;
  width: 220px`