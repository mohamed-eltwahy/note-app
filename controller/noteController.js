var genratorId = require('../util/generator');
var memoryStorage = require('../util/memory_storage');
var noteModel = require('../model/note_model');

exports.getAllNotes = (req, res) => {
    //     var new_id_1   = genratorId.generate(); 
    //     var new_id_2   = genratorId.generate(); 
    //     memoryStorage.storage.setItem(new_id_1,"1st sequence")
    //     memoryStorage.storage.setItem(new_id_2,"2st sequence")

    //    var keys= memoryStorage.getKeys(memoryStorage.storage)
    var values = memoryStorage.getValues(memoryStorage.storage)
    console.log('memory keys ' + JSON.stringify(values));
    //     var Note=noteModel.Note;
    //     var noteObj=new Note(new_id_1,"dd","kk","llk",new Date());

   return res.status(200).send(JSON.stringify({data:values}));

}
exports.SaveNote = (req, res) => {
    var seqId = genratorId.generate();
    var createdby = 'admin';
    var createdAt = new Date();
    var title = req.body.title;
    var content = req.body.content;
    console.log(title,'%%%%%%%%%%%%%')
    if (!title || !content) {
        return res.status(409).send({ error: 'title or content should be required !' });
    }else{
        var Note = noteModel.Note;
        var noteObjjj = new Note(getId, title, content, createdby, createdAt);
        memoryStorage.storage.setItem(seqId, noteObjjj);
        return res.status(200 || 201).send({ message: 'save note successfully' });
    }
  
}
exports.UpdateNote = (req, res) => {
    res.send('update note controller');
}
exports.deleteNote = (req, res) => {
    res.send('delete note controller');
}