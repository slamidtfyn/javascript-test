console.log('test');
let x= document.createElement('div');
x.style="background-color: red; position: fixed;width:100px;height:100px;bottom: 10px;left: 10px;";
x.addEventListener('click',CookieConsent.show());
document.body.appendChild(x);
