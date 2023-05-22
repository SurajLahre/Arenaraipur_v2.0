import React from 'react'
// import Arena_Game_br from '../components/Arena_Game_br.pdf'
import emailjs from 'emailjs-com'
function ModalFG() {

    function sendEmail(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_j760squ', 'template_21qj25b', e.target, '5RsibhcLUapcMCGS1')
            .then((result) => {
                window.location.reload()
                let dwn = document.getElementById('downloadGamebr')
                dwn.click();
                alert('successfull!');

                //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <div className='container-fluid text-light d-flex contact-container' >
                <div className='form-inp-ut contact-field'>
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
                        <input type="submit" value="Download Brochure" />
                    </form>
                </div>
            </div>
            {/* <a className='btn btn-outline-dark btn-sm' id='downloadGamebr' style={style1} href={Arena_Game_br} download={Arena_Game_br}>Download</a> */}
        </>
    )
}

export default ModalFG