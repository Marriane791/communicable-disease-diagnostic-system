import React from 'react'
import styled from 'styled-components'

function Diagnose() {
  return (
    <DiagnPatiante>
        <Main>
            <Text>What are your patiante's symptoms?</Text>
        </Main>
        <InputField>
        <form>
            <input  type='text' placeholder='fill in the signs and symptoms' />
            <Send  placeholder='Predict' />
        </form>
        </InputField>
    </DiagnPatiante>
  )
}

export default Diagnose

const DiagnPatiante = styled.div`
display:flex;
justify-content:center;
`
const Main = styled.div`
width:600px;
padding: 20px;
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

`
const InputField = styled.div``

const Send = styled.button``