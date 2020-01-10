const uuid = require('uuid/v4');
const Address = require('../sequelizeModels').Address;

module.exports = {

    async index(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;

        const addresses = await Address.findAll();

        result = addresses;
        messages.push('Success!');
        statusCode = 200;

        return res.status(statusCode).json({ result, messages });
    },

    async add(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let { street } = req.body;
        
        result = Address.create({ id: uuid(), street });

        messages.push('Success!');
        statusCode = 200;

        return res.status(statusCode).json({ result, messages });
    }
};