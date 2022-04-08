import React from "react";
import styled from "styled-components";
// import axios  from 'axios'

export const data = [
  {
    _id: "33bf8907-c230-4076-a92e-d2d9a848ac5e",
    role: "head-doctor",
    fullname: "John Doe",
    email: "jdoe@x.edu.ng",
    password: "doe-123!",
  },
  {
    _id: "33bf8907-c230-4076-a92e-d2d9a848ac5e",
    role: "doctor",
    fullname: "Ian Githungo",
    email: "doe@x.edu.ng",
    password: "doe-123!",
  },
  {
    _id: "33bf8907-c230-4076-a92e-d2d9a848ac5e",
    role: "head-doctor",
    fullname: "Becky Shilla",
    email: "bck@x.we.ng",
    password: "doe-123!",
  },
  {
    _id: "33bf8907-c230-4076-a92e-d2d9a848ac5e",
    role: "doctor",
    fullname: "Melda Achieng'",
    email: "mesh@x.ach.ng",
    password: "mesh@123",
  },
];

function TableData() {
  // const [users,setUsers] = useState([])
  // const fetch_all_users = () =>{
  //   axios.get('/user/all').then((res)=>
  //   (
  //     setUsers(res)
  //   ))
  // // }

  // useEffect(() =>{
  //    fetch_all_users()
  // },[])

  return (
    <Overall>
      <table>
        <tr>
          <th>User</th>
          <th>Details</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.fullname}</td>
              <td>{val.role}</td>
            </tr>
          );
        })}
      </table>
    </Overall>
  );
}

export default TableData;

const Overall = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);

  table {
    width: 800px;
    height: 200px;
  }
  th {
  }

  th,
  td {
    text-align: center;
    border-bottom: 1px solid #d8d8d8;
    border-collapse: collapse;
    padding: 25px;
  }
`;
