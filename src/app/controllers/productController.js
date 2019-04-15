const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const {Product} = require('../models');
const Op = Sequelize.Op;

// list
router.get('/', async(req, res) =>{
    try{
        const q = req.body.q;
        const filter = [];
        
        if(q != undefined){
            filter.push({
                [Op.or]: 
                    {
                        name: {[Op.like]: '%'+q+'%'},
                        description: {[Op.like]: '%'+q+'%'}
                    }
            });
        }

        if(req.body.active){
            filter.push({
                [Op.and]:{
                    active: req.body.active
                }
            });
        }

         //console.log(filter);
        const products = await Product.findAll({where: filter});
    
        return res.status(200).send(products);

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