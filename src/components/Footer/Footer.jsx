import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section className="social">
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
      </section>
    </div>
  )
}

export default Footer
