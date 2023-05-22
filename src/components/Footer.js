import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer text-light'>
        <div className='footer-links'>
          <div><h5>Quick Links</h5></div>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/course'>Course</Link></li>
              <li><Link to='/Gallery'>Gallary</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/enquiry'>Enquiry</Link></li>
              <li><Link to='enquiry'>Contact Us</Link></li>

            </ul>
          </div>
        </div>

        <div className='footer-links '>
          <div><h5>Other Pages</h5></div>
          <div>
            <ul>
              <li><a href='/'>USP</a></li>
              <li><a href='/'>FAQ !</a></li>
              <li><a href='https://www.onlinevarsity.com/'>Onlineversity</a></li>
              <li><a href='https://www.creosouls.com/'>Craosouls</a></li>
            </ul>
          </div>
        </div>

        <div className='footer-links '>
          <div><h5>Contact info</h5></div>

          <div>
            <i class="fa-solid fa-location-dot"></i>
            <span> Govind Kunj Civil Lines Raipur</span>
            <span>chattisgarh India</span>  
            <div>
              <span><i class="fa-solid fa-envelope"></i></span>
              <span> arenaanimationraipur01@gmail.com</span>
            </div>

            <div className='footer-navlink'>
              <a href='https://www.facebook.com/arenaanimationraipur/'><i className="fa-brands fa-lg  mx-2 fa-facebook"></i></a>
              <a href='https://www.instagram.com/arenaanimationraipur/?hl=en'><i className="fa-brands fa-lg  mx-2 fa-instagram"></i></a>
              <a href='https://www.youtube.com/@arenaaraipur'><i className="fa-brands fa-lg mx-2 fa-youtube"></i></a>
            </div>

          </div>
        </div>
        <div className='footer-links'>
          <div><h5>Visit</h5></div>
          <div>
            <p>Office Timing</p>
            <p>Opens :- 09:30 to 07:30</p>
            <button className='btn btn-light my-2'><i class="fa-solid fa-phone"></i><a href='tel:7714039789'>+91-7714039789</a></button>
          </div>
          <button className='btn btn-light my-2'><i class="fa-solid fa-phone"></i><a href='tel:7714039789'>+91-9589233695</a></button>
        </div>


      </div>

    </>
  )
}

export default Footer

