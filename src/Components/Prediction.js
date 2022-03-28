import React from 'react'
import styled from 'styled-components'
import Diagnose from './Diagnose'

function Prediction() {
  return (
    <Container>
      <PredictionImage>
        <img src='/images/patiante-doctor-removebg-preview.png'  alt=' predict'/>
      </PredictionImage>
      <Diagnose />
    </Container>

  )
}

export default Prediction

const Container = styled.div`
background-color:#fff;
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:grid;
grid-template-rows:32vh auto;
`
const PredictionImage = styled.div`
display:flex;
align-items:center;
justify-content:center;
img {
    height:100%;
}
`