import React from 'react'

import visual from './image/visual.png'
import vfx from './image/CourseImage/Vfx.jpg'
import web from './image/CourseImage/web.jpg'
import pp from './image/CourseImage/pp.jpg'
import Animation from './image/CourseImage/Animation.jpg'
import DshorTerm from './image/CourseImage/DshortTerm.jpg'

function DefaulCourse(prop) {

    return (
        <>
            {/* grid section container from website */}
            <div className="grid-row d-flex">
                <div className="container1">
                    <img src={Animation} alt="kungfu panda in fighting position|Animation courses" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h3>Animation</h3>
                            <p className='text-top text-wrap fs-6'>The 3D & VFX Industry Needs Animators. In Fact – In 2020, There Were Over 62,000 Animation Jobs In The USA Alone so that's why we are providing animation courses.</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={web} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h3 className='text-center text-wrap'>WEB DESIGN & DEVELOPMENT</h3>
                            <p className='text-top text-wrap fs-6'>Web Design Courses. Content automatically optimizes for device. Everything you need to get anything done, now in one place:.</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <img src={pp} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h3>Print & Publishing</h3>
                            <p className='text-top text-wrap fs-6'>Arena’s Print & Publishing course trains you in design and visualisation fundamentals, graphics and illustration fundamentals, typography techniques, illustration for print, creating artworks, and designing for print & advertising..</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-row d-flex">
                <div className="container1">
                    <img src={vfx} alt="Avatar" className="image bg-info" />

                    <div className="overlay">
                        <div className="text">
                            <h3>VFX</h3>
                            <p className='text-top text-wrap fs-6'>Visual Effects (VFX) begins. Arena’s VFX courses trains you to become all-round VFX specialists..</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={visual} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h3 className='text-center '>GRAPHICS VISUAL DESIGN</h3>
                            <p className='text-top text-wrap fs-6'>This Graphics visual design courses trains you in all aspects of Design – Print Motion Graphic Design etc.</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={DshorTerm} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <h3>SHORT-TERM COURSES</h3>
                            <p className='text-top text-wrap fs-6'>start your career in the animation, VFX, web & graphics, digital, and more sharp your skills in the latest software.</p>
                            <a className='btn btn-warning btn-sm' href='#courseid' ><i className="fa-solid fa-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DefaulCourse
