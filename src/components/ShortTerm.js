import React from 'react'

import short from './image/CourseImage/detail_course_image/short.jpg'
import { Link } from 'react-router-dom'


function ShortTerm() {

    return (
        <>
            <h3 className='text-center' >SHORT TERM COURSES</h3>
            <div className='container-fluid p-3'>
                <div className='animation-content d-flex'>
                    <div className='animation-page-text-heading p-3'>
                        <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
                        <p>Arena Animation’s short term courses are ideal for both students and working professionals.
                            Whether you want to jump start your career in the media and entertainment industry for jobs in
                            animation, VFX, web & graphics, digital, and more, or sharpen your skills in the latest
                            software in the industry, these courses are perfect for you. Join short duration courses
                            after your 12th to excel in the media and entertainment industry.</p>

                    </div>
                    <div>
                        <img src={short} alt='animationcourse' width={'100%'}></img>
                    </div>
                </div>




                <div className='animation-content d-flex my-5'>
                    <div className='text-center'>Arena Animation’s short term courses are ideal for both students
                        and working professionals. Whether you want to jump start your career
                        in the media and entertainment industry for jobs in animation, VFX, web
                        & graphics, digital, and more, or sharpen your skills in the latest software
                        in the industry, these courses are perfect for you. Join short duration courses
                        after your 12th to excel in the media and entertainment industry.
                    </div>
                </div>
                {/* detail section */}

                <div className='short_term_details'>
                    <h1 className='bg-dark text-light p-3 text-center'>VFX & POST PRODUCTION</h1>
                    <p className='text-center'>Hollywood, Bollywood, TV shows, and ads – all use latest visual
                        effects designed and created by special effects artists.
                        You can be one of these in-demand, talented artists!
                        Boost your career with Arena’s VFX & post production courses.</p>

                    <div className='details d-flex text-center shadow p-2'>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>COURSES</h5>
                            <div>Visual Effects with After Effects</div>
                            <div>Visual Effects with Nuke</div>
                            <div>Video Editing</div>
                            <div>Audio-Video Editing</div>
                            <div>Working with Audio</div>
                            <div>Rotoscopy with Silhouette</div>
                            <div>Matchmoving</div>
                        </div>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>SOFTWARE</h5>
                            <div>Adobe After Effects</div>
                            <div>Nuke</div>
                            <div>Adobe Premiere CC & Prelude CC</div>
                            <div>Adobe Premiere CC & Prelude CC</div>
                            <div>Adobe Audition</div>
                            <div>Silhouette</div>
                            <div>Mocha/ 3D Equaliser</div>
                        </div>
                    </div>
                </div>

                <div className='short_term_details'>
                    <h1 className='bg-dark text-light p-3 text-center'>WEB DESIGN & DEVELOPMENT</h1>
                    <p className='text-center'>With a short-term courses in web design & development, learn to create cutting-edge websites, designs, symbols, and illustrations with the latest software & tools.</p>

                    <div className='details d-flex text-center shadow p-2'>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>COURSES</h5>
                            <div>Designing for web using Markup Language & Style Sheet</div>
                            <div>Visual Effects with Nuke</div>
                            <div>Developing interactive web pages</div>
                            <div>Web Animation & Scripting with Animate CC</div>

                        </div>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>SOFTWARE</h5>
                            <div>HTML & CSS</div>
                            <div>Javascript/Jquery/bootstrap</div>
                            <div>Adobe Animate C</div>
                        </div>
                    </div>
                </div>


                <div className='short_term_details'>
                    <h1 className='bg-dark text-light p-3 text-center'>ANIMATION</h1>
                    <p className='text-center'>Get knowledge of the fundamentals & advanced techniques of 2D & 3D animation.
                        Learn to bring interesting characters to life in a virtual world.</p>

                    <div className='details d-flex text-center shadow p-2'>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>COURSES</h5>
                            <div>Basics of 3D Animation</div>
                            <div>Advance 3D Animation</div>
                            <div>Digital Graphics and 3D Animation</div>
                            <div>2D Digital Animation</div>

                        </div>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>SOFTWARE</h5>
                            <div>3ds Max 2018 with V-Ray</div>
                            <div>Autodesk Maya</div>
                            <div>Adobe Illustrator CC</div>
                            <div>Adobe Animate CC</div>
                        </div>
                    </div>
                </div>

                <div className='short_term_details'>
                    <h1 className='bg-dark text-light p-3 text-center'>DESIGN & VISUALIZATION</h1>
                    <p className='text-center'>Learn in-demand design and visualization software to boost your creative career opportunities.</p>

                    <div className='details d-flex text-center shadow p-2'>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>COURSES</h5>
                            <div>Photoshop</div>
                            <div>CorelDraw</div>
                            <div>Web Weaver</div>
                            <div>Media Publishing</div>
                        </div>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>SOFTWARE</h5>
                            <div>Adobe Photoshop Extended CC</div>
                            <div>CorelDRAW X8</div>
                            <div>Adobe Dreamweaver</div>
                            <div>Adobe InDesign</div>
                        </div>
                    </div>
                </div>

                <div className='short_term_details'>
                    <h1 className='bg-dark text-light p-3 text-center'>ARCHITECTURAL DESIGN & VISUALIZATION</h1>
                    <p className='text-center'>Create high-end architectural models, walkthroughs & photorealistic effects with AutoCAD. Join courses
                        designed exclusively for engineers, architects, and interior designers.</p>

                    <div className='details d-flex text-center shadow p-2'>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>COURSES</h5>
                            <div>CAD</div>
                            <div>Digital architecture interior design</div>
                            <div>Digital Illustrations</div>

                        </div>
                        <div className='text-center w-100 p-4 ded'>
                            <h5 className='text-danger'>SOFTWARE</h5>
                            <div>AutoCAD 2018</div>
                            <div>AutoCAD 2018 / 3DS Max 2018 with V-Ray</div>
                            <div>AAdobe Illustrator CC</div>

                        </div>
                    </div>
                </div>



            </div>
            {/* term card section end */}

            <div className='container text-center p-5'>
            <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
                <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
                <strong className='d-block my-2 fs-6 p-3'>Graphic/ Web Designer| 3D Animator | Texturing Artist | Lighting Artist | Video Editor | Rigging Artist | Compositor Rendering | Artist 3D Modeler</strong>
            </div>
        </>
    )
}

export default ShortTerm

