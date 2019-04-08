const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {Product} = require('../models');


// list
router.get('/', async(req, res) =>{
    try{


        if(req.body.q != undefined){
            var products = await Product.findAll();
        }
        return res.status(200).send(products);
        // ;
        // return res.status(200).send(products[0]);


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