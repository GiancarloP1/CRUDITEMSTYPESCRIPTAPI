import { ItemRepository } from '../repositories/itemRepository';

export class ItemService {
  private itemRepository = new ItemRepository();

  // Obtener todos los items
  async getAllItems() {
    return await this.itemRepository.findAll();
  }

  // Obtener un item por su ID
  async getItemById(id: string) {
    const item = await this.itemRepository.findById(id);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  }

  // Crear un nuevo item
  async createItem(itemData: { name: string; description: string; price: number }) {
    // Validar los datos antes de enviarlos al repositorio
    if (!itemData.name || !itemData.description || itemData.price <= 0) {
      throw new Error('Invalid item data');
    }
    return await this.itemRepository.create(itemData);
  }

  // Actualizar un item
  async updateItem(id: string, itemData: { name: string; description: string; price: number }) {
    const updatedItem = await this.itemRepository.update(id, itemData);
    if (!updatedItem) {
      throw new Error('Item not found or update failed');
    }
    return updatedItem;
  }

  // Eliminar un item
  async deleteItem(id: string) {
    const deletedItem = await this.itemRepository.delete(id);
    if (!deletedItem) {
      throw new Error('Item not found or deletion failed');
    }
    return deletedItem;
  }
}
