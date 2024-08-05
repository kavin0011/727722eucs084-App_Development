import React from 'react'
import Image from 'next/image'
import {TiSocialFacebook ,TiSocialLinkedin,TiSocialTwitter,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri'
import images from '../../../img';
const Footer = () => {
  return (
    <div className="bg-slate-300 w-full pb-2 flex justify-around">
      <div className="col-span-3">
        <p className="pl-5 font-rajdhani">Payment</p>
      </div>
      <div className="col-span-4">
        <p className="pl-5 font-poppins text-lg">Subscribe</p>
      </div>
      <div className="col-span-3">
      <p className="pl-5 font-poppins">Keep in touch</p>
      </div>
      {/* <div className="col-span-3"></div>
      <div className="col-span-5 pt-12 pb-5 flex flex-col gap-3 ">
        <h1 className="font-semibold text-lg" >Our Providers</h1>
        <p className="p-y1  text-black font-semibold">
        <p>Airtel</p>
        <p>Jio</p>
        <p>BSNl</p>
        <p>Vodafone</p>
        <p>NTLN</p>
        </p>
      </div>
      <div className="pt-16 col-span-4">
        <h1 className="font-semibold text-lg pl-11">Contact Us</h1>
        <div className="flex gap-2 ">
          <TiSocialFacebook className="size-8 cursor-pointer" />
          <TiSocialLinkedin className='size-8 cursor-pointer'/>
          <TiSocialTwitter className='size-8 pt-1 cursor-pointer'/>
          <TiSocialYoutube className='size-8 pt-1 cursor-pointer'/>
          <TiSocialInstagram className='size-8 pt-1 cursor-pointer'/>
          </div>
        </div> */}
    </div>
  )
}

export default Footer