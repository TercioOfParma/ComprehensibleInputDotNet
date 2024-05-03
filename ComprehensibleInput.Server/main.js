var http = require("http");

var server = http.createServer(
    function(req, res)
    {
        if(req.url == '/')
        {
            res.write("Hello World");
            res.end();
        }
        else 
        {
            res.end("404");
        }
    }

)

server.listen(5000);
console.log("Opened http server on port 5000");