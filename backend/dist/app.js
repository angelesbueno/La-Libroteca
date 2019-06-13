"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const forceHttps = require("express-force-https");
const http = require("http");
const log4js = require("log4js");
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");
const basic_routes_1 = require("./basic-routes");
const routes_1 = require("./routes");
if (typeof process.env.LOG4JS_ENV !== "undefined" && process.env.LOG4JS_ENV === "production") {
    log4js.configure("./config/log4js_pre.json");
}
else {
    log4js.configure("./config/log4js.json");
}
const logger = log4js.getLogger("API");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3000";
const app = express();
app.options("*", cors());
app.use(cors());
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
if (process.env.NODE_ENV === "production") {
    app.use(forceHttps);
}
routes_1.RegisterRoutes(app);
basic_routes_1.BasicRoutes(app);
function clientErrorHandler(err, req, res, next) {
    if (err.hasOwnProperty("thrown") && err.thrown) {
        res.status(err.status).json(err.message);
    }
    else {
        next(err);
    }
}
app.use(clientErrorHandler);
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(yaml.load("dist/swagger.yaml")));
const server = http.createServer(app).listen(port, () => { });
logger.info("****************** SERVER STARTED ************************");
logger.info("***************  http://%s:%s  ******************", host, port);
server.timeout = 240000;
//# sourceMappingURL=app.js.map