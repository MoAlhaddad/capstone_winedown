import React, { Component } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import WineApi from './api/wineapi';
import InputApi from './api/inputapi';
import Card from './components/Card';
import Form from './components/Form';
import Modal from './components/Modal';
import Signup from './containers/Signup';
import logo from './logo.svg';
import Routes from './Routes';
import './App.css';
import { useHistory } from 'react-router';

function App() {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = React.useState(undefined);
  const localStorageUser = localStorage.getItem('user');
  // const [showCreateWineModal, setShowCreateWineModal] = React.useState(false);
  // const [createWineEntryInputData, setCreateWineEntryInputData] = React.useState([]);
  React.useEffect(
    () => {
      if(localStorageUser) {
        setLoggedInUser(JSON.parse(localStorageUser));
      }
    },
    []
  );

  return (
    <Container className="App">
      <div style={{position: 'fixed', width: '100%', height: '50px', display: 'flex', backgroundColor: 'black', zIndex: '0'}}>
        <h2 onClick={() => history.push('/')} style={{color: '#fff', flex: '0 50%', textAlign: 'left'}}>Wine Down</h2>
        <Button onClick={() => history.push('/survey')} style={{marginLeft: '5%', height: '100%', background: 'transparent', border: 'none'}}>Q and A</Button>
        <Button onClick={() => history.push('/random-wines')} style={{marginLeft: '5%', height: '100%', background: 'transparent', border: 'none'}}>Random Wines</Button>
        <Button onClick={() => history.push("/signup")} style={{marginLeft: '5%', height: '100%', background: 'transparent', border: 'none'}}>Signup</Button>
        { localStorageUser && <>
                              <Button onClick={() => {
                                localStorage.removeItem('user');
                                setLoggedInUser(undefined);
                              }} style={{marginLeft: '5%', marginRight: '5%', height: '100%', background: 'transparent', border: 'none'}}>Logout</Button>
                              <Image style={{borderRadius: '50%', padding: '5px'}} src="https://static.ratemyagent.com.au/assets/images/placeholder/agent.jpg" />
                            </>
        }
      </div>
      <div style={{ height: '50px', marginTop: '60px', marginBottom: '40px' }}>
        <h2>Test REST endpoints.</h2>
        <Button variant="outline-primary" onClick={async () => {
          const initialvalues = {
            "wine": "new example entry", 
            "vintage": 2021,           
            "gws": "98.00",
            "ci": "B",
            "nbj": 3,
            "country_id": 7,
            "entry_status_id": 1
          };
          await WineApi.createWineEntry(initialvalues);
          alert("Wine Entry Created!");
        }}>Create Wine</Button>
        <Button variant="outline-primary" onClick={async () => {
          const initialvalues = {
            "id": 2,
            "wine": "new example entry updated", 
            "vintage": 2021,           
            "gws": "99.00",
            "ci": "B",
            "nbj": 3,
            "country_id": 7,
            "entry_status_id": 2
          };
          await WineApi.updateWineEntry(initialvalues, initialvalues.id);
          alert("Wine Entry Updated!");
        }}>Update Wine</Button>
        <Button variant="outline-primary" onClick={async () => {
          const initialvalues = {
            "id": 6,
          };
          await WineApi.deleteWineEntry(initialvalues.id);
          alert("Wine Entry Deleted!");
        }}>Delete Wine</Button>
      </div>
      <div>
        {Routes}
      </div>
    </Container>
  );
}

export default App;