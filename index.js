const express = require('express');
const app = express();

const config = require('./config');

app.use(express.json());

app.listen(config.port, () => console.log('Server running.'));