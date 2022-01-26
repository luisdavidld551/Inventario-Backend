const express = require('express')
const mysql = require('./src/db/db-connection')
const routes = require('./src/routes/user-routes')

const servidor = express()
servidor.set('port',process.env.PORT || 3000)

servidor.use(express.json())

//rutas

servidor.get('/', (req, res)=>{res.send('Bienvenido a mi API')})

servidor.use('/api/user', routes)

//Server running
servidor.listen(servidor.get('port'), () => {
    console.log('Server on port',servidor.get('port'))
});

/*
costilla de cerdo = 18300 / 21000
costilla de cerdo = 9300 / 13000

 */