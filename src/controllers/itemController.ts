import { Request, Response } from 'express';
import { ItemService } from '../services/itemService';

const itemService = new ItemService();

export class ItemController {
  async getAllItems(req: Request, res: Response) {
    try {
      const items = await itemService.getAllItems();
      res.json(items);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const item = await itemService.getItemById(req.params.id);
      res.json(item);
    } catch (error) {
      res.status(404).json({ message: 'Item not found' });
    }
  }

  async createItem(req: Request, res: Response) {
    try {
      const newItem = await itemService.createItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(400).json({ message: errorMessage });
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const updatedItem = await itemService.updateItem(req.params.id, req.body);
      res.json(updatedItem);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      await itemService.deleteItem(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: 'Item not found' });
    }
  }
}
