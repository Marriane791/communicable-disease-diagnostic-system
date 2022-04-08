import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <DiagImage src="/images/motion.gif" />
            <h1>Sign In </h1>
            <SignInButton>
                Sign in with google.
            </SignInButton>
        </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
width:100%;
height:100vh;
background:#f8f8f8;
display:flex;
justify-content:center;
align-items:center;
`

const Content = styled.div`
background:#fff;
padding:100px;
border-radius:5px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

box-shadow: 0 1px 3px rgb(0 0 0/12%), 0 1px 2px rgb(0 0 0 /24%);

`

const  DiagImage = styled.img`
height:150px;
border-radius:15px;

`
const SignInButton = styled.button`
margin-top:50px;
color:#fff;
border:none;
height:40px;
border-radius:4px;
cursor:pointer;
font-size:15px;
background-color:rgb(33, 111, 237);
`

