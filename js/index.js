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

        function cargarTodo(grilla, seccion){
            
            fetch('https://raw.githubusercontent.com/lucaslp87/paseyro/main/js/elements/products.json')
                    .then ((response)=>response.json())
                    .then ((data)=>{
                        const productosMostrados = seccion === 'todo' ? data : data.filter(producto=>producto.categoria=== seccion);
                        
                        productosMostrados.forEach(producto => {
                            let card=`
                            <div class="col">
                            <div class="card text-bg-dark text-center">
                                <div class="row">
                                    <div class="col-4 col-md-12">
                                        <img src= "${producto.imagen}" class="card-img-top " alt="${producto.nombre}">
                                    </div>
                                    <div class="col-8 col-md-12">
                                        <div class="card-body p-3 fs-6 fs-md-auto">
                                            <h5 class="card-title text-break">${producto.nombre}</h5>
                                            <p class="card-text">${producto.descripcion}</p>
                                            <b>$${producto.precio}</b>
                                            <hr>
                                            <a href="#" class="btn btn-outline-light">Agregar al carrito</a>
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
                    
                    cargarTodo(grillaProductos, 'todo');

                    btnsNavShop.forEach(opcion => opcion.addEventListener('click', (e)=>{
                            grillaProductos.innerHTML='';
                            desactivarBoton(btnsNavShop);
                            cargarTodo(grillaProductos, e.target.name);
                            
                    }))
                }
            });
        })

        cambiarInner(domPrincipal, 'homeHTML', htmlsMain);