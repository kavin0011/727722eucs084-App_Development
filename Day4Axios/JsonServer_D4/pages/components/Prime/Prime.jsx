import React from 'react'
import { Checkmark } from 'react-checkmark'
import {Check} from 'lucide-react'
const Prime = () => {
  return (
    <div className="flex justify-center py-20 w-11/12 sm:pl-20 ">
        <div className=" shadow-3xl rounded-md w-full pb-16 bg-blue-100">

        <div className=" flex justify-center"><p className="text-3xl font-semibold font-montserrat pl-2 pt-9">Join our Membership Program </p></div>
        <div className="flex justify-center"><p className="text-base font-light font-montserrat pl-4 ">Unlock Exclusive benefits with pulseTopup MemberShips</p></div>
        <div className="lg:grid lg:grid-cols-12 flex flex-col  justify-center sm:pl-20 px-10 pt-16">
            <div className="col-span-1">
            </div>
            <div className="sm:col-span-3 pt-4 ">
              <div className="flex justify-center items-center flex-col border border-gray-500 sm:rounded-tb-md sm:rounded-l-md hover:rounded-tb-md group bg-white">
                <div className="group-hover:rounded-tb-md group-hover:w-full group-hover:py-1 group-hover:bg-blue-500"></div>
                <div className="flex pt-3"><p className=" text-2xl font-bold font-montserrat  ">Silver</p></div>
                <div className="pt-3"><p className="text-4xl font-semibold font-montserrat">&#8377;399</p></div>
                <div className="-pt-1"><p className="text-sm font-semibold font-montserrat">per month</p></div>
                <div className="pt-8 pb-7"><p onClick={()=>{}} className="border rounded-md py-3 hover:bg-blue-600 hover:text-white border-blue-800 px-12 font-montserrat font-bold text-xl text-blue-600">Buy Now</p></div>
                <div className="border border-black w-9/12"></div>
                <div className="pt-7 flex"><p className="text-lg font-bold font-montserrat ">Features</p></div>
                <div className="col grid-cols-2 grid-rows-3">
                <div className=" col-span-1 flex pl-3 py-1"><div className=" w-4 h-4 "><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-5 pr-1 flex text-sm font-nunito">5% Off on Every Recharge,Enjoy Immediate savings on all your rechargs. </p></div>

                <div className=" col-span-1 flex pl-3 pt-2"><div className=""><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-2 flex text-sm font-nunito">Monthly discount vouchers for partner services like streaming or shopping. </p></div>

                <div className=" col-span-1 flex pl-3 pt-3 "><div className=""><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-2 flex text-sm font-nunito">Extra 2GB of data added to your plan during weekends. </p></div>

                <div className=" col-span-1 flex pl-3 pt-2 pb-28"><div className=""></div>
                 <p className="pl-2 flex text-sm font-serif"> </p></div>
                </div>
              </div>
            </div>
            <div className="col-span-3 pt-4">
            <div className="flex justify-center items-center flex-col border border-gray-500 sm:rounded-tb-md  group bg-white">
            <div className="group-hover:rounded-tb-md group-hover:w-full group-hover:py-1 group-hover:bg-blue-500"></div>
                <div className="hover:rounded-tb-md hover:rounded-l-md hover:w-full hover:py-2 "></div>
                <div className="flex pt-3"><p className=" text-2xl font-bold font-montserrat  ">Gold</p></div>
                <div className="pt-3"><p className="text-4xl font-semibold font-montserrat">&#8377;599</p></div>
                <div className="-pt-1"><p className="text-sm font-semibold font-montserrat">per 3 month</p></div>
                <div className="pt-8 pb-7"><p onClick={()=>{}} className="border rounded-md py-3 hover:bg-blue-600 hover:text-white border-blue-800 px-12 font-montserrat font-bold text-xl text-blue-600">Buy Now</p></div>
                <div className="border border-black w-9/12"></div>
                <div className="pt-7 flex"><p className="text-lg font-bold font-montserrat ">Features</p></div>
                <div className="col grid-cols-2 grid-rows-3">
                <div className=" col-span-1 flex pl-3 py-1"><div className=" w-4 h-4 "><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-5 pr-1 flex text-sm font-nunito">10% Off on Every Recharge,Enjoy Immediate savings on all your rechargs. </p></div>

                <div className=" col-span-1 flex pl-3 pt-2"><div className=""><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-2 flex text-sm font-nunito">Monthly discount vouchers for partner services like streaming or shopping. </p></div>

                <div className=" col-span-1 flex pl-3 pt-2"><div className=""><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-2 flex text-sm font-nunito">Extra 10GB of data added to your plan during weekends. </p></div>

                <div className=" col-span-1 flex pl-3 pt-1 pb-20"><div className=""><Check className="border p-[1px] border-blue-800 rounded-xl group-hover:bg-blue-500" color="black" size="20px"/></div>
                 <p className="pl-2 flex text-sm font-nunito">35GB of high-speed 4G/5G data spread over three months. </p></div>
                </div>
              </div>
            </div> 
            <div className="col-span-3 pt-4">
        <div className="flex justify-center items-center flex-col border border-gray-500 sm:rounded-tb-md sm:rounded-r-md hover:rounded-tb-md group bg-white">
            <div className="group-hover:rounded-tb-md group-hover:w-full group-hover:py-1 group-hover:bg-blue-500"></div>
        <div className="hover:rounded-tb-md hover:rounded-l-md hover:w-full hover:py-2"></div>
        <div className="flex pt-3"><p className="text-2xl font-bold font-montserrat">Platinum</p></div>
        <div className="pt-3"><p className="text-4xl font-semibold font-montserrat">&#8377;1099</p></div>
        <div className="-pt-1"><p className="text-sm font-semibold font-montserrat">per year</p></div>
        <div className="pt-8 pb-7">
            <p onClick={() => {}} className="border rounded-md py-3 hover:bg-blue-600 hover:text-white border-blue-800 px-12 font-montserrat font-bold text-xl text-blue-600">Buy Now</p>
        </div>
        <div className="border border-black w-9/12"></div>
        <div className="pt-7 flex"><p className="text-lg font-bold font-montserrat">Features</p></div>
        <div className="col grid-cols-2 grid-rows-3">
            <div className="col-span-1 flex pl-3 py-1">
                <div className="w-4 h-4 ">
                    <Check className="border p-[1px] border-blue-800 group-hover:bg-blue-500 rounded-xl" color="black" size="20px"/>
                </div>
                <p className="pl-5 pr-1 flex text-sm font-nunito">5% Off on Every Recharge, Enjoy immediate savings on all your recharges.</p>
            </div>
            <div className="col-span-1 flex pl-3 pt-2">
                <div className="w-4 h-4 ">
                    <Check className="border p-[1px] border-blue-800 group-hover:bg-blue-500 rounded-xl" color="black" size="20px"/>
                </div>
                <p className="pl-2 flex text-sm font-nunito">Monthly discount vouchers for partner services like streaming or shopping.</p>
            </div>
            <div className="col-span-1 flex pl-3 pt-3">
                <div className="w-4 h-4 ">
                    <Check className="border p-[1px] border-blue-800 group-hover:bg-blue-500 rounded-xl" color="black" size="20px"/>
                </div>
                <p className="pl-2 flex text-sm font-nunito">Extra 2GB of data added to your plan during weekends.</p>
            </div>
            <div className="col-span-1 flex pl-3 pt-2">
                <div className="w-4 h-4  ">
                    <Check className="border p-[1px] border-blue-800 group-hover:bg-blue-500 rounded-xl" color="black" size="20px"/>
                </div>
                <p className="pl-2 flex text-sm font-nunito">35GB of high-speed 4G/5G data spread over three months.</p>
            </div>
            <div className="col-span-1 flex pl-3 pt-3 pb-5">
                <div className="w-4 h-4 ">
                    <Check className="border p-[1px] border-blue-800 group-hover:bg-blue-500 rounded-xl check-icon" color="black" size="20px"/>
                </div>
                <p className="pl-2 flex text-sm font-nunito">150GB of high-speed 4G/5G data spread over the year.</p>
            </div>
        </div>
    </div>
</div>

            <div className="col-span-2">
            </div>

        </div>
        </div>
    </div>
  )
}

export default Prime

// hover:rounded-l-md hover:w-full hover:py-2 hover:border hover:border-blue-800 