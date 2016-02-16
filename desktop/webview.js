var webview = document.getElementById('uber');


console.log(window.location);

// This is needed to remove facebook login and hide links to browse uber.com
webview.addEventListener('dom-ready', function() {
  webview.insertCSS([
    '.btn--link',
    '.text-uber-white',
    'p.text--center',
    '.btn--facebook',
  ].join() + '{display:none!important;}');
  webview.insertCSS('header.contextual {position:fixed !important;} .wrapper {padding-top: 80px !important;}');


  webview.addEventListener('console-message', function(e) {
    console.log('Guest page logged a message:', e.message);
  });

  webview.openDevTools();
});
