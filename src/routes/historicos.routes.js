import Router from 'express';
const router = Router();

//Database connection
import { connectHistoricos } from '../dbHistoricos'


//RUTAS PARA HISTORICOS
router.post('/', async (req,res)=>{

    var estacion = parseInt(req.body.id)
    var fechaInicial = req.body.fechaInicial
    var fechaFinal = req.body.fechaFinal

    const db = await connectHistoricos();
    const respuesta = await db.collection('documentos').aggregate(
        [
            {
                $match: {
                    "data.idx": estacion,
                    $and: [
                        {
                            "data.time.s": {
                                $gte: fechaInicial
                            }
                        },
                        {
                            "data.time.s": {
                                $lte: fechaFinal
                            }
                        }
                    ]
                }
            },
            {
                $project:{
                    _id:0,
                    "data.idx":1,
                    date: {
                        $dateFromString: {
                            dateString: {$substr: ["$data.time.s", 0, 10]},  // coger los 16 primeros para cuando no haya segundos
                            format: "%Y-%m-%d" // -> on-line :%S 
                        }
                    },
                    datos:{
                        $objectToArray:"$data.iaqi"
                    }
    
                }
            },
            {
                $unwind: "$datos"
            },
            {
                $project:{
                    "data.idx":1,
                    datos:1,
                    date:1
    
                }
            },
            {
                $group: {
                    _id:{
                        estacion:"$data.idx",
                        fecha:"$date",
                        cont:"$datos.k"
                    },
                    v:{
                        $avg:{
                            $cond: { if: { $gte: [ "$datos.v.v", "" ] }, then: 0, else: "$datos.v.v" }
                        }
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    estacion:"$_id.estacion",
                    fecha:"$_id.fecha",
                    contaminante:"$_id.cont",
                    valor:"$v"
                }
            },
            {
                $sort:{
                    "_id.fecha":1
                }
            }
        ]
    ).toArray()
    res.json(respuesta)
   
})

router.get('/ultimos', async (req,res)=>{

    const db = await connectHistoricos();
    var spain =  await db.collection('documentos').aggregate(
        [
            {
                $match: {
                    "data.idx": 8495
                }
            },
            {
                $project:{
                    _id:0,
                    "data.idx":1,
                    date: {
                        $dateFromString: {
                            dateString: {$substr: ["$data.time.s", 0, 10]},  // coger los 16 primeros para cuando no haya segundos
                            format: "%Y-%m-%d" // -> on-line :%S 
                        }
                    },
                    datos:{
                        $objectToArray:"$data.iaqi"
                    }
    
                }
            },
            {
                $sort:{
                    "date":-1
                }
            },
            {
                $limit:1
            },
            {
                $unwind: "$datos"
            },
            {
                $project:{
                    "data.idx":1,
                    datos:1,
                    date:1
    
                }
            },
            {
                $group: {
                    _id:{
                        estacion:"$data.idx",
                        fecha:"$date",
                        cont:"$datos.k"
                    },
                    v:{
                        $avg:{
                            $cond: { if: { $eq: [ "$datos.v.v", "" ] }, then: 0, else: "$datos.v.v" }
                        }
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    estacion:"$_id.estacion",
                    fecha:"$_id.fecha",
                    contaminante:"$_id.cont",
                    valor:"$v"
                }
            }
        ]
    ).toArray()
    var greece = await db.collection('documentos').aggregate(
        [
            {
                $match: {
                    "data.idx": 12410
                }
            },
            {
                $project:{
                    _id:0,
                    "data.idx":1,
                    date: {
                        $dateFromString: {
                            dateString: {$substr: ["$data.time.s", 0, 10]},  // coger los 16 primeros para cuando no haya segundos
                            format: "%Y-%m-%d" // -> on-line :%S 
                        }
                    },
                    datos:{
                        $objectToArray:"$data.iaqi"
                    }
    
                }
            },
            {
                $sort:{
                    "date":-1
                }
            },
            {
                $limit:1
            },
            {
                $unwind: "$datos"
            },
            {
                $project:{
                    "data.idx":1,
                    datos:1,
                    date:1
    
                }
            },
            {
                $group: {
                    _id:{
                        estacion:"$data.idx",
                        fecha:"$date",
                        cont:"$datos.k"
                    },
                    v:{
                        $avg:{
                            $cond: { if: { $eq: [ "$datos.v.v", "" ] }, then: 0, else: "$datos.v.v" }
                        }
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    estacion:"$_id.estacion",
                    fecha:"$_id.fecha",
                    contaminante:"$_id.cont",
                    valor:"$v"
                }
            }
        ]
    ).toArray()
    var bulgarian = await db.collection('documentos').aggregate(
        [
            {
                $match: {
                    "data.idx": 8084
                }
            },
            {
                $project:{
                    _id:0,
                    "data.idx":1,
                    date: {
                        $dateFromString: {
                            dateString: {$substr: ["$data.time.s", 0, 10]},  // coger los 16 primeros para cuando no haya segundos
                            format: "%Y-%m-%d" // -> on-line :%S 
                        }
                    },
                    datos:{
                        $objectToArray:"$data.iaqi"
                    }
    
                }
            },
            {
                $sort:{
                    "date":-1
                }
            },
            {
                $limit:1
            },
            {
                $unwind: "$datos"
            },
            {
                $project:{
                    "data.idx":1,
                    datos:1,
                    date:1
    
                }
            },
            {
                $group: {
                    _id:{
                        estacion:"$data.idx",
                        fecha:"$date",
                        cont:"$datos.k"
                    },
                    v:{
                        $avg:{
                            $cond: { if: { $eq: [ "$datos.v.v", "" ] }, then: 0, else: "$datos.v.v" }
                        }
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    estacion:"$_id.estacion",
                    fecha:"$_id.fecha",
                    contaminante:"$_id.cont",
                    valor:"$v"
                }
            }
        ]
    ).toArray()
    var respuesta = {
        spain,
        greece,
        bulgarian
    }
    res.json(respuesta)
})


export default router;