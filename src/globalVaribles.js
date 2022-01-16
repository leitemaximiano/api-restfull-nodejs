const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    db_password: process.env.DB_PASSWORD,
    db_user: process.env.DB_USER
};