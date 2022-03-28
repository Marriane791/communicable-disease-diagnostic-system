import React from 'react'
import styled from 'styled-components'

function Revoke() {
  return (
    <RevokeUser>
        <TextR>Revoke User's Permissions</TextR>
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

const RevokeUser = styled.div``

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
padding-top:8vh;
padding-left:40px;
`
const InputD = styled.div`
padding-top:20px;
padding-left:40px;
input {
    height:30px;
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