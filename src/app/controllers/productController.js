const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {Product} = require('../models');


// list
router.post('/', async(req, res) => {

    try{
        const postData = req.body;

        console.log(postData); return;


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

module.exports = app => app.use('/product', router);  