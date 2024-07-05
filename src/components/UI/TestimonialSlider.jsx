import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import '../../styles/testimonialslider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
        "Absolutely fantastic pizza! The crust is perfectly crispy, the toppings are generous, and the sauce is flavorful. Service was quick and friendly. Can't wait to return and try more from their menu. Highly recommended!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Steven George</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Delicious and authentic Italian pizza! The Margherita was a standout with fresh ingredients and a perfectly balanced taste. Cozy atmosphere and attentive staff made our dining experience enjoyable. Definitely a must-visit for pizza lovers!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='rounded' />
          <h6>Markham Paul</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Best pizza in town! The wood-fired oven gives the crust a wonderful smoky flavor. Each bite was a delight. Friendly staff and reasonable prices. We loved the ambiance and will certainly be back for more."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>Amelia Shephered</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
        "Amazing variety of pizzas to choose from! Each slice was bursting with flavor. The gourmet options are a real treat. The service was prompt, and the staff were very accommodating. A great place for family dinners!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava04} alt='avatar' className=' rounded' />
          <h6>Lisa Ford</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
