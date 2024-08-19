import Image from 'next/image'
import React from 'react'
import './style.css'


const hotelInfo = [
  {
    title:"Great Deals to Send Your Loved Ones Somewhere Nice",
    tag:"Hotel",
    comments:"34",
    image:"/public/assets/images/banner01.png",
    date:"14 june"
},
{
  title:"Read Real Guest Reviews. 24/7 Customer Service and others.",
  tag:"Hotel",
  comments:"34",
  image:"/public/assets/images/banner01.png",
  date:"14 june"
},
{
  title:"Great Deals to Send Your Loved Ones Somewhere Nice",
  tag:"Hotel",
  comments:"34",
  image:"/public/assets/images/banner01.png",
  date:"14 june"
},
{
title:"Great Deals to Send Your Loved Ones Somewhere Nice",
tag:"Hotel",
comments:"34",
image:"/public/assets/images/banner01.png",
date:"14 june"
},
{
  title:"Great Deals to Send Your Loved Ones Somewhere Nice",
  tag:"Hotel",
  comments:"34",
  image:"/public/assets/images/banner01.png",
  date:"14 june"
},
{
  title:"Read Real Guest Reviews. 24/7 Customer Service and others.",
  tag:"Hotel",
  comments:"34",
  image:"/public/assets/images/banner01.png",
  date:"14 june"
}
]
export const Hotels = () => {
  return (
    <div className='container m-auto '>
      <h1 className='m-auto text-3xl font-bold	antialiased	text-center my-6'>Latest News</h1>
      <div className='my-20 flex flex-wrap gap-16'>
        {
          hotelInfo?.map((hotel, index)=>{
            return(
              <div key={index} className='hotel-banner'>
                  <Image src={hotel.image}
                    width={380}
                    height={200}
                    className='w-full'
                      alt='alt-image'
                  />
               <div className='px-4'>
               <div className='my-6  '>
                    <span>{hotel.tag}</span>
                    <span className='ml-10'>comments: {hotel.comments}</span>
                  </div>
                  <h3 className='text-left text-xl font-light	 mb-4'>{hotel.title}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
