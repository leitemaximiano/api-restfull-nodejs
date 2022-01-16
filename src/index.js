require('dotenv').config();
const express = require('express');

const {
    PORT=3005
} = process.env;

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', function(request, response) {
    return response.status(200).json({msg: 'hello world'});
});

app.listen(PORT, function() {
    process.stdout.write(`start api http://localhost:${PORT}\n`);
});
