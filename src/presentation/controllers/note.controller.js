export default class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
 
    createNote = async (req, res) => {
        const data = req.body;
        if (req.file) data.imageurl = '/uploads/' + req.file.filename;
        data.userId = 'user_123';  //TODO:  LUEGO OBTENER EL USUARIO DE LA SESION O TOKEN
        try {
            const note = await this.noteService.createNote(data);
            res.status(201).json(note); // 201 Created
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
 
    getNotesByUserId = async (req, res) => {
        const userId = 'user_123';
        try {
            const notes = await this.noteService.getNotesByUserId(userId);
            res.status(200).json(notes); // 200 OK
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    updateNote = async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        // userId fijo por ahora, luego se obtiene de la sesión o token
        data.userId = 'user_123';

        // si viene imagen nueva
        if (req.file) {
            data.imageUrl = "/uploads/" + req.file.filename;
        }

        try {
            const updatedNote = await this.noteService.updateNote(id, data);
            res.status(200).json(updatedNote);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    deleteNote = async (req, res) => {
        const { id } = req.params;

        try {
            await this.noteService.deleteNote(id, 'user_123');
            res.status(200).json({ message: "Nota eliminada correctamente" });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

}