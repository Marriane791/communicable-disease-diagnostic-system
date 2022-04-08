import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Prediction from './Components/Prediction';
import Sidebar from './Components/Sidebar';
import styled from 'styled-components'
import Chat from './Components/Chat';
import Admin from './Components/Admin';
import HeadDoctor from './Components/HeadDoctor';
import Settings from './Components/Settings';
import Account from './Components/Account';
// import { useState } from 'react';
// import Login from './Components/Login';
// import axios from 'axios';

function App() {
//  const [user,setUser] = useState()
//  const getUsers = async(id)=>{
//   axios.get('http://localhost:8000/user/{id}').then((response) => {
//   console.log(response);
//   setUser(response);
// })
// .catch((error) => {
//   console.log(error);
// });
// }
// getUsers();
  return (
    <div className="App">
      <Router>
        {
          // !user ?
          // <Login/>
          // :
        <Container>
        <Sidebar />
        <Switch>
          <Route path = "/chat">
            <Chat />
          </Route>
          <Route path = "/admin">
            <Admin />
          </Route>
          <Route path = "/head-doc">
            <HeadDoctor/>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path = "/">
            <Prediction />
          </Route>
        </Switch>
        </Container>
            }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width:100%;
height:100vh;
background-color:rgb(33, 111, 237);
display:grid;
grid-template-columns:240px auto;
overflow:none;
`
