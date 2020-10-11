const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const server = http.createServer(app);

dotenv.config();

const port = process.env.POPT ?? 5000;

server.listen(port, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on http://localhost:${port}`);
});