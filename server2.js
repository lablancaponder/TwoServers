const http = require("http");

const PORT = 7000;


function handleRequest (req, res) {

    res.end("You are awesome!")
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost" + PORT);
});