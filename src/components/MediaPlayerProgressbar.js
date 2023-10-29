import React from 'react'

export default function MediaPlayerProgressbar() {
    return (
        <div className='flex items-center gap-3 text-zinc-300'>
            <div className='text-sm'>1:30</div>
            <div className="flex w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="flex flex-col justify-center overflow-hidden bg-slate-50 hover:bg-lime-400 rounded-lg"
                    role="progressbar"
                    style={{ width: "25%" }}
                    ariaValuenow="25"
                    ariaValuemin="0"
                    ariaValuemax="100"></div>
            </div>

            <div className='text-sm'>3:30</div>
        </div>
    )
}

//Arrumar uma forma de ao passar o mouse na div da barra de progresso trocar a cor e o botão