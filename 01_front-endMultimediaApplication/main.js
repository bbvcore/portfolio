//********************************************************************************/
// 							SMOOTH EFFECT
//********************************************************************************/
function smooth(){
var upper = document.getElementById("link-to-top"); 
	upper.addEventListener('click', (event) => {
     	 		event.preventDefault(); 
				  let eventInLink = event.target.getAttribute('href');
				  console.log(eventInLink);
				document.querySelector(eventInLink).scrollIntoView({
					behavior: "smooth",
				});
        });
}

//********************************************************************************/
// 							QUESTIONS : SHOW & HIDDE
//********************************************************************************/
// IMPORTANTE: Se trabaja con la propiedad DISPLAY, que mantiene espacio en el flujo del diseño HTML
// aunque la capa se oculte.
// PROS: Desplaza capas, produce efecto visual "correr contenido".
// HANDICAP: NO permite utilizar transiciones CSS en el desplazamiento de mostrar/ocultar
// Argumento de la función el nombre de la capa a ocultar / mostrar
function showHidden(divName){
    let  x= document.getElementById(divName);
	if (x){ 
			x.style.display = (x.style.display == 'none') ? 'block' : 'none'; 
		}
	}
// Llamadas para evitar el problema del doble click inicial
window.addEventListener('DOMContentLoaded', showHidden('hl01'));
window.addEventListener('DOMContentLoaded', showHidden('hl02'));
window.addEventListener('DOMContentLoaded', showHidden('hl03'));
window.addEventListener('DOMContentLoaded', showHidden('hl04'));

