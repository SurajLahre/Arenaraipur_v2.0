import React from 'react'
import shaileshsir from './image/TeamImage/shaileshsir.png'
import akashsir from './image/TeamImage/akashsir.png'
import nirajsir from './image/TeamImage/nirajsir.png'
import mam from './image/TeamImage/mam.png'
import surajsir from './image/TeamImage/surajsir.png'
import tusharsir from './image/TeamImage/tusharsir.png'
import namansir from './image/TeamImage/namansir.png'

function TeamArena() {
  return (
    <>
      <div>
        <h1 className='text-center p-3 headingh1text'>OUR TEAM</h1>
      </div>
      {/* myteam section  START*/}
      <div className='container-fluid team-card-container'>
        <div className='teamcard text-center'>
          <div>
            <div children='card-icon p-3'> <img src={shaileshsir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>20 Years Experience</p>
              <h5>Shailesh Bagde</h5></div>
            <div className='card-text p-2 paracard'>Director</div>
            <span><a href='https://www.facebook.com/arenaanimationraipur/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='https://www.instagram.com/arenaanimationraipur/?hl=en' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>
          </div>
        </div>

        <div className='teamcard '>
          <div>
            <div children='card-icon p-3'> <img src={akashsir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>15 Years Experience</p>
              <h5>Akash Sinha</h5></div>
            <div className='card-text p-2 paracard'>Academic Head</div>
            <span><a href='https://www.facebook.com/akashgraphxic/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='https://www.instagram.com/akashgraphxic/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>

          </div>
        </div>

        <div className='teamcard'>
          <div>
            <div children='card-icon p-3'> <img src={nirajsir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2'>
              <p className='paracard'>7 Years Experience</p>
              <h5>Niraj Sahu</h5></div>
            <div className='card-text p-2 paracard'>Graphic Designer</div>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>

          </div>
        </div>

        <div className='teamcard'>
          <div>
            <div children='card-icon p-3'> <img src={mam} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>2 Years Experience</p>
              <h5>Mrs. Lalita Sharma</h5></div>
            <div className='card-text p-2 paracard'>Career Counselor</div>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>

          </div>
        </div>

        <div className='teamcard'>
          <div>
            <div children='card-icon p-3'> <img src={surajsir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>2 Years Experience</p>
              <h5>Suraj Lahre</h5></div>
            <div className='card-text p-2 paracard'>Web Developer</div>
            <span><a href='https://www.linkedin.com/in/surajlahre/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-linkedin" /></a></span>
            <span><a href='https://github.com/SurajLahre' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-github" /></a></span>
          </div>
        </div>
        <div className='teamcard'>
          <div>
            <div children='card-icon p-3'> <img src={tusharsir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>2 Years Experience</p>
              <h5>Tusharkant</h5></div>
            <div className='card-text p-2 paracard'>Game Developer</div>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>

          </div>
        </div>

        <div className='teamcard'>
          <div>
            <div children='card-icon p-3'> <img src={namansir} alt="Avatar" className="image" /></div>
            <div className='card-text p-2 '>
              <p className='paracard'>1 Years Experience</p>
              <h5>Naman Gupta</h5></div>
            <div className='card-text p-2 paracard'>Graphic Designer</div>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-facebook f" /></a></span>
            <span><a href='/' target='New Tab'><i href="google.com" className="mx-2 fa-brands fa-instagram" /></a></span>

          </div>
        </div>
      </div>
    </>
  )
}

export default TeamArena
