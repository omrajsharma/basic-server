const http = require('http');
const port = 3000;

const server = http.createServer( function(req, res) {
    res.end('I am your backend')
} )

server.listen(port, function() {
    console.log('Server is running');
})