// The app.js,
// The app was intentionally separated for testing purposes
import app from './app';

// Settngs
// const DEV_MODE = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

// 6. If Development use Aliv, if Production use Express
app.listen(PORT, () => {
    console.log(``);
});
