import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Banner from '../../../public/assets/images/banner01.png'
import BannerTwo from '../../../public/assets/images/banner02.png'
import './style.css'

export const CarouselBanner = () => {
  return (
    <div>
        <Carousel 
          interval={30000}
          showStatus={false}
        >
              <div>
              <p className="legend font-bold text-9xl">Book our Hotels, Stays for <br/> your next </p>
                  <Image 
                    src={Banner}
                    height={350}
                    width={800}
                    alt='alt-image'
                  />         
                </div>
                <div>
                <Image 
                    src={BannerTwo}
                    height={350}
                    width={800}
                      alt='alt-image'
                  />
                    <p className="legend">Book our Hotels, Stays for  <br/> your next </p>
                </div>
                <div>
                <Image 
                    src={Banner}
                    height={350}
                    width={800}
                      alt='alt-image'
                  />
                    <p className="legend">Book our Hotels, Stays for  <br/> your next </p>
                </div>
          </Carousel>
    </div>
  )
}
