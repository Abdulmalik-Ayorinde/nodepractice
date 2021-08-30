// const { Router } = require('express')
const express = require('express')

const router = express.Router()

const {getHome, getSingleHome, updateHome, deleteHome, createHome} = require('../controllers/homes')

router.route('/')
.get(getHome)
.post(createHome)

router.route('/:id')
.put(updateHome)
.delete(deleteHome)
.get(getSingleHome)

module.exports = router