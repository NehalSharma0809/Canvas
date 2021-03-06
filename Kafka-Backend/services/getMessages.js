const Messages = require('../../backend/models/messages');

function handle_request(message, callback){
    const {email} = message.query;
    var query = {emailReceiver: email};

    Messages.find(query).exec().then(result=>{
        console.log(result);
        callback(null, result);
    }).catch(err=>{console.log(err); callback(err, null);});
}

exports.handle_request = handle_request;