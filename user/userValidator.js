var validator = require('validator');

const returnMessages = {
    name: "The name must be at most 100 characters."
};

module.exports = {

    add(data) {
        let model = {};
        
        model.name = !validator.isEmpty(data.name) && validator.isLength(data.name, { min: 1, max: 100 });
        
        let invalidFields = [];
        let isValid = true;
        let errors = [];

        for (let x in model) {
            isValid = isValid && model[x];
            
            if (!model[x]) {
                invalidFields.push(x);
                errors.push(returnMessages[x]);
            }
        }
        
        return { isValid, invalidFields, errors };
    }
}