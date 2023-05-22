import React from 'react'
import Anim from './image/CourseImage/detail_course_image/anim.jpg'
import { Link } from 'react-router-dom'


function Animation() {
  return (
    <>
      <h3 className='text-center' >ANIMATION PRIME</h3>
      <div className='container-fluid p-3'>
        <div className='animation-content d-flex'>
          <div className='animation-page-text-heading p-3'>
            <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
            <p>Whatever one can imagine, now it’s possible to create it.
              Well, not literally, but on screen. Animation makes it all possible. It’s a
              world that offers students countless opportunities to realize their dreams.
              They can create and build characters, cartoons and other in animate objects right from scratch.
              And that’s not all. Students can create unlimited number of things, ranging
              from humans to robots to extinct animals
              like mammoths, as well as creatures from stories and fables like fairies and monsters.</p>
          </div>
          <div>
            <img src={Anim} alt='animationcourse' width={'100%'}></img>
          </div>
        </div>
        <p className='p-3'>Animation Prime, a comprehensive training program in the fundamentals and techniques of animation, provides all-inclusive understanding of the latest tool’s and software’s used in the animation process. It prepares students to set their imagination free through a lively animation career.</p>
        <div className='animation-page-text-heading w-100 p-3'>
          <h4 className='text-danger' >Details of Animation Coures</h4>
          <p>It offers complete training in all aspects of animation to make its students capable of employment and progress in the animation industry.</p>
        </div>
      </div>

      {/* term card section */}
      <div className='term-card-container container-fluid'>
        <h4 className='text-center'>Animation Prime comprehensively trains students in a duration of three terms</h4>
        <div className='term-card-body'>
          <div className='m-auto mx-2 my-2 termcard'>
            <ul className='ul-list-first p-4'>
              <h4>TERM 1</h4>
              <li>Concepts of Graphics and Illustrations</li>
              <li>Typography Design</li>
              <li>Digital Illustrations</li>
              <li>Concepts of Cinematography & Photography</li>
              <li>Concepts of 2D Digital Animation</li>
              <li>Art of Storytelling & Script Writing</li>
              <li>Anatomy Study</li>
              <li>Character Design</li>
              <li>Digital Painting</li>
              <li>Audio-Video Editing</li>
              <li>Storyboarding and Animatics</li>
              <li>Application of 2D Animation Principles</li>
              <li>Design Portfolio</li>
            </ul>
          </div>
          <div className='m-auto mx-2 my-2 termcard'>
            <ul className='ul-list-first p-4'>
              <h4 >TERM 2</h4>
              <li>Clay Modeling and Animation</li>
              <li>3D Basics – Modeling to Animation</li>
              <li>Digital Modeling with 3ds Max</li>
              <li>Lighting and Texturing M  odels with 3ds Max</li>
              <li>3D Motion Graphics with 3ds Max</li>
              <li>Rendering with 3ds Max Vray</li>
              <li>Digital Compositing</li>
              <li>3D Animation Portfolio</li>

            </ul>
          </div>
          <div className='m-auto mx-2 my-2 termcard'>
            <ul className='ul-list-first p-4'>
              <h4>TERM 3</h4>
              <li>3D Basics – Modeling to Animation</li>
              <li>Digital Modeling with Maya</li><li>Digital Sculpting</li>
              <li>Texturing 3D Models with Maya <br />Lighting and Rendering Models with Maya</li>
              <li>Rigging 3D Models with Maya</li>
              <li>3D Character Animation</li>
              <li>Fx, Dynamics and Simulation</li>
              <li>Match moving and Camera Tracking</li>
              <li>Crowd Simulation</li><li>Working with Arnold Renderer</li>
              <li>Specialization &amp; Digital Portfolio Development</li>
              <li>(Choose 1 elective)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container text-center p-5'>
      <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
        <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
        <strong className='d-block my-2 fs-6 p-3'>Graphic Designer | 3D Animator | Texturing Artist | Lighting Artist | Video Editor | Rigging Artist | Compositor Rendering | Artist 3D Modeler</strong>
      </div>
    </>
  )
}

export default Animation
