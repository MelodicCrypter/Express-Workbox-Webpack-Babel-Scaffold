// 0. Local App Modules
import homeRoute from '../routes/home-route';
import testRoute from '../routes/test-route';
import fallbackRoute from '../routes/fallback-route';

// 1. Library Modules
const express = require('express');
const path = require('path');
const es6Renderer = require('express-es6-template-engine');

// 2. Initializations
const app = express();
const publicAssetsPath = path.join(__dirname, './');
const viewsPath = path.join(__dirname, './views/');

// 3. View: Template engine
app.engine('html', es6Renderer);
app.set('views', viewsPath);
app.set('view engine', 'html');

// 4. Middlewares
app.use(express.static(publicAssetsPath));

// 5.1 GET, for the Service Worker
app.get('/sw.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../sw.js'));
});
// 5.2 Routes
app.use('/', homeRoute);
app.use('/test', testRoute);
app.use('/fallback', fallbackRoute);

export default app;
