import { motion } from "framer-motion";
import blackbg from "../../assets/blackbg.jpg";
import frenchfries from "../../assets/frenchfries.png";
import truckicon from "../../assets/truckicon.svg";

export const Display4 = () => {
  return (
    <div className="w-full h-[450px] lg:h-screen flex flex-wrap lg:items-center justify-center bg-[#F5F8FD]">
      <div className="w-full h-[450px] lg:h-screen flex flex-wrap items-center justify-center lg:p-0 p-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row w-full h-[250px] lg:h-[500px] bg-cover bg-center lg:items-center lg:round-0 rounded-[10px]"
          style={{
            backgroundImage: `url(${blackbg})`,
          }}
        >
          {/* Left: Fries */}
          <div className="flex items-end h-[250px] w-[100px] lg:h-[500px] lg:w-[263px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex h-[100px] w-[80px] lg:w-[263px] lg:h-[377px] opacity-100 relative"
            >
              <motion.img
                src={frenchfries}
                alt="french fries"
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute lg:w-[200px] lg:top-[36%]"
              />
            </motion.div>
          </div>

          {/* Right: Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col py-10 w-[100px] h-[199px] lg:w-[300px] lg:h-[300px] lg:py-4"
          >
            <div className="lg:w-[115.56px] lg:h-[36.4px] opacity-100">
              <p className="font-['Oswald'] font-semibold text-[10px] lg:text-[17px] lg:leading-[36.4px] capitalize align-middle text-[#FFFFFF]">
                save 20%
              </p>
            </div>

            <div className="lg:w-[633px] lg:h-[67.19px] opacity-100">
              <div className="w-[130px] lg:w-[512.44px] lg:h-[67.2px] opacity-100">
                <p className="font-['Oswald'] font-bold text-[15px] lg:text-[50px] lg:leading-[67.2px] capitalize align-middle text-[#FFFFFF]">
                  Today's <span className="text-[#FFC222]">Astackin</span> Day
                </p>
              </div>
            </div>

            <div className="flex flex-row lg:w-[633px] lg:h-[65.1px] opacity-100 lg:gap-1">
              <div className="lg:w-[125px] lg:h-[53px]">
                <div className="lg:w-[125px] lg:h-[46.8px]">
                  <p className="text-[12px] w-[79px] lg:w-[160px] font-['Oswald'] font-bold lg:text-[20px] lg:leading-[46.8px] capitalize align-middle text-[#FFFFFF]">
                    Grilled <span className="text-[#FFC222]">Chicken</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center w-[80.7px] h-[20px] py-1 lg:h-[46.8px] lg:py-1">
                <p className="text-[10px] w-[50px] font-['Oswald'] font-bold lg:text-[18px] lg:leading-[46.8px] capitalize align-middle text-[#FFC222]">
                  $59,00
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-row items-center justify-center w-[90px] h-[48px] lg:w-[130px] lg:h-[70.3px] opacity-100 rounded-[9px] bg-[#EE284B] cursor-pointer transform transition-transform duration-300"
            >
              <div className="flex items-center w-[20px] lg:w-[24.81px] lg:h-[24px]">
                <img src={truckicon} alt="truck" />
              </div>
              <div className="flex items-center justify-center w-[100px] lg:w-[77.8px] lg:h-[17px]">
                <p className="font-['Oswald'] font-semibold text-[12px] lg:text-[17px] leading-[17px] tracking-[0.8px] text-center align-middle capitalize text-white">
                  Order Now
                </p>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
