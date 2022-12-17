var genratorId = require('../util/generator');
var memoryStorage = require('../util/memory_storage');
var noteModel = require('../model/note_model');

exports.getAllNotes = (req, res) => {
    let DB = memoryStorage.getValues(memoryStorage.storage)
    console.log('DB==> ' + DB);
    // let notes = DB.map((x)=>x)

    return res.status(200).send({ data: DB });

}
exports.SaveNote = (req, res) => {
    var seqId = genratorId.generate();
    var createdby = 'admin';
    var createdAt = new Date();
    var title = req.body.title;
    var content = req.body.content;
    console.log(req.body, '==BODY')
    if (!title || !content) {
        return res.status(409).send({ error: 'title or content should be required !' });
    } else {
        var Note = noteModel.Note;
        var noteObjjj = new Note(seqId, title, content, createdby, createdAt);
        memoryStorage.storage.setItem(seqId, noteObjjj);
        return res.status(200 || 201).send({ message: 'save note successfully', note: { seqId, title, content } });
    }

}
exports.UpdateNote = (req, res) => {
    var createdby = 'admin';
    var createdAt = new Date();
    var noteId = req.body.noteId;
    var title = req.body.title;
    var content = req.body.content;
    console.log(req.body, '==BODY')
    if (!noteId) {
        return res.status(409).send({ error: 'note Id should be required !' });
    }


    if (!title || !content) {
        return res.status(409).send({ error: 'title or content should be required !' });
    } else {

        var noteitem = memoryStorage.storage.getItem(noteId);
        if (!noteitem) {
            return res.status(403).send({ error: 'note Id not found' });
        }


        var Note = noteModel.Note;
        var noteObjjj = new Note(noteId, title, content, createdby, createdAt);
        memoryStorage.storage.setItem(noteId, noteObjjj);
        return res.status(200 || 201).send({ message: 'save note successfully', note: { title, content } });
    }
}
exports.deleteNote = (req, res) => {
    var noteId = req.params.noteId;
    if (!noteId) {
        return res.status(409).send({ error: 'note Id should be required !' });
    }
    var noteitem = memoryStorage.storage.getItem(noteId);
    if (!noteitem) {
        return res.status(403).send({ error: 'note Id not found' });
    }

    memoryStorage.storage.removeItem(noteId);
    return res.status(200 || 201).send({ message: 'delete successfully'});


}