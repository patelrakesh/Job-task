import React from 'react';

const Header = () => {

  const SearchInput = ({ inputClass }) => {
    return (
      <div className='relative'>
        <input
          placeholder='search for product'
          className={`pl-[50px] p-[14px] bg-[#EFF0F4]  border border-solid border-[#112025] placeholder:text-[#112025] text-[16px] font-semibold ${inputClass}`}
        />
        <img
          src='/images/search.png'
          className='text-white absolute top-3 left-2.5'
        />
      </div>
    );
  };

  return (
    <div>
      <div className='bg-[#195F6B]'>slider</div>

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
