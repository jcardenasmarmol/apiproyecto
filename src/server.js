import express, {json} from 'express';

const app = express();

//Routes
import HistoricosRoutes from "./routes/historicos.routes"; 
import ArduinoRoutes from "./routes/arduino.routes";


//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(json());

//Routes

app.use('/historicos', HistoricosRoutes);
app.use('/arduino', ArduinoRoutes);



export default app;