const express =  require('express')
const app = express();

const userRoutes = require('./routes/user.routes');

//Middlewares
app.use(express.json());



app.use(userRoutes)


module.exports = app;