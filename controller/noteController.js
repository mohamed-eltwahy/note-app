var genratorId = require('../util/generator');
var memoryStorage = require('../util/memory_storage');
var noteModel = require('../model/note_model');

exports.getAllNotes = (req, res) => {
    let DB =  memoryStorage.getValues(memoryStorage.storage)
    console.log('DB==> ' + DB);
    // let notes = DB.map((x)=>x)

    return res.status(200).send({data:DB});

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
        return res.status(200 || 201).send({ message: 'save note successfully', note: { title, content } });
    }

}
exports.UpdateNote = (req, res) => {
    res.send('update note controller');
}
exports.deleteNote = (req, res) => {
    res.send('delete note controller');
}