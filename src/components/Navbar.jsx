import React from 'react'

export default function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="http://www.google.com">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#1">Nosotros</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#2">Contacto</a>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
      </div>
    )
}
