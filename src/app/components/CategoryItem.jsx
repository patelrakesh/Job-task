import React, { useState } from 'react';
import Slider from 'react-slick';

const CategoryItem = () => {
  const [activeTab, setActiveTab] = useState(1);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div
        className=''
        style={{
          padding: '15px',
          marginTop: '25px',
          bottom: '-50px',
        }}
      >
        <ul className='custom-appendDots' style={{ margin: '0px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#666666',
            display: 'inline-block',
            margin: '0 5px',
          }}
        />
      );
    },
  };

  const OrderNowButton = ({ btnClass }) => (
    <button
      className={`bg-[#112025] text-white py-[9px] px-[18px] font-semibold text-[14px] ${btnClass}`}
    >
      Order Now
    </button>
  );

  const AccessoriesFoodComboCard = () => (
    <div className="flex flex-col items-start gap-5 bg-[url('/images/dog-food-and-leash.png')] w-full h-full min-h-[290px] md:min-h-[540px] bg-cover p-5 rounded-[8px]">
      <div className='flex flex-col gap-2.5'>
        <span className='font-medium text-[12px] text-[#112025]'>
          Accessories + Food Combo
        </span>
        <span className='font-semibold text-[16px] text-[#112025] max-w-[150px] capitalize'>
          Ofcourse we sale product with love
        </span>
      </div>
      <OrderNowButton btnClass='rounded-[8px]' />
    </div>
  );

  const PeanutButterCookiesCard = () => (
    <div className='w-full bg-[#FDC161] rounded-[8px] flex flex-col justify-center items-center text-center pt-5 min-h-[290px] md:min-h-[500px]'>
      <div className='flex flex-col gap-2.5 items-center'>
        <span className='font-semibold text-[16px] text-[#112025] capitalize max-w-[150px]'>
          peanut butter cookies
        </span>
        <span className='font-medium text-[12px] text-[#112025] max-w-[180px]'>
          Lectus commodo pharetra, sit aliquam tristique neque in.
        </span>
        <OrderNowButton btnClass='rounded-[8px]' />
      </div>
      <img
        src='/images/peanut-butter.png'
        alt=''
        className='h-[120px] md:h-[330px]'
      />
    </div>
  );

  const ChocolateIngidriantCard = ({ mainDivClass, image }) => (
    <div className={`flex rounded-[8px] ${mainDivClass}`}>
      <div className='flex flex-col items-start gap-5 p-5 '>
        <div className='flex flex-col gap-2.5'>
          <span className='font-medium text-[12px] text-[#112025]'>
            Axel & blue
          </span>
          <span className='font-semibold text-[16px] text-[#112025] max-w-[200px] capitalize'>
            Made from the real chocolate ingidriant
          </span>
        </div>
        <OrderNowButton btnClass='rounded-full' />
      </div>
      <img src={image} alt='' className='w-[150px] md:w-auto' />
    </div>
  );

  const DogContent = () => (
    <>
      <div className='hidden md:flex gap-2.5'>
        <AccessoriesFoodComboCard />
        <PeanutButterCookiesCard />
        <div className='w-full flex flex-col gap-2.5'>
          <ChocolateIngidriantCard
            mainDivClass='bg-white border border-solid border-[#D5EFF9]'
            image='/images/orderNow.png'
          />
          <ChocolateIngidriantCard
            mainDivClass='bg-[#D5EFF9]'
            image='/images/ellen-and-co-peanut-butter-treats.png'
          />
        </div>
      </div>
      <div className='block md:hidden'>
        <Slider {...settings}>
          <AccessoriesFoodComboCard />
          <PeanutButterCookiesCard />
          <ChocolateIngidriantCard
            mainDivClass='bg-white border border-solid border-[#D5EFF9]'
            image='/images/orderNow.png'
          />
          <ChocolateIngidriantCard
            mainDivClass='bg-[#D5EFF9]'
            image='/images/ellen-and-co-peanut-butter-treats.png'
          />
        </Slider>
      </div>
    </>
  );

  const tabData = [
    { name: 'cat', icon: '/images/catBlack.svg', content: 'Content for Tab 1' },
    { name: 'dog', icon: '/images/dogBlack.svg', content: <DogContent /> },
    {
      name: 'new born',
      icon: '/images/newBornBlack.svg',
      content: 'Content for Tab 3',
    },
    { name: 'fish', icon: '/images/fish.svg', content: 'Content for Tab 3' },
    { name: 'birds', icon: '/images/bird.svg', content: 'Content for Tab 3' },
  ];

  return (
    <div className='mx-0 md:mx-20 flex justify-center items-center flex-col gap-5 py-10'>
      <div className='flex flex-col items-center justify-center text-center gap-2.5 max-w-full md:max-w-[450px] !text-[#112025]'>
        <span className='text-[10px] md:text-[16px] font-medium uppercase opacity-50'>
          based on veterinary doctor's
        </span>
        <span className='text-[16px] md:text-[30px] font-medium mx-8 md:mx-0'>
          some of our favorites to care for their whole health
        </span>
      </div>

      <div className='w-full mx-10'>
        <div className='flex justify-between md:border px-5 md:px-10 py-2.5 overflow-auto w-full gap-2.5'>
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2.5 py-2 px-6 md:px-4 text-[10px] md:text-[16px] font-medium focus:outline-none uppercase rounded-[24px] md:rounded-full ${
                activeTab === index
                  ? 'text-white bg-[#112025]'
                  : 'bg-[#EFF0F4] md:bg-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <img
                src={tab.icon}
                alt=''
                className={` ${activeTab === index ? 'filter invert' : ''}`}
              />
              {tab.name}
            </button>
          ))}
        </div>
        <div className='p-4 mt-4 rounded-b-md'>
          {tabData[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
