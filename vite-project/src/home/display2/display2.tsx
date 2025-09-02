import { motion } from "framer-motion";
import tomato from "../../assets/tomatosingle.png";
import chicken from "../../assets/chicken.png";
import burger from "../../assets/burger.png";
import propasta from "../../assets/propasta.png";
import pizza from "../../assets/pizza.png";
import leftyellowarrow from "../../assets/leftyellowarrow.svg";
import rightyellowarrow from "../../assets/rightyellowarrow.svg";

export const Display2 = () => {
  const products = [
    { name: "Chicken", image: chicken, count: 8 },
    { name: "Burger", image: burger, count: 3 },
    { name: "Propasta", image: propasta, count: 3 },
    { name: "Pizza", image: pizza, count: 3 },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F8FD] ">
      <div className="flex flex-col w-full min-h-screen ">
        <div className="flex flex-col lg:flex-row w-full lg:h-[548px] relative">
          {/* 🍅 Tomato */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block w-[40px] h-[148px]"
          >
            <img src={tomato} alt="tomato" />
          </motion.div>

          <div className="w-full">
            {/* ✅ Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-start lg:p-3"
            >
              <p className="font-['Oswald'] font-bold text-xs lg:text-sm text-[#00A149] ml-2">
                Crispy, every bite taste
              </p>
              <h2 className="font-['Oswald'] font-bold text-[28px] lg:text-[45px] leading-tight text-[#212121] text-center lg:text-right mt-2 ml-3">
                Popular Food Items
              </h2>
            </motion.div>

            {/* ✅ Arrows (desktop only) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex absolute right-10 bottom-120 w-[100px] h-[60px] items-center justify-center gap-2"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full cursor-pointer border">
                <img
                  src={leftyellowarrow}
                  alt="left yellow arrow"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#FFC222] cursor-pointer">
                <img
                  src={rightyellowarrow}
                  alt="right yellow arrow"
                  className="w-4 h-4"
                />
              </div>
            </motion.div>

            {/* ✅ Products */}
            <div className="flex flex-col gap-6 mt-6 lg:flex-row lg:gap-4 lg:items-center lg:justify-center">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col w-full max-w-[300px] h-auto lg:w-[250px] lg:h-[394px] rounded-[14px] bg-white justify-center items-center cursor-pointer transition-transform duration-300 lg:hover:scale-95 lg:hover:shadow-xl mx-auto"
                >
                  <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-['Oswald'] font-bold text-[22px] lg:text-[28px] leading-[30px] text-center capitalize text-[#212121]">
                      {product.name}
                    </p>
                    <div className="w-[53px] h-[2px] bg-[#FFC222] mt-1"></div>
                    <p className="font-['Oswald'] font-semibold text-[14px] lg:text-[15px] leading-[22px] text-center capitalize text-[#FFC222] mt-1">
                      {product.count} Products
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
