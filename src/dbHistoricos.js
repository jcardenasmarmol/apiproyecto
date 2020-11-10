// import mongoose from "mongoose";
// //BD CONTAMINANTES
// mongoose.connect('mongodb+srv://aire', {useNewUrlParser: true, useUnifiedTopology: true } );

// const connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'Error de Conexión: '));
// connection.once('open', (callback) => {
//     console.log('Conectado correctamente a db contaminantes');
// });

// // const schema = new mongoose.Schema({}, { strict: false })
// // const documentosHistoricos = mongoose.model("data", schema, "documentos")

// export default mongoose;

import MongoClient from "mongodb";
var db = null 

export async function connectHistoricos() {
    if (db == null) {
        try {
            const client = await MongoClient.connect('mongodb+srv://aire',{useUnifiedTopology: true});
            db = client.db('test');
            console.log('DB aireHistoricos is connected')
            return db;
        } catch(e){
            console.log(e);
        }
    } else {
        return db
    }
}
