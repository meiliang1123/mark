import {Dispatcher} from 'flux';

let dispatcher =  new Dispatcher();

var tokens = {};

dispatcher.Reg = function(actions, token = "default"){
    if(token !="default" && tokens[token]) dispatcher.unregister(tokens[token]);
    tokens[token] =  dispatcher.register((msg)=>{
        let {type, action, ...data} = msg;
        if(!action) action = type;

        typeof actions[action] == "function"
        && actions[action](data);
    });
}





export default dispatcher;