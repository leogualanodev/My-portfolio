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


// let citation = document.querySelector(".citations")

// let text= "Je suis un jeune développeur, soyez indulgent !";

// let tab = text.split("")
// let i=0
// let a = 0 
// function ChangeMessage(){
    
//     do {
//         i++
//         citation.innerHTML += tab[i-1];
        
//         a = a + i
//         break
          
//     } while ( i = 1)

//     return a 
   
    

    
// }


// setInterval(ChangeMessage,180);

let buttonScrollUp= document.querySelector(`.reseaux button`)

buttonScrollscrollUp.addEventListener("click",scrollUp())

function scrollUp(){

}

// https://w3collective.com/scroll-to-top-button-javascript/


    