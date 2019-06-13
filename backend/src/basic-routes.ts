const path = require("path");
const express = require("express");

/**
 * Recibe la app y le agrega unas rutas definidas
 */
export function BasicRoutes(app: any) {

  app.use(express.static(path.join(__dirname, "frontend")));

  // Root. Agregada de forma temporal
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/index.html"));
    // res.send("Swagger Prueba añade a la url /api/v1/docs");
  });
}
