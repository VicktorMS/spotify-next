import React from 'react'
import { Library, Plus, ArrowRight, Search } from 'lucide-react';
import TooltipButton from './TooltipButton';
import Dropdown from './Dropdown';
import LibraryItemGroup from './patterns/LibraryItemGroup';


export default function YourLibrary() {
    return (
        <>
            <div className='flex items-center justify-between p-4'>
                <div className='flex align-bottom gap-2'>
                    <Library className='w-6' />
                    <h2 className='font-bold'>Sua Biblioteca</h2>
                </div>
                <div className='flex gap-1'>
                    <TooltipButton content={<Plus className='w-6'/>} label={"Crie playlist ou pasta"}/>
                    <TooltipButton content={<ArrowRight className='w-6'/>} label={"Mostrar mais"}/>
                </div>
            </div>
            <div className='overflow-y-auto px-2 max-h-full scrollbar-thumb-zinc-600 scrollbar-thin hover:scrollbar-thumb-zinc-500'>
                <div className='flex justify-between px-2 mb-2'>
                    <TooltipButton
                        content={<Search className='w-5 h-5'/>}
                        label={"Buscar em sua biblioteca"}
                    />
                    <Dropdown/>
                </div>
                <LibraryItemGroup/>
            </div>
        </>
    )
}
