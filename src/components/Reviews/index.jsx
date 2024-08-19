import React from 'react'
import "./style.css"
import Image from 'next/image'


const reveiws = [
  {
    title :"Hassle Free Booking",
    subtitle :"Book hotels from our website without any hassle.",
    icon:"/public/assets/images/like.png"
  },
  {
    title :"28,000 Reviews",
    subtitle :"Book hotels from our website without any hassle.",
    icon:"/public/assets/images/like.png"
  },
  {
    title :"24/7 Support",
    subtitle :"Book hotels from our website without any hassle.",
    icon:"/public/assets/images/like.png"
  }
]
export const Reviews = () => {
  return (
    <div className='container m-auto'>
      <div className='flex my-16'>
        <h2 className='text-3xl	font-bold flex justify-center items-center'>What makes our hotels best than others?</h2>
       <div className='flex gap-10 '>
       {
          reveiws?.map((review, index) =>{
            return(
              <div className='flex justify-around	gap-10 items-center card-container p-6' key={index}>
                <Image 
                  src={review.icon}
                  height={20}
                  width={20}
                  alt='alt-image'
                />        
              <div>
              <h3 className='font-bold text-base'>{review.title}</h3>
              <p className='text-sm  mt-2'>{review.subtitle}</p>
              </div>
            </div>
            )
          })
        }
       </div>
      
      </div>
    </div>
  )
}
