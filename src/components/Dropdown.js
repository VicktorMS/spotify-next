import React from 'react'

export default function Dropdown() {
    return (
        <div className="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-unstyled" type="button" className="hs-dropdown-toggle inline-flex justify-center items-center gap-x-2 text-sm hover:text-zinc-100">
                Recentes
                <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-40 hidden z-10 mt-2 min-w-[15rem] bg-zinc-800 p-1 text-sm rounded-md" aria-labelledby="hs-dropdown-unstyled ">
                <p className='font-bold text-xs text-zinc-400 h-8 px-4 flex items-center'>Classificar por</p>
                <div className='h-full flex flex-col gap-1'>
                    <DropdownItem>Recentes</DropdownItem>
                    <DropdownItem>Adicionados Recentemente</DropdownItem>
                    <DropdownItem>Ordem Alfabética</DropdownItem>
                    <DropdownItem>Criador</DropdownItem>
                </div>

            </div>
        </div>
    )
}



const DropdownItem = ({children}) => {
  return (
    <div className="h-9 cursor-pointer hover:bg-zinc-700 px-4 align-middle flex items-center rounded-sm" >{children}</div>
  )
}

