import Link from 'next/link'
import React from 'react'
import { Home } from 'lucide-react'
import { Search } from 'lucide-react';


export default function Navigation() {
    return (
        <nav className='bg-zinc-900 rounded-lg p-4'>
            <ul className='w-full h-full flex flex-col justify-center gap-2'>
                <li className='grow hover:text-zinc-100 transition font-medium flex items-center gap-3'>
                    <Home className='h-5' /><Link href='/'>Início</Link>
                </li>
                <li className='grow hover:text-zinc-100 transition font-medium flex items-center gap-3'>
                    <Search className='h-5'/><Link href='/search'>Buscar</Link>
                </li>
            </ul>
        </nav>
    )
}
