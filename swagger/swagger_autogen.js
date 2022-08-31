import swaggerDefinition from "./swagger_definitions.js";
import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']
const swaggerAutoGen = swaggerAutogen(outputFile, endpointsFiles, swaggerDefinitions).then(() => {
    require('../app.js');
});



