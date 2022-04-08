import React from 'react'
import styled from 'styled-components'

const data = [
    { Symptoms: "Malaria", Predictions: "abdominalpain,bloodystools,anemia,Bodyaches,respiratorydistress" },
    { Symptoms: "Tb", Predictions: "BloodCough,Cough,Fever,Drenchingnightsweats,Coughwithsputum" },
    { Symptoms: "Malaria", Predictions:"anemia,Generallyfeelingsick,Fatigue,impairedconsciousness,coma"},
  ]

function PredictionTbl() {
  return (
    <Predict>
        <table>
            <tr>
            <th>User</th>
            <th>Details</th>
            </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Symptoms}</td>
              <td>{val.Predictions}</td>
            </tr>
          )
        })}
      </table>
    </Predict>
  )
}

export default PredictionTbl
const Predict = styled.div` 
width:55vw;
height:40vh;
background:#fff;
border-radius:15px;

box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3); 

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th {

  
    text-align: left;
  
    padding: 8px;
  
  }
  
  tr:nth-child(even) {
  
    background-color: #dddddd;
  
  }
`