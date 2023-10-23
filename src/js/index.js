import autoCompleteFunc from './modules/autoComplete'
autoCompleteFunc();

// import { easepick } from '@easepick/bundle';
import { easepick } from '@easepick/core';
import { TimePlugin } from '@easepick/time-plugin';
const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    ],
    zIndex: 10,
    format: 'HH:mm, MM/DD/YYYY',
    TimePlugin: {
    },
    plugins: [TimePlugin],
  });


// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
