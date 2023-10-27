import React from 'react'
import CurrentPlayerSong from '../CurrentPlayerSong'
import { Heart } from 'lucide-react'
import TooltipButton from '../TooltipButton'
import MediaPlayerController from './MediaPlayerController'
import MediaPlayerMisc from './MediaPlayerMisc'


export default function Player() {
  return (
    <footer className='col-span-2 w-full h-full flex justify-between'>
      <div className='flex items-center gap-1'>
        <CurrentPlayerSong />
        <TooltipButton 
          content={<Heart className='h-5' />} 
          color={'none'} 
          label={"Salvar na Sua Biblioteca"} />
      </div>
      <MediaPlayerController/>
      <MediaPlayerMisc/>
    </footer>
  )
}
