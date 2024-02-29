const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const  app = express();

//Conexión a la DB
connectDB();
app.use(cors())

app.use(express.json());

app.use('/api/tattoos', require('./routes/tattoo'));

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('El servidor se esta ejecutando perfectamente' + PORT)
})
