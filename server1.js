const http = require("http");

const PORT = 7500;


function handleRequest (req, res) {
   
    res.end("You really suck!")
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {

    console.log("Server listening on: http://localhost:" + PORT);
});


