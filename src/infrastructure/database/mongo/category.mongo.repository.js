import CategoryModel from "./category.model.mongo.js";

export default class CategoryMongoRepository {
    async save (categoryEntity){
        const category= new CategoryModel ({
            name: categoryEntity.name,
            userId: categoryEntity.userId
        });
        const saved = await category.save();
        return saved.toObject();
    }

    async findByUserId(userId){
        return await CategoryModel.find({ userId });
    }

    async deleteByIdAndUser (id, userId){
        return await CategoryModel.findOneAndDelete({ _id: id, userId });
    }
}