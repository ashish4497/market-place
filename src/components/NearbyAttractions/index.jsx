import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './style.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const hotelInfo = [
  {
    title: 'Great Deals to Send Your Loved Ones Somewhere Nice',
    location: 'Dharamshala',
    comments: '34',
    image: '/assets/images/banner01.png',
    date: '14 june',
  },
  {
    title: 'Read Real Guest Reviews. 24/7 Customer Service and others.',
    location: 'Palampur',
    comments: '34',
    image: '/assets/images/banner01.png',
    date: '14 june',
  },
  {
    title: 'Read Real Guest Reviews. 24/7 Customer Service and others.',
    location: 'Kangra',
    comments: '34',
    image: '/assets/images/banner01.png',
    date: '14 june',
  },
  {
    title: 'Great Deals to Send Your Loved Ones Somewhere Nice',
    location: 'Tea Garden Dharamshala',
    comments: '34',
    image: '/assets/images/banner01.png',
    date: '14 june',
  },
]

export default function NearbyAttractions() {
  return (
    <div className="container m-auto ">
      <h1 className="m-auto text-3xl font-bold	antialiased	text-center my-8">
        Nearby Attractions
      </h1>
      <div className="py-12 w-full content-container">
        <Carousel
          swipeable={false}
          draggable={false}
          autoPlay={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          showDots={false}
        >
          {hotelInfo?.map((hotel, index) => {
            return (
              <div key={index} className="attraction-banner">
                <Image
                  src={hotel.image}
                  width={380}
                  height={200}
                  className="w-full"
                  alt="alt-image"
                />
                <div className="px-4">
                  <div className="my-4">
                    <span className="text-lg font-medium">{hotel.location}</span>
                  </div>
                  <h3 className="text-left text-lg font-light	pb-4">
                    {hotel.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>    
    </div>
  )
}
