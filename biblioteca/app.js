const libroRouter = require('./routes/LibroRouter.js');
const usuarioRouter = require('./routes/UsuarioRouter.js');
const prestamoRouter = require('./routes/PrestamoRouter.js');
let express = require('express');
let dotenv = require('dotenv');
let sequelize = require('./config/db');
let app = express();
let port = process.env.port;
app.use(express.json());

app.use('/api', libroRouter);
app.use('/api', usuarioRouter);
app.use('/api', prestamoRouter);


let startdb= async() => {
    try{
        await sequelize.sync();
        console.log('Base de datos sincronizada.');
        app.listen(port,() => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }catch(e){
        console.error('Unable to connect to the database:', error);
    }
};
startdb();