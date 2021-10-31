import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import WineApi from '../api/wineapi';
import InputApi from '../api/inputapi';
import Card from '../components/Card';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { format } from 'date-fns';
// import logo from '../public/logo.svg';

export default function RandomWineList(){
    const [wines, setWines] = React.useState([]);
    React.useEffect(
        () => {
            async function getRandomWines() {
                const wineResponse = await WineApi.getRandomWines();
                setWines(wineResponse.randomWines);
            }

            getRandomWines();
        },
        []
    );

    return (
      <div>
            <h1 id="title">Random Wines based on Wine Preferences</h1>
            <div style={{display: 'flex', flex: "0 20%"}}>
                {wines.length && wines.map((wine) => <Card key={wine.id} {...wine} />)}
            </div>
      </div>
    );
  
}