import React from 'react'
import Web_dev from './image/CourseImage/detail_course_image/Web_dev.jpg'
import { Link } from 'react-router-dom'

function Gwdd() {
  return (
    <>
      <h3 className='text-center' >WEB DESIGN & DEVELOPMENT</h3>
      <div className='container-fluid p-3'>
        <div className='animation-content d-flex'>
          <div className='animation-page-text-heading p-3'>
            <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
            <p>Today, there’s no business that doesn’t have an online presence.
              Digital is slowly yet steadily becoming mainstream and seems to be the need of the hour.
              That’s how Graphics, Web Designing & Development has become a fundamental part of the
              digital world; be it through e-commerce, company
              websites, or mobile apps.</p>
          </div>
          <div>
            <img src={Web_dev} alt='animationcourse' width={'100%'}></img>
          </div>
        </div>

        <div className='animation-page-text-heading w-100 p-3'>
          <h4 className='text-danger' >Websites Design Overview</h4>
          <p>The Graphics & Web Designing program is a gateway into the revolutionary world of UI/UX through 3 terms of extensive learning on this extremely vast, multidisciplinary and fascinating field..</p>
        </div>
      </div>

      {/* term card section */}
      <div className='term-card-container container-fluid'>
        <h4 className='text-center'>Web Designing comprehensively trains students in a duration of two terms</h4>
        <div className='term-card-body p-3'>
          <div className='m-auto mx-2 my-2 termcard'>
            <ul className='ul-list-first p-4'>
              <h4>TERM 1</h4>
              <li>Concepts of Graphics and Illustrations</li>
              <li>Web Designing Concepts</li>
              <li>UI/ UX for Responsive Design</li>
              <li>Typography Design</li>
              <li>Illustrations for Web</li>
              <li>Creating Artworks</li>
              <li>Layout Design</li>
              <li>Web Animation using Animate CC</li>
              <li>Web Design Portfolio</li>
            </ul>
          </div>
          <div className='m-auto mx-2 my-2 termcard'>
            <ul className='ul-list-first p-4'>
              <h4>TERM 2</h4>
              <li><p>Concepts of Programming</p></li>
              <li><p>Building Next Generation Websites</p></li>
              <li><p>Web Development using Angular Js</p></li>
              <li><p>Bootstrap</p></li>
              <li><p>Design &amp; Development using Programming Language</p></li>
              <li><p>Content Management System</p></li>
              <li><p>Search Engine Optimization</p></li>
              <li><p>Web Adwords</p></li>
              <li><p>Web Analytics</p></li>
              <li><p>Web Design &amp; Development portfolio</p></li>

            </ul>
          </div>

        </div>
      </div>
      <div className='container text-center p-5'>
      <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
        <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
        <strong className='d-block my-2 fs-6 p-3'>|Front-End/Back-End Developer| Full Stack Developer|Graphic Designer |Visual Designer | UI Designer | Creative Designer | Product Designer |UX/UI Designer | Information Architecture (IA) | Interaction Designer (IXD) | UX Tester</strong>
      </div>
    </>
  )
}

export default Gwdd

