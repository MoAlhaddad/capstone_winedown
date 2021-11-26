
    
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const wine_controller = require('./controllers/wine_controller');
const input_controller = require('./controllers/input_controller');
const app = express();
// const { SERVER_PORT, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_USER, DB_PORT, CONNECTION_STRING } = process.env;

const SERVER_PORT = 5000,
      DB_HOST = 'ec2-3-218-47-9.compute-1.amazonaws.com',
      DB_PASSWORD = '31f59dc837cac6e78f15d23c9eeeb821641c62ca6433aebc1a28de57ad18bb71',
      DB_DATABASE = 'd6lc0q1fdo8udb',
      DB_USER = 'gphsaewxfvokje',
      DB_PORT = '5432'

// var corsOptions = {
//     origin: true,
//     credentials: false,
// }
app.use(cors());

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.urlencoded());
app.use(express.json());

// app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:3000/',
//       changeOrigin: true,
//     })
//   );
// console.log(CONNECTION_STRING);

   
massive({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: {rejectUnauthorized: false},

 })
.then(database => {
    app.set('db', database);
})
.catch(err => console.log('Massive Connection Error---------', err));

app.get('/api/wines', wine_controller.getWines);

app.post('/api/wine_entries', wine_controller.createWineEntry);

app.put('/api/wine_entries/:id', wine_controller.updateWineEntry);

app.delete('/api/wine_entries/:id', wine_controller.deleteWineEntry);

app.get("/api/create_wine_entries/input_data", input_controller.getCreateWineEntryInputData);

app.get("/api/update_wine_entries/input_data", input_controller.getUpdateWineEntryInputData);

app.get("/api/random_wines", wine_controller.getRandomWines );

app.post("/api/filter_wines", wine_controller.filterWines );

app.get("/api/get_lk_countries", wine_controller.getLkCountries );

app.post("/api/create_wine", wine_controller.createWine );

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));