// If Development: Run NGROK as well, for https use-case, good for testing PWA apps
const ngrok = require('ngrok');

// Ports
const PORT = 3000; // this port must match your chosen port inside /public/server.js
const LS_PORT = 3009; // this is the light-server's port, for Dev only

(async function() {
    const url = await ngrok
        .connect({
            addr: PORT,
            region: 'ap',
            authtoken: process.env.NGROK_TOKEN,
        })
        .then(url => {
            console.log('******************************************************');
            console.log('******************************************************');
            console.log('******************************************************');
            console.log('******************************************************');
            console.log('* Light-Server and Ngrok are used in this Scaffold');
            console.log('* LS enables auto reload for changes. And the Ngrok');
            console.log('* enables you to test your app on external devices like');
            console.log('* mobiles, iPad, etc.');
            console.log(' ');
            console.log(`* Secure Cloud: => ${url}`);
            console.log(`* Local: => http://localhost:${LS_PORT}`);
            console.log(' ');
            console.log('******************************************************');
            console.log('******************************************************');
            console.log('******************************************************');
            console.log('******************************************************');
        })
        .catch(e => console.log(e));
})();
