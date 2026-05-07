import {Router} from 'express';
import CategoryController from '../controllers/category.controller.js';
import CategoryService from '../../application/use-cases/category.service.js';
import CategoryMongoRepository from '../../infrastructure/database/mongo/category.mongo.repository.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// inyección de dependencias
const categoryRepository = new CategoryMongoRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

// Rutas para categorías
router.post("/", authMiddleware, categoryController.createCategory);
router.get("/", authMiddleware, categoryController.getCategoriesByUser);
router.delete("/:id", authMiddleware, categoryController.deleteCategory);

export default router;