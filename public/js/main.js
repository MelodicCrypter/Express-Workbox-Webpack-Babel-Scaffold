// Direct imports =====================================================================
// SCSS
import '../styles/app.scss';
// jQuery
import 'jquery/dist/jquery.min';
// Materialize JS
import 'materialize-css/dist/js/materialize.min';
import '@iconify/iconify/dist/iconify.min';

// Libraries ==========================================================================
// import { WorkBox } from 'workbox-window';
import { Workbox } from 'workbox-window/Workbox.mjs';

// Local App Modules
import * as domUtil from '../utils/dom-utils';

// Service Worker stuffs =============================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker
        //     .register('/sw.js')
        //     .then(console.log)
        //     .catch(console.error);

        const wb = new Workbox('/sw.js');

        // Your update button
        const updateButton = document.querySelector('#updateButton');

        // Fires when the registered service worker has installed but is waiting to activate.
        wb.addEventListener('waiting', event => {
            updateButton.classList.add('show');

            updateButton.addEventListener('click', () => {
                // Set up a listener that will reload the page as soon as the previously waiting
                // service worker has taken control.
                wb.addEventListener('controlling', event => {
                    window.location.reload();
                });

                // Send a message telling the service worker to skip waiting.
                // This will trigger the `controlling` event handler above.
                wb.messageSW({ type: 'SKIP_WAITING' });
            });
        });

        wb.register();
    });
}

// Your own stuff here =============================================================
console.log('ישוע המושיע שלי');
