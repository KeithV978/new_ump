// banner images import
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { motion } from "framer-motion";

import heroBanner from "../../Assets/Images/landing/banner.jpeg";
import heroBanner2 from "../../Assets/Images/landing/banner1.jpeg";
import heroBanner3 from "../../Assets/Images/landing/banner2.jpeg";

export const Hero = () => (
  <motion.div
    initial={{ y: "-200vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    // style={{height: '50vh'}}
  >
    <Carousel
      infiniteLoop={true}
      transitionTime={1000}
      showIndicators={true}
      showThumbs={false}
      autoPlay
      // dynamicHeight={true}
    >
      {[heroBanner, heroBanner2, heroBanner3].map((image, index) => (
          <span key={index}>
            <img src={image} alt="product" />
          </span>
        ))}
    </Carousel>
  </motion.div>
);
