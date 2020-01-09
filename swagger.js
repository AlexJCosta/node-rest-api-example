const conf = require('./config');

let paths = {};

const userDoc = require('./user/userDocumentation');
for (let i = 0; i < userDoc.length; i++) {
    paths[userDoc[i].path] = userDoc[i].content;
}


module.exports = {
    "openapi": "3.0.0",
    "info": {},
    "servers":[
        {
            "url": conf.api_url
        }
    ],
    "tags": [
        {
            "name": "users"
        }
    ],
    "paths": paths
};