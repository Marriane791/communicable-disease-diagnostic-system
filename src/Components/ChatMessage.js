import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <ChatMain>
        <UserAvatar>
            <img src='https://lh3.googleusercontent.com/ogw/ADea4I60_ljuyTgwTtq68BWP1ohKAm6mM5vaX8HCeVTrWDY=s32-c-mo' alt='user'/>
        </UserAvatar>
        <MesssageContent>
            <Name>
                Dr.Marrie
                <span>3/28/2022 11:15:55 AM</span>
            </Name>
            <Text>What are your most malaria symptoms</Text>
        </MesssageContent>
    </ChatMain>
  )
}

export default ChatMessage

const ChatMain = styled.div`
padding: 8px 20px;
display:flex;
align-items:center;
`
const UserAvatar = styled.div`
width:36px;
height:36px;
border-radius:2px;
overflow:hidden;
margin-right:5px;
img {
    width:100%;
}
`

const MesssageContent = styled.div`
display:flex;
flex-direction:column;
`

const Name = styled.span`
font-weight:900;
font-size:15px;
line-height:1.4;
span {
    font-weight:400;
    color:rgba(97,96,97);
    padding-left:3px;
    font-size:13px;
}
`

const Text = styled.span`

`