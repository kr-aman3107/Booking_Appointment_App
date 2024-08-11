const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sequelize = require('./util/database');

const userRouter = require('./routes/add-user');

app.use(userRouter);


sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
