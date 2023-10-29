import React from 'react'
import TooltipButton from '../TooltipButton'
import IconButton from '../IconButton'
import {
  Mic2,
  ListMusic,
  PlaySquare,
  Laptop2,
  
  Maximize2
} from 'lucide-react'
import MediaPlayerVolume from '../MediaPlayerVolume'

const optionsButtons = [
  {
    icon: <PlaySquare className='h-4' />,
    label: "Tela Tocando Agora"
  },
  {
    icon: <Mic2 className='h-4' />,
    label: "Letra",
  },
  {
    icon: <ListMusic className='h-4' />,
    label: "Fila",
  },
  {
    icon: <Laptop2 className='h-4' />,
    label: "Conectar a um dispositivo",
  },
]


export default function MediaPlayerMisc() {
  return (
    <div className='h-full items-center flex'>
      {optionsButtons.map((option, index) => (
        <TooltipIconBtn label={option.label} key={index}>
          {option.icon}
        </TooltipIconBtn>
      ))}
      <MediaPlayerVolume/>
    </div>
  )
}


const TooltipIconBtn = ({ children, label }) => {
  return (
    <TooltipButton color={'none'} label={label}>
      <IconButton>
        {children}
      </IconButton>
    </TooltipButton>
  )
}


