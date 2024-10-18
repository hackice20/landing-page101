import React from 'react'

function TestimonialCard(props) {
  return (
    <div className='flex flex-col justify-between items-center space-y-6 text-center'>
        <img className="size-16" src={props.href} alt="" /> 
        <h2 className="font-bold">{props.name}</h2>
        <p className="font-light text-slate-600">"{props.text}"</p>
    </div>
  )
}

export default TestimonialCard