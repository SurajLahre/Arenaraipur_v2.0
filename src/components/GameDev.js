import React from 'react'

import GAMING from './image/CourseImage/detail_course_image/GAMING.png'
import game1 from './image/CourseImage/detail_course_image/game1.jpg'
import game2 from './image/CourseImage/detail_course_image/game2.jpg'
import game4 from './image/CourseImage/detail_course_image/game4.jpg'
import game5 from './image/CourseImage/detail_course_image/game5.webp'
import ModalFG from './ModalFG'
import { Link } from 'react-router-dom'
function GameDev() {
    return (
        <>
            <h3 className='text-center' >GAME DESIGN & DEVELOPMENT</h3>
            <div className='container-fluid p-3'>
                <div className='animation-content d-flex'>
                    <div className='animation-page-text-heading p-3'>
                        <h5 className='text-danger' >COURSE HIGHLIGHTS</h5>
                        <ul>
                            <li>
                                Job-oriented, industry centric curriculum.
                            </li>
                            <li>
                                Hands-on practical training using latest tools and software
                            </li>
                            <li>
                                Certified faculty
                            </li>
                            <li>
                                Exposure to industry interaction and workshops
                            </li>
                            <li>
                                Placement assistance
                            </li>
                            <li>
                                Access to <a className='text-danger' href="https://www.onlinevarsity.com" target='new tab'><em>Onlinevarsity</em></a>, our exclusive e-learning platform
                            </li>
                            <li>
                                Access to <a className='text-danger' href="https://www.creosouls.com">Creosouls</a>, a platform to showcase your portfolio.
                            </li>
                            <li>
                                <p>Instant student loan facility to fund the studies</p>
                            </li>

                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Gaming Brochure
                            </button>

                        </ul>
                    </div>
                    <div>
                        <img src={GAMING} alt='animationcourse' width={'100%'}></img>
                    </div>
                </div>

                <div className='animation-page-text-heading w-100 p-3'>
                    <h4 className='text-danger' >Game Design Overview</h4>
                    <p>Learning the fundamentals of game development with this course, using the Unreal Engine,
                        will enable you to build an entire demo game from scratch.
                        This course prepares you to create realistic looking environments to
                        stage them inside your games, define custom inputs and movements to control characters.</p>
                </div>
            </div>

            {/* term card section */}
            <div className='term-card-container container-fluid'>
                <h4 className='text-center'>THE INDIAN GAMING INDUSTRY HAS UPGRADED A LEVEL HIGHER
                    GAMING SEGMENTS</h4>
                <div className='term-card-body p-3 d-flex'>
                    <div className='m-auto mx-2 my-2 termcard'>
                        <img src={game1} width={'100%'} alt='gaming'></img>
                        <div className='textarea p-3'>
                            <h4>CONSOLE GAMING</h4>
                            <p>Console gaming is the original form of digital gaming.
                                Today, Xbox and PlayStation have become the two most popular
                                consoles, offering millions of players the ability to experience
                                the latest in gaming technology</p>
                        </div>
                    </div>

                    <div className='m-auto mx-2 my-2 termcard'>
                        <img src={game2} width={'100%'} alt='gaming'></img>
                        <div className='textarea p-3'>
                            <h4>PC GAMING</h4>
                            <p>PCs have had a meteoric rise in gameplay with more than 1.2 billion people using computers as their gaming tool of choice. Games like Fortnite, League of Legends and Minecraft
                                have made gaming one of the most popular forms of entertainment in the world today</p>
                        </div>
                    </div>


                    <div className='m-auto mx-2 my-2 termcard'>
                        <img src={game4} width={'100%'} alt='gaming'></img>
                        <div className='textarea p-3'>
                            <h4>VR/AR GAMING</h4>
                            <p>Virtual Reality and Augmented Reality are meant to put you right in the middle of the action.
                                Instead of playing from a third person point of view, VR drops people into computer-generated
                                environments to make them feel like they’re actually part of the game.
                            </p>
                        </div>
                    </div>

                    <div className='m-auto mx-2 my-2 termcard'>
                        <img src={game5} width={'100%'} alt='gaming'></img>
                        <div className='textarea p-3'>
                            <h4>MOBILE GAMING</h4>
                            <p>Mobile gaming makes up about 45% of the total market share of the gaming industry.
                                The mobile gaming industry is poised for continual growth as investments in mobile
                                gaming start-ups have skyrocketed, and creativity opens up avenues for
                                more gamers to enjoy different types of exciting games.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal window for downloading gamming Brochure */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h1 class="modal-title fs-5 m-auto " id="exampleModalLabel">Fill The Form To Download</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <ModalFG />
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center p-5'>
            <Link to='/enquiry'><button className='btn btn-danger '>Enroll Now</button></Link>
                <strong className='d-block my-2 fs-5 p-3'>On completion, this program opens up a wide range of job roles for the students</strong>
                <strong className='d-block my-2 fs-6 p-3'>|Game Designer & Developer|Graphic Designer | 3D Animator | Texturing Artist | Lighting Artist | Video Editor | Rigging Artist | Compositor Rendering | Artist 3D Modeler</strong>
            </div>
        </>
    )
}

export default GameDev

