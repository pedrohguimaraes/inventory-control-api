const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const {Vw_product} = require('../models');
const {Product} = require('../models');
const Utils = require('../utilities');
const Op = Sequelize.Op;

// list
router.get('/', async(req, res) =>{
    try{
        const q = req.body.q;
        const filter = [];
        
        // filters
        if(q != undefined){
            filter.push({
                [Op.or]: 
                    {
                        name: {[Op.like]: '%'+q+'%'},
                        description: {[Op.like]: '%'+q+'%'}
                    }
            });
        }

        // active flag
        if(req.body.active){
            filter.push({
                [Op.and]:{
                    active: req.body.active
                }
            });
        }

        const products = await Vw_product.findAll({where: filter});
        return res.status(200).send(products);

    }catch(err){
        return res.status(400).send(err);
    }
});

// show
router.get('/:id', async(req, res) => {
    try{
        
        const product = await Vw_product.findAll({where: {id: req.params.id}});

        return res.status(200).send(product);

    }catch(err){
        return res.status(400).send(err);
    }
});

// store
router.post('/', async(req, res) => {

    try{

        // valid fields required
        if(!Utils.notNull(req.body, ['name', 'fabricator_id', 'asdasd']))
            throw 'Required fields in white';
        
        const product = await Product.create(req.body);
        return res.status(200).send(product);

    }catch(err){
        return res.status(400).send(err);
    }
});

router.put('/:id', async(req, res) => {

    try{
        if(req.params.id == undefined)
            throw 'id not found';

        await Product.update(req.body, { where: { id: req.params.id }});

        return res.status(200).send('Update succesfully!');
    }catch(err){
        return res.status(400).send(err);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        if(req.params.id == undefined)
            throw 'id not found';
        
        await Product.destroy({ where: { id: req.params.id }});

        return res.status(200).send('Delete succesfully!');
    }catch(err){
        return res.status(400).send(err);
    }
});

module.exports = app => app.use('/product', router);