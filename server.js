var http = require('./classes/http');
require('./classes/io')(http);

let port = 80;
http.listen(port, function(){
    console.log(`listening on *:${port}`);
});



