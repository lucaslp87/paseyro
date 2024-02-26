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

    function cargarTodo(grilla, card){
        fetch('./js/elements/products.json')
                .then ((response)=>response.json())
                .then ((data)=>{
                    data.forEach(producto => {
                        card=`
                        <div class="col">
                        <div class="card text-center">
                            <div class="row">
                                <div class="col-4 col-md-12">
                                    <img src= "${producto.imagen}" class="card-img-top " alt="${producto.nombre}">
                                </div>
                                <div class="col-8 col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title text-break">${producto.nombre}</h5>
                                        <p class="card-text">${producto.descripcion}</p>
                                        <b>$${producto.precio}</b>
                                        <hr>
                                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        `;
                        grilla.innerHTML += card;
                        });
                })
    }
  
    btnsNavMain.forEach(el => {
        el.addEventListener('click', (event)=>{
            
            desactivarBoton(btnsNavMain);
            cambiarDOMSegunNav(el, domPrincipal, htmlsMain);
            
            if(event.target.name==='shop'){

                const grillaProductos = document.querySelector('.grilla-productos');
                const btnsNavShop = document.querySelectorAll('.filtros .nav-link');
                let cardHTML=``;

                cargarTodo(grillaProductos, cardHTML);

                btnsNavShop.forEach(opcion => {
                    opcion.addEventListener('click', (e)=>{
                        grillaProductos.innerHTML='';
                        desactivarBoton(btnsNavShop);
                        if(e.target.name==='todo'){
                            cargarTodo(grillaProductos, cardHTML);
                        }else{
                        fetch('./js/elements/products.json')
                            .then ((response)=>response.json())
                            .then ((data)=>{
                                
                                let productosFiltrados = data.filter(producto=>producto.categoria=== e.target.name);
                                productosFiltrados.forEach(producto => {
                                    cardHTML =`
                                    <div class="col">
                                    <div class="card text-center">
                                        <div class="row">
                                            <div class="col-4 col-md-12">
                                                <img src= "${producto.imagen}" class="card-img-top " alt="${producto.nombre}">
                                            </div>
                                            <div class="col-8 col-md-12">
                                                <div class="card-body">
                                                    <h5 class="card-title text-break">${producto.nombre}</h5>
                                                    <p class="card-text">${producto.descripcion}</p>
                                                    <b>$${producto.precio}</b>
                                                    <hr>
                                                    <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    `;
                                    grillaProductos.innerHTML += cardHTML;
                                    });
                            })
                        }
                        
                    })
                });
            }
        });
    })

    cambiarInner(domPrincipal, 'homeHTML', htmlsMain);