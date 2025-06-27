const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
};

// URI path
function resolveFilePath(url) {
    if (url === '/') {
        return path.join(__dirname, 'public', 'index.html');
    } else if (url === '/level1') {
        return path.join(__dirname, 'public', 'level1.html');
    } else if (url === '/level2') {
        return path.join(__dirname, 'public', 'level2.html');
    } else if (url === '/level3') {
        return path.join(__dirname, 'public', 'level3.html');
    } else {
        return path.join(__dirname, 'public', url);
    }
}

const server = http.createServer((req, res) => {
        const filePath = resolveFilePath(req.url);
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - Fichier non trouvé');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    }
);

server.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});