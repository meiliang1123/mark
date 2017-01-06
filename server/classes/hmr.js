import fs from "fs";

//console.log(Object.keys(require), require.resolve("./classes/http"),require.cache[require.resolve("./classes/http")]);

const ROOT = "/../";
var dirs = ["classes", "config","action", "models"];
dirs.map(HMR);

function HMR(dir){
    dir = ROOT + dir;
    var options = {recursive:true};
    var listener = function (event, file){
        if(event == "change" && file.substr(file.length - 2, 2) == "js" && file !="hmr.js"){
            var modulename = `.${dir}/${file}`;
            var fullname = require.resolve(modulename);
            if(require.cache[fullname]){
                delete require.cache[fullname];
                require(modulename);
                console.log(`${fullname} reloaded`)

            }
        }

        //delete require.cache[require.resolve('你require的那个')];
    };
    fs.watch(__dirname + dir, options, listener);

}

export default function(){};
