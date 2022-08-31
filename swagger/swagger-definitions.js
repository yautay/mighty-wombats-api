const swaggerDefinition = {
    info: {
        version: '0.1.0',      // by default: '1.0.0'
        title: 'MIGHTY-WOMBATS-API',        // by default: 'REST API'
        description: 'REST API',  // by default: ''
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    host: "localhost:3000",      // by default: 'localhost:3000'
    tags: [        // by default: empty Array
        {
            name: 'news',         // Tag name
            description: 'Operations with News',  // Tag description
        },
    ],
}
export default swaggerDefinition;