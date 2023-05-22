import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";

// import slider3 from './image/slider3.jpg'
import galleryimg from './image/galleryImage/galleryimg.jpg'
import galleryimg2 from './image/galleryImage/galleryimg2.jpg'
import galleryimg3 from './image/galleryImage/galleryimg3.jpg'
import galleryimg4 from './image/galleryImage/galleryimg4.jpg'
import galleryimg5 from './image/galleryImage/galleryimg5.jpg'
import galleryimg6 from './image/galleryImage/galleryimg6.jpg'

// swiper external features ---->
import { Navigation } from "swiper";
import "swiper/css/navigation";
import '../App.css';
import GalViewCard from './GalViewCard';

function Gallery() {
    let style1 = {
        width: '90%',
        height: '90%',
        marginTop: '2em'
    }
    function CloseGalViewer() {
        let GClose = document.getElementById('modalid');
        GClose.style.display = 'none';

    }

    function GalViewer() {
        let GClose = document.getElementById('modalid');
        GClose.style.display = 'block';

    }
    return (
        <>
            <div className='modal_container' id='modalid'>
                <div className='Modal_body modal_content h-100'>
                    <div className='p-2'>
                        <i class="fa-solid fa-x text-light GalimageCloser" onClick={CloseGalViewer} ></i>
                    </div>

                    <Swiper style={style1} navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <GalViewCard img={galleryimg}>  slider 3 </GalViewCard>
                        </SwiperSlide>

                        <SwiperSlide>
                            <GalViewCard img={galleryimg2}>  slider 3 </GalViewCard>
                        </SwiperSlide>

                        <SwiperSlide>
                            <GalViewCard img={galleryimg3}>  slider 3 </GalViewCard>
                        </SwiperSlide>

                        <SwiperSlide>
                            <GalViewCard img={galleryimg4}>  slider 3 </GalViewCard>
                        </SwiperSlide>

                        <SwiperSlide>
                            <GalViewCard img={galleryimg5}>  slider 3 </GalViewCard>
                        </SwiperSlide>

                        <SwiperSlide>
                            <GalViewCard img={galleryimg6}>  slider 3 </GalViewCard>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>


            <div className='p-3 course-btn my-2' id='galleryid'>
                <h1 className='text-center p-3 align-item-center headingh1text'>GALLERY</h1>
            </div>

            {/* grid section container from website */}
            <div className="grid-row d-flex">
                <div className="container1">
                    <img src={galleryimg} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <button className='btn text-wrap btn-sm btn-danger' onClick={GalViewer}>View</button>
                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={galleryimg2} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">

                            <button className='btn text-wrap btn-danger btn-sm' onClick={GalViewer} >View</button>

                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={galleryimg3} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">


                            <button className='btn text-wrap btn-danger btn-sm ' onClick={GalViewer}>View</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-row d-flex my-2">
                <div className="container1">
                    <img src={galleryimg4} alt="Avatar" className="image bg-info" />

                    <div className="overlay">
                        <div className="text">

                            <button className='btn text-wrap btn-sm btn-danger' onClick={GalViewer}>View</button>

                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={galleryimg5} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">

                            <button className='btn text-wrap btn-danger btn-sm' onClick={GalViewer}>View</button>

                        </div>
                    </div>
                </div>

                <div className="container1">
                    <img src={galleryimg6} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <button className='btn text-wrap btn-danger btn-sm mx-2' onClick={GalViewer}>View</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid text-center p-2'> 
            <a className='btn btn-outline-danger btn-sm' href='https://www.facebook.com/arenaanimationraipur/'>Show more</a>
            </div>
        </>
    )
}

export default Gallery
