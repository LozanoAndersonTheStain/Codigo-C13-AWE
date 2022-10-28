import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div>
      {/* Contacto */}
      <section className="contacto" id="contacto">
        <div className="contenido-seccion">
          <h1>Contactanos</h1>
          <hr />
          <h2>
            Comunicate con nosotros para conocer mas sobre nosotros y los
            servicios que ofrecemos para ti
          </h2>
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
                <i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
