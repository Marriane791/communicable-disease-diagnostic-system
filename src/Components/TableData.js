import React from 'react'
import styled from 'styled-components'

const data = [
    { Symptoms: "Anom", Predictions: 19, gender: "Male" },
    { Symptoms: "Megha", Predictions: 19, gender: "Female" },
    { Symptoms: "Subham", Predictions: 25, gender: "Male"},
  ]

function TableData() {
  return (
    <Overall>
         <table>
            <tr>
            <th>Symptoms</th>
            <th>Predictions</th>
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
    </Overall>
  )
}

export default TableData

const Overall = styled.div`
padding:15px;   
width: 100%;
display: flex;
justify-content: center;
align-items: center;

table {
    width: 800px;
    height: 200px;
}
th {
  }
    
  td {
    text-align: center;
  }

`

