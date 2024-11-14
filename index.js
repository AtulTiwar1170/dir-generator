const fs = require('fs');
const path = require('path');

// const createDirectories = () => {
//     const baseDir = __dirname;
//     const directories = ['controllers', 'models', 'routes', 'utils', 'public'];

//     directories.forEach(dir => {
//         const fullPath = path.join(baseDir, dir);
//         if (!fs.existsSync(fullPath)) {
//             fs.mkdirSync(fullPath, { recursive: true }, (err) => {
//                 if (err) throw err;
//                 console.log(`Directory '${dir}' created successfully in ${fullPath}`);
//             });
//         } else {
//             console.log(`Directory '${dir}' already exists in ${fullPath}`);
//         }
//     });
// };
const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        const Folder = path.join(__dirname, '../../', dirPath);
        fs.mkdirSync(Folder, { recursive: true }, (err) => {
            if (err) throw err;
            console.log(`Directory ${Folder} created successfully!`);
        });
    } else {
        console.log(`Directory ${Folder} already exists.`);
    }
};

createDirectory('public');
createDirectory('controllers');
createDirectory('models');
createDirectory('routes');
createDirectory('utils');

// Create subdirectories in public

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




