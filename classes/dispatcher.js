import {Dispatcher} from 'flux';

let dispatcher =  new Dispatcher();

var tokens = {};

dispatcher.Reg = function(actions, token = "default"){
    if(tokens[token]) dispatcher.unregister(tokens[token]);
    tokens[token] =  dispatcher.register((action)=>{
        let {type, data, user} = action;
        typeof actions[action.type] == "function"
        && actions[action.type](data, user);
    });
}





export default dispatcher;