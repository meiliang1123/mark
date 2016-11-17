import {Dispatcher} from 'flux';

let dispatcher =  new Dispatcher();

dispatcher.Reg = function(actions){
    return dispatcher.register((action)=>{
        let {type, data, user} = action;
        typeof actions[action.type] == "function"
        && actions[action.type](data, user);
    });
}





export default dispatcher;