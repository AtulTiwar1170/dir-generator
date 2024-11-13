const fs = require('fs');

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }, (err) => {
            if (err) throw err;
            console.log(`Directory ${dirPath} created successfully!`);
        });
    } else {
        console.log(`Directory ${dirPath} already exists.`);
    }
};

// Create main directories
createDirectory('controllers');
createDirectory('models');
createDirectory('routes');
createDirectory('utils');
createDirectory('public');


createDirectory('public/javascript');
createDirectory('public/styles');
createDirectory('public/images');
createDirectory('public/videos');




// Create .env and .gitignore files
fs.writeFileSync('.env', `
    PORT=3000
    `);
fs.writeFileSync('.gitignore', 'node_modules/\n.env');

// Create index.js file
fs.writeFileSync('index.js', `
    const express = require('express'); // you have need to  install
    const app = express();
    const dotenv = require('dotenv');  // you have need to  install
    const mongoose = require('mongoose'); // you have need to  install
    require('dotenv').config()
    const port = process.env.PORT || 5000;
    app.use(express.static('public'));

    app.listen(port,() => {
        console.log("port number", port)
    })
    
`);




