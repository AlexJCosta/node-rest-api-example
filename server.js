const express = require('express');
const app = express();

const db = require('./sequelizeModels');
const config = require('./config');

// Connecting database
db.sequelize
    .authenticate()
    .then(async () => {
       
        await db.sequelize.sync();

        //used to remover all data tables
        //await db.sequelize.drop();
    
        //express config
        app.use(express.json());

        // routers config
        const routes = require('./routers');
        app.use('/api', routes);

        // starting server
        app.listen(config.port, () => console.log('Server running.'));

    }).catch(err => {
        console.error(err);
    });
