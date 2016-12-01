var libpath = './tencentyoutuyun';

var conf =     require(libpath + '/conf.js');
var youtu =    require(libpath + '/youtu.js');


// 设置开发者和应用信息, 请填写你在开放平台
var appid = '10009211';
var secretId = 'AKIDvjM0ZxVKExUq0Ye9A6vZ5YwLZaQ5rAWm';
var secretKey = 'FWfdP9lHbjfT5VjuyrY6b2MZfeVi1Ro6';
var userid = '448787283';

conf.setAppInfo(appid, secretId, secretKey, userid, 0)


//youtu.imageporn('a1.jpg', function(data){
//    console.log("imagetag:" + JSON.stringify(data));
//});

//youtu.idcardocr('a.jpg', 0, function(data){
//    console.log("idcardocr:" + JSON.stringify(data));
//});

//youtu.namecardocr('a.jpg', false, function(data){
//    console.log("namecardocr:" + JSON.stringify(data));
//});

// 其他接口 类似
