import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://s3-alpha-sig.figma.com/img/1969/e107/85b000a6a879e6201c108adfcc2af3fb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fym-JPYjdMR7t34eSLalpgYBSXjBRfWyG7ajjeEdPoOsByXrgQBbHbh~rxGXvTSi1dIxuyMj~fbdp8S2SQnY9gNqPe2vP5IJzNN0hW4sbdeTvZjpXV~rFjqVCdYSPd-jBKPwXUUCjz4hOjuY0KTNGh3YaoH7icg~03QVHlrQx2ozxcH~0R-jxSTa6~VkY71sLLdBfuOgXxpW0yfIMzy2kf~9nfKLGoNA0Ym0b-OoF84eYAyurcN~yfSPUCv4QXb1Hz6v5YeHoH23jlvz15KNEFWVFBfFSA6kh1HElvArodb~k6z0L-bDDRCgAHAY~rY5-7B0PUkaGC3XQNs0ZqGf5Q__',
    'https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://s3-alpha-sig.figma.com/img/1969/e107/85b000a6a879e6201c108adfcc2af3fb?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fym-JPYjdMR7t34eSLalpgYBSXjBRfWyG7ajjeEdPoOsByXrgQBbHbh~rxGXvTSi1dIxuyMj~fbdp8S2SQnY9gNqPe2vP5IJzNN0hW4sbdeTvZjpXV~rFjqVCdYSPd-jBKPwXUUCjz4hOjuY0KTNGh3YaoH7icg~03QVHlrQx2ozxcH~0R-jxSTa6~VkY71sLLdBfuOgXxpW0yfIMzy2kf~9nfKLGoNA0Ym0b-OoF84eYAyurcN~yfSPUCv4QXb1Hz6v5YeHoH23jlvz15KNEFWVFBfFSA6kh1HElvArodb~k6z0L-bDDRCgAHAY~rY5-7B0PUkaGC3XQNs0ZqGf5Q__',
    'https://images.unsplash.com/photo-1710292036904-3dc60dd14e53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === currentIndex ? 'slide active' : 'slide inactive'
          }
        >
          {index === currentIndex && (
            <img src={image} alt={`Slide ${index}`} className="image" />
          )}
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
