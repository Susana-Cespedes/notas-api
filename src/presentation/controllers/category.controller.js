export default class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }

    createCategory=async(req, res) =>{
        try {
            const data = req.body;
            data.userId = req.user.id; // Asignar el userId del usuario autenticado
            
            const category = await this.categoryService.createCategory(data);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    getCategoriesByUser=async(req, res) =>{
        try {
            const userId = req.user.id; // Obtener el userId del usuario autenticado
            const categories = await this.categoryService.getCategoriesByUserId(userId);
            res.status(200).json(categories);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    deleteCategory=async(req, res) => {
        try {
            const {id} = req.params;
            const userId = req.user.id; // Obtener el userId del usuario autenticado

            const result = await this.categoryService.deleteCategory(id, userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}