import React from 'react'
import './NoticiasTargeta.css'

const NoticiasTarjeta = ({ url, name, description, detalles }) => {
  return (
    <div className="container">
      <section className="container-principal">
        <div className='container-tarjets'>
          <div className="container-tarjet">
            <img src={url} alt="" className="imagen" />
            <div className="container-text">
              <h2 className="tittle">{name}</h2>
              <h4 className="description">{description}</h4>
              <span className="detalles">
                <a href="">{detalles}detalles</a>
              </span>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default NoticiasTarjeta
