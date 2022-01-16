const moongose = require('mongoose');
const {db_password, db_user} = require('../globalVaribles');
    
async function connection() {
    try {
        const conection = `mongodb+srv://${db_user}:${db_password}@cluster0.wnzwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        await moongose.connect(conection);
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    connection
}