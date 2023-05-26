import React, { useState } from 'react'
import Animation from './Animation'
import Gwdd from '../components/Gwdd'
import Gvd from './Gvd'
import VfxPrime from './VfxPrime'
import DefaulCourse from './DefaulCourse'
import GameDev from './GameDev'
import ShortTerm from './ShortTerm'
import UXUI from './UXUI'
import ModalCon from './ModalCon'
import DMarketing from './DMarketing'
// IMPORTING PDF FILE FOR DOWNLOADING....

function Course() {
    const [CourseDetail, setCourseDetail] = useState(<DefaulCourse />)
    return (
        <>
            <div className='p-3 course-btn ' id='courseid'>
                <div className='heading-text'>
                    <h1 className='text-center align-item-center headingh1text my-3'>COURSES</h1>
                </div>
                <div className='course-btn'>
                    <button onClick={() => { setCourseDetail(<Animation />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='anim'>ANIMATION</button>
                    <button onClick={() => { setCourseDetail(<VfxPrime />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='vfx'>VISUAL EFFECTS(VFx)</button>
                    <button onClick={() => { setCourseDetail(<GameDev />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='game'>GAME DEVELOPMENT</button>
                    <button onClick={() => { setCourseDetail(<Gvd />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='gvd'>GRAPHIC VISUAL DESIGN</button>
                    <button onClick={() => { setCourseDetail(<Gwdd />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='wdd'>WEB DEVELOPMENT</button>
                    <button onClick={() => { setCourseDetail(<UXUI />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='gvd'>UX/UI Designing</button>
                    <button onClick={() => { setCourseDetail(<DMarketing />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='gvd'>D-Marketing</button>
                    <button onClick={() => { setCourseDetail(<ShortTerm />) }} type="button" className="mx-2 my-1 btn btn-outline-warning text-dark" id='stc'>SHORT-TERM COURSES</button>
                    <button className="btn btn-warning text-dark my-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Download Course Details</button>
                </div>
            </div>
            <div>{CourseDetail}</div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h1 className="modal-title fs-6 m-auto" id="staticBackdropLabel"><strong>Fill the Form to Download Course Details</strong></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ModalCon />
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
