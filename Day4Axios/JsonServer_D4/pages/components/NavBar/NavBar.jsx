"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import { Button } from '../componentindex';
import images from '../../../img';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Login from '../../Login';

const NavBar = () => {
  // "USE STATE"
  const [discover, setdiscover] = useState(false);
  const [help, sethelp] = useState(false);
  const [notification, setnotification] = useState(false);
  const [profile, setprofile] = useState(false);
  const [opensidemenu, setopensidemenu] = useState(false);
  const [loginorsign, setloginsign] = useState(false);
  const [opendiscoversidebar, setopendiscoversidebar] = useState(false);
  const [openhelpsidebar, setopenhelpsidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Use state for width and height, initialize to 0
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const [isClient, setIsClient] = useState(false); // New state to check if client-side


  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts on the client side
  }, []);
  const router = useRouter();

  useEffect(() => {
    // Update window size only on client
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlelogin = () => {
    router.push('/Login');
  };

  const routetohistory = () => {
    router.push('/History');
  };

  const routetobills = () => {
    router.push('/Bills');
  };

  const openprofile = () => {
    if (!profile) {
      setdiscover(false);
      setprofile(true);
      sethelp(false);
      setnotification(false);
    } else {
      setprofile(false);
    }
  };

  const opensidebar = () => {
    setopensidemenu(!opensidemenu);
  };

  return (
    <div className="z-50 py-3 w-full bg-white-700 border shadow-lg border-gray-300 ">
      <div className="sm:w-full md:place-content-center md:px-5 items-center grid grid-cols-3 ">
        <div className='grid col-span-2 md:col-span-1 items-center'>
          <div className="col-span-5 pl-10 hidden sm:flex justify-centers ">
            <Image src={images.PulseTopup} alt='NFT MARKET PLACE' width={50} height={50} />
          </div>
        </div>
        {/* END OF LEFT SECTION */}
        <div className="md:grid sm:grid-cols-12 w-full col-span-2 sm:items-center hidden ">
          <div className="col-span-1 justify-center flex ">
            {/* "DISCOVER MENU"  */}
            <p className="font-medium text-lg hover:scale-110 text-black cursor-pointer">
              <Link href='/Home' className="font-montserrat">Home</Link>
            </p>
          </div>
          {/* NOTIFICATION CENTER"  */}
          <div className="md:col-span-1 col-span-1 justify-center flex ">
            <p className="font-medium text-lg md:pl-10 hover:scale-110 text-black cursor-pointer">
              <p onClick={() => { routetobills() }} className="font-montserrat">Bills</p>
            </p>
          </div>
          <div className="md:col-span-2 col-span-1 justify-center flex ">
            <p className="text-lg hover:scale-110 text-black cursor-pointer">
              <p onClick={() => { routetohistory() }} className="font-montserrat">History</p>
            </p>
          </div>
          <div className="md:col-span-1 col-span-2 justify-center flex px-5 ">
            <p className="font-medium text-lg hover:scale-110 pl-3 text-black cursor-pointer">
              <Link href='/components/Support' className="font-montserrat">Support</Link>
            </p>
          </div>
          <div className="md:col-span-2 col-span-2 justify-center flex ">
            <p className="font-medium text-lg hover:scale-110 text-black cursor-pointer">
              <Link href="/components/About" className="font-montserrat">About us</Link>
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="pl-1 cursor-pointer ">
            <BsSearch className="hover:scale-110" onClick={() => { }} />
          </div>
          {/* "User Profile"  */}
          <div className="col-span-1 justify-center flex cursor-pointer ">
            <div className="pl-16">
              {profile && <Image src={images.user1} className="rounded-3xl" alt="Profile" width={40} height={40} onClick={() => openprofile()} />}
              <button className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded px-5 py-2">
                <Link href="/Login" className="font-montserrat">Login</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden flex pr-5 justify-end ">
          <CgMenuRight onClick={() => { opensidebar() }} />
        </div>
      </div>
      {opensidemenu && (
        <div className="absolute pt-2">
          <SideBar setopensidemenu={setopensidemenu} />
        </div>
      )}
    </div>
  );
}

export default NavBar;


  //   <div className="w-full p-6 grid grid-cols-12">
  //   {/* This div should be visible only on small screens */}
  //   <div className="col-span-3 sm:hidden border border-solid h-5 w-5 bg-blue-700">
  //     <CgMenuRight onClick={() => { opensidebar() }} />
  //   </div>
  
  //   {/* Sidebar component */}
  //   {opensidemenu && (
  //     <div className="col-span-12 sm:col-span-9">
  //       <SideBar setopensidemenu={setopensidemenu} />
  //     </div>
  //   )}
  // </div>