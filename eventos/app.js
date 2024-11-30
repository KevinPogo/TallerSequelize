const eventoRouter = require('./routes/EventoRouter');
const inscripcionRouter = require('./routes/InscripcionesRouter');
const usuarioRouter = require('./routes/UsuarioRouter');
let express = require('express');
let dotenv = require('dotenv');
let sequelize = require('./config/db');
let app = express();
let port = process.env.port;
app.use(express.json());


app.use('/api', eventoRouter);
app.use('/api', inscripcionRouter);
app.use('/api', usuarioRouter);



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