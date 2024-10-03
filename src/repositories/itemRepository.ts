import {Item} from '../models/itemModel';

export class ItemRepository {

    // Create a new item
    async findAll() {
        return await Item.find();
    }

    //obtener un item por id
    async  findById(id: string) {
        return await Item.findById(id);
    }

    // Create a new item
    async create(itemData: { name: string; description: string; price: number }) {
        const item = new Item(itemData);
        return await item.save();
    }

    // Update an existing item
    async update(id: string, itemData: { name: string; description: string; price: number }) {
        return await Item.findByIdAndUpdate(id, itemData, { new: true });
    }

    // Delete an existing item
    async delete(id: string) {
        return await Item.findByIdAndDelete(id);
    }
}