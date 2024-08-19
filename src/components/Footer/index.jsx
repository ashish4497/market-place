import React from 'react'
import './style.css'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <div className='container w-full m-auto '>
        <div className='flex justify-between py-20 items-center'>
        <div>
          <div className='flex gap-3 items-center'>
          <Image src={"/assets/images/resort.png"} height={50} width={50}   alt='alt-image'/>
          <h2 className="font-bold text-inherit text-white" >Hotel Market</h2>
          </div>
          <p className="legend text-sm text-white my-5">Book our Hotels, Stays for  your next </p>
          <div className='flex gap-8 '>
            <div className='flex gap-5 items-center'>
              <div className='social-link-bg'>
              <Image src={"/assets/images/like.png"} height={25} width={25}   alt='alt-image' />
              </div>
              <div>
             <h3 className='text-white text-sm'>Have Question</h3>
             <p className='text-white text-base font-semibold	'>01892208277</p>
             </div>
            </div>
            <div className='flex gap-5 items-center'>
            <div className='social-link-bg'>
              <Image src={"/assets/images/star.png"} height={25} width={25}   alt='alt-image'/>
              </div>
              <div>
             <h3 className='text-white text-sm'>Have Question</h3>
             <p className='text-white text-base font-semibold	'>ashishvashisht@gmail.com</p>
             </div>
            </div>
          </div>
        </div>
        <div className='flex  justify-center items-center	flex-col'>
          <div className='flex gap-10 self-start'>
            <Link href={""} className='social-link-bg'>
            <Image src={'/assets/images/instagram.png'}height={20} width={20} alt='social-link'/>
            </Link>
            <Link href={""} className='social-link-bg'>
            <Image src={'/assets/images/twitter.png'}height={20} width={20} alt='social-link'/>
            </Link>
            <Link href={""} className='social-link-bg'>
            <Image src={'/assets/images/youtube.png'}height={20} width={20} alt='social-link'/>
            </Link>
          </div>
          <p className='text-white font-sm mt-20'>&copy; {currentYear} Hotel Market. All rights reserved.</p>
        </div>
        </div>    
      </div>
      
    </div>
  )
}
