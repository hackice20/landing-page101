import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    img:"./avatar-richard.png",
    name:"Richad Watts",
    text:"We have been able to cancel so many other subscriptions since you're using manage there is no more cross channel confusion and everyone is much more focused"
  },{
    img:"./avatar-richard.png",
    name:"Richad Watts",
    text:"We have been able to cancel so many other subscriptions since you're using manage there is no more cross channel confusion and everyone is much more focused"
  },{
    img:"./avatar-richard.png",
    name:"Richad Watts",
    text:"We have been able to cancel so many other subscriptions since you're using manage there is no more cross channel confusion and everyone is much more focused"
  }
]

const Testimonial = () => {
  return (
    <div className="mt-8  flex flex-col space-y-16 justify-center p-10 mb-24 items-center ">
      <h1 className='text-3xl font-semibold text-indigo-950'>What they've said</h1>
      <div className='flex flex-col md:flex-row mb-10 px-6 items-center space-y-10  md:space-y-0 md:space-x-20 justify-around'>
            {
              testimonials.map((o)=>{
                return (<TestimonialCard href={o.img} name={o.name} text={o.text}/>)
              })
            }
      </div>
      <button className='bg-orange-500 text-white rounded-full px-4 mx-4 h-10 shadow-lg  hover:bg-orange-600'>Get Started</button>
    </div>
  )
}
export default Testimonial;