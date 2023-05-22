import React from 'react'
import HeaderImage from './components/HeaderImage';
import Course from './components/Course';
import TeamArena from './components/TeamArena';
import IndroVidio from './components/IndroVidio';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Tslider from './components/Tslider';
import ModalCon from './components/ModalCon';
function HomePage() {
  setTimeout(() => {
    let btn = document.getElementById('click');
    btn.click();
  }, 5000);

  return (
    <>
      <HeaderImage />      
      <Course />
      <IndroVidio />
      <TeamArena />
      <Gallery />
      <Tslider />
      <ContactForm />
      {/* <!-- Vertically centered modal --> */}

      <button type="button" id='click' class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-warning">
              <h1 class="modal-title fs-5 m-auto" id="exampleModalLabel"><strong>Download All Course Detail</strong></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ModalCon />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
