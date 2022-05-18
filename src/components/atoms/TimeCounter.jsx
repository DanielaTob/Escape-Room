import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import AuthContext from "../../context/AuthProvider";

const TimeCounter = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  const [min, setMin] = useState(60);
  const [seg, setSeg] = useState(0);
  const [isGame, setIsGame] = useState(true);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearTimeout(intervalTime);
  }, []);

  function updateTime() {
    setSeg((prev) => {
      if (prev === 0) {
        if (prev === 0 && min === 0) setIsGame((prev) => false);
        setMin((prev) => prev - 1);
        return 59;
      } else {
        return prev - 1;
      }
    });
  }

  return isGame ? (
    <div className="text-white flex items-center pt-4">
      <FaRegClock className="text-2xl mr-2 text-yellow" />
      <div className="text-2xl text-yellow">
        {min < 10 ? `0${min}` : min}:{seg < 10 ? `0${seg}` : seg}
      </div>
    </div>
  ) : (
    <div className="text-white flex items-center pt-4">
      <FaRegClock className="text-2xl mr-2 text-red-700" />
      <div className="text-2xl text-red-700 line-through">00:00</div>
    </div>
  );
};

export default TimeCounter;