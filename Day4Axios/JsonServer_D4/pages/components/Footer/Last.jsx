import React from 'react'
import images from '../../../img'
import Image from 'next/image'

const Last = () => {
  return (
    <div className="border py-2 border-tblack bg-blue-500 w-full border-t-slate-700 flex justify-around">
        <h1 className="flex pt-1 text-white "><Image src={images.PulseTopup} height={10} width={25} /> <h1 className="pl-4">Copyright  &copy;  2024 PulseTopup Infocomm Ltd. All rights reserved.</h1>
         </h1>
         <div className=" gap-8 flex  text-white font-normal text-base ">
            <a href="#" className='hover:underline'>Policies</a>
            <a href="#" className='hover:underline'>Terms   & Conditions</a>
         </div>
    </div>
  )
}

export default Last