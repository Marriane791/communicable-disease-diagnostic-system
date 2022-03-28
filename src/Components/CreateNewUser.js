import React from 'react'
import styled from 'styled-components'

function CreateNewUser() {
  return (
    <NewUser>
        <Title>Create New User</Title>
        <FormFill>
            <form>
                <Name>
                    Name:
                    <input type='text' />
                </Name>
                <Id>
                    Doctor's ID:
                    <input type='text'/>
                </Id>
                <FunctionUsr>
                    Role:
                    <input type='text'  placeholder='doctor/headdoctor'/>
                </FunctionUsr>
                <Value>
                    <Text2>Submit</Text2>
                </Value>
            </form>
        </FormFill>
    </NewUser>
  )
}

export default CreateNewUser

const NewUser = styled.div`

`

const Title = styled.div`
font-weight:600;
display:flex;
align-items:center;
justify-content:center;
`
const FormFill = styled.div`
padding-top:30px;
padding-left:20px;

input {
    border-radius:5px;
    border:none;
    font-size:13px;
    height:25px;
    margin-left:30px;
}
input:focus {
    outline:none;
}
`

const Name = styled.div`
`

const Id = styled.div`
margin-top:20px;
`

const FunctionUsr = styled.div`
margin-top:20px;

`
const Value = styled.div`
padding-top:15px;
display:flex;
justify-content:center;
`
const Text2 = styled.div`
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