const uuid = require('uuid/v4');
const Contact = require('../sequelizeModels').Contact;

module.exports = {

    async index(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;

        const contacts = await Contact.findAll();

        result = contacts;
        messages.push('Success!');
        statusCode = 200;

        return res.status(statusCode).json({ result, messages });
    },

    async add(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let { contact } = req.body;

        result = await Contact.create({ id: uuid(), contact });

        messages.push('Success!');
        statusCode = 200;

        return res.status(statusCode).json({ result, messages });
    }
};