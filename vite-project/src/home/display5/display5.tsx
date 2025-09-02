import { motion } from "framer-motion";
import hearticon from "../../assets/hearticon.svg";
import DeliciousBurger from "../../assets/Delicious Burger.png";
import GrilledChicken from "../../assets/Grilled Chicken.png";
import RutiWithChicken from "../../assets/Ruti With Beef Slice.png";
import FastFoodCombo from "../../assets/Fast Food Combo.png";
import ChicagoDeepPizza from "../../assets/Chicago Deep Pizza.png";
import ChinesePast from "../../assets/Chinese Pasta.png";
import WhopperBurgerKing from "../../assets/Whopper Burger King.png";
import RutiWithBeefSlice from "../../assets/Ruti With Beef Slice.png";
import truckicon from "../../assets/truckicon.svg";

export const Display5 = () => {
  const products = [
    {
      name: "Delicious Burger",
      discount: "-25%",
      oldPrice: "60.00$",
      newPrice: "45.00$",
      image: DeliciousBurger,
    },
    {
      name: "Grilled Chicken",
      discount: "-7%",
      oldPrice: "42.00$",
      newPrice: "39.00$",
      image: GrilledChicken,
    },
    {
      name: "Ruti With Chicken",
      discount: "-10%",
      oldPrice: "29.00$",
      newPrice: "26.00$",
      image: RutiWithChicken,
    },
    {
      name: "Fast Food Combo",
      discount: "-18%",
      oldPrice: "34.00$",
      newPrice: "28.00$",
      image: FastFoodCombo,
    },
    {
      name: "Chicago Deep Pizza",
      discount: "-21%",
      oldPrice: "28.00$",
      newPrice: "22.00$",
      image: ChicagoDeepPizza,
    },
    {
      name: "Chinese Pasta",
      discount: "-15%",
      oldPrice: "40.00$",
      newPrice: "34.00$",
      image: ChinesePast,
    },
    {
      name: "Whopper Burger King",
      discount: "-13%",
      oldPrice: "30.00$",
      newPrice: "26.00$",
      image: WhopperBurgerKing,
    },
    {
      name: "Ruti With Beef Slice",
      discount: "-7%",
      oldPrice: "30.52$",
      newPrice: "28.52$",
      image: RutiWithBeefSlice,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-full w-full bg-[#F5F8FD]">
      <div className="flex items-center flex-col w-full h-full lg:w-full lg:h-full bg-[#F5F8FD] p-2 lg:p-0">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap w-[300px] flex-col lg:flex-row h-[50px] lg:justify-center lg:w-[460px] lg:h-[150px] lg:gap-1"
        >
          
          <div className="lg:w-[463px] lg:h-[67px] rotate-0 opacity-100 lg:mt-3 ">
             <p className="font-['Oswald'] font-bold text-[8px] lg:text-[12px] lg:leading-[28px] text-center capitalize text-[#00A149]">
              Crispy, every bite taste
            </p>
            <h1 className="font-['Oswald'] font-bold lg:text-[40px] lg:leading-[67px] text-center capitalize text-[#212121]">
              Popular Fast Foods
            </h1>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="relative w-full h-full lg:w-[1000px] lg:h-full">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.95 }}
                className="relative flex flex-col justify-center w-full lg:w-[200px] lg:h-[300px] cursor-pointer transition-transform duration-300 lg:hover:scale-95"
              >
                {/* Product Image Section */}
                <div className="w-full h-[150px] lg:w-[200px] lg:h-[350px] rounded-[14px] lg:p-1 relative bg-[#FFFFFF] flex items-center justify-center">
                  {/* Heart Icon */}
                  <div className="absolute top-[-6%] left-2 w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]">
                    <img
                      src={hearticon}
                      alt="Heart Icon"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="w-[40px] h-[40px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Product Info Section */}
                <div className="flex justify-center items-center w-full lg:w-[200px] lg:h-[80px] p-2">
                  <div className="flex flex-col justify-center items-center w-full lg:w-[140px]">
                    {/* Prices + Discount */}
                    <div className="flex flex-row items-center justify-center gap-2">
                      <div className="flex items-center px-2 py-1 rounded-[3px] bg-[#FFC222]">
                        <p className="font-['Oswald'] font-semibold text-xs text-[#212121]">
                          {product.discount}
                        </p>
                      </div>
                      <p className="font-['Oswald'] font-normal text-[10px] line-through text-[#5C5C5B]">
                        {product.oldPrice}
                      </p>
                      <p className="font-['Oswald'] font-semibold text-[11px] text-[#5C5C5B]">
                        {product.newPrice}
                      </p>
                    </div>

                    {/* Product Name */}
                    <p className="mt-1 font-['Oswald'] font-semibold text-xs sm:text-sm text-center capitalize text-[#212121]">
                      {product.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center lg:w-[1230px] lg:h-[70px]"
        >
          <button className="flex items-center justify-center gap-2 w-[150px] h-[40px] lg:w-[210px] lg:h-[45px] rounded-[9px] bg-[#EE284B] text-white text-sm lg:text-lg font-semibold hover:scale-95 transition-transform duration-300 cursor-pointer">
            <img src={truckicon} alt="truck icon" className="w-5 h-5" />
            <p className="font-['Oswald'] text-[14px] leading-[17px] text-center capitalize">
              View More
            </p>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
