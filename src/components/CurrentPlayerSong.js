import Image from 'next/image'
import React from 'react'

export default function CurrentPlayerSong() {
  return (
    <div className='flex items-center p-2 gap-2'>
         <Image src={'/dummy_42x42.png'} alt={"title"} width={44} height={44} className='rounded-md h-12 w-12'/>
         <div className='flex flex-col justify-center'>
            <span className='block font-medium text-white'>Hello world</span>
            <span className='text-xs '>Lorem Ipsum</span>
         </div>
    </div>
  )
}
