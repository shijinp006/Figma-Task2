import { motion } from "framer-motion";
import burgerbg from "../../assets/burgerbg.png";
import truckicon from "../../assets/truckicon.svg";
import bestdeal from "../../assets/todaybestsale.png";
import burgertext from "../../assets/burgertext2.png";
import burger from "../../assets/smallburger.png";
import blackbg from "../../assets/blackbg2.png";
import fifty from "../../assets/fifty.png";
import rollerbox from "../../assets/rollerbox.png";

export const Display9 = () => {
  return (
    <div className=" flex flex-wrap w-full h-screen bg-[#F5F8FD] flex flex-col justify-center items-center">
      <div className="flex flex-wrap flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col lg:flex-row w-full h-full p-2 gap-3 lg:items-center lg:justify-center lg:p-4">
          {/* Left Card */}
          <motion.div
            className="relative w-full h-[300px] lg:h-[400px] lg:w-[640px] bg-cover bg-center rounded-lg flex flex-row cursor-pointer"
            style={{ backgroundImage: `url(${burgerbg})` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 0.95 }}
          >
            <div className="w-[140px] h-[300px] lg:w-[280px] lg:h-[400px] opacity-100 flex flex-col items-center justify-center">
              <p className="font-['Oswald'] font-bold text-[18px] leading-[46.8px] text-center lg:text-[28px] lg:leading-[60.8px] capitalize text-white">
                today
              </p>
              <p className="font-['Oswald'] font-bold text-[30px] leading-[30.2px] lg:text-[55px] lg:leading-[50px] text-center capitalize text-white">
                special
              </p>
              <p className="font-['Oswald'] font-semibold text-[22px] leading-[35px] text-center lg:text-[30px] lg:leading-[40px] lg:py-3 capitalize text-white">
                Beef <span className="text-[#FFC222]">Burger</span>
              </p>
              <button className="w-[120px] h-[60px] lg:w-[140px] lg:h-[65px] rounded-[9px] bg-[#EE284B] text-white font-['Oswald'] font-semibold text-xs capitalize flex py-2 lg:p-2 gap-3 hover:bg-[#d32040] transition-all duration-300 cursor-pointer hover:scale-105">
                <img src={truckicon} alt="truck icon" className="w-6 h-6" />
                <span className="font-[Oswald] py-1">Order Now</span>
              </button>
            </div>

            <div className="flex relative w-[500px]">
              <motion.img
                src={bestdeal}
                alt="best deal"
                className="w-[120px] h-[30px] lg:w-[190px] lg:h-[50px] object-cover rounded-lg absolute top-[15%] right-[20%] lg:top-[13%] lg:right-[20%]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.img
                src={burgertext}
                alt="burger text"
                className="absolute top-[20%] left-[1%] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] lg:top-[22%] lg:left-[10%] object-cover rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.img
                src={burger}
                alt="burger"
                className="w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] object-cover rounded-lg absolute bottom-[2%] right-[10%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="flex flex-col w-full h-[465px] lg:h-[400px] lg:w-[450px] bg-cover bg-center rounded-[12px] relative p-5 cursor-pointer"
            style={{ backgroundImage: `url(${blackbg})` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 0.95 }}
          >
            <p className="font-['Oswald'] font-bold text-xs leading-[23.4px] capitalize text-[#FFC222]">
              Crispy, Every Bite Taste
            </p>
            <div className="w-[200px] h-[100px] lg:h-[140px] opacity-100">
              <h1 className="w-[247.1px] h-[143px] text-white font-['Oswald'] font-bold text-[40px] leading-[45px] lg:text-[45px] lg:leading-[60px] capitalize">
                FAST Foods <br /> Meal
              </h1>
            </div>
            <p className="w-[183.14px] h-[56px] font-['Oswald'] font-medium text-[16px] leading-[28px] text-white">
              The mouth-watering aroma of sizzling burgers
            </p>
            <motion.img
              src={fifty}
              alt="50% off"
              className="absolute top-[23%] left-[38%] w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] lg:top-[21%] lg:left-[33%] object-cover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.img
              src={rollerbox}
              alt="roller box"
              className="absolute top-[30%] left-[35%] w-[240px] h-[244px] lg:top-[36%] lg:left-[28%] lg:w-[255px] lg:h-[255px] object-cover"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.button
              className="absolute top-[60%] left-[2%] w-[150px] h-[70px] rounded-[9px] bg-[#EE284B] flex p-2 gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img src={truckicon} alt="truck icon" className="w-5 h-5" />
              <span className="font-['Oswald'] font-semibold text-sm leading-[17px] tracking-[0.8px] text-white capitalize">
                Order Now
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
