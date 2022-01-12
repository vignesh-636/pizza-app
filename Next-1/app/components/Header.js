import {
    BadgeCheckIcon,
    CollectionIcon,
HomeIcon, LightBulbIcon, SearchIcon, UserIcon
} from '@heroicons/react/outline'
import React from 'react'
import HeaderItem from './HeaderItem'

function Header() {
    return (
      <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'> 
         <div className=" flex flex-grow justify-evenly max-w-2xl">
         <HeaderItem title="HOME" Icon={HomeIcon} />
         <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
         <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
         <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
         <HeaderItem title="SEARCH" Icon={SearchIcon} />
         <HeaderItem title="ACCOUNT" Icon={UserIcon} />

         </div>
          <img
          className="object-contain"
          src="https://simg.nicepng.com/png/small/242-2424140_hulu-png-logo-hulu-logo-white-png.png" alt=" "
          height="100px" width="200px" />
      </header>
    )
}

export default Header