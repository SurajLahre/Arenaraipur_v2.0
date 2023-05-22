import React from 'react'
import ux_ui from './image/CourseImage/detail_course_image/ui_ux.jpg'
import { Link } from 'react-router-dom'

function UXUI() {
    return (
        <>
            <h3 className='text-center' >UX/UI DESIGN</h3>
            <div className='container-fluid p-3'>
                <div className='animation-content d-flex'>
                    <div className='animation-page-text-heading p-3'>
                        <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
                        <p>User interface design or user interface engineering is the design of user interfaces
                            for machines and software, such as computers, home appliances, mobile devices, and other electronic
                            devices,
                            with the focus on maximizing usability and the user experience.</p>
                    </div>
                    <div>
                        <img src={ux_ui} alt='animationcourse' width={'100%'}></img>
                    </div>
                </div>

                <div className='animation-page-text-heading w-100 p-3'>
                    <h4 className='text-danger' >UX/UI Design Overview</h4>
                    <p>The Graphics & Web Designing program is a gateway into the revolutionary
                        world of UI/UX through 3 terms of extensive learning on this extremely vast,
                        multidisciplinary and fascinating field..</p>
                </div>
            </div>

            {/* term card section */}
            <div className='term-card-container container-fluid'>
                <h4 className='text-center'>Web Designing comprehensively trains students in a duration of two terms</h4>
                <div className='term-card-body p-3'>
                    <div className='m-auto mx-2 my-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 1</h4>
                            <li>UX Design Overview</li>
                            <li>Basics of Usability</li>
                            <li>UXD Process and Workflow</li>
                            <li>UX Research Phase</li>
                            <li>UX Design Phase</li>
                            <li>UX Design Phase</li>
                            <li>UX Design Portfolio – 1</li>
                        </ul>

                    </div>
                    <div className='m-auto mx-2 my-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 2</h4>
                            <li>Elements of User Interface (UI) Design</li>
                            <li>Pillars of UI Design</li>
                            <li>Dashboards and Data Visualization</li>
                            <li>UI Design for Mobile Devices, Web and Software</li>
                            <li>Web Technology for UI Designers</li>
                            <li>Wireframing and Prototype for UI Design</li>
                            <li>Usability and Testing for UI Design</li>
                            <li>UI Design Portfolio</li>

                        </ul>
                    </div>

  <div className='m-auto mx-2 my-2 termcard'>
                        <ul className='ul-list-first p-4'>
                            <h4>TERM 3</h4>
                           <li>Basics of Interaction Design</li>
                           <li>Interaction Design and Usability</li>
                           <li>Information Architecture</li>
                           <li>User Flow</li>
                           <li>Wireframes and Prototypes</li>
                           <li>Design Pattern and Data Driven Validation</li>
                           <li>UX Design Portfolio – 2</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='container text-center p-5'>
            <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
        <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
        <strong className='d-block my-2 fs-6 p-3'>Visual Designer | UX/UI Designer | Creative Designer | Product Designer|UX Designer | Information Architecture (IA) | Interaction Designer (IXD) | UX Tester</strong>
      </div>
        </>
    )
}

export default UXUI

