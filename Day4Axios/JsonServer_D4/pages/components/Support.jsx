import React from 'react'
import {Instagram, Mail,Phone} from 'lucide-react'

const Support = () => {
    const HandleSub=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="felx justify-center w-11/12 sm:pl-20 py-20">
        <div className=" shadow-3xl border w-11/full rounded-md">
        <div className="grid grid-cols-2">
            <div className="col-span-1"> 
                <div className="pl-24 pt-16"><p className="font-poppins font-bold text-3xl">For Any Query</p></div>
                <div className="pl-24"><p className="font-rajdhani font-normal text-sm">Have any question or need assistance ? Contact Us</p></div>
                <div className="pl-24 pt-20"><Mail color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">customersupport@pulse.com</p></div>
                <div className="pl-24 pt-4"><Phone color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">+91 9344177248</p></div>
                <div className="pl-24 pt-4"><Instagram color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">PulseTopup_Support</p></div>
            </div>
            <div className='col-span-1'>
                <div className="py-14">

                <form onSubmit={()=>{HandleSub()}}>
                    <div className="flex">
                        <div><p className="font-poppins ">First name</p>
                        <input type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" />
                        </div>
                        <div className="pl-12"><p className="font-poppins">Last name</p>
                        <input type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" />
                        </div>
                    </div>
                    <div className="flex pt-7">
                        <div className=""><p className="font-poppins">Email</p>
                        <input type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" />
                        </div>
                        <div className="pl-12"><p className="font-poppins">Phone number</p>
                        <input type="text" className="border border-black rounded-sm py-2 pl-2 pr-16 font-montserrat" />
                        </div>
                    </div>
                    <div className="flex pt-7 w-full ">
                        <div className=""><p className="font-poppins">Query</p>
                        <textarea placeholder="Type your query" className="border border-black rounded-sm py-2 font-montserrat pl-2 md:w-[36rem] md:h-full sm:w-[18rem] sm:h-11/12" />
                        </div>
                    </div>
                    <div className="flex pt-20">
                        <button type="submit" className="border  px-6 py-2 rounded-sm bg-blue-700 text-white font-montserrat hover:bg-blue-900">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Support