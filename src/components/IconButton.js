import React from 'react'
import { tv } from 'tailwind-variants'

const iconButton = tv({
    base: "cursor-pointer",
    variants: {
        size: {
            none: '',
            sm: 'h-3',
            md: 'h-5',
            lg: 'h-7',
            xl: 'h-8'
        },
        color: {
            primary: 'text-zinc-300 hover:text-zinc-50',
            disabled: 'text-zinc-700 cursor-default',
            active: 'text-lime-400 hover:text-lime-300'
        }
    },
    defaultVariants: {
        size: 'none',
        color: 'primary'
    }
})


export default function IconButton({className, size, color, children}) {
  return (
    <span className={iconButton({size, color, className})}>
        {children}
    </span>
  )
}
