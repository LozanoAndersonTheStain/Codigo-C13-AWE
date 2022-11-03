import React from 'react'
import './NoticiasTargeta.css'

const NoticiasTarjeta = ({ url, name, description, detalles }) => {
  return (
    <div className="container-n">
      <section className="container-principal-n ">
        <section className="container-tarjets-n">
          <div className="container-tarjet-n">
            <img src={url} alt="" className="imagen" />
            <div className="container-text-n">
              <h2 className="tittle">{name}</h2>
              <h4 className="description">{description}</h4>
              <span className="detalles">
                <a href="">{detalles}detalles</a>
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default NoticiasTarjeta
