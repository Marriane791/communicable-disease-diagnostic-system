import React from 'react'
import styled  from 'styled-components'
import CreateNewUser from './CreateNewUser'
import DisplaySet from './DisplaySet'
import Revoke from './Revoke'
import TableData from './TableData'

function Admin() {
  return (
    <UserSettings>
        <Details>
            <GivePerm>
            <AssignPerm>
                <CreateNewUser/>
            </AssignPerm>
            <RevokePerm>
                <Revoke/>
            </RevokePerm>
            </GivePerm>
            <VeiwPrediction>
                <TableData/>
            </VeiwPrediction>
        </Details>
        <Settings>
            <DisplaySet />
        </Settings>
    </UserSettings>
  )
}

export default Admin

const UserSettings = styled.div`
background-color:#fff;
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:grid;
grid-template-columns:auto 200px;
font-size:14px;
`
const Details = styled.div`
display:flex;
flex-direction:column;
`

const Settings = styled.div`
`
const AssignPerm = styled.div`
background:#ADD8E6;
border-radius:10px;
width:400px;

`

const RevokePerm = styled.div`
background:#F2D2BD;
border-radius:10px;
width:300px;
`

const GivePerm = styled.div`
height:40vh;
display:flex;
padding-top:15px;
padding-bottom:15px;
padding-left:33px;
justify-content:space-between;
`

const VeiwPrediction = styled.div`
height:auto;
border-radius:10px;
margin-left:33px;
margin-top:20px;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`
