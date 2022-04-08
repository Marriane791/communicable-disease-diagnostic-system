import React from 'react'
import styled from 'styled-components'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Sidebar() {
  return (
    <Main>
        <Top>
            <IconMed>
                <img src='/images/heartbeat-removebg-preview.png' alt='heartbeat' />
            </IconMed>
            <Text>Diagnose.</Text>
        </Top>
        <Channels>
          <ChannelItems>
                <a href="/">
                    <VaccinesIcon/>
                    <span>Predict</span> 
                </a>
                <a href="/chat">
                    <ChatBubbleOutlineIcon/>
                   <span> Chat</span> 
                </a>
                <a href="/admin">
                    <SwitchAccountIcon/>
                     <span>Admin</span>
                </a>  
                <a href='/head-doc'>
                    <PersonOutlineIcon/>
                    <span>HeadDoctor</span>
                </a>
                <a href='/settings'>
                    <SettingsOutlinedIcon/>
                    <span>Settings</span>
                </a>
                
            </ChannelItems>
        </Channels>
        <SidebarImg>
            <img src='/images/first-aid-kit-removebg.png' alt='Firstaid'/>
        </SidebarImg>
    </Main>
  )
}

export default Sidebar

const Main = styled.div`
color:#fff;
border-top-right-radius:15px;
`
const Top = styled.div`
height:64px;
display:flex;
align-items:center;
padding-left:19px;
border-bottom:1px solid #7393B3;

`
const IconMed = styled.div`
width:80px;
height:72px;
img {
    height:100%;
   
}
`

const Text = styled.div`
font-size:28px;
font-weight:700;
`
const Channels = styled.div`

`
const ChannelItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding-left:33px;
padding-top:40px;
cursor:pointer;
font-size:12px;
a {
    padding-top:40px;
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;


    span {
        margin-left:25px;
    }
}

`
const SidebarImg = styled.div`
position:fixed;
bottom:5vh;
margin-left:30px;
width:104px;
height:104px;
img {
    width:100%;
}
`