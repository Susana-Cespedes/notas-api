import NoteModel from "./note.model.mongo.js";

export default class NoteMongoRepository {
    async save(noteEntity) {
        const note = new NoteModel({
            title: noteEntity.title,
            content: noteEntity.content,
            imageUrl: noteEntity.imageUrl,
            isPrivate: noteEntity.isPrivate,
            password: noteEntity.password,
            userId: noteEntity.userId
        });
        const savedNote = await note.save();
        return savedNote.toObject();
    }

    async findByUserId(userId) {
    return await NoteModel.find({ userId });
    }

    async updateByIdAndUser(id, userId, data) {
        return await NoteModel.findOneAndUpdate(
            { _id: id, userId },
            data,
            { new: true }
        );
    }

    async deleteByIdAndUser(id, userId) {
        return await NoteModel.findOneAndDelete({
            _id: id,
            userId
        });
    }
}

