import { motion } from "framer-motion";
import whitebg from "../../assets/whitebg.jpg";
import glass from "../../assets/glass (2).png";
import chickentext from "../../assets/chickentext.png";
import pizzatext from "../../assets/pizzatext (2).png";
import bestburgers from "../../assets/Bestburgers.png";
import blackbg from "../../assets/blackkwallbg.jpg";

export const Display6 = () => {
  return (
    <div className="flex justify-center lg:items-center w-full h-full bg-[#F5F8FD] relative ">
      <div
        className={`flex flex-col sm:flex-row md:flex-row lg:justify-center lg:items-center md:items-start w-full h-full md:h-[800px] lg:h-full gap-2 md:gap-4 lg:gap-6
       bg-[url(${whitebg})] bg-cover bg-center p-2 lg:p-4`}
      >
        {/* Left Glass */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block w-full md:w-[80px] lg:w-[225px] h-auto md:h-full flex justify-center md:justify-start"
        >
          <div className="w-[60px] md:w-[150px] lg:w-[150px] h-auto md:h-full flex justify-center items-center lg:mt-30">
            <motion.img
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={glass}
              alt="glass"
              className="w-[50px] md:w-[150px] lg:w-[150px] h-auto md:h-full object-contain absolute lg:top-[13%] left-[-1%]"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-center lg:items-center lg:items-start w-full text-center md:text-left gap-4 md:gap-9 ">
          <div className="w-full md:w-[300px] lg:w-full h-auto flex flex-col gap-4 md:gap-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-[120px] md:w-[180px] h-[20px] md:h-[28px]"
            >
              <h3 className="font-['Oswald'] font-bold text-xs md:text-sm lg:text-base leading-[28px] text-[#00A149] capitalize">
                Crispy, every bite taste
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:max-w-[633px] h-auto md:h-[160px] lg:h-[100px]"
            >
              <h1 className="font-['Oswald'] font-bold text-start text-[20px] md:text-[28px] lg:text-[40px] leading-[28px] md:leading-[40px] lg:leading-[50.2px] capitalize">
                Trending Food combo <br />
                offer less <span className="text-[#00A149]">20%</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[500px] h-auto"
            >
              <p className="font-['Oswald'] font-normal text-start text-[10px] md:text-[12px] lg:text-[14px] leading-[18px] md:leading-[28px] text-[#5C5C5B]">
                A team of dreamers and doers building unique interactive music
                and art festivals.
              </p>
            </motion.div>

            {/* Offers */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 w-full lg:w-[423.7px]">
              {[
                {
                  img: chickentext,
                  bg: "bg-[#F4F1EA]",
                  text: "30% off 4pcs hot crispy & 8 pcs wing",
                },
                {
                  img: pizzatext,
                  bg: "bg-[#FFC222]",
                  text: "20% off tasty pizza with drink",
                },
                {
                  img: bestburgers,
                  bg: "bg-[#F4F1EA]",
                  text: "2pcs hamburger with drinks & sauce",
                },
              ].map((offer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`flex items-center w-full md:w-[410px] h-[55px] rounded-[5px] ${offer.bg} gap-2 p-2 md:p-4 cursor-pointer hover:scale-90 transition-transform duration-300`}
                >
                  <div className="w-[50px] md:w-[70px] h-[36px] flex items-center justify-center">
                    <img
                      src={offer.img}
                      alt="offer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-['Oswald'] font-medium text-[12px] md:text-[12px] text-[#212121] capitalize text-center md:text-left">
                    {offer.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto mt-4 lg:mt-0 flex justify-center lg:justify-end"
          >
            <img
              src={blackbg}
              alt="blackbg"
              className="w-full md:w-[500px] lg:w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
