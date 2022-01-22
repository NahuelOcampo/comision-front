import React from 'react'

export default function Main() {
  return ( 
    <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/inauguracion1.jpg" className="d-block w-100" alt="Monumento Gada 101 Bateria B"/>
          </div>
          <div className="carousel-item">
            <img src="img/inauguracion2.jpg"className="d-block w-100" alt="Monumento Gada 101 Bateria B"/>
          </div>
          <div className="carousel-item">
            <img src="img/inauguracion3.jpg" className="d-block w-100" alt="Monumento Gada 101 Bateria B"/>
          </div>
          <div className="carousel-item">
            <img src="img/monu1.jpg" className="d-block w-100" alt="Monumento Gada 101 Bateria B"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
    )
}
