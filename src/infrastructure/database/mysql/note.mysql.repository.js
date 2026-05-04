import NoteModelo from "./note.model.mysql.js"; 
 
export default class NoteMySQLRepository {
    async save(noteEntity) {
          const note = await NoteModel.create({
            title: noteEntity.title,
            content: noteEntity.content,
            imageUrl: noteEntity.imageUrl,
            isPrivate: noteEntity.isPrivate,
            password: noteEntity.password,
            userId: noteEntity.userid
        });
        return note.toJSON();
    }
    async findByUserId(userId) {
        return await NoteModel.findAll({ where: { userId } });
    }

    async updateByIdAndUser(id, userId, data) {
        const [affectedRows] = await NoteModel.update(
            {
            title: data.title,
            content: data.content,
            imageUrl: data.imageUrl,
            isPrivate: data.isPrivate,
            password: data.password
            },
            {
            where: { id, userId }
            }
        );

        if (affectedRows === 0) {
            return null;
        }

        return await NoteModel.findOne({ where: { id, userId } });
    }

    async deleteByIdAndUser(id, userId) {
        const deletedRows = await NoteModel.destroy({
            where: { id, userId }
        });

        return deletedRows > 0;
    }


}