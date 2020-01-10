const uuid = require('uuid/v4');
const User = require('../sequelizeModels').User;
const Address = require('../sequelizeModels').Address;
const auth = require('../auth/authController');
const validator = require('./userValidator');

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
    },

    async getById(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let userRequestId = req.headers.id;
        let targetId = req.params.id;
        
        const authorized = await auth.checkAccess(userRequestId);

        if (authorized) {
            const user = await User.findOne({ where: { id: targetId } });

            if (user) {
                result = user;
                messages.push('Success!');
                statusCode = 200;
            }else{
                messages.push("User not found!");
                statusCode = 404;
            }
        }else{
            messages.push("User not authorized!");
            statusCode = 401;
        }

        return res.status(statusCode).json({ result, messages });
    },

    async add(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let { name, email, addressId, contactId } = req.body;

        const { isValid, invalidFields, errors }  = validator.add({name});

        if (isValid) {
            result = await User.create({id: uuid(), name, email, addressId, contactId});
    
            messages.push('Success!');
            statusCode = 200;
        }else {
            result = invalidFields;
            errors.map(error => messages.push(error));
            statusCode = 422;
        }


        return res.status(statusCode).json({ result, messages });
    },

    async update(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let targetId = req.params.id;
        let { name, email } = req.body;

        let user = await User.findOne({ where: { id: targetId } });

        if (user) {
            if (name) {
                user.name = name;
            }
            if (email) {
                user.email = email;
            }

            user = await user.save();

            result = user;
            
            messages.push('User updated!');
            statusCode = 200;
        }else{
            messages.push('User not found!');
            statusCode = 404;
        }

        return res.status(statusCode).json({ result, messages });
    },

    async deleteById(req, res) {
        let result = {};
        let messages = [];
        let statusCode = 500;
        let targetId = req.params.id;

        result = User.destroy({ where: { id: targetId } });
        if (result == 0) {
            messages.push('User not found!');
            statusCode = 404;
        }else{
            messages.push('User deleted!');
            statusCode = 200;
        }

        return res.status(statusCode).json({ result, messages });
    }
};
