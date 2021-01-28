const express = require('express')
const bookmarkRouter = express.Router()
const bodyParser = express.json()

const { v4: uuid} = require('uuid')
const logger = require('../logger')
const { bookmarks } = require('../store')

bookmarkRouter
    .route('/bookmarks')
    .get((req, res) => {
        res
            .json(bookmarks)
    })
    .post(bodyParser, (req, res) => {

    })

bookmarkRouter
    .route('/bookmarks/:id')
    .get((req, res) => {

    })
    .post((req, res) => {

    })

module.exports = bookmarkRouter
