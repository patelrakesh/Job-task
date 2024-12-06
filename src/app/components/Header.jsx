import React from 'react'

const Header = () => {
  return (
    <div>
      <div>slider</div>
      <div className='hidden md:block'>desktop</div>
      <div className='block md:hidden'>mobile</div>
    </div>
  );
}

export default Header