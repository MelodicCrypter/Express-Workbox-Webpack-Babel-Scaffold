const path = require('path');
const find = require('find');

// 2. This section will get the all frontend js files
// and inject them to the footer.html of the app
const filePath = path.join(path.basename(path.dirname('../')), 'public/build/');
const fileNames = ['app', 'runtime', 'vendors'];
let appJS;
let runtimeJS;
let vendorsJS;

// 2.1 Process each file
fileNames.forEach(name => {
    // Find in the root/public/dist/ a file that has 'app', 'runtime', or 'vendors' string on it
    const regex = new RegExp(`(?:^|\\W)${name}(?:$|\\W)`);

    if (name === 'app') {
        find.file(regex, filePath, files => {
            if (files.length > 0) {
                appJS = files[0].replace('public/', '');
            }
        });
    } else if (name === 'runtime') {
        find.file(regex, filePath, files => {
            if (files.length > 0) {
                runtimeJS = files[0].replace('public/', '');
            }
        });
    } else if (name === 'vendors') {
        find.file(regex, filePath, files => {
            if (files.length > 0) {
                vendorsJS = files[0].replace('public/', '');
            }
        });
    }
});

// 3. Controller for your homepage or index
function renderHome(req, res) {
    res.render('index', {
        // for es6Renderer
        locals: {
            pageTitle: 'Simple Express Babel Webpack WorkBox',
            title: 'Simple',
            appJS,
            runtimeJS,
            vendorsJS,
        },
        partials: {
            header: path.resolve('public/views/partials/header.html'),
            footer: path.resolve('public/views/partials/footer.html'),
        },
    });
}

export default renderHome;
