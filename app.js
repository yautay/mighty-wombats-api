import express from "express";
import bodyParser from "body-parser";
// import swaggerUiExpress from "swagger-ui-express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import expressJSDocSwaggerOptions from "./swagger/swagger-jsdoc.js";
// import swaggerDocument from "./swagger.json";
import bulletinsRouter from "./routes/route-bulletins.js";
import sequelize from "./db/db.js";

let app;
app = express();

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.use('/bulletins-management', bulletinsRouter)

// app.use('/api-docs', swaggerUiExpress.serve);
expressJSDocSwagger(app)(expressJSDocSwaggerOptions);

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(3003);})
    .catch(err => {
    console.log(err)})

// app.listen(3000);


