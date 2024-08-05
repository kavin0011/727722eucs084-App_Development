// pages/index.js

import Head from 'next/head';
import {useState} from 'react';
import images from '../../../img'
import Image from 'next/image';
 const LandingPage=()=> {
    const [formData, setFormData] = useState({
      type: 'prepaid',
      mobileNumber: '',
      operator: '',
      offer: '',
      amount: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  return (
    <div className='h-[31rem]'>
      <div><h1 className="absolute md:left-40 left-12 font-montserrat text-2xl font-semibold  text-white pt-7 ">Get 50% Offer On first 3 Recharge <br/>Recharge in Seconds!</h1></div>
      {/* <div className="absolute top-5"><h1 className="absolute md:left-40 left-12 top-14 font-courier-prime  text-white pt-7 text-2xl">Recharge in hours . . .</h1></div> */}
      <div className="bg-blue-600 lg:h-56 grid grid-cols-12">
        <div className='col-span-1'></div>
        
        <div className="md:col-span-6  col-span-10 relative sm:top-20 top-24 md:h-[19rem] bg-white shadow-3xl rounded-lg  md:relative md:top-24 ">
          <div className=" p-4 flex justify-start"><h1 className="text-2xl font-poppins font-bold pl-7" > Mobile Recharge & Bill Payments </h1>
            </div>

        <div className="flex justify-start pl-12">
          <label  className="mr-4 text-sm">
            <input
              type="radio"
              name="type"
              value="prepaid"
              checked={formData.type === 'prepaid'}
              onChange={handleChange}
              className="mr-2"
              />
            Prepaid
          </label>
          <label className="mr-4 text-sm ">
            <input
              type="radio"
              name="type"
              value="postpaid"
              checked={formData.type === 'postpaid'}
              onChange={handleChange}
              className="mr-2"
              />
            Postpaid
          </label>
              </div>
          <form>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 px-4 pt-5">

          <div className="mb-4 ">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <select
            name="operator"
            value={formData.operator}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Your Operator</option>
            <option value="operator1">Airtel</option>
            <option value="operator2">Jio</option>
            <option value="operator3">BSNL</option>
            <option value="operator3">Vodafone</option>
            <option value="operator3">NTLN</option>
          </select>
        </div>
        
        <div className="mb-4">
          <input
            type="text"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <select
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select offers</option>
            <option value="offer1">Offer 1</option>
            <option value="offer2">Offer 2</option>
            <option value="offer3">Offer 3</option>
          </select>
        </div>
        </div>
          </form>
          <div>

          </div >
          <div className="flex justify-center md:pt-2 bottom-3 relative">

          <button className="  bg-blue-700  hover:bg-blue-900 text-white p-2 rounded-md">
          Continue recharge
        </button>
          </div>
        </div>
        <div className=" sm:col-span-4 md:left-12 md:top-8 lg:flex justify-center relative hidden"><Image src={images.add} width={400} height={400}></Image></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
export default LandingPage;
// <div className="font-sans bg-gray-50">
//   <Head>
//     <title>Mobile Recharge App</title>
//     <meta name="description" content="Recharge your mobile in seconds - Anytime, Anywhere!" />
//   </Head>

//   {/* Hero Section */}
//   <header className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
//     <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-4">Recharge Your Mobile in Seconds</h1>
//         <p className="text-lg mb-8">Fast, Secure, and Hassle-Free Mobile Recharges</p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">Get Started</button>
//       </div>
//     </div>
//   </header>

//   {/* Key Features Section */}
//   <section className="py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
//     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         { title: "Instant Recharges", icon: "⚡" },
//         { title: "Multiple Payment Options", icon: "💳" },
//         { title: "User-Friendly Interface", icon: "📱" },
//         { title: "Special Offers", icon: "🎉" },
//         { title: "24/7 Customer Support", icon: "🕒" },
//       ].map((feature) => (
//         <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
//           <div className="text-4xl mb-4">{feature.icon}</div>
//           <h3 className="text-xl font-semibold">{feature.title}</h3>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* How It Works Section */}
//   <section className="bg-gray-100 py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
//     <ol className="list-decimal pl-8 space-y-4 max-w-2xl mx-auto">
//       <li>Download the app</li>
//       <li>Sign up or log in</li>
//       <li>Choose your mobile provider and enter the amount</li>
//       <li>Complete the payment</li>
//     </ol>
//   </section>

//   {/* User Testimonials Section */}
//   <section className="py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">User Testimonials</h2>
//     <div className="max-w-4xl mx-auto space-y-6">
//       {[
//         { text: "This app is amazing! I can recharge my phone in seconds!", user: "User A" },
//         { text: "Fast and reliable service. Highly recommended!", user: "User B" },
//       ].map((testimonial) => (
//         <blockquote key={testimonial.user} className="bg-white p-6 rounded-lg shadow-lg">
//           <p className="mb-4">"{testimonial.text}"</p>
//           <cite className="font-bold">- {testimonial.user}</cite>
//         </blockquote>
//       ))}
//     </div>
//   </section>

//   {/* Download Section */}
//   <section className="bg-gray-100 py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">Download Our App</h2>
//     <div className="flex justify-center space-x-4">
//       <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">App Store</a>
//       <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">Google Play</a>
//     </div>
//   </section>

//   {/* Footer */}
//   <footer className="bg-gray-800 text-white py-8 text-center">
//     <p className="mb-2">Contact us: support@mobilerchargeapp.com</p>
//     <p className="text-sm">Privacy Policy | Terms of Service</p>
//   </footer>
// </div>