import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './BestSellerData';
import "./BestSeller.css"
import {StarIcon} from "@chakra-ui/icons"

const BestSeller = ({handleClick}) => {
    
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
    <div style={{marginTop:"-50px"}}>
        <div className="Sliderfirst">
        <h1 style={{marginTop:"30px"}}>Best Sellers</h1>
        
      
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
              <h3>{item.priceWithQunt}, Rs-{item.price}</h3>
              <h4 className="category">
              Rating : {item.rating} <StarIcon marginBottom="6px"/>
              </h4>
             
            </div>
            <button onClick={() => handleClick(item)} className='Add-btn'>ADD</button>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default BestSeller