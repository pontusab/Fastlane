/* eslint prefer-template: 0 */
const webview = document.getElementById('uber');

// This is needed to remove facebook login and hide links to browse uber.com
webview.addEventListener('dom-ready', () => {
  webview.insertCSS([
    '.btn--link',
    '.text-uber-white',
    'p.text--center',
    '.btn--facebook',
  ].join() + '{display:none!important;}');

  webview.insertCSS(
    'header.contextual {position:fixed !important;} .wrapper {padding-top: 80px !important;}'
  );

  webview.addEventListener('console-message', (e) => {
    console.log('Guest page logged a message:', e.message);
  });

  // webview.openDevTools();
});
