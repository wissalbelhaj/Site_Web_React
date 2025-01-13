import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1  style={{ fontSize:'24px' }}>About Us</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
            <p>Orchy Brod excelle dans la broderie industrielle, apportant une élégance professionnelle grâce à notre expertise, nos équipements de pointe et notre engagement envers la qualité et les délais.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h1  style={{ fontSize:'24px', marginBottom:'25px'}}>Explore</h1>
            <ul> 
              <li><Link to='/'style={{ color: '#167c77' }}>Home</Link></li>
              <li><Link to='/travaux'style={{ color:    '#167c77' }}>Travaux</Link></li>
              <li><Link to='/about'style={{ color:   '#167c77' }} >About Us</Link></li>
              <li><Link to='/machine'style={{ color: '#167c77' }}>Machine</Link></li>
              <li><Link to='/contact'style={{ color: '#167c77' }}>Contact</Link></li>
            </ul>
          </div>
          <div >
      <h1 className="text-uppercase mb-4 text-white font-weight-bold col-6 justify-content-center" style={{ fontSize:'24px' }}>Localisation - Charradi solution</h1>
      <br/>
      <div id="map-container-google-1" className="z-depth-1-half map-container col-lg-3">
        <iframe src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
          style={{ border: '0' }} allowFullScreen></iframe>
      </div>
    </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          
          {/* <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
                
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div>
    </>
  )
}

export default Footer
