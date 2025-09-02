import { motion } from "framer-motion";
import arrow from "../../assets/rightarrow.svg";
import mashroom from "../../assets/footer-left.png.png";
import leaf from "../../assets/leaf.png";

// import shadow from "../../assets/shadow.png";

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
    <footer className=" flex bg-[#F5F8FD] flex-col h-full relative  w-full pt-24 pb-4 ">
      <div className="w-full  relative z-30 max-w-7xl px-4 md:px-8 lg:px-10 flex flex-col mx-auto ">
        {/* top section  */}
        <div className="h-full grid gap-10 grid-cols-1 lg:grid-cols-6">
          <div
            className=" col-span-2 bg-[#F3274C] h-[364px] flex 
            flex-col justify-between rounded-2xl p-10"
          >
            <div>
              <div className="lg:w-[111px] lg:h-[27px]">
                <p className="font-[Fugaz_One] text-[18px] leading-[26.67px] font-normal text-[#FFFFFF] align-middle">
                  Pizza Hut
                </p>
                <p className="w-[104px] h-[27px] rotate-0 opacity-100 font-[Fugaz_One] text-[8px] leading-[8.67px] font-normal text-white align-middle lg:px-2">
                  FOOD & RESTAURANT
                </p>
              </div>
            </div>
            <div>
              <p className="w-[306.38px] h-[26.67px] rotate-0 opacity-100 font-[Fredoka_One] text-[12px] leading-[26.67px] f text-white align-middle">
                Tuesday – Saturday: 12:00pm – 23:00pm
              </p>
              <p className="w-[137.14px] h-[26.67px] rotate-0 opacity-100 font-[Fredoka_One] text-[12px] leading-[26.67px]  text-white align-middle underline decoration-solid decoration-[0px]">
                Closed on Sunday
              </p>
            </div>
            <div>
              <p className="w-[207.61px] h-[26.67px] rotate-0 opacity-100 font-[Fredoka_One] text-[12px] leading-[26.67px] font-normal text-white align-middle">
                5 star rated on TripAdvisor
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-[Fredoka_One] text-[20px] leading-[43.33px] font-normal text-black relative inline-block">
              About
              <span className="absolute left-0 bottom-0 w-[60px] h-[5px] bg-[#FFD40D]"></span>
            </h4>

            <ul>
              {aboutItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 lg:mt-6 cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img src={item.image} alt={item.name} className="w-2 h-2" />
                  <span className="font-[Epilogue] text-xs">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-[Fredoka_One] text-[20px] leading-[43.33px] font-normal text-black relative inline-block">
              Menu
              <span className="absolute left-0 bottom-0 w-[60px] h-[5px] bg-[#FFD40D]"></span>
            </h4>

            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 lg:mt-6 cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img src={item.image} alt={item.name} className="w-2 h-2" />
                  <span className="font-[Epilogue] text-xs">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col">
            <h4 className="font-[Fredoka_One] text-[20px] leading-[43.33px] font-normal text-black relative inline-block">
              Newsletter
              <span className="absolute left-0 bottom-0 w-[100px] h-[5px] bg-[#FFD40D]"></span>
            </h4>
            <div className="w-[360px] h-[27.5px] rotate-0 opacity-100  lg:mt-6">
              <p className="font-[Epilogue] text-[12px] leading-[26.67px] font-normal text-black align-middle">
                Get recent news and updates.
              </p>
            </div>
            <div className="w-[360px] h-[149px] flex flex-col rotate-0 opacity-100  lg:mt-5 lg:gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-[250px] h-[50px] rounded-[9px] border border-[#DEDEDE] bg-white px-4 text-[16px] leading-[100%] font-epilogue font-normal text-[#C6C6C6] outline-none"
              />
              <div className="w-[130px] h-[55px] rounded-[12px] border-3 border-[#F3274C] relative lg:ml-4 opacity-100 ">
                <button className="w-[130px] h-[47px] rounded-[12px] bg-[#F3274C] text-white font-[Fredoka_One] text-[12px] leading-[100%] font-normal text-center align-middle relative lg:top-[2%] lg:left-[-10%] cursor-pointer hover:scale-90 transition-transform duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* bottom footer section  */}
        <div className=" hidden lg:block min-h-[92px] flex lg:items-center mt-24 w-full  border-t-[10px] border-t-[#FFD40D] lg:px-40 ">
          <div className="w-full flex lg:items-center lg:h-[46.66px] rotate-0 opacity-100 ">
            <div className="w-[630px] h-[27px] flex  rotate-0 opacity-100 ">
              <p className="w-[45px] h-[26.67px] rotate-0 opacity-100 font-[Fugaz_One] text-xs leading-[26.67px] font-normal text-[#F3274C] align-middle ">
                © 2024
              </p>
              <p className="w-[60px] h-[27px] rotate-0 opacity-100 font-[Fugaz_One] text-xs leading-[26.67px] font-normal text-[#F3274C] align-middle ">
                Pizza Hut
              </p>
              <p className=" w-[26px] font-[Fugaz_One] text-xs leading-[26.67px] font-normal text-black align-middle ">
                | All
              </p>
              <p className="w-[161px] h-[27px] rotate-0 opacity-100 font-[Fredoka_One] text-xs leading-[26.67px] font-normal text-black align-middle">
                shawonetc3 Themes
              </p>
            </div>
            <p className="w-[73.06px] h-[26.67px] rotate-0 opacity-100 font-[Fredoka_One] text-xs leading-[26.67px] font-normal text-black align-middle underline decoration-solid decoration-[0px] ">
              Facebook
            </p>
            <p className="w-[77.77px] h-[26.67px] rotate-0 opacity-100 font-[Fredoka_One] text-xs leading-[26.67px] font-normal text-black align-middle underline decoration-solid decoration-[0px] lg:ml-20">
              Instagram
            </p>
          </div>
        </div>
      </div>
      <img
        src={mashroom}
        alt=""
        className="absolute left-0 w-[180px] bottom-0 opacity-65"
      />
      <img src={leaf} alt="" className="absolute right-0 w-[180px] bottom-0 opacity-65" />
    </footer>
  );
};
