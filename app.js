const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express'),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerDocument = require('./swagger.json');

const feedRoutes = require('./routes/news');

const app = express();

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/news', feedRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000);
