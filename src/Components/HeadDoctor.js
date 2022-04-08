import React from 'react'
import styled  from 'styled-components'
import PredictionTbl from './PredictionTbl'

function HeadDoctor() {
  return (
    <Container>
        <Header>
            <Text>HeadDoctor Dashboard</Text>
            <UserDetails>
                <UserImage>
                    <img src='https://lh3.googleusercontent.com/ogw/ADea4I60_ljuyTgwTtq68BWP1ohKAm6mM5vaX8HCeVTrWDY=s32-c-mo' alt='image_headdoc' />
                </UserImage>
                <UserName>Dr.Marrie</UserName>
            </UserDetails>
        </Header>
        <Analysis1>
          <PredictionTbl />
          <PieImg>
              <img src='/images/tbtreatment.png' alt='tbimage' />
          </PieImg>
        </Analysis1>
        <Analysis2>
            <LineGraph>
            <img src='/images/malariaprevallence.png' alt='mlimage' />
            </LineGraph>
            <BarGraph>
            <img src='/images/scatterplot.png' alt='otherimage' />
            </BarGraph>
        </Analysis2>
    </Container>
  )
}

export default HeadDoctor

const Container = styled.div`
background:rgb(242, 246, 252);
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:grid;
grid-template-rows:10vh 45vh 45vh;
`
const Header = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding-right:15px;
`

const Analysis1 = styled.div`
padding:20px;
display:flex;
align-items:center;
`

const Analysis2 = styled.div`
display:flex;
padding:20px;
align-item:center;
`
const Text = styled.div`
padding-left:20px;
font-weight:600;
`
const UserDetails = styled.div`
display:flex;
border-radius:15px;
background:#ADD8E6;
height:36px;
width:174px;
align-items:center;
justify-content:center;
`

const UserImage = styled.div`
margin-right:10px;
height:30px;
width:30px;
border-radius: 50%;
background:white;

img {
    width:100%;
}

`
const PieImg =styled.div`
background:#fff;
margin-left:20px;
width:20vw;
height:45vh;
border-radius:15px;
display:flex;
align-items:center;
justify-content:center;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
img {
    width:100%;
} 

`

const UserName = styled.div`
font-size:14px;
`
const LineGraph = styled.div`
border-radius:15px;
background:#fff;
width:50vw;
display:flex;
align-items:center;
justify-content:center;
height:40vh;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 
image {
    width:100%;
}
`

const BarGraph = styled.div`
margin-left:25px;
background:#fff;
width:25vw;
height:40vh;
display:flex;
align-items:center;
justify-content:center;
border-radius:15px;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 
img {
    width:100%;
}
`