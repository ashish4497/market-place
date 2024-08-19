import React from 'react'
import './style.css'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='container w-full m-auto '>
        <div className='flex justify-between py-20'>
        <div>
          <Image src={""} height={100} width={300}   alt='alt-image'/>
          <p className="legend text-sm text-white my-5">Book our Hotels, Stays for  your next </p>
          <div className='flex gap-8 '>
            <div className='flex gap-5 items-center'>
              <Image src={""} height={30} width={30}   alt='alt-image'/>
              <div>
             <h3 className='text-white text-sm'>Have Question</h3>
             <p className='text-white text-base font-semibold	'>01892208277</p>
             </div>
            </div>
            <div className='flex gap-5 items-center'>
              <Image src={""} height={30} width={30}   alt='alt-image'/>
              <div>
             <h3 className='text-white text-sm'>Have Question</h3>
             <p className='text-white text-base font-semibold	'>ashishvashisht@gmail.com</p>
             </div>
            </div>
          </div>
        </div>
        <div>teo</div>
        </div>    
      </div>
      
    </div>
  )
}
