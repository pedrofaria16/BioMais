var item1 = document.getElementById("1")
var item2 = document.getElementById("2")
var item3 = document.getElementById("3")
var item4 = document.getElementById("4")
var item5 = document.getElementById("5")
var item6 = document.getElementById("6")
var carouselContainer = document.getElementById("carousel-container")
var carouselView = document.getElementById("carousel-view")

var slides = [item1, item2, item3, item4, item5, item6]

const itemWidth = parseInt(getComputedStyle(item1).width);
const itemMargin = parseInt(getComputedStyle(item1).marginLeft) + parseInt(getComputedStyle(item1).marginRight);
const totalWidth = itemWidth + itemMargin;

let currentSlide = slides[2]
let firstSlide = slides[0]
let lastSlide = slides[slides.length - 1]
carouselContainer.style.left = totalWidth/2 + "px"
carouselView.style.width = totalWidth*3 + "px"

function moveSlide(index) {
    slides[2].classList.remove("focus");

    
    let currentLeft = parseInt(carouselContainer.style.left) || 0;

    if (index == 1) {
        let primeiroElemento = slides.shift();
        slides.push(primeiroElemento);
        console.log(slides);
        carouselContainer.style.left = (currentLeft - totalWidth) + "px";
        firstSlide.style.left = (parseInt(getComputedStyle(firstSlide).left || 0) + (slides.length)*totalWidth) + "px"
    }

    if (index == -1) {
        let ultimoElemento = slides.pop();
        slides.unshift(ultimoElemento);
        console.log(slides);
        carouselContainer.style.left = (currentLeft + totalWidth) + "px";
        lastSlide.style.left = (parseInt(getComputedStyle(lastSlide).left || 0) - (slides.length)*totalWidth) + "px"
    }

    firstSlide = slides[0]
    lastSlide = slides[slides.length - 1]
    slides[2].classList.add("focus");
}
currentSlide.classList.add("focus")


//Doação

function doacao() {
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var endereco = document.getElementById("endereco")
    var valor = document.getElementById("valor")
    if (nome.value == "" || email.value == "" || endereco.value == "" || valor.value == "") {
        alert("Preencha os campos necessários.")
    } else {
        alert(`Agradeçemos você ${nome.value}, pela doação no valor de R$${valor.value}.`)
        nome.value = ""
        email.value = ""
        endereco.value = ""
        valor.value = ""
    }
}

setInterval(() => {
    console.log(window.scrollY);
}, 100);

const foto = document.getElementById('navBar');

var imgTag1 = '<a href="#"><img src="img/Bio.png" width="25px" id="foto">'
var imgTag2 = '<a href="#"><img src="img/Bio2.png" width="25px" id="foto">'


window.addEventListener('scroll', function() {
    if(window.scrollY >= 1018 && window.scrollY < 2819) {
        foto.innerHTML = imgTag2;
    } else if (window.scrollY >= 3668 ){
        foto.innerHTML = imgTag2
    } else {
        foto.innerHTML = imgTag1
    }
})