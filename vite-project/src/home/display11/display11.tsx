import { motion } from "framer-motion";
import yellowstar from "../../assets/yellowstar.svg";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import redtruckicon from "../../assets/redtruckicon.svg";
import yellowimage from "../../assets/yellowimage.png";
import scooter from "../../assets/scooter.png";
import burger from "../../assets/pencilburger.png";
import pizza from "../../assets/pencilpizza.png";
import frenchfries from "../../assets/frenchfries (2).png";

export const Display11 = () => {
  return (
    <motion.div 
      className="flex flex-wrap w-full h-screen justify-center items-center bg-[#F5F8FD] mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-wrap w-full h-full justify-center items-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:items-center lg:justify-center gap-4 w-full  h-full p-2 relative">
          
          <motion.img 
            src={burger} 
            alt="burger" 
            className="hidden lg:block absolute top-[3%] left-[5%] w-[100px] rotate-280"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img 
            src={frenchfries} 
            alt="fries" 
            className="hidden lg:block absolute top-[10%] right-[20%] w-[50px]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.img 
            src={pizza} 
            alt="pizza" 
            className="hidden lg:block absolute top-[35%] right-[20%] w-[50px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          <div className="flex w-full">
            <div className="flex flex-col w-full h-[200px]">
              <motion.div 
                className="w-full h-[130px] flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p className="w-[161px] h-[28px] text-center font-['Oswald'] font-semibold text-xs lg:text-[18px] leading-[38px] text-[#212121] capitalize">
                  Piter Bowman
                </p>
                <p className="flex items-center justify-center w-[218px] h-[16px] text-[#FFC222] text-center font-['Oswald'] font-medium text-[10px] leading-[26px]">
                  Business CEO & Co Founder
                </p>
                <div className="w-full h-[75px] lg:h-[100px]">
                  <p className="w-full h-[140px] text-center font-['Oswald'] font-bold text-xs leading-[20px] lg:text-[20px] lg:leading-[30px] text-[#212121] capitalize">
                    “Thank you for dinner last night. It was amazing!! I have
                    say it’s <br /> the best meal I have had in quite some
                    time. will definitely be <br /> seeing more eating next
                    year.”
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={yellowstar}
                      alt="yellow star"
                      className="w-[10px]"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-center w-full h-[80px] lg:h-[100px] lg:mt-10 gap-3 "
               
              >
                <img
                  src={profile1}
                  alt="profile1"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="w-[40px] h-[50px] bg-[#FFC222] flex items-center justify-center">
                  <img
                    src={profile2}
                    alt="profile2"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </div>
                <img
                  src={profile3}
                  alt="profile3"
                  className="w-[40px] h-[40px] rounded-full"
                />
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="relative flex flex-col justify-center w-full h-[300px] lg:w-[700px] opacity-100 bg-[#EE284B] p-5 lg:mt-7 lg:p-15"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="w-[163px] h-[28px] text-[10px] leading-[28px] font-['Oswald'] font-bold capitalize text-[#FFC222]">
              Crispy, Every Bite Taste
            </p>
            <div className="w-full h-[60.38px] flex items-start">
              <h1 className="font-['Oswald'] font-bold text-[20px] leading-[30.2px] lg:text-[30px] text-[#FFFFFF] capitalize text-start">
                30 Minutes Fast
                <br />
                <span className="text-[#FFC222]">Delivery</span> Challenge
              </h1>
            </div>
            <motion.button
              className="flex items-center justify-center gap-2 w-[130px] h-[40px] mt-6 lg:w-[130px] lg:h-[50px] bg-white rounded-[9px] text-[#212121] font-['Oswald'] font-semibold text-xs leading-[17px] tracking-[0.8px] text-center capitalize cursor-pointer hover:bg-gray-100 transition-all duration-300 transform hover:scale-90"
              whileHover={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={redtruckicon} alt="redtruck icon" className="w-[20px]" />
              Order Now
            </motion.button>

            <motion.img
              src={yellowimage}
              alt="yellow image"
              className="absolute top-[32%] left-[45%] w-[30px] h-[30px] lg:top-[32%] lg:left-[40%]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.img
              src={scooter}
              alt="scooter"
              className="w-[200px] h-[200px] absolute top-[30%] left-[44%] lg:w-[300px] lg:h-[250px] lg:top-[5%] lg:left-[50%]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
