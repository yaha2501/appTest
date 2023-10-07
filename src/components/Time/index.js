import { useEffect, useRef, useState } from "react";
import "./index.css";
import { message } from "antd";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};
export default function Countdown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerid = useRef();

  useEffect(() => {
    timerid.current = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    if (countdown === 0) {
      clearInterval(timerid.current);
      message.warning("Fail!",[2]); 
    }
    return () => clearInterval(timerid.current);
  }, [countdown]);
  // useEffect(()=>{
  //   if(countdown<0) {
  //     clearInterval(timerid.current);

  //     alert("End of time!")
  //   }
  // },[countdown])
  return <h2 className="time">{formatTime(countdown)}</h2>;
}
