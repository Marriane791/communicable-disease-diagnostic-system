import React from 'react'
import styled from 'styled-components'

function Revoke() {
  return (
    <RevokeUser>
        <TextR>Revoke User</TextR>
        <Action>
            <TextD>Enter the user's ID</TextD>
            <InputD>
            <form>
                <input type='text' placeholder='user ID...'/>
                <Btn>
                    <BtnDel>Revoke</BtnDel>
                </Btn>
            </form>
            </InputD>
        </Action>
    </RevokeUser>
  )
}

export default Revoke

const RevokeUser = styled.div`
background:#89CFF0;
border-radius:25px; 
padding:10px;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 

`

const TextR = styled.div`
font-weight:600;
display:flex;
align-items:center;
justify-content:center;
padding-top:30px;
`
const Action = styled.div`

`

const TextD = styled.div`
padding-top:20px;
padding-left:10px;
`
const InputD = styled.div`
padding-top:20px;
padding-left:10px;
input {
    height:30px;
    width:135px;
    border-radius:5px;
    border:none;
    font-size:13px;
}
input:focus {
    outline:none;
}
`

const Btn = styled.div`
padding-top:15px;
display:flex;
justify-content:center;
`

const BtnDel = styled.div`
font-weight:600;
background: #007a5a;
border-radius:2px;
width:64px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right:5px;
cursor:pointer;
:hover {
    background:#148567;
}
`