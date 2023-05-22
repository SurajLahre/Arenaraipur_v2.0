import { Link } from 'react-router-dom'
import logo192 from '../components/image/logo192.png'

function Navigation() {

    function CloseSidenav() {
        let close = document.getElementById('Closeid');
        close.style.width = '0px';
        close.style.transition = '.3s all';
    }
    function OpenSidenav() {
        let close = document.getElementById('Closeid');
        close.style.width = '250px';
        close.style.transition = '.3s all';
    }
    return (
        <>
            <div className='navbar '>
                <p className='toptext p-1'><i class="fa-solid fa-location-dot mx-1"></i>
                    Govind Kunj Civil Lines Raipur Chhattisgarh- India</p>
                <div className='nav-navlinks d-flex'>
                    <div className='nav-logo'>
                        <img src={logo192} alt="logoarena" width={'110px'}></img>
                    </div>
                    {/* hamburger menu icon  */}
                    <div className='ham-burger-menu'>
                        <i className="fa-solid fa-bars" onClick={OpenSidenav}></i>
                    </div>
                    <ul className='nav-unorder-list'>
                        <li>
                            <Link to='/v2.0/'>Home</Link>

                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li className='courseid'>
                            <a href='#courseid'>Courses</a><i class="fa-solid fa-angle-down p-1"></i>
                            <div className='course-list'>
                                <div className='course-item course-1'><Link to='/AnimationPrime'>ANIMATION PRIME</Link></div>
                                <div className='course-item course-2'><Link to='/VFx'>VISUAL EFFECTS (VFx)</Link></div>
                                <div className='course-item course-2'><Link to='/GameDesign'>GAME DESIGN & DEVELOPMENT</Link></div>
                                <div className='course-item course-3'><Link to='Graphic'>GRAPHICS VISUAL DESIGN</Link></div>
                                <div className='course-item course-4'><Link to='/UIUX'>UX/UI DESIGNING</Link></div>
                                <div className='course-item course-5'><Link to='/WebDesign'>GRAPHICS WEB DESIGN & DEVELOPMENT</Link></div>
                                <div className='course-item course-6'><Link to='/DMarketing'>DIGITAL MARKETING</Link></div>
                                <div className='course-item course-7'><Link to='/shortTerm'>SHORT TERM COURSES</Link></div>
                            </div>
                        </li>

                        <li className='studentid'>
                            <a href='/'>Students Work</a><i class="fa-solid fa-angle-down p-1"></i>
                            <div className='student-section'>
                                <div className='course-item course-1'>STUDENTS WORK</div>
                                <div className='course-item course-2'><a href='https://www.creosouls.com/' target='New Tab'>CREOSOULS</a></div>
                                <div className='course-item course-2'><a href='https://www.onlinevarsity.com/' target='New Tab'>ONLINEVERSITY</a></div>
                            </div>
                        </li>

                        <li><Link to='/Gallery'>Gallary</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/enquiry'>Enquiry</Link></li>
                        <li><Link to='/enquiry'>Contact</Link></li>
                    </ul>
                </div>
                <div className='nav-social-icons'>
                    <a href="https://www.facebook.com/arenaanimationraipur/" target='new tab' className="btn btn-sm btn-primary rounded-5 mx-2" type="button"><i className="fa-brands fa-facebook f"></i></a>
                    <a href="https://www.instagram.com/arenaanimationraipur/?hl=en" target='new tab' className="btn btn-sm btn-danger rounded-5 mx-2" type="button"><i className="fa-brands fa-instagram"></i></a>
                    <a href="/" className="btn btn-sm btn-primary rounded-5 mx-2" target='new tab' type="button"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.youtube.com/@arenaaraipur" target='new tab' className="btn btn-sm btn-danger rounded-5 mx-2" type="button"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            {/* ==========================================================================
            #ANOTHER MODALS LIKE SIDENAV, AND IMAEG PRIVIEW SLIDER SECTION START 
            ========================================================================== */}
            <sidenav className="side_nav_pannel bg-light position-fixed h-100 top-0" id='Closeid'>

                <div className='side_nav_header'>
                    <i class="fa-solid fa-xmark" onClick={CloseSidenav}></i>
                </div>

                <div className='side_nav_navlist'>
                    <ul className='nav-unorder-list'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li className='courseid'>
                            <a href='#courseid'>Courses</a><i class="fa-solid fa-angle-down p-1"></i>
                            <div className='course-list'>
                                <div className='course-item course-1'><Link to='/AnimationPrime'>ANIMATION PRIME</Link></div>
                                <div className='course-item course-2'><Link to='/VFx'>VISUAL EFFECTS (VFx)</Link></div>
                                <div className='course-item course-2'><Link to='/GameDesign'>GAME DESIGN & DEVELOPMENT</Link></div>
                                <div className='course-item course-3'><Link to='Graphic'>GRAPHICS VISUAL DESIGN</Link></div>
                                <div className='course-item course-4'><Link to='/UIUX'>UX/UI DESIGNING</Link></div>
                                <div className='course-item course-5'><Link to='/WebDesign'>GRAPHICS WEB DESIGN & DEVELOPMENT</Link></div>
                                <div className='course-item course-6'><Link to='/DMarketing'>DIGITAL MARKETING</Link></div>
                                <div className='course-item course-7'><Link to='/shortTerm'>SHORT TERM COURSES</Link></div>
                            </div>
                        </li>

                        <li className='studentid'><a href='/'>Students Work</a><i class="fa-solid fa-angle-down p-1"></i>
                            <div className='student-section'>
                                <div className='course-item course-1'>STUDENTS WORK</div>
                                <div className='course-item course-2'>CREOSOULS</div>
                                <div className='course-item course-2'>ONLINEVERSITY</div>
                                <div className='course-item course-2'>ONLINE ADMISSION FORM</div>

                            </div></li>
                        <li><Link to='/Gallery'>Gallary</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/enquiry'>Enquiry</Link></li>
                        <li><Link to='/enquiry'>Contact</Link></li>
                    </ul>
                </div>

            </sidenav>


        </>
    )
}

export default Navigation







