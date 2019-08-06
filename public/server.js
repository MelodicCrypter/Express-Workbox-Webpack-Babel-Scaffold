// 0. Local App Modules
import homeRoute from '../routes/home-route';

// 1. Library Modules
const express = require('express');
const path = require('path');
const es6Renderer = require('express-es6-template-engine');

// 2. Initializations
const app = express();
const port = process.env.PORT || 3007;
const publicAssetsPath = path.join(__dirname, './');
const viewsPath = path.join(__dirname, './views/');

console.log(publicAssetsPath);

// 3. View: Template engine
app.engine('html', es6Renderer);
app.set('views', viewsPath);
app.set('view engine', 'html');

// 4. Middlewares
app.use(express.static(publicAssetsPath));

// 5. Routes
app.use('/', homeRoute);

app.get('/sw.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../sw.js'));
});

// 6. Listen
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);

    // Browser-Refresh
    // Comment this out before building for Production
    // This is only for development, to auto refresh the browser
    if (process.send) {
        process.send('online');
    }
});
