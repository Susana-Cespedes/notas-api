export default class NoteEntity {
    constructor ({ 
        id, 
        title,
        content,
        imageUrl,
        isPrivate,
        password,
        userId,
        categoryId = null // Al ser opcional, se inicializa en null si no se envía
    }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl || null;
        this.isPrivate = isPrivate || false;
        this.password = password || null;
        this.userId = userId;
        this.categoryId = categoryId;
    }
 
}