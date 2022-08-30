const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: '0.1.0',      // by default: '1.0.0'
        title: 'MIGHTY-WOMBATS-API',        // by default: 'REST API'
        description: 'REST API',  // by default: ''
    },
    host: "localhost:3000",      // by default: 'localhost:3000'
    basePath: '/',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: 'news',         // Tag name
            description: 'Operations with News',  // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},  // by default: empty object
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}            // by default: empty object (OpenAPI 3.x)
};

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']

const swaggerAutoGen = swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js');
});