import Image from "next/image";

const StayConnected = () => {

  const checkBoxData = [
    {name: 'Dog'},
    {name: 'Cat'},
    {name: 'Small Pets'},
    {name: 'Fish'},
    {name: 'Birds'},
  ]

  return (
    <>
      <div className='flex gap-2.5 bg-[#EFF0F4] mx-5 md:mx-40 p-5 md:py-10 md:px-20 rounded-[20px] relative'>
        <div className='flex flex-col gap-5 max-w-full md:max-w-[45%] pb-[280px] md:pb-40'>
          <div className='flex flex-col gap-2.5'>
            <span className='font-medium text-[30px] text-black'>
              Stay connected with us.
            </span>
            <span className='font-normal text-[16px] text-[#666666]'>
              Choose your pet and subscribe! Receive exclusive discounts to
              always buy at the best price in Petshop.
            </span>
          </div>

          <div className='hidden md:flex justify-between'>
            {checkBoxData.map((item, index) => (
              <div key={index} className='flex items-center gap-2.5'>
                <input type='checkbox' />
                <label htmlFor='' className='font-medium text-[16px]'>
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          <div className='grid md:hidden grid-cols-3 gap-y-2.5'>
            {checkBoxData.map((item, index) => (
              <div key={index} className='flex items-center gap-1.5'>
                <input type='checkbox' />
                <label htmlFor='' className='font-medium text-[12px]'>
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          <div className='relative max-w-full md:max-w-[70%]'>
            <input
              type='text'
              placeholder='Signup for Newsletter'
              className='bg-white rounded-full px-5 py-4 w-full font-semibold text-[16px] '
            />
            <button className='uppercase bg-[#112025] rounded-full font-semibold text-[16px] text-white px-5 py-2.5 absolute right-2 top-1.5'>
              submit
            </button>
          </div>
        </div>
        <img
          src='/images/pet.png'
          alt=''
          className='absolute bottom-[80px]  md:bottom-0 right-5 md:right-10 w-[200px] h-[200px] md:w-auto md:h-auto'
        />
      </div>
    </>
  );
};

export default StayConnected;
