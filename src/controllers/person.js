const { Person } = require('../models');

async function getAll(request, response) {
    try {
        const people = await Person.find({});
        return response.status(200).json(people);
    } catch (error) {
        const data = {
            message: error.message,
            stack: error.stack
        };
        return response.status(500).json(data);
    }
}

async function getOne(request, response) {
    try {
        const id = request.params.id;
        const person = await Person.findOne({ _id: id });

        if (!person) {
            const data = {
                message: 'Não foi encontrado nenhuma pessoa.'
            };
            return response.status(422).json(data);
        }

        return response.status(200).json(person);
    } catch (error) {
        const data = {
            message: error.message,
            stack: error.stack
        };
        return response.status(500).json(data);
    }
}

async function update(request, response) {
    try {
        const id = request.params.id;
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

        const personUpdated = await Person.updateOne({_id: id}, person);

        if (personUpdated.matchedCount === 0) {
            const data = {
                message: 'Não foi encontrado a pessoa'
            };
            return response.status(422).json(data);
        }

        return response.status(200).json(person);
    } catch (error) {
        const data = {
            message: error.message,
            stack: error.stack
        };
        return response.status(500).json(data);
    }
}

async function create(request, response) {
    try {
        const {
            name,
            salary,
            approved
        } = request.body;

        if (!name) {
            const data = {
                message: 'Não foi possível cadastrar, é necessário o nome.'
            }
            return response.status(422).json(data);
        }

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
    create,
    getAll,
    getOne,
    update,
};