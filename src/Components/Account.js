import React from 'react'
import styled from 'styled-components'

function Account() {
  return (
    <ViewAccount>
        <DetailsUser></DetailsUser>
    </ViewAccount>
  )
}

export default Account

const ViewAccount = styled.div`
background:rgb(242, 246, 252);
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:flex;
align-items:center;
justify-content:center;
`
const DetailsUser = styled.div`
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 
border-radius:15px;
backround:#fff;
width:28vw;
height:36vh;
`
