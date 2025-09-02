import { motion } from "framer-motion";
import chilly2 from "../../assets/chilly (2).png";
import blackbg from "../../assets/bgblack.png";
import fifty from "../../assets/fifty.png";
import burgertext2 from "../../assets/burgertext2.png";
import combo from "../../assets/combo.png";
import pizzabg from "../../assets/pizzabg.png";
import pizzatext from "../../assets/pizzatext.png";
import todaybestdeal from "../../assets/todaybestsale.png";
import pizza from "../../assets/pizza.png";
import pizzatext2 from "../../assets/pizzatext.svg";
import cooktext from "../../assets/cooktext.svg";

export const Display3 = () => {
  return (
    <div className="w-full h-[570px] md:h-[500px] lg:h-screen bg-[#F5F8FD] relative flex lg:items-center justify-center lg:mt-0 mt-4 ">
      <div className="flex w-full h-full justify-center lg:items-center">
        {/* Sidebar image - visible only on lg */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:block flex lg:items-center justify-center w-[50px] h-full "
        >
          <div className="w-[50px] h-[300px] rounded-xl overflow-hidden">
            <img
              src={chilly2}
              alt="chilly"
              className="w-full h-full object-contain mt-33"
            />
          </div>
        </motion.div>

        {/* Main content area */}
        <div className="flex flex-col w-full lg:h-screen h-[500px] p-2 lg:justify-center bg-[#F5F8FD]">
          <div className="flex flex-col lg:flex-row w-full gap-2 lg:justify-center bg-[#F5F8FD]">
            {/* Burger combo card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex w-full h-[260px] p-4 md:w-[500px] md:h-[380px] md:p-6 lg:w-[500px] lg:h-[350px] lg:p-10 rounded-[20px] justify-center bg-[#F5F8FD] cursor-pointer transform transition duration-300 ease-in-out hover:scale-95"
              style={{
                backgroundImage: `url(${blackbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col flex wrap w-full h-full flex relative ">
                <div className="flex w-full h-[30px] md:h-[40px] lg:h-[50px] flex relative items-center ">
                  <div className="flex w-[192px] h-[23px] md:w-[210px] md:h-[30px] lg:w-[400px] lg:h-[80px] flex items-center lg:px-6">
                    <p className="font-['Oswald'] font-bold capitalize text-[#FFC222] align-middle leading-[23.4px] tracking-normal text-xs md:text-[16px] lg:text-[18px]">
                      CRISPY, EVERY BITE TASTE
                    </p>
                    <motion.img
                      src={burgertext2}
                      alt="burgertext"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                      className="absolute w-[150px] left-25 md:left-36 lg:left-38 lg:top-[-60px] lg:w-[300px]"
                    />
                  </div>
                </div>

                <div className="relative w-full h-[250px] md:h-[400px] lg:h-[600px]">
                  <motion.img
                    src={combo}
                    alt="combo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[200px] left-30 top-[-2px] lg:w-[300px] h-full object-contain absolute md:left-40 lg:left-38 lg:top-7"
                  />

                  <div className="absolute top-5 left-5 w-[250px] h-[100px] md:w-[330px] md:h-[120px] lg:w-[413px] lg:h-[144px]">
                    <div className="w-[180px] h-[100px] md:w-[210px] md:h-[120px] lg:w-[238px] lg:h-[143px] opacity-100">
                      <p className="font-['Oswald'] font-bold text-[32px] md:text-[44px] lg:text-[55px] leading-[40px] md:leading-[55px] lg:leading-[71.5px] capitalize text-white">
                        SUPER DELICIOUS
                      </p>
                    </div>
                  </div>
                </div>

                <motion.img
                  src={fifty}
                  alt="fifty"
                  initial={{ opacity: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute w-[150px] h-[150px] opacity-100 top-[90px] left-[-35px] md:w-[140px] md:h-[120px] md:top-[150px] lg:w-[181px] lg:h-[156px] lg:top-[170px] lg:left-[-25px]"
                />
              </div>
            </motion.div>

            {/* Pizza card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-[200px] lg:w-[680px] lg:h-[330px] rounded-[20px] opacity-100 relative cursor-pointer transform transition duration-300 ease-in-out hover:scale-95"
              style={{
                backgroundImage: `url(${pizzabg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-[150px] h-[120px] top-[30%] lg:w-[300px] lg:h-[250px] lg:top-[23%]">
                <img src={pizzatext} alt="" />
              </div>

              <motion.img
                src={pizza}
                alt="pizza"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[200px] h-[200px] left-[46%] top-[-4%] lg:w-[310px] lg:h-[320px] lg:top-[-4%] lg:left-[53%]"
              />

              <motion.img
                src={todaybestdeal}
                alt="today's best deal"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="absolute w-[150px] left-[37%] lg:w-[245px] lg:h-[60px] lg:top-[1%] lg:left-[40%]"
              />
            </motion.div>
          </div>

          {/* bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-full lg:flex lg:flex-col lg:justify-center lg:mt-2 bg-[#F5F8FD]"
          >
            <div className="w-full lg:h-[26px]">
              <div className="flex flex-col lg:w-[321px] lg:h-[26px] lg:px-2 relative">
                <p className="font-['Oswald'] font-semibold text-xs px-2 lg:text-[15px] leading-[26px] capitalize align-middle">
                  GLOBAL <span className="text-[#FFC222]">5K+</span> HAPPY
                  SPONSORS WITH US
                </p>
                <div className="absolute w-[150px] left-[53%] top-[44%] lg:w-[940px] h-[1px] bg-[#D9D9D9] opacity-100 lg:top-[40%] lg:left-[75%]"></div>
              </div>
            </div>

            <div className="flex w-full lg:h-[79px] lg:mt-8 lg:gap-10 gap-10 px-2">
              <div className="lg:w-[125px] lg:h-[71px] w-[70px]">
                <img src={pizzatext2} alt="pizza text 2" />
              </div>
              <div className="lg:w-[114px] lg:h-[65px] w-[70px]">
                <img src={cooktext} alt="cook text" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
