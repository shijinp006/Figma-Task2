import { motion } from "framer-motion";
import paztha from "../../assets/paztha.jpg";
import burger from "../../assets/tableburger.jpg";
import picture from "../../assets/picture.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";

export const Display12 = () => {
  const imagesArray = [paztha, burger, picture, picture2, picture3];

  return (
    <div className="flex flex-wrap w-full h-screen items-center justify-center">
      <div className="flex flex-wrap w-full h-full lg:h-[500px] items-center justify-center">
        <div className="flex w-full h-full  p-2 lg:p-0 lg:justify-center lg:items-center">
          <motion.div
            className="w-full h-full lg:h-[100px] opacity-100 grid grid-cols-2 lg:grid-cols-5 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {imagesArray.map((imge, index) => (
              <motion.div
                key={index}
                className="w-full h-full cursor-pointer transform transition-transform duration-300 hover:scale-90"
                whileHover={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={imge}
                  alt={`image-${index}`}
                  className="w-full h-full object-cover border"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
