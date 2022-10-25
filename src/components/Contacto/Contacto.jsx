import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div>
      {/* Contacto */}
      <section className="contacto" id="contacto">
        <div className="contenido seccion">
          <h1 className="title-principal">
            Comunicate con nosotros para conocer mas sobre nosotros y los
            servicios que ofrecemos para ti
          </h1>

          <div className="container-items">
            <div className="items">
              <input
                type="text"
                placeholder="ingrese su nombre"
                className="input"
              />
              <input
                type="email"
                placeholder="ingrese su correo"
                className="input"
              />
              <input
                type="text"
                placeholder="Numeo telefonico"
                className="input"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
              <button>
                Enviar Mensaje 
                <i class="fa-solid fa-paper-plane"></i>
                <span class="overlay"></span>
              </button>
            </div>
          </div>

          {/* Localización */}
          <div class="items">
            <img
              src="../assets/Images/Captura de pantalla 2022-10-25 083842.png"
              alt=""
            />
            <div class="info">
              <ul>
                <li>
                  <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                  Colombia: Medellin Dirección: Cra. 115 # 38 BD 8
                </li>
                <li>
                  <i class="fa-solid fa-mobile"></i>
                  Contactame: Proximamente
                </li>
                <li>
                  <i class="fa-solid fa-envelopes-bulk"></i>
                  Email: codigoc13@sonbata.org
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
