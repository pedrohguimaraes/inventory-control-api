const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const {User} = require('../models');
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
                        name: {[Op.like]: '%'+q+'%'}
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

        const users = await User.findAll({where: filter});
        return res.status(200).send(users);

    }catch(err){
        return res.status(400).send(err);
    }
});

// show
router.get('/:id', async(req, res) => {
    try{
        
        const fabricator = await Fabricator.findAll({where: {id: req.params.id}});

        return res.status(200).send(fabricator);

    }catch(err){
        return res.status(400).send(err);
    }

});

// store
router.post('/', async(req, res) => {

    try{

        // valid fields required
        if(!Utils.notNull(req.body, ['name']))
            throw 'Required fields in white';
        
        const fabricator = await Fabricator.create(req.body);
        return res.status(200).send(fabricator);

    }catch(err){
        return res.status(400).send(err);
    }
});

router.put('/:id', async(req, res) => {

    try{
        if(req.params.id == undefined)
            throw 'id not found';

        await Fabricator.update(req.body, { where: { id: req.params.id}});

        return res.status(200).send('Update succesfully!');
    }catch(err){
        return res.status(400).send(err);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        if(req.params.id == undefined)
            throw 'id not found';
        
        await Fabricator.destroy({ where: { id: req.params.id }});

        return res.status(200).send('Delete succesfully!');
    }catch(err){
        return res.status(400).send(err);
    }
});

module.exports = app => app.use('/fabricator', router);