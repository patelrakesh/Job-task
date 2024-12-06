import React, { useState } from 'react';

const CategoryItem = () => {
    const [activeTab, setActiveTab] = useState(0);

    

    const DogContent = () => (
        <div className='flex'>
            <div className='w-full'>asd</div>
            <div className='w-full'>asd</div>
            <div className='w-full'>asd</div>
        </div>
    )

    const tabData = [
      { name: 'cat', content: 'Content for Tab 1' },
      { name: 'dog', content: <DogContent /> },
      { name: 'new born', content: 'Content for Tab 3' },
      { name: 'fish', content: 'Content for Tab 3' },
      { name: 'birds', content: 'Content for Tab 3' },
    ];

  return (
    <div className='mx-20 flex justify-center items-center flex-col'>
      <div className='text-center max-w-[450px]'>
        <p className='text-[16px] font-medium capitalize'>
          based on veterinary doctor's
        </p>
        <p className='text-[30px] font-medium'>
          some of our favorites to care for their whole health{' '}
        </p>
      </div>

      <div className='w-full mx-10'>
        <div className='flex justify-between border px-10 py-2.5'>
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-[16px] font-medium focus:outline-none ${
                activeTab === index
                  ? 'text-white bg-[#112025] rounded-full'
                  : 'hover:text-white hover:bg-[#112025] hover:rounded-full'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className='p-4 mt-4 bg-gray-100 rounded-b-md'>
          {tabData[activeTab].content}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem