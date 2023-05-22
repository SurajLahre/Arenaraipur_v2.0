
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
// student feedback and testimonial img
import shraddhaAgrwal from '../components/image/studentfdbck/shraddhaAgrawal.jpg'
import abhisekJain from '../components/image/studentfdbck/abhisekJain.jpg'
import akashNaidu from '../components/image/studentfdbck/akashNaidu.jpg'
import guru from '../components/image/studentfdbck/guru.jpg'
import lakshyapal from '../components/image/studentfdbck/lakshyapal.jpg'
import pratikAgrawal from '../components/image/studentfdbck/pratikAgrawal.jpg'
import soniyaBtheja from '../components/image/studentfdbck/soniyaBtheja.jpg'
import StudentSpeakCard from "./StudentSpeakCard";
import venktesh from '../components/image/studentfdbck/venktesh.jpg'
import sumitAdhikari from '../components/image/studentfdbck/sumitAdhikari.jpg'
import sudhirSahu from '../components/image/studentfdbck/sudhirSahu.jpg'
import pratiksathe from '../components/image/studentfdbck/pratiksathe.jpg'
// swiper external features ---->
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import '../App.css'

function Tslider() {
    let style1 = {
        width: '100%'

    }
    return (
        <>
            <div className="container-fluid bg-dark testimonial-container my-3">
                <div className='course-btn' id='testid'>
                    <h1 className='text-center text-light p-3 aheadingh1text my-5'>TESTIMONIAL</h1>
                </div>
                <Swiper
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper" style={style1}>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={guru} name='GuruSharan' compony='GS Arts Freelancer' speak='Arena is the best place to learn animation,multimedia.Arena is really really good for studying.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={abhisekJain} name='Abhisek Jain' compony='SSM of Jewellery' speak='Arena nourished me and thus gave me an opportunity to define me.be grateful to arena.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={akashNaidu} name='Akash Naidu' compony='Seven Scale' speak='"The journy of Arena Raipur is a life changing experience for me. Thank you Arena.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={lakshyapal} name='Lakshya Parakh' compony='Enterpreneur(B Bag Raipur)' speak='One thing that Arena Animation Raipur urges in and to far extent succeed in teaching to its students.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={pratikAgrawal} name='Pratik Agrawal' compony='Designer in ASP' speak='Arena provides a great opportunity to students in career and gets what they aim for. ' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={soniyaBtheja} name='Soniya Btheja' compony='Jack & Pro' speak='One thing that Arena Animation Raipur urges in and to far extent succeed in teaching to its students.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={shraddhaAgrwal} name='Shraddha Agrawal' compony='Brand Mark Creation' speak='Thankfull to faculty and Their ability to push me beyond my limits, to make me perfect Designer.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={sumitAdhikari} name='Sumit Adhikari' compony='Intern in Mahindra Group' speak='The journy of Arena Raipur is a life changing exparience for me.I shall always remain greatful.' > </StudentSpeakCard>
                    </SwiperSlide>

                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={sudhirSahu} name='Sudhir Sahu' compony='Accounting' speak='Through placement cell at Arena Animation Raipur,i was able to got a job in the second company that I applied for. ' > </StudentSpeakCard>
                    </SwiperSlide>


                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={pratiksathe} name='Pratik Sathe' compony='Influence Zone Raipur' speak='One thing that Arena Animation Raipur urges in and to far extent succeed in teaching to its students.' > </StudentSpeakCard>
                    </SwiperSlide>
                    <SwiperSlide className="bg-light p-2">
                        <StudentSpeakCard img={venktesh} name='Venktesh' compony='Video Editor Freelancer' speak='Arena animation is providing me the world of imagination to explore my “creativity”.Thank you so much arena.' > </StudentSpeakCard>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}


export default Tslider

