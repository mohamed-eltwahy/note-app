var genratorId=require('../util/generator');
var memoryStorage=require('../util/memory_storage');

exports.getAllNotes=(req,res)=>{
    var new_id_1   = genratorId.generate(); 
    var new_id_2   = genratorId.generate(); 
    memoryStorage.storage.setItem(new_id_1,"1st sequence")
    memoryStorage.storage.setItem(new_id_2,"2st sequence")

   var keys= memoryStorage.getKeys(memoryStorage.storage)
   var values= memoryStorage.getValues(memoryStorage.storage)
    console.log('memory keys '+JSON.stringify(keys));
    res.send('memory values '+JSON.stringify(values));

}
exports.SaveNote=(req,res)=>{
    res.send('save note controller');
}
exports.UpdateNote=(req,res)=>{
    res.send('update note controller');
}
exports.deleteNote=(req,res)=>{
    res.send('delete note controller');
}