import React from 'react'
// import Development from './image/development.png'
import Gvdesign from './image/CourseImage/detail_course_image/Gvdesign.jpg'
import { Link } from 'react-router-dom'


function Gvd() {
    return (
        <>
            <h3 className='text-center' >GRAPHIC VISUAL DESIGN</h3>
            <div className='container-fluid p-3'>
                <div className='animation-content d-flex'>
                    <div className='animation-page-text-heading p-3'>
                        <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
                        <p>Companies across the world and across industries are taking the digital route which has opened up a great number of career opportunities. There are also a number of trends that are expected to take over the digital world. With the target of delivering user-friendly experience, graphic visual design trends are prioritizing interactive design and catching simple designs with asymmetrical layouts, This comprehensive program trains you in all aspects of Visual Design  Graphic Design etc. which makes you a complete design professional.</p>
                    </div>
                    <div>
                        <img src={Gvdesign} alt='animationcourse' width={'100%'}></img>
                    </div>
                </div>

                <div className='animation-page-text-heading p-3 w-100'>
                    <h4 className='text-danger'>Graphic visual Design Overview</h4>
                    <p>Job-oriented, industry centric curriculum,
                        Hands-on practical training using latest tools and software,
                        Certified faculty,
                        Exposure to industry interaction and workshops,

                        our exclusive e-learning platform

                        Instant student loan facility to fund the studies
                        Learning enhanced with Augmented Reality books.</p>
                    <ul>
                        <li>Access to<a className='text-danger' href='https://www.onlinevarsity.com/'> Onlineversity</a> &  Access to <a className='text-danger' href='https://www.creosouls.com/'>Creosouls</a> a platform to showcase your portfolio.</li>
                        <li>Placement Assistance.</li>
                    </ul>

                </div>
            </div>

            {/* term card section */}
            <div className='term-card-container container-fluid'>
                <h4 className='text-center'>Graphic Visual Designing comprehensively trains students in a duration of term</h4>
                <div className='term-card-body p-5'>
                    <div className=' mx-2 my-2  termcard p-3'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 1</h4>
                            <li>ADOBE ILLUSTRATOR</li>
                            <li>ADOBE PHOTOSHOP</li>
                            <li>ANIMATE CC</li>
                            <li>ADOBE PREMIER</li>
                            <li>ADOBE AUDITION</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container text-center p-5'>
            <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
                <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
                <strong className='d-block my-2 fs-6 p-3'>Visual Designer | UI Designer | Creative Designer | Product Designer | UX/UI Designer | Information Architecture (IA) | Interaction Designer (IXD) | UX Tester</strong>
            </div>
        </>
    )
}

export default Gvd

