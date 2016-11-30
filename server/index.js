var http = require('./classes/http');
var Server = require("socket.io");
var HMR = require("./classes/hmr");

var io = Server(http);
io.on('connection', function(socket){

    socket.on('message', function(data){
        console.log("recieved ", data)
        let {action, ...param} = data;
        if(!action) return ;
        var [mod, act ] = action.split(".");
        var mod = getModule(`./action/${mod}`);
        mod && mod[act] && mod[act](param, socket);
    });

    socket.on('disconnect', function(){
        var mod = getModule(`./action/user`);
        mod && mod["disconnect"] && mod["disconnect"](socket,socket);
    });
});


function getModule(name){
    var mod = null;
    try{
        mod = require(name);
        if(mod.default) mod = mod.default;
    }catch (e){console.log(`require module ${name} failed.`)}
    return mod;
}

let port = 80;
http.listen(port, function(){
    console.log(`listening on *:${port}`);
});




/**
 * 构建一个完全可热替换的项目：
 * 1. 文件require动态化（获取模块函数包装，在里面每次获取新的模块
 * 2. 文件上传监控，如果是项目内的模块文件，就删除缓存
 * 3. 模块内状态类变量存储的全局化global，利用Symbol做隐私保护
 * 完毕！什么时候干？我也不知道啊。。
 */
