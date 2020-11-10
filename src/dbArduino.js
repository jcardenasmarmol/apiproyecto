import MongoClient from "mongodb";
var db = null

export async function connectArduino() {
    if (db == null){
        try {
            const client = await MongoClient.connect('mongodb+srv://',{useUnifiedTopology: true});
            db = client.db('DatosCalidadAire');
            console.log('DB calidadAire is connected')
            return db;
        } catch(e){
            console.log(e);
        }
    } else{
        return db
    }
}
