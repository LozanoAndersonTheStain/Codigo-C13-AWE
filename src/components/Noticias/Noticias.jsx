import React from 'react'
import NoticiasTarjeta from './NoticiasTarjeta'
import './Noticias.css'

const noticiaasInfo = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg',
    name: 'Noticia 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    detalles: 'Ver más',
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2021/01/01/21/31/halloween-5880068_960_720.jpg',
    name: 'Noticia 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    detalles: 'Ver más',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2022/10/19/07/45/zombie-7531835_960_720.jpg',
    name: 'Noticia 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    detalles: 'Ver más',
  },
  {
    id: 4,
    url: 'https://cdn.pixabay.com/photo/2022/10/24/14/48/forest-7543646_960_720.jpg',
    name: 'Noticia 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    detalles: 'Ver más',
  },
  {
    id: 5,
    url: 'https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_960_720.jpg',
    name: 'Noticia 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    detalles: 'Ver más',
  },
]

const Noticias = () => {
  return (
    <div className="container-noticias">
      {noticiaasInfo.map((noticia) => 
        <NoticiasTarjeta 
        url={noticia.url}
        name={noticia.name}
        description={noticia.description}
        detalles={noticia.detalles}
        />
      )}

      {/* <NoticiasTarjeta
        url="https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg"
        name="Noticia 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        detalles="Ver más "
      /> */}
    </div>
  )
}

export default Noticias
