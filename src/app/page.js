'use client'
import MainNavbar from '@/components/patterns/MainNavbar'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    import('preline')
  }, [])
  return (
   <>
      <MainNavbar/>
   </>
  )
}
