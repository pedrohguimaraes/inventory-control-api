const express = require('express');
const router = express.Router();
const {Item} = require('../models');
const Sequelize = require('sequelize');
const Utils = require('../utilities');
const Op = Sequelize.Op;

router.get('/', async(req, res) => {
    try{
        const q = req.body.q;
        const filter = [];

        if(!q == undefined){
            filter.push({
                [Op.or]:
                {
                    barcode:q,
                    product_id: q,
                    current_location: q,
                    external_id: q
                }
            });
        }

        const itens = Item.findAll({where:filter});
        return res.status(200).send(itens);


    }catch(err){
        res.status(400).send(err);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const q = req.params.id;

        const item = Item.findAll({where: id});
        return res.status(200).send(item);

    }catch(err){
        return res.status(400).send(err);
    }
});