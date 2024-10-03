import { Router } from 'express';
import { ItemController } from '../controllers/itemController';

const router = Router();
const itemController = new ItemController();

// Definir las rutas para los items
router.get('/', itemController.getAllItems);           // Obtener todos los items
router.get('/:id', itemController.getItemById);        // Obtener un item por su ID
router.post('/', itemController.createItem);           // Crear un nuevo item
router.put('/:id', itemController.updateItem);         // Actualizar un item por su ID
router.delete('/:id', itemController.deleteItem);      // Eliminar un item por su ID

export default router;  // Exportar el enrutador por defecto
