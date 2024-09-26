import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes"
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

// Inicialización de express
const app = express();
// middleware para parsear a json
app.use(express.json());
// middleware para habilitar CORS
app.use(cors());

// Rutas
app.use(router);

// Conexión a la base de datos
db().then(() => {
    console.log("Conectado a la base de datos");
  });

// Inicialización del servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

