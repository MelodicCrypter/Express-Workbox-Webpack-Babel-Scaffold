const path = require('path');

// 1. Controller for your homepage or index
function renderTest(req, res) {
    res.render('test', {
        // for es6Renderer
        locals: {
            pageTitle: 'Sample Page for Testing Route',
            title: 'Test Page',
        },
        partials: {
            header: path.resolve('public/views/partials/header.html'),
            // final footer is inside /public/build/
            // but template is inside /public/views/partials/
            // because WebPack (configured for this case) should auto inject all the js assets
            footer: path.resolve('public/build/footer.html'),
        },
    });
}

export default renderTest;
