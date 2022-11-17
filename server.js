//setup server
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var routerApp = require('./route/noteRoute')
var app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/api/v1", routerApp)


app.get('/', function (req, res) {
    res.send('server started to launch........... ')
})
const port = 3000
app.listen(port, () => {
    console.log(`Server started at ${'http://localhost:' + port}`)
})
