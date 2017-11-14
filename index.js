'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 8080))

//allows us to process data with body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routing done here
app.get('/', function(req, res) {
    res.send('chatbot\'s first words')
})

app.get('/webhook/', function(req, res) {
    if (req.query['hub.verify_token'] === 'password123'){
        res.send(req.query['hub.challenge'])
    }
    res.send('incorrect token')
})

app.listen(app.get('port'), function() {
    console.log(`running on port`, port)
})