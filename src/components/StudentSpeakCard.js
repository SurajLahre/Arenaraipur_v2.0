import React from 'react'

function StudentSpeakCard(prop) {
  return (
    <div className="cardimg text-center p-2">
      <img src={prop.img} alt="" className='rounded-5' width={'70px'}></img>
      <h5 className='my-2'>{prop.name}</h5>
      <p className='text-danger'>{prop.compony}</p>
      <p>{prop.speak}</p>
    </div>
  )
}

export default StudentSpeakCard
