import React from 'react'

const NoticiasTarjeta = ({ url, name, description, detalles }) => {
  return (
    <div>
      <section>
        <div>
          <div>
            <img src={url} alt="" />
          </div>
          <div>
            <h2 className="titulo">{name}</h2>
            <h4 className="description">{description}</h4>
            <span>
              <a href="">{detalles}detalles</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NoticiasTarjeta
