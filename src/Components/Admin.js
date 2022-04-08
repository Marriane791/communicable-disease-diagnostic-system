import React,{useState} from 'react'
import styled  from 'styled-components'
import CreateNewUser from './CreateNewUser'
import DisplaySet from './DisplaySet'
import Revoke from './Revoke'
import TableData from './TableData'

function Admin() {
  const [user,setUser] = useState([]) 

  const data = [
    {
      "_id": "33bf8907-c230-4076-a92e-d2d9a848ac5e",
      "role": "head-doctor",
      "fullname": "John Doe",
      "email": "jdoe@x.edu.ng",
      "password": "doe-123!"
    } ,{
      "_id": "33bf8907-c230-4076-a92e-d2d9a848ac5e",
      "role": "doctor",
      "fullname": "Ian Githungo",
      "email": "doe@x.edu.ng",
      "password": "doe-123!"
    }, {
      "_id": "33bf8907-c230-4076-a92e-d2d9a848ac5e",
      "role": "head-doctor",
      "fullname": "Becky Shilla",
      "email": "bck@x.we.ng",
      "password": "doe-123!"
    } ,{
      "_id": "33bf8907-c230-4076-a92e-d2d9a848ac5e",
      "role": "doctor",
      "fullname": "Melda Achieng'",
      "email": "mesh@x.ach.ng",
      "password": "mesh@123"
    }
  ]

  const name =  data.map((el) => {
    return el.fullname;
  })

  console.log('user', name);

  // setUser(name)
  // const users =  getAllUsers();

  console.log('users \n',user);
  return (
    <AdminPage>
        <UpperDetails>
          <Revoke/>
          <CreateNewUser/>
          <DisplaySet />
        </UpperDetails>
        <UsersDetails>

          <TableData />
        </UsersDetails>
    </AdminPage>
  )
}

export default Admin

const AdminPage = styled.div`
background:rgb(242, 246, 252);
display:grid;
grid-template-rows:235px auto;
padding-top:32px;
padding-left:32px;
border-top-left-radius:25px;
border-bottom-left-radius:25px;
`


const UpperDetails = styled.div`
display:flex;
flex-direction:rows;
justify-content:space-between;
align-items;center;
padding-right:25px;
`

const UsersDetails = styled.div`
margin-top:25px;
margin-right:25px;
`