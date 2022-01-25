const express = require('express');
//const mysql = require('mysql');

const servidor = express();
servidor.set('port',process.env.port || 4000);

//rutas
servidor.get('/',(req, res) => {
    res.send("Bienvenido");
})

//Server running
servidor.listen(servidor.get('port'), () => {
    console.log('Server on port',servidor.get('port'));
});
