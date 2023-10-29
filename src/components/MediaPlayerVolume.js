import React from 'react'
import TooltipButton from './TooltipButton'
import IconButton from './IconButton'
import {
    Volume,
  Volume1,
  Volume2,
  VolumeX,
} from 'lucide-react'

export default function MediaPlayerVolume() {
  return (
    <div>
        <TooltipButton color={'none'} label={"Volume"}>
            <IconButton>
                <Volume1 className='h-5'/>
            </IconButton>
        </TooltipButton>
    </div>
  )
}
