// The app.js,
// The app was intentionally separated for testing purposes
import app from './app';

const port = process.env.PORT || 3000;

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
