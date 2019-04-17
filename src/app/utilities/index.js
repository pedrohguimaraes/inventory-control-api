'use strict'

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function notNull(request, fields){
    let retorno = true;

    fields.forEach((value, key) => {
        // checks if there are required fields
        retorno = !request.hasOwnProperty(value) ? false : retorno;
    });
    return retorno;
} exports.notNull = notNull;