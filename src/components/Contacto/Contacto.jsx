import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div>
      {/* Contacto */}
      <section className="contacto" id="contacto">
        <div className="contenido-seccion">
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
        </div>
      </section>
    </div>
  )
}

export default Contacto
