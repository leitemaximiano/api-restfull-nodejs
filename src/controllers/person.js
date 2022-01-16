const { Person } = require('../models');

async function create(request, response) {
    try {
        const {
            name,
            salary,
            approved
        } = request.body;

        const person = {
            name,
            salary,
            approved
        };

        await Person.create(person);

        const data = {
            message: 'Salvo com sucesso o registro.'
        };
        return response.status(201).json(data)

    } catch (error) {
        const data = {
            message: error.message,
            stack: error.stack
        };
        return response.status(500).json(data);
    }
}

module.exports = {
    create
};