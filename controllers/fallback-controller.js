const path = require('path');

// 1. Controller for your homepage or index
function renderFallback(req, res) {
    res.render('fallback', {
        // for es6Renderer
        locals: {
            pageTitle: 'Sample fallback or offline Page',
            title: 'Offline Page',
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

export default renderFallback;
