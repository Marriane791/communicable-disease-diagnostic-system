import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Prediction from './Components/Prediction';
import Sidebar from './Components/Sidebar';
import styled from 'styled-components'
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
        <Sidebar />
        <Switch>
          <Route path = "/predict">
            <Prediction />
          </Route>
          <Route path = "/chat">
            <Chat />
          </Route>
          <Route path="/">
             Login
          </Route>
        </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width:100%;
height:100vh;
background-color:#0096ff;
display:grid;
grid-template-columns:200px auto;
`
