import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <Chatting>
        <Greetings>
            <img src='/images/connect-removebg-preview.png' alt='chat' />
        </Greetings>
        <Messagearea>
        <ChatMessage />
        </Messagearea>
        <ChatInput />
    </Chatting>
  )
}

export default Chat

const Chatting = styled.div`
background:#fff;
display:grid;
grid-template-rows: 35vh auto min-content;
border-top-left-radius:25px;
border-bottom-left-radius:25px;
`
const Greetings = styled.div`
display:flex;
align-items:center;
justify-content:center;
img {
    height:100%;
}
`

const Messagearea = styled.div`

`

