import swaggerDefinition from "./swagger-definitions.js";
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']
// noinspection JSUnusedLocalSymbols
const swaggerAutoGen = swaggerAutogen(outputFile, endpointsFiles, swaggerDefinition).then(() => {
    require('../app.js');
});



