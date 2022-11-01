import React, { useEffect, useState } from 'react'
import './Carreras.css'

const Carreras = () => {
  const [carreras, setCarrera] = useState([])
  const fechCarreras = async () => {
    const response = await fetch(
      `https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/carrers`
    )
    const data = await response.json()
    setCarrera(data)
  }
  useEffect(() => {
    fechCarreras()
  }, [])

  return (
    <div className="container">
      {carreras.map((carreraInfo) => (
        <section className="container-principal" id="container-principal">
          <section className="container-tarjets">
            <div className="container-tarjet" key={carreraInfo._id}>
              <img src={carreraInfo.img} alt="" className="imagen" />
              <div className="container-text">
                <h1 className="tittle">{carreraInfo.name}</h1>
                <h4 className="description">{carreraInfo.description}</h4>
                <button className="button">
                  <a href="#">Ver más</a>
                </button>
              </div>
            </div>
          </section>
        </section>
      ))}
    </div>
  )
}

export default Carreras
