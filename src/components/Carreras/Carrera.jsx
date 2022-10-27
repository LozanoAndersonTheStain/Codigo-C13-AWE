import React from 'react'
import './Carrera.css'

const Carrera = () => {
  return (
    <div>
      <section className="container-principal" id="container-principal">
        <section className="container-tarjets">
          <div className="container-tarjet">
            <img
              src="https://img.freepik.com/vector-premium/banner-conceptos-palabra-front-end-programacion-aplicaciones-web_106317-84.jpg?w=740"
              alt=""
              className="imagen"
            />
            <div className="container-text">
              <h1 className="tittle">FrontEnd</h1>
              <h4 className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, culpa? Pariatur debitis, aliquam rem nisi itaque quam
                cum ab at sint enim modi, autem praesentium! Soluta natus
                corporis molestias tempore! Ad minus libero reiciendis sequi
                saepe nostrum deserunt voluptates ab molestiae, quidem ratione
                perspiciatis rem officia maiores suscipit commodi repudiandae,
                provident unde, ducimus mollitia! Fuga saepe architecto placeat
                quod deleniti?
              </h4>
              <button className="button">
                <a href="#">Ver más</a>
              </button>
            </div>
          </div>

          <div className="container-tarjet">
            <img
              src="https://res.cloudinary.com/dsx4exsl6/image/upload/c_scale,h_394,w_525/v1611850027/blog-post/man-developer_h0ub8b.jpg"
              alt=""
              className="imagen"
            />
            <div className="container-text">
              <h1 className="tittle">FullStack</h1>
              <h4 className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                nostrum architecto nobis, adipisci sapiente debitis error,
                suscipit nihil cum perferendis quam! Minima hic ad recusandae
                deleniti! Fugit dolore rem asperiores. Soluta quasi vel rem
                illum ex, quidem, praesentium magni sed amet quod ut delectus
                distinctio quos eum nostrum veritatis ad? Cupiditate tempore
                porro sit labore sequi aperiam amet veritatis facilis!
              </h4>
              <button className="button">
                <a href="#">Ver más</a>
              </button>
            </div>
          </div>

          <div className="container-tarjet">
            <img
              src="https://geekflare.com/wp-content/uploads/2021/09/Backend-solution.png"
              alt=""
              className="imagen"
            />
            <div className="container-text">
              <h1 className="tittle">BackEnd</h1>
              <h4 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                officia minus dolorem! At natus delectus repellat nihil ducimus
                cumque dignissimos explicabo quibusdam, quos molestias beatae
                nulla facere laudantium quidem! Animi? Error dolorum sed qui
                harum recusandae, ad facere suscipit. Eveniet perferendis quas
                aperiam deserunt commodi. Eveniet repudiandae deleniti adipisci
                quasi odit molestias laboriosam vero quae eius, in voluptatem
                facilis ratione.
              </h4>
              <button className="button">
                <a href="#">Ver más</a>
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* <section id="carreras" className="fondo-carreras">
        <section className="contasinerTarjet">
          <div
            className="tarjet"
            style="--i:url(https://img.freepik.com/vector-premium/banner-conceptos-palabra-front-end-programacion-aplicaciones-web_106317-84.jpg?w=740)"
          >
            <div className="container2">
              <h2>Frontend</h2>
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              </a>
            </div>
          </div>

          <div
            className="tarjet"
            style="--i:url(https://geekflare.com/wp-content/uploads/2021/09/Backend-solution.png)"
          >
            <div className="container2">
              <h2>Backend</h2>
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </div>
          </div>

          <div className="tarjet" style="--i:url()">
            <div className="container2">
              <h2>Fullstack</h2>
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </div>
          </div>
        </section>
      </section> */}
    </div>
  )
}

export default Carrera
