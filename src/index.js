import '@babel/polyfill'; //Poder ejecutar el codigo en distintos entornos

import app from "./server";

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

main();