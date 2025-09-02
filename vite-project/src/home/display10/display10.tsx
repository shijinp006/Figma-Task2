import { motion } from "framer-motion";
import redbg from "../../assets/redbg.png";
import burgerandCocacola from "../../assets/burger&cocacola.png";
import whitebg from "../../assets/whitebg.jpg";
import truckicon from "../../assets/truckicon.svg";

export const Display10 = () => {
  return (
    <div className="flex flex-wrap w-full h-screen bg-[#F5F8FD] items-center justify-center">
      <div className="flex flex-wrap w-full h-full items-center justify-center">
        <div className="w-full h-full flex flex-col lg:flex-row lg:items-center lg:justify-center lg:p-16 p-2 gap-2">
          
          {/* Left Card */}
          <motion.div
            className="w-full h-[400px] bg-cover bg-center rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${redbg})` }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 0.97 }}
          >
            <div className="relative w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] opacity-100">
              <img
                src={burgerandCocacola}
                alt="burger and cocacola"
                className="py-34 lg:py-27"
              />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="flex flex-col items-center w-full h-[400px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${whitebg})` }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            
          >
            <p className="w-[163px] h-[28px] text-center font-['Oswald'] font-bold text-[10px] leading-[28px] text-[#00A149] capitalize">
              Crispy, Every Bite Taste
            </p>

            <div className="w-full h-[134px] opacity-100">
              <h1 className="text-center font-['Oswald'] font-bold text-[40px] leading-[47.2px] text-[#212121] capitalize">
                KFC Chiken Hot <br /> Wing & French Fries
              </h1>
            </div>

            <p className="w-[325px] h-[56px] text-center font-['Oswald'] font-normal text-xs leading-[18px] text-[#5C5C5B]">
              Wheat tortilla with spicy chicken bites, cheese sauce
              <br />
              tomatoes and soft cheese
            </p>

            {/* Countdown */}
            <div className="flex flex-row w-full h-[70px] opacity-100 justify-center gap-3">
              {["30 Day", "22 Hours", "48 Min", "22 Sec"].map((time, i) => {
                const [value, label] = time.split(" ");
                return (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center w-[46px] h-[70px]"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-[30px] font-['Oswald'] font-semibold leading-[28px] text-[#FFC222]">
                      {value}
                    </p>
                    <p className="text-[19px] font-['Oswald'] font-medium leading-[28px] text-[#212121]">
                      {label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Button */}
            <motion.button
              className="flex items-center justify-center gap-2 w-[150px] h-[50px] lg:w-[150px] lg:h-[45px] bg-[#00A149] rounded-[5px] text-white font-['Oswald'] font-semibold text-lg cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "#00913f" }}
              transition={{ duration: 0.3 }}
            >
              <img src={truckicon} alt="truck icon" />
              order now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
