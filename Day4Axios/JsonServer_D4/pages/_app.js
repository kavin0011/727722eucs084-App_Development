"use client"
import "../globals.css";
import NavBar from './components/NavBar/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer'
import Login from "./Login";
import Nav from './components/NavBar/LandingPage'
import Last from "./components/Footer/Last";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar/>
    {/* <Nav/> */}
    <Component {...pageProps} />
    <Footer/>
    <Last/>
  </div>
);

export default MyApp;

// import dynamic from 'next/dynamic';

// const MyComponent = dynamic(() => import('./MyComponent'), { ssr: false });

// export default function Page() {
//   return <MyComponent />;
// }