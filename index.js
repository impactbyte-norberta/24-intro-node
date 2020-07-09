const http = require('http');

const HOST = 'localhost';
const PORT = 5000;

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello Server, from Node JS');
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log(`Server jalan di port ${PORT}`);
});
