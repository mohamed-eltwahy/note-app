var MemoryStorage = require('memorystorage');

var storage = new MemoryStorage('note-app');

exports.getKeys=(storage)=>{

    var keys=[];
    for (var i=0; i<storage.length; i++) {
        var key = storage.key(i);
        keys.push(key);
    }
    return keys;

}
exports.getValues=(storage)=>{

    var values=[];
    for (var i=0; i<storage.length; i++) {
        var key = storage.key(i);
        var value = storage.getItem(key);
        values.push(value);
    }
    return values;

}


exports.storage=storage;