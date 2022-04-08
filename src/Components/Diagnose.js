import React from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Diagnose() {



  return (
    <DiagnPatiante>
        <Main>
            <Text>What are your patiante's symptoms?</Text>
            <InputField>
            <form>
            <input  type='text' placeholder='fill in the signs and symptoms' />
            <Popup trigger={<Send> Predict </Send>} 
            position="right center">
              <div>Malaria</div>
             </Popup>
            </form>
        </InputField>
        </Main>
        
    </DiagnPatiante>
  )
}

export default Diagnose

const DiagnPatiante = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Main = styled.div`
width:600px;
display:flex;
flex-direction:column;
align-items:center;
max-width: 85vw;
height: 50vh;
background:#FFB6C1;
border-radius: 20px;
background-size: cover;
background-position: center;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`

const Text = styled.div`
font-weight:900;
font-size:13px;
padding-top:15px;

`
const InputField = styled.div`
padding-top:20px;
form {
  display:flex;
  flex-direction:column;
}
input {
  width:300px;
  height:55px;
  border:none;
  padding-top:80px;
  border-radius:15px;
}
input:focus {
  outline:none;
}

`

const Send = styled.button`
width:65px;
height:30px;
margin-top:25px;
background-color: #007a5a;
border:none;
border-radius:5px;
color:#fff;

`