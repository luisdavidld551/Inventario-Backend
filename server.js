const express = require('express');
//const mysql = require('mysql');

const servidor = express();
servidor.set('port',process.env.port || 3000);

servidor.listen(servidor.get('port'), () => {
    console.log('Server on port',servidor.get('port'));
});
