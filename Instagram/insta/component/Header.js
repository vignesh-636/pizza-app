import Image from 'next/image'
import React from 'react'
import img from '../public/image/inst1.png'

function Header() {
    
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                <div className="  relative hidden lg:inline-grid h-20 w-20 cursor-pointer">
                   <Image src ={img} alt=" "
                   height={130}
                   width={120}
                  
                
                    />
                    </div>

               
            </div>
           

   {/* Lest */}

   {/* Middle */}

   {/* right */}
    
        </div>
    )
}

export default Header
