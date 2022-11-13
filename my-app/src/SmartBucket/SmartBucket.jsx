import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './SmartBucketData';
import {StarIcon} from "@chakra-ui/icons"
const SmartBucket = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        
      }));
    };
  return (
    <div>
        <div className="Sliderfirst">
        <h1 style={{marginTop:"50px"}}>My Smart Basket</h1>
        
      
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div  className="card" >
            <div  className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <h4 className="category">
              Rating : {item.rating} <StarIcon marginBottom="6px"/>
              </h4>
            </div>
            <button className='Add-btn'>ADD</button>
          </div>
        ))}
      </Slider>
    </div>
    
    </div>
  )
}

export default SmartBucket