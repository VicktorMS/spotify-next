import React from 'react'
import MediaItem from '../MediaItem'
import Link from 'next/link'

export default function MediaSection({ playlists }) {
    return (
        <section className='px-5 mt-12 max-w-screen-2xl'>
            <div className='flex justify-between mb-3'>
                <div>
                    <h2 className='text-xl font font-medium text-white hover:text-white hover:underline cursor-pointer'>Minhas playlists favoritas</h2>
                    <span className='text-sm text-zinc-400'>Playlists que eu curto</span>
                </div>
                <Link href={'playlists'} className='font-medium text-sm hover:text-white '>Mostrar Tudo</Link>
            </div>
            <div className='flex gap-8 flex-wrap h-72 overflow-y-hidden'>
                {playlists?.items.map(
                    playlist => (
                        <MediaItem key={playlist.id} playlistData={playlist}/>
                    )
                )}
            </div>

        </section>
    )
}
