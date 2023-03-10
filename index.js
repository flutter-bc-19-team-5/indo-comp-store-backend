require("dotenv").config({path: __dirname + '/.env'})

const express = require("express")
const app = express()
const ejs = require("ejs")

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

const routes = require('./routes')
app.use(routes)

app.listen(port, () => 
    console.info(`app listening on port ${port}`)
)