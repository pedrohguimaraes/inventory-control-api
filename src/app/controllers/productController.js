const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {Usuario} = require('../models');
const authConfig = require('../../resources/auth/authConfig');
const mailer = require('../../modules/mailer');

// list
router.post('/', async(req, res) => {

    try{
        const postData = req.body;

       return res.status(200).send(retorno);
    }catch(err){
        
        return res.status(400).send(err);
    }
});

// store
router.post('/store', async(req, res) => {

    try{
        const postData = req.body;

        return res.status(200).send(retorno);
    }catch(err){
        return res.status(400).send(err);
    }
});

module.exports = app => app.use('/auth', router);  