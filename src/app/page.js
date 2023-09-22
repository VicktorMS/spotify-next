'use client'
import MainNavbar from '@/components/patterns/MainNavbar'
import MediaSection from '@/components/patterns/MediaSection'
import UserProfile from '@/components/patterns/UserProfile'
import playlistsData from '/public/playlistData.json'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    import('preline')
  }, [])


 
  return (
   <>
      <MainNavbar/>
      <UserProfile/>
      <MediaSection playlists={playlistsData}/>
      <MediaSection/>
   </>
  )
}
