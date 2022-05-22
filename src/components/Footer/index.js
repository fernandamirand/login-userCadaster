import React from 'react'
import { Container, Content, Github, Linkedin, Text } from './styles'

function Footer() {
  return (
    <Container>    
        <Text> Made by Fernanda Miranda - Front-End Developer </Text>
        <Content>
           <a href='https://www.linkedin.com/in/imfernandamiranda/' target={'_blank'}>
           <Linkedin src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiY1mzO8hS_cvCEzzr8tqk3Ltcgc2KDGkD5y34OS0cCdqg0HRWQMUCLEVsjhV44g-WM8&usqp=CAU' height='30px'/>
        </a>
           <a href='https://github.com/fernandamirand' target={'_blank'}>
           <Github src='https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png'  height='30px'/>
        </a>   
    </Content>
    </Container>
  )
}

export default Footer

