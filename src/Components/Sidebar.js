import React from 'react'
import styled from 'styled-components'
import MedicationIcon from '@mui/icons-material/Medication';
import {sidebarItems} from '../data/SidebarData'


function Sidebar() {
  return (
    <Main>
        <Top>
            <IconMed>
            <MedicationIcon />
            </IconMed>
            <Text>Diagnostic System</Text>
        </Top>
        <Channels>
            {
                sidebarItems.map(item => (
                    <ChannelItems>
                        {item.icon}
                        {item.text}
                    </ChannelItems>
                ))
            }
        </Channels>
        <SidebarImg>
            <img src='/images/kit2.jpg' />
        </SidebarImg>
    </Main>
  )
}

export default Sidebar

const Main = styled.div`
color:#fff;
`
const Top = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:25px;
`
const IconMed = styled.div`
`

const Text = styled.div`
font-size:12px;
font-weight:700;
`
const Channels = styled.div`

`
const ChannelItems = styled.div`
display:grid;
grid-template-columns:15% auto;
height:28px;
align-items:center;
padding-left:19px;
padding-top:40px;
cursor:pointer;
font-size:12px;

`
const SidebarImg = styled.div`
width:90px;
height:90px;
img {
    width:100%;
}
`