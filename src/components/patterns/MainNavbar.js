import React from 'react'
import TooltipButton from '../PopoverButton'
import { ChevronLeft, ChevronRight, GithubIcon } from 'lucide-react';


export default function MainNavbar() {
    return (
        <header className='py-4 flex justify-between px-4 rounded-t-lg'>
            <div className='flex gap-3 items-center'>
                <TooltipButton color='secondary' label='Voltar' content={<ChevronLeft />} />
                <TooltipButton color='secondary' label='Avançar' content={<ChevronRight />} />
            </div>
            <div className='flex items-center gap-3'>
                <TooltipButton color='secondary' label={"Acesse meu GitHub"} className={'px-3 py-1 flex justify-center items-center text-sm font-medium'}>
                    @VicktorMS
                </TooltipButton>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://avatars.githubusercontent.com/u/70035085?s=400&u=c43afa7c1d9fc570c5b469b4ae28b42b7901bdfa&v=4" alt="User profile Image"/>
            </div>
        </header>
    )
}
