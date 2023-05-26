
import React from 'react'
import user from './image/user.gif'
import hand from './image/hand.gif'
import support from './image/support.gif'

export default function Header() {

  return (
    <>
      <div className="headerimg">
        <div className="textbox  my-5 p-5 text-center m-auto">
          <h1 className='arenaintroquote'>BEST WAY TO FIND YOUR <br /> DREAM CAREER.</h1>
          <button className='btn btn-warning my-5 p-3 explore_btn' type='button'><a href='#enquiryid'>DISCOVER NOW</a></button>
        </div>
      </div>
      {/* hedign card item with animated icons section */}
      <div className='container-fluid d-flex align-item-center h-50 p-3 top-card' id='about'>
        <div className='card box-sizing m-1 text-center topcard p-3'>
          <div className='m-auto'>
            <div children='card-icon p-3'><img src={user} alt="iconiag" width={'80px'}></img></div>
            <div className='card-text p-2 '><h5>Industrial Expert</h5></div>
            <div className='card-text p-2 position-relative'>Trained & certified Teachers are there who teach the latest technique using the most cutting-edge software</div>
            <div className='btn btn-warning btn-sm my-2'><a href='#courseid'>Know More</a></div>
          </div>
        </div>

        <div className='card  box-sizing m-1 text-center p-3 topcard'>
          <div className='m-auto'>
            <div children='card-icon p-3'><img src={hand} alt="iconiag" width={'80px'}></img></div>
            <div className='card-text p-2 '><h5>Job Assistance</h5></div>
            <div className='card-text p-2'>Job fairs, campus placement etc. conducted for students to get suitable jobs placement in the industry.</div>
            <div className='btn btn-warning btn-sm my-2 position-abselute'><a href='#courseid'>Know More</a></div>
          </div>
        </div>

        <div className='card box-sizing m-1 text-center topcard p-3'>
          <div className='m-auto'>
            <div children='card-icon p-3'><img src={support} alt="iconiag" width={'80px'}></img></div>
            <div className='card-text p-2 '><h5>Great Support</h5></div>
            <div className='card-text p-2'>The focus is on oriented student to develop creativity and provide them awesome & great <br />career.</div>
            <div className='btn btn-warning btn-sm my-2 '><a href='#courseid'>Know More</a></div>
          </div>
        </div>

        <div className='card  box-sizing m-1 bg-warningh text-center topcard p-3'>
          <div className='registercard m-auto'>
            <h5 className='Text p-3'>Register/Call Now</h5>
            <p className='p-2'>Arenaraipur is the Best Institute for Graphics, Animation & VFx.</p>
            <p>CALL US NOW</p>
            <div className='btn btn-light m-1'><i className="fa-solid fa-phone mx-1"></i><a href="tel:7714039789">+91-7714039789</a></div>
            <div className='btn btn-light m-1'><i className="fa-solid fa-phone mx-1"></i><a href="tel:7714039789">+91-9589233695</a></div>
          </div>
        </div>
      </div>
    </>
  )
}
