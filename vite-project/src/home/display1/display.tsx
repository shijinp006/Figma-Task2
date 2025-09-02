import logo from "../../assets/yellowcut.png";
import truckicon from "../../assets/truckicon.svg";
import todaysale from "../../assets/todaybestsale.png";
import chilly from "../../assets/chilly.png";
import burgertext from "../../assets/burgertext.png";
import burger from "../../assets/burger.png";

import { motion } from "framer-motion";

export const Display1 = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center justify-center items-center gap-6 p-4 rounded-[10px]">
      {/* Logo */}
      <div className="flex justify-center items-center lg:h-[300px]">
        <motion.img
          src={logo}
          alt="logo"
          className="absolute left-[-100px] w-[120px] h-auto sm:w-[150px] lg:w-[197px] top-[100px] lg:left-[10px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      {/* Left text section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[400px] p-4 ">
        {/* Crispy text */}
        <motion.p
          className="font-[Oswald] font-semibold text-sm sm:text-base text-[#FFC222] mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          crispy, every bite taste
        </motion.p>

        {/* Big Heading */}
        <motion.p
          className="font-[Oswald] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight text-white uppercase mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          hot spicy
          <br />
          chicken
          <br />
          burger
        </motion.p>

        {/* Offer + Price + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-row items-center gap-2" // changed flex-col → flex-row
          >
            <p className="font-[Oswald] font-bold text-sm sm:text-lg text-white">
              limited offer /
            </p>
            <motion.p
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-[Oswald] font-bold text-2xl sm:text-3xl text-white"
            >
              $5
            </motion.p>
          </motion.div>
        </div>
        {/* Order button */}
        <motion.div
          className="px-6 py-3 rounded-[9px] bg-[#EE284B] text-white font-[Oswald] font-semibold flex items-center gap-2 cursor-pointer lg:mt-4"
          whileHover={{ scale: 1.05, backgroundColor: "#c91f3d" }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={truckicon} alt="truck" className="w-5 h-5" />
          <p className="text-sm sm:text-base">order now</p>
        </motion.div>
      </div>

      {/* Chilly + Burger + Text + Sale */}
      <div className="relative w-full flex justify-center items-center lg:w-[400px]">
        {/* Chilly background */}
        <motion.img
          src={chilly}
          alt="chilly"
          className="w-full max-w-[500px] h-auto"
          initial={{ opacity: 0, y: 50 }} // starting point
          animate={{ opacity: 1, y: 0 }} // animate to
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Burger Text */}
        <motion.img
          src={burgertext}
          alt="burger text"
          className="absolute left-[-120px] inset-0 m-auto w-[60%] sm:w-[70%] h-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />

        {/* Burger */}
        <motion.img
          src={burger}
          alt="burger"
          className="absolute inset-0 m-auto w-[70%] sm:w-[80%] h-auto"
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        />

        {/* Today's Sale Badge */}
        <motion.img
          src={todaysale}
          alt="todaysale"
          className="absolute top-[-20px] left-30 w-[120px] sm:w-[150px] sm:left-50 lg:w-[200px] lg:left-30 lg:top-[-50px] h-auto z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        />
      </div>
    </div>
  );
};
