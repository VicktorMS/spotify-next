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
      <MediaSection 
        title="Minhas playlists favoritas"
        subTitle="Playlists que eu curto"
        playlists={playlistsData}
      />
      <MediaSection
        title="Meus artistas favoritos"
        subTitle="Artistas que mais curto"
      />
     

   </>
  )
}
