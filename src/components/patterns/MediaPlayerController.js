import React from 'react'
import MediaPlayerProgressbar from '../MediaPlayerProgressbar'
import SkipForwardIcon from '../Icons/SkipForwardIcon'
import SkipBackIcon from '../Icons/SkipBackIcon'
import TooltipButton from '../TooltipButton'
import PauseIcon from '../Icons/PauseIcon'
import { Shuffle, Repeat } from 'lucide-react'
import IconButton from '../IconButton'

export default function MediaPlayerController() {
    return (
        <div className=' w-full max-w-[600px] flex flex-col justify-between mt-2'>
            <div className='flex justify-center items-center gap-4 h-full text-zinc-300'>
                <IconButton><Shuffle className='h-5'/></IconButton>
                <IconButton><SkipBackIcon /></IconButton>
                <div className='text-slate-950 bg-white rounded-full p-1 hover:scale-110 '>
                    <PauseIcon />
                </div>
                <IconButton><SkipForwardIcon/></IconButton>
                <IconButton><Repeat className='h-5'/></IconButton>
            </div>
            <MediaPlayerProgressbar />
        </div>
    )
}

