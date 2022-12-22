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
        
    }

    else {
        let logo=document.querySelector(".logotop");
        logo.src="./images/logo-white.png";
        let logo1= document.querySelector(".logo");
        logo1.src="./images/logo-white-footer.png";
        let burger=document.querySelector(".burger-logo");
        burger.src="./images/burger-white.png";
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

// setTimeout(function(){
//     for (let i = 0 ; i < tab.length ; i++){
//         citation.innerHTML += tab[i]
//     }
// },100)

// for ( let i = 0 ; i < tab.length ; i++){
//     function (i) {
//         setTimeout(function(){
//             citation.innerHTML += tab[i] ; 
//         }, 200)
//     }
// }

// function setText (i) {
//     setTimeout(function(){
//         citation.innerHTML += tab[i]
//     },2000)
// }

// for ( let i = 0 ; i < tab.length ; i++){
//     setText(i)
// }




let buttonScrollUp= document.querySelector(`.reseaux button`)

//buttonScrollscrollUp.addEventListener("click",scrollUp())

function scrollUp(){

}

// https://w3collective.com/scroll-to-top-button-javascript/


    