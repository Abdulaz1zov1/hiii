const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(require('helmet')());

const router = require("./src/modules/router")


app.use('/getfiles', express.static('public/file'));

app.use('/upload', require('./routes/fileRoutes'))

app.use(router)


app.listen(3001, console.log('server is running on port 3001'))