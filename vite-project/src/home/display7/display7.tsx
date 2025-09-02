import { motion } from "framer-motion";
import redburger from "../../assets/redburger.png";
import pizzacartoon from "../../assets/pizzacartoon.png";
import superqualityfood from "../../assets/superqualityfood.svg";
import orginalrecipies from "../../assets/orginalrecipy.svg";
import fastdeliver from "../../assets/fastdelivery.svg";

export const Display7 = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-screen bg-[#F5F8FD] ">
        <div className="flex flex-wrap w-full h-full p-2 lg:items-center lg:justify-center ">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" flex lg:items-center lg:justify-center w-full h-[100px] "
          >
            <div className="flex flex-row w-full h-full gap-3 lg:gap-4 overflow-x-auto whitespace-nowrap lg:items-center lg:justify-center ">
              {/* First Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 h-[50px] lg:h-[60px] lg:w-[300px] relative -top-[0.5px] 
               font-['Oswald'] font-bold text-[15px] lg:text-[55px] leading-[30px] lg:leading-[40px] capitalize 
               text-transparent px-3"
                style={{ WebkitTextStroke: "1px #A4A4A4" }}
              >
                Popular Dishes
              </motion.h1>

              {/* First Image */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-shrink-0 ml-4 lg:ml-20 lg:h-[40px]"
              >
                <img
                  src={redburger}
                  alt="Red Burger"
                  className="w-[20px] h-[20px] object-cover mt-1 lg:w-[35px] lg:h-[30px]"
                />
              </motion.div>

              {/* Second Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 h-[50px] relative -top-[0.5px] 
               font-['Oswald'] font-bold text-[15px] lg:text-[55px] leading-[30px] lg:leading-[40px] capitalize 
               text-transparent px-3"
                style={{ WebkitTextStroke: "1px #FFC222" }}
              >
                Popular Dishes
              </motion.h1>

              {/* Second Image */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-shrink-0 ml-4 lg:ml-20 lg:h-[40px]"
              >
                <img
                  src={pizzacartoon}
                  alt="Pizza Cartoon"
                  className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] object-cover mt-1"
                />
              </motion.div>

              {/* Third Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 h-[50px] relative -top-[0.5px] 
               font-['Oswald'] font-bold text-[15px] lg:text-[55px] leading-[30px] lg:leading-[40px] capitalize 
               text-transparent px-3"
                style={{ WebkitTextStroke: "1px #A4A4A4" }}
              >
                Trending
              </motion.h1>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-wrap w-full h-full lg:h-screen lg:justify-center lg:mt-20"
          >
            <div className="flex justify-center w-full h-[530px] lg:h-[300px] bg-[#EE284B] p-2 rounded-[20px] mt-3 lg:w-[1000px]">
              <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
                {[
                  { icon: superqualityfood, title: "super quality food" },
                  { icon: orginalrecipies, title: "ORIGINAL RECIPES" },
                  { icon: fastdeliver, title: "QUICK FAST DELIVERY" },
                  { icon: superqualityfood, title: "100% FRESH FOODS" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="flex items-start w-[25px]"
                    />
                    <h2 className="font-['Oswald'] font-semibold text-xs leading-[26px] capitalize text-white">
                      {item.title}
                    </h2>
                    <p className="w-[238px] h-[56px] font-['Oswald'] font-normal text-[10px] text-center leading-[20px] text-white">
                      A team of dreamers and doers building <br /> unique
                      interactive music and art
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
