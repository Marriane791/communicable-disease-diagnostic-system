import React from 'react'
import styled from 'styled-components'

function DisplaySet() {
  return (
    <SetUser>
        <User>
            <UserImg>
               <img src='/images/BKE_5549.jpg' alt='image_user' />
            </UserImg>
            <UserName> Dr.Marrie</UserName>
        </User>
        <LogOut>LogOut</LogOut>
        <ChangePin>ChangePin</ChangePin>
    </SetUser>
  )
}

export default DisplaySet

const SetUser = styled.div`
display:flex;
flex-direction:column;
background-color:rgb(33, 111, 237);
padding:10px;
border-radius:25px;
width:124px;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 

`
const User = styled.div`
display:flex;
align-items:center;
justify-content:center;
border-bottom:1px solid #7393B3;
height:68px;
`

const LogOut = styled.div`
cursor:pointer;
border-bottom:1px solid #7393B3;
height:68px;
display:flex;
align-items:center;
justify-content:center;


`

const ChangePin = styled.div`
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
padding-top:30px;
`

const UserImg = styled.div`
width:36px;
height:36px;
border-radius:12px;
overflow:hidden;
margin-right:5px;
img {
    width:100%;
}
`

const UserName = styled.div``

