const User = require('../sequelizeModels').User;

module.exports = {

    async index(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;

        const users = await User.findAll();

        result = users;
        messages.push('Success!');
        statusCode = 200;

        return res.status(statusCode).json({ result, messages });
    }
};
