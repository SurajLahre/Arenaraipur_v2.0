import React from 'react'
import emailjs from 'emailjs-com';
function ContactForm() {
    function sendEmail(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_j760squ', 'template_21qj25b', e.target, '5RsibhcLUapcMCGS1')
            .then((result) => {
                alert('successfull!')
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return (

        <><div className='text-center' id='enquiryid'><h1 className='p-3 headingh1text my-5'>CONTACT US</h1></div>
            <div className='container-fluid text-light d-flex contact-container' >

                <div className='form-text contact-field p-5 shadow my-2 mx-2'>
                    <h1 className='form-item'>ARENA ANIMATION RAIPUR</h1>
                    <div className='form-item d-flex'><i class="fa-solid mx-2 mt-1 fa-phone"></i><p>(+91)-7714039789/ (+91) 9589233695</p></div>
                    <div className='form-item d-flex'><i class="fa-solid mx-2 mt-1 fa-envelope"></i><p>arenaanimationraipur01@gmail.com</p></div>
                    <div className='form-item d-flex'><i class="fa-solid mx-2 mt-1 fa-location-dot"></i><p>Govind Kunj Civil Lines Raipur Chhattishgarh- India</p></div>
                </div>
                <div className='form-input contact-field p-2 shadow my-2 mx-2'>
                    <form onSubmit={sendEmail}>
                        <input required type="text" id="fname" name="name" placeholder="Your Name.." />
                        <input required type="email" id="lname" name="email" placeholder="Your Email.." />
                        <input required type="number" id="lname" name="number" placeholder="Your Number.." />

                        <select id="country" name="course" required>
                            <option value="Game Design And Development">Game Design and Development</option>
                            <option value="Animation, VFx">Animation, VFx</option>
                            <option value="Graphic Visual Design">Graphic Visual Design(GVD)</option>
                            <option value="UI/UX Design">User Interface Design(UI Design)</option>
                            <option value="Web Design & Development">Web Design & Development(WDD)</option>
                            <option value="Print & Publish">Print & Publish</option>
                            <option value="Short Term Courses">Short Term Courses</option>
                        </select>
                        <textarea id="subject" name="message" placeholder="Write something.." ></textarea>

                        <input type="submit" value="send" className='my-5' />
                    </form>

                </div>
            </div>
            <hr />
        </>
    )
}

export default ContactForm