// import React from 'react'

// const Fragment2 = () => {
//   return (
//     <div className='flex justify-center min-w-screen min-h-screen '>
//         <div className=' items-center  bg-pinkback p-80'  >
//             <div className='font-bold font-poppins text-4xl -mt-[250px]' >Why Choose Us?</div>
//                 <div className='flex mt-[170px]'>

//                     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px]  overflow-hidden">
//                         <div className="p-6">
//                         <h2 className="text-2xl font-bold mb-4">Fast and Efficient</h2>
//                         <p className="text-gray-700">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
//                     </div>

//                     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
//                             <p className="text-gray-700">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
//                         </div>
//                     </div>
                    
//                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">24/7 Availability</h2>
//                             <p className="text-gray-700">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
//                         </div>
//                     </div>
                     
//                      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
//                             <p className="text-gray-700">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
//                         </div>
//                     </div>

                    

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Fragment2;
import React from 'react';

const InfoCard = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-11/12 bg-blue-600 flex rounded-md">
        <div className="grid ">
          <div className="row-span-1 flex flex-col items-center py-10">
            <h1 className="font-bold font-poppins text-4xl text-white">Why You Choose Us?</h1>
            <hr className="border-t-1 border-white my-4 w-1/2" />
          </div>
          <div className="row-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-10">
            <div className="bg-white shadow-lg rounded-[10px] overflow-hidden mx-auto max-w-sm">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Fast and Efficient</h2>
                <p className="text-gray-700">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-[10px] overflow-hidden mx-auto max-w-sm">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
                <p className="text-gray-700">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-[10px] overflow-hidden mx-auto max-w-sm">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">24/7 Availability</h2>
                <p className="text-gray-700">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-[10px] overflow-hidden mx-auto max-w-sm">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
                <p className="text-gray-700">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

{/* <div className=' bg-blue-900 py-24'>
        
        <div className='flex pt-16 space-x-4'>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Fast and Efficient</h2>
              <p className="text-gray-700">Our streamlined process allows you to complete transactions quickly and effortlessly. With just a few clicks, your mobile is recharged and ready to go.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Secure and Reliable</h2>
              <p className="text-gray-700">We use advanced security measures to protect your personal and payment information. Our encrypted transactions ensure that your data is always safe.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">24/7 Availability</h2>
              <p className="text-gray-700">Access our services anytime, from anywhere. Whether it's early in the morning or late at night, we’re here to support you around the clock.</p>
            </div>
          </div>
          
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-[10px] overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
              <p className="text-gray-700">Take advantage of special deals, discounts, and cashback offers. Save more with every recharge and get the best value for your money.</p>
            </div>
          </div>
        </div>
      </div> */}