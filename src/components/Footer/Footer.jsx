import React from 'react'
import './Footer.css'
import imagen from '../assets/Images/Logo.png'

const Footer = () => {
  return (
    <div>
      <section className="social">
        <div className="container-info">
          <div className="info">
            <img
              src="http://3.bp.blogspot.com/-0EoIBcE_gFk/UtgqFJTUTBI/AAAAAAAAAOY/V3dw-tSI3gc/s1600/1.png"
              alt=""
              className="img"
            />
            <div className='container-description'>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                id explicabo, molestiae vel reiciendis atque deserunt? Eaque
                dicta molestias nulla perspiciatis, dolor exercitationem tempora
                nobis hic perferendis et consectetur reiciendis?
              </h3>
            </div>
          </div>
        </div>

        <div className="container-info">
          <div className="info">
            <img src={imagen} alt="" className="img2" />
            <div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                id explicabo, molestiae vel reiciendis atque deserunt? Eaque
                dicta molestias nulla perspiciatis, dolor exercitationem tempora
                nobis hic perferendis et consectetur reiciendis?
              </h3>
            </div>
          </div>
        </div>

        <div className="container-principal">
          <div className="media">
            <ul className="item">
              <li data-text="Facebook" data-color="#1877f2">
                <a href="#" className="facebook">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li data-text="Gmail" data-color="#ff6b3e">
                <a href="#" className="gmail">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
              <li data-text="Twiter" data-color="#0099ff">
                <a href="#" className="twiter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li data-text="Instagram" data-color="#ff6600">
                <a href="#" className="instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
