const uuid = require('uuid/v4');
const User = require('../sequelizeModels').User;

module.exports = {

    async checkAccess(id) {
        let result = false;

        let user = await User.findOne({ where: { id } });

        if (user) {
            if (user.role == 'admin') {
                result = true;
            }
        }

        return result;
    }
}