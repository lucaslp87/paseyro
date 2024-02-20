import { shopHTML, homeHTML, contactHTML } from "./elements/inners.js";

//seleccionar los nodos, escuchar los eventos, cambiar las clases de los navs y modificar el dom principal
const htmls={shopHTML,homeHTML,contactHTML};

const domPrincipal= document.querySelector('.dom-principal');
const btnsNavBar = document.querySelectorAll('.nav-link');

btnsNavBar.forEach(element => {
    element.name!='product' && element.addEventListener('click', ()=>{
        const nombreDelInner= element.name +'HTML';
        btnsNavBar.forEach(el => {
            el.classList.remove('active');          
        });
        element.classList.add('active');
        element.setAttribute('aria-current', 'page');
        cambiarDOM(nombreDelInner, htmls);
    });
});

function cambiarDOM(nombre, objeto){
    if (nombre in objeto){
            
        domPrincipal.innerHTML= objeto[nombre];
                
    }
}

cambiarDOM('homeHTML', htmls);
