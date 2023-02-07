const express = require('express');
const app = express();

const cors = require('cors');
const port = 4000;

// import routes
const setupRoutes = require('./routes/allRoutes');

app.use(express.json());
app.use(cors());


// connect DB
require('./db/config');

setupRoutes(app)

app.listen(port, () => { console.log('yes') })