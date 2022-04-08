import React, {  } from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

// import {useStateValue} from './Stateprovider';


function ChatInput() {

//    const [input,setInput] = useState("");
//    const [{user}] = useStateValue();
   
//    const sendMessage = (e) => {
//        e.preventDefault();
//        axios.post('/chat/chat',{
//            message: input,
//            timestamp:Date.now(),
//            user:user.displayName,
//            userImage:user.photoURL
//        })
//        setInput("")
//    };

  return (
    <Chatconn>
        <InputContainer>
        <form>
            <input type="text" 
            value=""
            onChange=""
            placeholder= {'Message'}/>
            <SendButton>
                <Send/>
            </SendButton>
        </form>
        </InputContainer>
    </Chatconn>
  )
}

export default ChatInput

const Chatconn = styled.div`
padding-left:20px;
paddding-right:20px;
padding-bottom:24px;
`
const InputContainer = styled.div`
border: 1px solid #8D8D8E;
border-radius:4px;
form {
    display:flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    input {
        flex:1;
        border:none;
        font-size:13px;
    }
    input:focus {
        outline:none;
    }
}
`

const SendButton = styled.div`
background: #007a5a;
border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right:5px;
cursor:pointer;

.MuiSvgIcon-root {
    width:18px;
}

:hover {
    background:#148567;
}

`
const Send = styled(SendOutlinedIcon)`
color: #D9D9D9;
`