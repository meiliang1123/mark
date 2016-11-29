var http = require('./classes/http');
require('./classes/io')(http);

import HMR from "classes/hmr";


let port = 80;
http.listen(port, function(){
    console.log(`listening on *:${port}`);
});


//HMR(__dirname);


/**
 * 构建一个完全可热替换的项目：
 * 1. 文件require动态化（获取模块函数包装，在里面每次获取新的模块
 * 2. 文件上传监控，如果是项目内的模块文件，就删除缓存
 * 3. 模块内状态类变量存储的全局化global，利用Symbol做隐私保护
 * 完毕！什么时候干？我也不知道啊。。
 */
