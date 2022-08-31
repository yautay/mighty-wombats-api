import express from "express";
import bodyParser from "body-parser";
// import swaggerUiExpress from "swagger-ui-express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import expressJSDocSwaggerOptions from "./swagger/swagger-jsdoc.js";
// import swaggerDocument from "./swagger.json";
import bulletinsRouter from "./routes/route-bulletins.js";


let app;
app = express();

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/bulletins', bulletinsRouter)
// app.use('/api-docs', swaggerUiExpress.serve);

expressJSDocSwagger(app)(expressJSDocSwaggerOptions);

app.listen(3000);
