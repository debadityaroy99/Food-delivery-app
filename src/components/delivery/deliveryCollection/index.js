import React from 'react'
import './deliveryCollection.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/previousArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';

const deliveryItems=[
    {
        id:1,
        title:"Pizza",
        cover:
            "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        title:"Thali",
        cover:
            "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
        id:3,
        title:"Biryani",
        cover:
            "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id:4,
        title:"Chicken",
        cover:
            "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id:5,
        title:"Noodles",
        cover:
            "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
    {
        id:6,
        title:"Paratha",
        cover:
            "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    },
]

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow /> ,
    prevArrow: <PrevArrow />
  };


const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat What Makes You Happy</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem item={item} />;
            })}
        </Slider>
       </div>
    </div>
  );
};

export default DeliveryCollection