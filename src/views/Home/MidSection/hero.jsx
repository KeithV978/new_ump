import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { motion } from "framer-motion";

import heroBanner from "../../../assets/images/home/example.jpeg";
import heroBanner2 from "../../../assets/images/home/example2.jpeg";


export const Hero = () => {
  return (
    <motion.div
    initial={{ y: "-200vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    style={{borderRadius: '9px', overflow: 'hidden'}}
  >
    <Carousel
      infiniteLoop={true}
      transitionTime={1000}
      showIndicators={true}
      showThumbs={false}
      autoPlay
      // dynamicHeight={true}
    >
      {[heroBanner, heroBanner2].map((image, index) => (
          <span key={index}>
            <img src={image} alt="product" />
          </span>
        ))}
    </Carousel>
  </motion.div>
  )
}
