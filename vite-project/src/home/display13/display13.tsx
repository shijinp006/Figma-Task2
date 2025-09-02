import { motion } from "framer-motion";
import arrow from "../../assets/rightarrow.svg";
import mashroom from "../../assets/mashroom.png";
import leaf from "../../assets/leaf.png";
import shadow from "../../assets/shadow.png";

export const Display13 = () => {
  const aboutItems = [
    { name: "Fredoka One", image: arrow },
    { name: "Special Dish", image: arrow },
    { name: "Reservation", image: arrow },
    { name: "Contact", image: arrow },
  ];
  const menuItems = [
    { name: "Steaks", image: arrow },
    { name: "Burgers", image: arrow },
    { name: "Coctails", image: arrow },
    { name: "Bar B Q", image: arrow },
    { name: "Desserts", image: arrow },
  ];

  return (
    <motion.div
      className="flex flex-wrap w-full h-screen items-center justify-center bg-[#F5F8FD]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap w-full h-full items-center justify-center relative">
        <div className="w-full flex flex-col h-[1480px] bg-[#F5F8FD] lg:h-full lg:p-20 ">
          <div className="flex flex-col lg:flex-row w-full lg:h-[450px]  gap-2 lg:items-center lg:justify-center">
            <motion.div
              className="flex flex-col w-full h-[350px] lg:w-[350px] lg:h-[330px] opacity-100 rounded-[30px] bg-[#F3274C] p-4 lg:p-3"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[121px] h-[48px] opacity-100 flex flex-col ">
                <p className="w-[111px] h-[27px] opacity-100 font-[Fugaz_One] font-normal text-[14px] leading-[30.67px] tracking-[0px] align-middle text-white ">
                  Pizza Hut
                </p>
                <p className="w-[104px] h-[10px] opacity-100 font-[Fugaz_One] font-normal text-[9px] leading-[10.67px] tracking-[0px] align-middle text-white ">
                  FOOD & RESTAURANT
                </p>
              </div>

              {/* Timing */}
              <div className="w-[330px] h-[26.66px] opacity-100 mt-20 ">
                <p className="w-[306.38px] h-[26.67px] opacity-100 font-[Fredoka_One] font-normal text-[12px] leading-[26.67px] tracking-[0px] align-middle text-white">
                  Tuesday – Saturday: 12:00pm – 23:00pm
                </p>
              </div>

              <div className="w-[330px] h-[26.66px] opacity-100 mt-4 ">
                <p className="w-[137.14px] h-[26.67px] opacity-100 font-[Fredoka_One] font-normal text-[12px] leading-[26.67px] tracking-[0px] align-middle underline text-white">
                  Closed on Sunday
                </p>
              </div>

              <div className="w-[330px] h-[26.66px] opacity-100 mt-20 ">
                <p className="w-[207.61px] h-[26.67px] opacity-100 font-[Fredoka_One] font-normal text-[12px] leading-[26.67px] tracking-[0px] align-middle text-white">
                  5 star rated on TripAdvisor
                </p>
              </div>
            </motion.div>

            {/* About & Menu */}
            <div className="grid grid-cols-2 w-full h-[300px] mt-2  gap-2">
              <motion.div
                className="w-full h-full opacity-100 "
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-start justify-center w-full h-[43.33px] opacity-100 ">
                  <p className="w-[78.63px] h-[43.33px] text-[16px] flex leading-[44.33px] font-[Fredoka_One] font-normal text-black align-middle py-2">
                    About
                  </p>
                  <div className="w-[78.31px] h-[36px] opacity-100 border-b-[5px] border-[#FFD40D]"></div>
                </div>
                <div className="w-full h-[146px] opacity-100  rounded-md flex flex-col gap-2 p-2 mt-3">
                  {aboutItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="w-full h-[28px]  rounded-sm flex items-center gap-2 px-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-3 h-3 object-contain opacity-80"
                      />
                      <span className="text-xs font-semibold font-[epilogue] text-gray-700">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="w-full h-full opacity-100 "
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-start justify-center w-full h-[43.33px] opacity-100 ">
                  <p className="w-[78.63px] h-[43.33px] text-[16px] flex leading-[44.33px] font-[Fredoka_One] font-normal text-black align-middle py-2">
                    Menu
                  </p>
                  <div className="w-[78.31px] h-[36px] opacity-100 border-b-[5px] border-[#FFD40D]"></div>
                </div>
                <div className="w-full h-[146px] opacity-100 rounded-md flex flex-col gap-5 p-2 mt-3">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="w-full h-[28px]  rounded-sm flex items-center gap-2 px-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-3 h-3 object-contain opacity-80"
                      />
                      <span className="text-xs font-semibold font-[epilogue] text-gray-700">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Newsletter */}
            <motion.div
              className="w-full h-[300px] opacity-100  flex flex-col lg:justify-center gap-4 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="relative inline-block text-[16px] font-[Fredoka_One] font-normal text-black mb-10 ">
                Newsletter
                <span className="absolute left-0 bottom-[-6px] w-full border-b-[5px] border-[#FFD40D]"></span>
              </p>

              <div className="w-full h-[20px] ">
                <p className="w-[238.22px] h-[26.67px] opacity-100 text-black font-[epilogue] font-normal text-[13px] leading-[26.67px]">
                  Get recent news and updates.
                </p>
              </div>

              <div className="w-full h-[149px] flex flex-col gap-3 opacity-100 ">
                <div className="w-full h-[63px] rounded-[10px] border border-[#DEDEDE] bg-white opacity-100 flex items-center px-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full h-full outline-none bg-transparent text-[16px] font-[epilogue] text-black"
                  />
                </div>
                <div className="w-[140.69px] h-[70px] rounded-[12px] border-[3px] border-[#F3274C] opacity-100 flex items-center ml-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="absolute left-[1%] w-[144px] h-[60px] bg-[#F3274C] rounded-[12px] text-white text-xs font-['Fredoka_One'] flex items-center justify-center transition cursor-pointer"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="flex items-center w-full h-[92.66px] border-t-[10px] border-[#FFD40D] lg:mt-10 opacity-100 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-row items-center w-full h-[46.66px] opacity-100 ">
              <div className="flex flex-row items-center w-[115px] h-[26.995px] opacity-100 ">
                <p className="w-[45px] h-[27px] text-[#F3274C] font-['Fugaz_One'] text-xs leading-[26.67px] align-middle">
                  © 2024
                </p>
                <p className="w-[60px] h-[27px] font-['Fugaz_One'] font-normal text-xs leading-[26.67px] text-[#F3274C] align-middle ">
                  Pizza Hut
                </p>
              </div>
              <p className="w-[25px] h-[26.67px] font-[fredoka] font-bold text-xs leading-[26.67px] text-black align-middle">
                | All
              </p>
              <p className="w-[115px] h-[27px] lg:w-[600px] font-[fredoka] font-bold text-xs leading-[26.67px] text-black align-middle ">
                shawonetc3 Themes
              </p>
              <p className="w-[55px] h-[26.67px] lg:w-[400px] font-[fredoka] font-bold text-xs leading-[26.67px] text-black align-middle underline">
                Facebook
              </p>
              <p className="w-[53px] h-[26.67px] font-[fredoka] font-bold text-xs leading-[26.67px] text-black align-middle underline ">
                Instagram
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.img
            src={mashroom}
            alt="mashroom"
            className="hidden lg:block w-[70px] h-[100px] absolute left-[1%] bottom-[15%]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={shadow}
            alt="shadow"
            className="hidden lg:block w-[40px] h-[30px] absolute left-[48%] bottom-[5%]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={leaf}
            alt="leaf"
            className="hidden lg:block w-[70px] h-[100px] absolute right-[1%] bottom-[15%]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};
