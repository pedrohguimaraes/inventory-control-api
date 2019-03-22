const fs = require('fs');
const path = require('path');

/* Importa todos os controllers 
*    .filter: nenhum que comece com ponto (.env por exemplo),
*    e todos que não sejam o index na pasta
*/
module.exports = app => {
    fs
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
        .forEach(file => require(path.resolve(__dirname, file))(app))
};