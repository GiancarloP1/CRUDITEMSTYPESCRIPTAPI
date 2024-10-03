import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"; // Importa el router que carga dinámicamente las rutas
import db from "./config/mongo";

const PORT = process.env.PORT || 3004;

// Inicialización de express
const app = express();

// Middlewares
app.use(express.json());  // Para manejar JSON
app.use(cors());          // Para habilitar CORS

// Montar las rutas con el prefijo /api
app.use('/api', router);  // Aquí se montan todas las rutas, incluida /api/items

// Conexión a la base de datos
db().then(() => {
  console.log("Conectado a la base de datos");
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
