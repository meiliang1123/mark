var Server = require("socket.io");
import dispatcher from "./../client/dispatcher";
import Stores from "../stores/ServerList";
module.exports = function(http){
    var io = Server(http);
    io.on('connection', function(socket){

        let action = {
            type:"connect",
            data:{socket}
        }
        dispatcher.dispatch(action);
    });
}