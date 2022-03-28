import React from 'react'
import styled from 'styled-components'

function DisplaySet() {
  return (
    <SetUser>
        <User>
            <UserImg>
                image
            <img src='/images/BKE_5549.jpg' alt='user'/>
            </UserImg>
            <UserName> Dr.Marrie</UserName>
        </User>
        <LogOut></LogOut>
        <ChangePin></ChangePin>
    </SetUser>
  )
}

export default DisplaySet

const SetUser = styled.div`
height:50vh;
border-radius:15px;
margin-right:15px;
margin-left:15px;
margin-top:130px;
background-color:#0096ff;

`
const User = styled.div`
height:67px;
display:flex;
align-items:center; 
justify-content:center;
background:red;
`

const LogOut = styled.div``

const ChangePin = styled.div``

const UserImg = styled.div`
width:36px;
height:36px;
border-radius:50%;
overflow:hidden;
margin-right:5px;
padding:10px;
img {
    width:100%;
}
`

const UserName = styled.span``

