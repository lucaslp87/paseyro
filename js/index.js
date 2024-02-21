    import { shopHTML, homeHTML, contactHTML } from "./elements/inners.js";
    import { todoHTML, yerberasHTML, canastasHTML, matesHTML, termosHTML, bombillasHTML, yerbaHTML } from "./elements/inners.js";

    const htmlsMain={shopHTML,homeHTML,contactHTML};
    const htmlsShop={todoHTML, yerberasHTML, canastasHTML, matesHTML, termosHTML, bombillasHTML, yerbaHTML};

    const domPrincipal= document.querySelector('.dom-principal');
    const btnsNavMain = document.querySelectorAll('.container-fluid .nav-link');
    
    
    btnsNavMain.forEach(el => {
        el.addEventListener('click', (event)=>{
            
            desactivarBoton(btnsNavMain);
            cambiarDOMSegunNav(el, domPrincipal, htmlsMain);
            
            if(event.target.name==='shop'){

                const grillaProductos = document.querySelector('.grilla-productos');
                const btnsNavShop = document.querySelectorAll('.filtros .nav-link');
                
                cambiarInner(grillaProductos, 'todoHTML', htmlsShop);

                btnsNavShop.forEach(opcion => {
                    opcion.addEventListener('click', ()=>{
                        desactivarBoton(btnsNavShop);
                        cambiarDOMSegunNav(opcion, grillaProductos, htmlsShop);
                    })
                });
            }
        });
    })

    
    function cambiarDOMSegunNav(elemento, elementoACambiar, objeto) {
        if (elemento.classList.contains('dropdown-toggle')) {
            return; 
        }

        activarBoton(elemento, elementoACambiar, objeto);
    }

    function desactivarBoton(array){

        array.forEach(el => {
            el.classList.remove('active');
        });
    }
    function activarBoton(elemento, elementoACambiar, objeto) {
            const nombreDelInner = elemento.name + 'HTML';

            elemento.classList.add('active');
            elemento.setAttribute('aria-current', 'page');

            cambiarInner(elementoACambiar, nombreDelInner, objeto);
    }


    function cambiarInner(elemento, nombre, objeto){

        if (nombre in objeto){
            elemento.innerHTML= objeto[nombre];           
        }
    }

    cambiarInner(domPrincipal, 'homeHTML', htmlsMain);