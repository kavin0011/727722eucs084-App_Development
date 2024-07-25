import React, { useEffect, useRef, useState } from 'react';
export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  const [split,setsplit] = useState(false)
  const [time,settime] = useState([])

  useEffect(() => {

      if(isRunning){
        console.log(startTimeRef.current)
          intervalIdRef.current = setInterval(() => {
              setElapsedTime(Date.now() - startTimeRef.current);
          }, 10);
      }
      console.log(startTimeRef.current);

      return () => {
          clearInterval(intervalIdRef.current);
      }
  }, [isRunning]);

  function start(){
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop(){
      setIsRunning(false);
  }

  function reset(){
      setElapsedTime(0);
      setIsRunning(false);
  }
  function formatTime(){
    
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
      let seconds = Math.floor(elapsedTime / (1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);
      
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      milliseconds = String(milliseconds).padStart(2, "0");
      
      return `${minutes}:${seconds}:${milliseconds}`;
  }
  
  return(
    <>
      <div className="grid grid-cols-1 grid-rows-2">
          <div className="grid row-span-1 justify-center"> 
            <div className=' font-light text-6xl '>{formatTime()}</div></div>
          <div className="row-span-1  flex justify-center pt-5 gap-5">
            <div className='col-span-4 -pl-4'></div>
              <button onClick={start} className="px-3 border border-black rounded-xl bg-green-400">Start</button>
              <button onClick={stop} className="px-3 border border-black rounded-xl  bg-red-400">Stop</button>
              <button onClick={reset} className=" px-2 border border-black rounded-xl bg-orange-400">Reset</button>
          </div>
      </div>
      { split ?
          <div className='split'>
            <div className='top'>
              <h1 className='flex justify-center font-medium'>Split Time:</h1>
            </div >
            {time.map((item)=> { return(<h1 className='flex justify-center' key={item}>{item}</h1>) }
            )}
          </div>
          : null
        }
      </>
  );
}



























// function Split(){
//   setsplit(true)
//   settime([...time,formatTime()])
  
// }
// function clear(){
//   settime([])
//   setsplit(false)
// }
{/* <button onClick={Split} className="col-span-1 border border-black rounded-xl bg-blue-400">Split</button> */}

{/* <button className="flex justify-center border border-black rounded-lg bg-red-400" onClick={clear}>Clear</button> */}