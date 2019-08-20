// The app.js,
// The app was intentionally separated for testing purposes
import app from './app';

const DEVMODE = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const LOCAL_IP = '192.168.1.4'; // put here your active local ip, for development only
const HOST = DEVMODE ? LOCAL_IP : '0.0.0.0';

// 6. Listen
app.listen(PORT, HOST, () => {
    console.log(
        `App is listening on http://${HOST}:${PORT}. Use this address in your devices for testing.`,
    );

    // Browser-Refresh
    // This is only for development, to auto refresh the browser
    if (process.send) {
        process.send('online');
    }
});
