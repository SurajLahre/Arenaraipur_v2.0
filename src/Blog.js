import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import blogBg from './components/image/blogBg.jpg'
import blog1 from './components/image/blog1.jpeg'
import Gvdesign from './components/image/CourseImage/detail_course_image/Gvdesign.jpg'
// import { json } from "react-router-dom";
function Blog() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("mongodb://localhost:27017/", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },

        });

        result = await result.json()
        alert(result)


        if (result) {
            navigate('/gallery')
        }
    }
    return (
        <>
            <div className="container-fluid main-blog-container bg-dark p-5">
                <div className="container-fluid py-5  p-5 rounded-5 blog_body_container">
                    <h1 className="display-5 fw-bold text-light m-auto">BLOG</h1>
                    {/* <button className="btn btn-warning m-auto p-2 btn-lg mt-5 btn-sm rounded-5 topbtn" type="button">Explore More</button> */}
                </div>
            </div>
            {/* header end */}
            <div className="container bg-light shadow my-5">
                <form>
                    <input type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input type="email" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <button className="btn btn-warning my-3 d-block" onClick={collectData}>Submit</button>
                </form>
            </div>
            {/* body start */}

            <div className="blog-card-container p-5 ">
                <div className="container-fluid p-5 shadow">
                    <div className="row p-5 d-flex">
                        <div className="col-8">
                            <h5 className="fs-3 fw-bold text-danger">Mastering the Art of Graphic Design..! </h5>

                            <hr />
                            <p> Author Name | 22-05-2023 | Article Blog |<i className="fa-solid fa-pen-to-square"></i></p>

                            <img src={blog1} className="card-img-top" alt="..." />
                            <h3 className="p-2 lh-lg">
                                <strong className="singletext text-light fs-1 ">P</strong>
                                Photoshop Classes by Arena Animation in Raipur, Chhattisgarh.
                            </h3>
                            <p>In today's digital age, where visual communication is vital in every industry,
                                graphic design has emerged as a highly sought-after career option. Raipur, the capital
                                city of Chhattisgarh, is witnessing rapid growth in graphic design, creating immense demand for
                                skilled professionals. If you aspire to pursue a career in this dynamic and creative industry, look no further than
                                Arena Animation's Photoshop classes in Raipur. This article will explore the benefits of joining these classes and how
                                they can kickstart your journey toward becoming a successful graphic designer. <br /> <br />

                                <strong className="fw-bold">Unleash Your Creative Potential:</strong> Photoshop is a powerful tool for graphic designers to bring their imagination to life. Arena Animation's Photoshop classes in Raipur provide a comprehensive curriculum to help students master the software and its various tools. From understanding the basics to advanced techniques, these classes offer a holistic learning experience that nurtures your creative potential.

                                <br /> <br /> <strong className="fw-bold">Industry-Relevant Curriculum:</strong> Arena Animation is renowned for its industry-aligned curriculum, and the Photoshop classes are no exception. The courses are regularly updated to keep pace with the ever-evolving demands of the graphic design industry. By enrolling in these classes, you will gain hands-on experience with Photoshop's latest version, ensuring you are equipped with the most relevant skills employers require.


                                <br /><br /><strong className="fw-bold">Experienced Faculty:</strong> At Arena Animation, you will be guided by a team of experienced and passionate faculty members who are experts in graphic design. They bring their wealth of knowledge and industry experience into the classroom, offering valuable insights and mentorship to students. Their guidance will not only help you grasp the technical aspects of Photoshop but also provide you with a broader understanding of the design principles and aesthetics. <br /><br />

                                <strong className="fw-bold">Practical Training and Projects</strong>
                                The Photoshop classes at Arena Animation focus on practical training, allowing students to apply their knowledge to real-world projects. Hands-on exercises and assignments teach you how to create stunning visuals, manipulate images, design logos, retouch photographs, and much more. This practical approach will build your confidence and enable you to showcase your skills effectively. <br /><br />

                                <strong className="fw-bold">Industry Exposure and Placement Assistance:</strong> One of the significant advantages of joining Arena Animation's Photoshop classes is the exposure to industry events and workshops. The institute organizes seminars, guest lectures, and design competitions where you can interact with industry professionals, gain insights into the latest trends, and expand your network. Additionally, Arena Animation provides placement assistance to its students, connecting them with job opportunities in leading design studios, advertising agencies, and multimedia companies. <br /><br />

                                <strong className="fw-bold">Industry Exposure and Placement Assistance::</strong> Raipur, the heart of Chhattisgarh, has witnessed substantial growth in the graphic design industry in recent years. There is a high demand for skilled graphic designers in Raipur, from advertising agencies and e-commerce companies to film production houses and digital marketing agencies. By enrolling in Arena Animation's Photoshop classes, you will position yourself as a competent professional ready to capitalize on the vast opportunities available in the city. <br /><br />

                                Conclusion: If you dream of a career in the graphic design industry, Arena Animation's Photoshop classes in Raipur, Chhattisgarh, offer a comprehensive platform to learn and grow. With a focus on industry-relevant skills, practical training, experienced faculty, and placement assistance, these classes provide the perfect launchpad for your graphic design journey. <br /><br />

                                Join today and unlock your creative potential while exploring the exciting world of graphic design in Raipur. </p>

                            <div className="container-fluid border border-dark">
                                <form className="d-flex" role="article">
                                    <i className="fa-solid m-auto fs-1 mx-1  fa-circle-user"></i>
                                    <input className="form-control me-2" type="comment" placeholder="Comment" aria-label="Search" />
                                    <button className="btn btn-dark" type="submit">Post</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="container-fluid bg-dark p-2 d-flex">
                                <button className="btn m-auto btn-sm text-light " type="button">POPULAR</button>
                                <button className="btn m-auto btn-sm text-light " type="button">COMMENTS</button>
                                <button className="btn m-auto btn-sm text-light " type="button">RECENT</button>
                            </div>
                            <div className="card blogcard mb-3 my-1">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={blogBg} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Mastering the Art of Graphic Design</h5>
                                            <p className="card-text"><small className="text-body-secondary">3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card blogcard mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Gvdesign} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Graphic Design Mastering the Art of </h5>
                                            <p className="card-text"><small className="text-body-secondary">3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










        </>
    )
}

export default Blog;