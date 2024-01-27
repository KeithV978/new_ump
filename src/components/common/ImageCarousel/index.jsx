import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ 
  images, 
  transitionTime, 
  showThumbs, 
  showIndicators, 
  infiniteLoop,
  autoPlay,
  children 
}) => {
 if(images){ 
  return (
    <Carousel 
      infiniteLoop={infiniteLoop} 
      transitionTime={transitionTime} 
      showIndicators={showIndicators} 
      showThumbs={showThumbs}
      autoPlay={true}
      >
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image} alt="product" />
          </div>
        );
      })}
    </Carousel>
  );}

  return(
    <Carousel infiniteLoop={infiniteLoop} transitionTime={transitionTime} showIndicators={showIndicators} showThumbs={showThumbs}>
      {children}
    </Carousel>
  )
};

export default ImageCarousel;
