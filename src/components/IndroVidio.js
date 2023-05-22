import React from 'react'
// import Arena_Raipur_Virtual_Tour_1080p from './Intro_video/Arena_Raipur_Virtual_Tour_1080p.mp4'

function IndroVidio() {
    return (
        <>
            <div className='vidio-container container-fluid d-flex my-3 p-5 border'>

                <div className='video-para text-light w-100  m-auto  p-3 text-center'>
                    <h3>Take a Break & Checkout
                        Our Courses</h3>
                    <p className='text-wrap'>Since 1996, Arena Academy has focused on providing
                        quality education in Animation, VFX, Web Designing, Graphic Designing, Broadcast, & Multimedia. Arena students have got job placements with major Indian & international studios.

                    </p>
                    <button className='btn btn-warning btn-sm rounded p-2'><a href='#enquiryid'>EXPLORE MORE</a></button>
                </div>

                <div className='video-para text-light w-100 p-5'>
                    <h1 className='p-5 border my-5'>vidio here</h1>
                    {/* <video src={Arena_Raipur_Virtual_Tour_1080p} width={'100%'} autoPlay={true} loop muted controls></video> */}
                    {/* <iframe title='arenaintrodivideo' src="https://www.youtube.com/embed/FX9niGKBCRo?autoplay=1&mute=1"></iframe> */}
                </div>

            </div>
        </>
    )
}

export default IndroVidio
