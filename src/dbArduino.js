import MongoClient from "mongodb";
var db = null

export async function connectArduino() {
    if (db == null){
        try {
            const client = await MongoClient.connect('mongodb+srv://userRODB:QaqfW1SovAXtBDWh@cluster0-mms5n.mongodb.net/DatosCalidadAire?retryWrites=true&w=majority',{useUnifiedTopology: true});
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