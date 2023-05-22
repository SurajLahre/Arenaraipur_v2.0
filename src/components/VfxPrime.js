import React from 'react'
import { Link } from 'react-router-dom'
import vfx from './image/CourseImage/detail_course_image/vfx.jpg'
function VfxPrime() {
    return (
        <>
            <h3 className='text-center' >VISUAL EFFECTS (VFx)</h3>
            <div className='container-fluid p-3'>
                <div className='animation-content d-flex'>
                    <div className='animation-page-text-heading p-3'>
                        <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
                        <p>VFX Prime is a comprehensive course that covers Visual effects for advertising
                            and television productions, and makes you a job-ready VFX professional.
                            It gives a thorough grounding in the basic design fundamentals, CG Asset
                            creation – both 2D & 3D (computer-generated), FX, dynamics & simulation,
                            VFX techniques such as rotoscopy, roto-paint, keying, camera tracking & compositing.
                            On completing the  vft courses you will be able to master and specialise as
                            a Visual Effects expert and produce a demo reel as per the industry standards.
                            Get your VFX certification by joining our VFX training institute!</p>
                    </div>
                    <div>
                        <img src={vfx} alt='animationcourse' width={'100%'}></img>
                    </div>
                </div>

                <div className='animation-page-text-heading w-100 p-3'>
                    <h4 className='text-danger' >VISUAL EFFECTS</h4>
                    <p>It offers complete training in all aspects of animation to make its students capable of employment and progress in the animation industry.</p>
                </div>
            </div>

            {/* term card section */}
            <div className='term-card-container container-fluid'>
                <h4 className='text-center'>VFx comprehensively trains students in a duration of three terms</h4>
                <div className='term-card-body'>
                    <div className='m-auto my-2 mx-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 1</h4>
                            <li>Concepts of Graphics and Illustrations</li>
                            <li>Typography Design</li>
                            <li>Digital Illustrations</li>
                            <li>Concepts of Cinematography &amp; Photography</li>
                            <li>Concepts of 2D Digital Animation</li>
                            <li>Art of Storytelling &amp; Script Writing</li>
                            <li>Anatomy Study</li><li>Character Design</li>
                            <li>Digital Painting</li><li>Audio-Video Editing</li>
                            <li>Storyboarding and Animatics</li>
                            <li>Application of 2D Animation Principles</li>
                            <li>Design Portfolio</li>
                        </ul>
                    </div>
                    <div className='m-auto mx-2 my-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 2</h4>
                            <li>3D Basics – Modeling to Animation</li>
                            <li>Digital Modeling with Maya</li>
                            <li>Digital Sculpting</li>
                            <li>Texturing 3D Models with Maya</li>
                            <li>Lighting and Rendering Models with Maya</li>
                            <li>Rigging 3D Models with Maya</li>
                            <li>3D Character Animation</li>
                            <li>Fx, Dynamics and Simulation</li>
                            <li>Match Moving and Camera Tracking</li>
                            <li>Crowd Simulation</li>
                            <li>Working with Arnold Renderer</li>
                            <li>Digital Compositing</li>
                            <li>3D Animation Portfolio</li>

                        </ul>
                    </div>
                    <div className='m-auto mx-2 my-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 3</h4>
                            <li>VFX Film Making</li>
                            <li>Pre-visualization</li>
                            <li>Introduction to Nuke</li>
                            <li>Rotoscopy using Silhouette</li>
                            <li>Wire Removal</li>
                            <li>Colour Correction</li>
                            <li>Green/Blue Screen</li>
                            <li>Match Moving &amp; Camera Tracking</li>
                            <li>Matte Painting</li>
                            <li>Specialisation &amp; Digital Portfolio Development</li>
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

export default VfxPrime
