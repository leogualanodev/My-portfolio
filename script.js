// definiele dark mode de mon portfolio 

let button = document.querySelector(`#dark-mode`);
console.log(button);

button.addEventListener(`click`, function(){
    let body = document.querySelector(`.body-color`);
    body.classList.toggle("dark-mode");


    if( body.className=="body-color" ){
        let logo=document.querySelector(".logotop");
        logo.src="./images/logo.png" ;
        let logo1= document.querySelector(".logo");
        logo1.src="./images/logo1.png";
        let burger=document.querySelector(".burger-logo");
        burger.src="./images/menu-burger.png";
        let img = document.querySelector(`.img-mode`);
        img.src = "./images/lune.png" ;
        
    }

    else {
        let logo=document.querySelector(".logotop");
        logo.src="./images/logo-white.png";
        let logo1= document.querySelector(".logo");
        logo1.src="./images/logo-white-footer.png";
        let burger=document.querySelector(".burger-logo");
        burger.src="./images/burger-white.png";
        let img = document.querySelector(`.img-mode`);
        img.src = "./images/sun.svg" ;
    }
})


// apparition de mon paragraphe lettre par lettre 

let citation = document.querySelector(".citations")

let text= "Je suis un jeune développeur, soyez indulgent !";

let tab = text.split("")

let i =0

const intervalID = setInterval(() => {
    citation.innerHTML += tab[i]
    i++
    if(i >= tab.length)
    {
        clearInterval(intervalID)
    }
}, 100);

let scrollUp = document.querySelector(`#scroll-top-button`);
scrollUp.addEventListener("click",function(){
    window.scrollTo({top:0, behavior:"smooth"});
})







    