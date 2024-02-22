export const shopHTML=`
<nav class="navbar d-md-none bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Filtros</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Filtros</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 filtros">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" name="todo" href="#">Todo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="yerberas" href="#">Yerberas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="canastas" href="#">Canastas materas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="mates" href="#">Mates</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="termos" href="#">Termos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="bombillas" href="#">Bombillas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name="yerba" href="#">Yerba</a>
            </li>
            
            </ul>
        </div>
        </div>
    </div>
</nav>
<nav class="nav d-none d-md-flex nav-underline nav-fill filtros">
    <a class="nav-link text-dark active" aria-current="page" name="todo" href="#">Todo</a>
    <a class="nav-link text-dark" name ="yerberas" href="#">Yerberas</a>
    <a class="nav-link text-dark" name ="canastas" href="#">Canastas materas</a>
    <a class="nav-link text-dark" name ="mates" href="#">Mates</a>
    <a class="nav-link text-dark" name ="termos" href="#">Termos</a>
    <a class="nav-link text-dark" name ="bombillas" href="#">Bombillas</a>
    <a class="nav-link text-dark" name ="yerba" href="#">Yerba</a>

</nav>
<div class="grilla-productos"></div>
`
export const homeHTML=`
<div class="container-fluid pt-3 mb-0 text-center"> 
      <div class="row">
        <div class="col-lg-4 d-none d-lg-block text-center mb-3">
          <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner rounded-3 border border-dark border-3 rounded">
              <div class="carousel-item active">
                <img src="img/mate.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="img/matera.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="img/yerba.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 text-center text-center fs-3">
          <div class="row my-3 py-5 mx-auto">
            <div class="col">
              ¡Te damos la <b>bienvenida</b> a nuestro e-commerce de productos regionales! Encontrá todo lo que estas buscando, directo del productor a tu casa.
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button type="button" class=" btn btn-outline-dark btn-lg">¡Ir a la tienda!</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
`
export const contactHTML=`
<div class="card" style="width: 18rem;">
  <img src="img/bombilla2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">CONTACTO</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const todoHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Todo</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const yerberasHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Yerberas</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const canastasHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Canastas</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const matesHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Mates</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const termosHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Termos</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const bombillasHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Bombillas</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
export const yerbaHTML=`
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Yerba</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`