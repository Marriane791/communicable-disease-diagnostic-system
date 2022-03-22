import React from 'react'
import styled from 'styled-components'
import MedicationIcon from '@mui/icons-material/Medication';


function Sidebar() {
  return (
    <Main>
        <Top>
            <IconMed>
            <MedicationIcon />
            </IconMed>
            <Text>Diagnostic System</Text>
        </Top>
    </Main>
  )
}

export default Sidebar

const Main = styled.div`
color:#fff;
`
const Top = styled.div`
padding-top:25px;
`
const IconMed = styled.div`
padding-left:75px;
`

const Text = styled.div`
font-size:12px;
font-weight:700;
padding-left:45px;
`