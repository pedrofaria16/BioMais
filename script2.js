
setInterval(() => {
    console.log(window.scrollY);
}, 100);

const foto = document.getElementById('navBar');

var imgTag1 = '<a href="../../index.html"><img src="../../img/Bio.png" width="25px" /></a>'
var imgTag2 = '<a href="../../index.html"><img src="../../img/Bio2.png" width="25px" /></a>'


window.addEventListener('scroll', function() {
    if(window.scrollY >= 923) {
        foto.innerHTML = imgTag1;
    }  else {
        foto.innerHTML = imgTag2
    }
})