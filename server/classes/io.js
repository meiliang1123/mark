var Server = require("socket.io");
import dispatcher from "./../client/dispatcher";

module.exports = function(http){
    var io = Server(http);
    io.on('connection', function(socket){

        socket.on('message', function(data){
            let {action, ...param} = data;

            if(!user.get("openid") && action!="login"){
                user.send({action:"needLogin"});
                return;
            }

            var [mod, act ] = action.split(".");

            var mod = require(`../action/${mod}`);

            module[act](param, socket);
        });

        socket.on('disconnect', function(){
            require(`../action/user`)["disconnect"](socket,socket);

        });
    });
}