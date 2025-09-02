import { motion } from "framer-motion";
import burger from "../../assets/burger.png";
import burertext from "../../assets/burgertext.png";
import superqualityfood from "../../assets/superqualityfood.svg";
import wellreputation from "../../assets/wellreputation.svg";

export const Display8 = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap w-full h-screen justify-center items-center bg-[#F5F8FD] p-2"
      >
        <div className="flex flex-wrap w-full h-full items-center justify-center bg-[#F5F8FD] p-2">
          <div className="flex flex-col lg:flex-row w-full h-full lg:items-center lg:justify-center  ">
            {/* Left Image Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center w-full lg:w-[500px]  h-full"
            >
              <img src={burger} alt="burger" className="lg:w-[350px]" />
              <img
                src={burertext}
                alt="burger text"
                className="w-[130px] absolute top-[13%] left-[7%] lg:w-[140px] lg:top-[26%] lg:left-[18%]"
              />
              <p className="font-['Oswald'] font-bold text-[40px] leading-[89.6px] capitalize text-[#212121] absolute top-[70%] left-[15%] lg:top-[62%] lg:left-[30%]">
                $0
              </p>
              <div className="flex items-center justify-center absolute top-[72%] left-[60%] lg:top-[63%] lg:left-[54%] w-[120px] h-[45px] bg-[#FFC222] rounded-[10px] opacity-100 rotate-[-25.48deg]">
                <p className="text-white font-['Oswald'] font-bold text-[15px] leading-[24px] capitalize rotate-[2deg]">
                  since /1985
                </p>
              </div>
            </motion.div>

            {/* Right Content Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col  w-full h-full lg:w-[600px] justify-center"
            >
              <div className="flex flex-col justify-center lg:items-center lg:items-start lg:h-[200px] lg:w-[550px]">
                <div className=" lg:h-[100px] flex items-start flex-col">
                  <p className="w-[106.99px] h-[20px] text-[#00A149]  font-['Oswald'] font-bold text-[10px] leading-[28px] capitalize">
                    about our food
                  </p>
                  <h1 className="h-[100px.4px] font-['Oswald'] font-bold text-[25px] lg:text-[30px] lg:leading-[35.2px] capitalize text-[#212121]">
                    Where Quality Meet <br /> Excellent
                    <span className="text-[#00A149]">Service.</span>
                  </h1>
                </div>
                <p className="w-full h-[65px] font-[Oswald] font-normal text-[10px] lg:leading-[28px] lg:text-[12px] text-[#5C5C5B]">
                  Its the perfect dining experience where every dish is crafted
                  with fresh, high-quality <br /> ingredients. Experience quick
                  and efficient service that ensures your food is served fresh.
                  Its the dining experience where <br /> every dish is crafted
                  with fresh, high-quality ingredients
                </p>
              </div>

              {/* Features + Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex items-start gap-2 lg:gap-4 lg:h-[70px] lg:w-[400px] lg:mt-3">
                  <img
                    src={superqualityfood}
                    alt="super quality food"
                    className="w-[30px]"
                  />
                  <div>
                    <p className="w-full h-[26px] font-['Oswald'] font-semibold text-xs leading-[26px] capitalize text-[#212121]">
                      Super Quality Food
                    </p>
                    <p className="w-full h-[84px] text-[#212121] font-['Oswald'] font-normal text-xs leading-[14px]">
                      A team of dreamers and doers building <br /> unique
                      interactive music and art
                    </p>
                  </div>
                  <img
                    src={wellreputation}
                    alt="well reputation"
                    className="w-[30px]"
                  />
                  <div>
                    <p className="font-['Oswald'] font-semibold text-xs leading-[26px] capitalize text-[#212121]">
                      well reputation
                    </p>
                    <p className="w-full h-[84px] text-[#212121] font-['Oswald'] font-normal text-xs leading-[14px]">
                      A team of dreamers and doers building <br /> unique
                      interactive music and art
                    </p>
                  </div>
                </div>
                <div className="flex flex-row w-full items-center gap-2 lg:mt-4">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[120px] h-[40px] lg:w-[140px] bg-[#00A149] rounded-[4px] text-white font-['Oswald'] font-semibold text-xs leading-[25.5px] tracking-[0.8px] capitalize flex items-center justify-center cursor-pointer"
                  >
                    More About Us
                  </motion.button>
                  <div className="w-full flex flex-col gap-2">
                    <p className="font-['Oswald'] font-semibold text-xs leading-[12px] text-[#FFC222]">
                      BRENDON GARREY
                    </p>
                    <p className="font-['Oswald'] font-semibold text-xs leading-[12px] capitalize text-[#212121]">
                      CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
