"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
function BasicRoutes(app) {
    app.use(express.static(path.join(__dirname, "frontend")));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend/index.html"));
    });
}
exports.BasicRoutes = BasicRoutes;
//# sourceMappingURL=basic-routes.js.map