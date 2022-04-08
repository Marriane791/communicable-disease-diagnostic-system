import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Settings() {
const [settings,setSettings] = useState([])
const changeDetails = () => {
  axios.put('/user/update/{id}').then((res) =>(
    setSettings(res.data)
  ))
 }

 useEffect(()=>{
   changeDetails()
 },[])
  return (
    <UserSett>
      <Change>
      <span>Security Settings</span>
        <form>
        <table>
          <tr>
            <td><input type='text' placeholder=' Email '/></td>
          </tr>
          <tr>
          <td><input type='password' placeholder='Current Username'/></td>
          </tr>
          <tr>
            <td><input type='password' placeholder='New Username'/></td>
          </tr>
        </table>
        <Submit>Save</Submit>
        </form>
      </Change>
    </UserSett>
  )
}

export default Settings
const UserSett = styled.div`
background:rgb(242, 246, 252);
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:flex;
align-items:center;
justify-content:center;
  `
const Change = styled.div`
width:65vw;
height:50vh;
background:#fff;
border-radius:15px;
padding:20px;
box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 

span {
  font-weight:600;
}

table {
  width:60vw;
  height:45vh;
}

input {
  border:none;
  border-bottom:1px solid #7393B3;
  width:100%;

}
`
const Submit = styled.div`
width:65px;
height:32px;
cursor:pointer;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
background-color:rgb(33, 111, 237);

`