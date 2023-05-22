import React from 'react'
// import error from '../components/image/error.jpg'
import { Link } from 'react-router-dom'

function Errorpage404() {
  return (
    <>
      <div className='container text-center p-5 my-5 bg-dark text-light rounded-3'>
        <h1 className="text-body-emphasis">Oops!</h1>
        <p className="col-lg-8 mx-auto fs-5 text-light my-5">404 - PAGE NOT FOUND</p>
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-warning btn-lg px-4 rounded-pill" type="button">
            <Link to="/">Go To Home </Link>
          </button>

        </div>
      </div>

    </>
  )
}

export default Errorpage404
