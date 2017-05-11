var headerHtml = require('./component/header/static.html');
var divBodyHtml = require('./component/body/static.html');
var footerHtml = require('./component/footer/static.html');
window.onload = function() {
    document.body.innerHTML = headerHtml;
    document.body.innerHTML += divBodyHtml;
    document.body.innerHTML += footerHtml;
}