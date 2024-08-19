import React from 'react'
import { User } from '@nextui-org/react'
import './style.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const guestReviews = [
  {
    guestName: 'john',
    guestprofile: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    guestEmail: 'email@gmail.com',
    guestLocation: 'India',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu.',
  },
  {
    guestName: 'john',
    guestprofile: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    guestEmail: 'email@gmail.com',
    guestLocation: 'India',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu.',
  },
  {
    guestName: 'john',
    guestprofile: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    guestEmail: 'email@gmail.com',
    guestLocation: 'India',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu.',
  },
]

export default function GuestReviews() {
  return (
    <div className="container m-auto w-full">
      <h1 className="m-auto text-3xl font-bold	antialiased	text-center my-6">
        Thoughts from our guests
      </h1>
      <div className="flex gap-5">
        <Carousel 
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={6000}
        transitionTime={800}
        showThumbs={false}
        >
          {guestReviews?.map((guest) => {
            return (
              <div className="guest-reviews" key={guest.guestName}>
                <User
                  name={guest.guestName}
                  description={guest.guestLocation}
                  avatarProps={{
                    src: `${guest.guestprofile}`,
                  }}
                />
                <p className="text-base font-light w-[50%] m-auto mt-4">{guest.review}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
