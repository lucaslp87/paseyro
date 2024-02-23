    import { shopHTML, homeHTML, contactHTML } from "./elements/inners.js";
    import { todoHTML, yerberasHTML, canastasHTML, matesHTML, termosHTML, bombillasHTML, yerbaHTML } from "./elements/inners.js";

    const htmlsMain={shopHTML,homeHTML,contactHTML};
    const htmlsShop={todoHTML, yerberasHTML, canastasHTML, matesHTML, termosHTML, bombillasHTML, yerbaHTML};

    const domPrincipal= document.querySelector('.dom-principal');
    const btnsNavMain = document.querySelectorAll('.container-fluid .nav-link');
    
    
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

  
    btnsNavMain.forEach(el => {
        el.addEventListener('click', (event)=>{
            
            desactivarBoton(btnsNavMain);
            cambiarDOMSegunNav(el, domPrincipal, htmlsMain);
            
            if(event.target.name==='shop'){

                const grillaProductos = document.querySelector('.grilla-productos');

                fetch('./js/elements/products.json')
                .then ((response)=>response.json())
                .then ((data)=>{
                    data.forEach(producto => {
                        const cardHTML =`
                            <div class="card">
                            <img src= "${producto.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>    
                        `;
                        grillaProductos.innerHTML += cardHTML;
                        });
                })

                const btnsNavShop = document.querySelectorAll('.filtros .nav-link');    

                btnsNavShop.forEach(opcion => {
                    opcion.addEventListener('click', ()=>{
                        desactivarBoton(btnsNavShop);
                        cambiarDOMSegunNav(opcion, grillaProductos, htmlsShop);
                    })
                });
            }
        });
    })

    cambiarInner(domPrincipal, 'homeHTML', htmlsMain);