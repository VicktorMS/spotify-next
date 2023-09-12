import Image from 'next/image';
import React from 'react'

export default function LibraryItem({ data }) {
    const { image, title, type, info, author } = data;
    return (
        <div className='flex p-2 gap-4 h-16 text-sm items-center cursor-pointer hover:bg-zinc-800 transition rounded-md'>
            <Image src={'/dummy_42x42.png'} alt={title} width={48} height={48} className='rounded-md h-full'/>
            <div className='flex flex-col gap-2'>
                <h4 className='font-semibold text-zinc-100'>{title}</h4>
                <div className='text-xs font-medium text-zinc-400 flex gap-1'>
                    <div>{type}</div> 
                    <span>&#8226;</span>
                    <div>{type.toLowerCase() === 'playlist' ? info + " músicas" : author}</div>
                </div>
            </div>
        </div>
    )
}
