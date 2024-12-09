import React from 'react';
import Slider from 'react-slick';

const Header = () => {

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className}`}
        onClick={onClick}
      >
        <img src='/images/right-arrow.png' alt='Next' />
      </div>
    );
  }

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className}`}
        onClick={onClick}
      >
        <img src='/images/left-arrow.png' alt='Previous' />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const SearchInput = ({ inputClass }) => {
    return (
      <div className='relative'>
        <input
          placeholder='search for product'
          className={`pl-[50px] p-[14px] bg-[#EFF0F4] border placeholder:text-[#112025] opacity-50 text-[16px] font-semibold ${inputClass}`}
        />
        <img
          src='/images/search.png'
          className='text-white absolute top-3 left-2.5'
        />
      </div>
    );
  };

  const sliderData = [
    { text: 'Free same-day delivery on orders $35+ when you order by 2PM.' },
    { text: 'Free same-day delivery on orders $35+ when you order by 2PM.' },
    { text: 'Free same-day delivery on orders $35+ when you order by 2PM.' },
  ];

  return (
    <div>
      <div className='bg-[#195F6B] slider-container overflow-hidden header-slider'>
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              key={index}
              className='text-center font-semibold text-[8px] md:text-[14px] text-[#EFF0F4] my-1'
            >
              {item.text}
            </div>
          ))}
        </Slider>
      </div>

      <div className='hidden md:block bg-[#FAFFFF] justify-between '>
        <div className='flex justify-between items-center mx-20 py-5'>
          <div className='flex items-center gap-10'>
            <img src='/images/Logo.png' />
            <div>dropdown</div>
          </div>
          <div className='flex items-center gap-2.5'>
            <SearchInput inputClass='rounded-lg' />
            <div className='p-2.5 bg-[#EFF0F4] rounded-full relative'>
              <img src='/images/wishlist.png' className='w-4 text-white' />
            </div>
            <div className='p-2.5 bg-[#EFF0F4] rounded-full relative'>
              <img src='/images/user.png' className='w-4 text-white' />
            </div>
            <div className='p-2.5 bg-[#EFF0F4] rounded-full relative'>
              <img src='/images/cart.png' className='w-3.5 text-white' />
              <div className='bg-[#FDC161] absolute top-0 right-0 rounded-full px-1 text-[10px]'>
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:hidden flex-col items-center p-5 gap-5 bg-[#FAFFFF]'>
        <div className='w-full flex justify-between items-center'>
          <img src='/images/user.png' className='w-4 text-white' />
          <img src='/images/Logo.png' />
          <div className='p-2.5 rounded-full relative'>
            <img src='/images/cart.png' className='w-3.5 text-white' />
            <div className='bg-[#FDC161] absolute top-0 right-0 rounded-full px-1 text-[10px]'>
              1
            </div>
          </div>
        </div>
        <div className='w-full'>
          <SearchInput inputClass='rounded-full w-full' />
        </div>
      </div>
    </div>
  );
};

export default Header;