//********************************************************************************/
// 								MAIN SLIDER
//********************************************************************************/
function mainSlider(){	
// 1.- CAPTURA DE ELEMENTOS
    // 1.1.- CONTENEDORES
    const sliderContainer = document.getElementById('main-slider-container');
    const sliderArray = document.getElementsByClassName('main-slider-item');
    const sizeSliderArray = sliderArray.length;
    console.log(sliderContainer);
    console.log(sliderArray);
    console.log(sizeSliderArray);
    // 1.2.- TAMAÑO DEL VIEWPORT O DEL ELEMENTO, YA QUE EL ELEMENTO ES FULL-WIDTH
    var widthClientElement = sliderContainer.clientWidth;
    const widthRectClient = sliderContainer.getBoundingClientRect().width;
    console.log(widthClientElement);
    console.log(widthRectClient);
    // 1.3.- CAPTURA DE LOS CONTROLES
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    console.log(prev);
    console.log(next)

// 2.- LÓGICA DE FUNCIONAMIENTO Y CSS (TRANSFORM Y TRANSITION)
    // CONTADOR PARA LA POSICIÓN
    var counter = 0;
    // CONTROL 'PREV'
    prev.addEventListener('click',()=>{
        if(counter == 0){ 
            counter = sizeSliderArray-1 
            console.log(counter);
        }else{
            counter--; 
            console.log(counter);
        }
        sliderContainer.style.transform = "translateX("+(-widthClientElement*counter) +"px)"; // Add CSS
        // ANIMACIÓN CON TRANSITION
        sliderContainer.style.transition = "transform 0.5s"; // AÑADIR CSS
    },true);
    // CONTROL 'NEXT'
    next.addEventListener('click',()=>{
        if(counter == sizeSliderArray-1){ 
            counter = 0; 
            console.log(counter);
        }else{
            counter++; 
            console.log(counter);
        }
        sliderContainer.style.transform = "translateX("+(-widthClientElement*counter) +"px)"; // Add CSS
        sliderContainer.style.transition = "transform 0.5s"; // AÑADIR CSS
    },true);

// 3.- HACKS
window.addEventListener('resize', function(){

            widthClientElement = sliderContainer.clientWidth
            console.log(`El redimensionado del viewport es de: ${widthClientElement} px`);
        },true);

// 4.- AUTO - LOOP
    setInterval(()=>{
        sliderContainer.style.transform = "translateX("+(-widthClientElement*counter) +"px)"; // Add CSS
        sliderContainer.style.transition = "transform 0.5s"; 
        counter++;
        console.log(counter);
            if (counter == sizeSliderArray){
                counter=0;
            }
    },7000);        
}
//********************************************************************************/
// 							VARIOUS SLIDER NUMBER 01
//********************************************************************************/
function sliderNumber01(){
	var elementsPerPage=6;      
    document.addEventListener('click', event =>{
            if (event.target){  
                var slider = document.getElementById('slider');
                let numberOfImgs = document.getElementsByClassName('img').length;
                let pages = parseInt(Math.ceil(numberOfImgs/elementsPerPage)); 
                let position = parseInt(getComputedStyle(slider).getPropertyValue('--position'));
                if (event.target.classList.contains('left-control')){
                    if (position>=0){
                        slider.style.setProperty('--position',0);
                    }else{
                        slider.style.setProperty('--position',position-1);
                    }
                }
                if (event.target.classList.contains('right-control')){
                    if (position>=pages-1){
                        slider.style.setProperty('--position',pages-1);
                    }else{
                        slider.style.setProperty('--position',position+1);
                    } 
            }           
            }// END if event.target
        }); 
}
//********************************************************************************/
// 							VARIOUS SLIDER NUMBER 02
//********************************************************************************/
function sliderNumber02(){
	var elementsPerPage=6;      
    document.addEventListener('click', event =>{
            if (event.target){  
                var slider2 = document.getElementById('slider2');
                let numberOfImgs = document.getElementsByClassName('img2').length;
                let pages = parseInt(Math.ceil(numberOfImgs/elementsPerPage));
                let position = parseInt(getComputedStyle(slider2).getPropertyValue('--position'));
                console.log("Position: " + position);
                if (event.target.classList.contains('left-control2')){
                    if (position>=0){
                        slider2.style.setProperty('--position',0);
                    }else{
                        slider2.style.setProperty('--position',position-1);
                    }
                }
                if (event.target.classList.contains('right-control2')){
                    if (position>=pages-1){
                        slider2.style.setProperty('--position',pages-1);
                    }else{
                        slider2.style.setProperty('--position',position+1);
                    } 
            }           
            }// END event.target
        }); // END Listener evento click
}
//********************************************************************************/
// 							VARIOUS SLIDER NUMBER 03
//********************************************************************************/
function sliderNumber03(){
	var elementsPerPage=6;      
    document.addEventListener('click', event =>{
            if (event.target){  
                var slider2 = document.getElementById('slider3');
                let numberOfImgs = document.getElementsByClassName('img3').length;
                let pages = parseInt(Math.ceil(numberOfImgs/elementsPerPage));
                let position = parseInt(getComputedStyle(slider3).getPropertyValue('--position'));
                console.log("Position: " + position);
                if (event.target.classList.contains('left-control3')){
                    if (position>=0){
                        slider3.style.setProperty('--position',0);
                    }else{
                        slider3.style.setProperty('--position',position-1);
                    }
                }
                if (event.target.classList.contains('right-control3')){
                    if (position>=pages-1){
                        slider3.style.setProperty('--position',pages-1);
                    }else{
                        slider3.style.setProperty('--position',position+1);
                    } 
            }           
            }// END event.target
        }); // END Listener evento click
}
//********************************************************************************/
// Register & Login
//********************************************************************************/
    // A. Register
    //============

    if (document.getElementById('submit-reg')){
        document.getElementById('submit-reg').addEventListener('click',function saveDB(event){
            event.preventDefault();
            localStorage.emailReg = document.getElementById('email-reg').value;
            localStorage.passwordReg = document.getElementById('password-reg').value;
                console.log("Datos registro => Email: " + localStorage.emailReg + ", Pasword: " + localStorage.passwordReg);
        },true); 
    }
        
    // B.- Login  
    //==========  
        if (document.getElementById('submit-log')){
        document.getElementById('submit-log').addEventListener('click',function(event){
            event.preventDefault();
            localStorage.emailUser = document.getElementById('email-log').value;
            localStorage.passwordUser = document.getElementById('pass-log').value; 
            console.log("Datos registro => Email: " + localStorage.emailReg + ", Pasword: " + localStorage.passwordReg);
            console.log("Datos login => Email: " + localStorage.emailUser + ", Pasword: " + localStorage.passwordUser);
            if((localStorage.emailUser===localStorage.emailReg && localStorage.passwordUser===localStorage.passwordReg)){ 
                window.location.href="app.html";
            }else{
                console.log("datos erroneos");
                alert('Los DATOS introducidos son ERRÓNEOS o el FORMULARIO esta en BLANCO. Por favor compruebe los campos del formulario.');
            }
        },true);
    }
    
//********************************************************************************/
// Menu
//********************************************************************************/
    // Ocultar y mostrar capa
    if(document.querySelector('.icon-menu')){
    let mobile = document.querySelector('.icon-menu');
    mobile.addEventListener('click',()=>{
        let toggle = document.querySelector('.new-top-menu');
       // Opción 1: display y valores "block/none"
       // toggle.style.display=="block" ? toggle.style.display="none" : toggle.style.display="block";
       toggle.classList.toggle('show');
    } ); 
}

//********************************************************************************/
// INFORMATION FORM MESSAGE ON THE MAIN PAGE
//********************************************************************************/
if (document.getElementById('information-form')){
    document.getElementById('information-form').addEventListener('click',(event)=>{
        event.preventDefault();
        let message = document.getElementById('name-email').value;
        alert("Su dirección de correo electrónico: "+ message +" .Ha sido enviado correctamente. Gracias.");
    })
}