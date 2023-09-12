import React, { Children } from 'react'
import { tv } from "tailwind-variants";

const button = tv({
    base: "inline-flex justify-center items-center gap-2 p-1 transition ",
    variants: {
        shape: {
            circle: 'rounded-full',
            rounded: 'rounded-md'
        },
        color: {
            transparent: 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200',
            primary: 'text-zinc-200 bg-zinc-700 hover:bg-zinc-600 hover:text-zinc-100',
            secondary: 'bg-zinc-950 hover:bg-black text-zinc-200 hover:text-zinc-100'
        }
    },
    defaultVariants: {
        shape: 'circle',
        color: 'transparent'
    }
})



export default function TooltipButton({className, shape, color, content, label, children}) {
    return (
        <div className="hs-tooltip inline-block [--trigger:hover]">
            <a className="hs-tooltip-toggle block text-center" href="javascript:;">
                <span className={button({shape, color, className})}>
                    {content}{children}
                </span>
                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-zinc-700 text-sm text-zinc-50 rounded-md shadow-md " role="tooltip">
                   {label}
                </div>
            </a>
        </div>

        
    )
}

/* <div className="hs-tooltip inline-block [--trigger:hover]">
<a className="hs-tooltip-toggle block text-center" href="javascript:;">
    <span className="inline-flex justify-center items-center gap-2 text-zinc-400 hover:bg-zinc-800 rounded-full p-1 transition hover:text-zinc-200">
        {icon}
    </span>
    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-zinc-700 text-sm text-zinc-50 rounded-md shadow-md " role="tooltip">
       {label}
    </div>
</a>
</div> */