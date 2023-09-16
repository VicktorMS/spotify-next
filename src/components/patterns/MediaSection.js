import React from 'react'
import playlistData from '/public/playlistData.json'
import MediaItem from '../MediaItem'

export default function MediaSection() {
    return (
        <section className='px-5 mt-12'>
            <h2 className='text-xl font font-medium text-white'>Minhas playlists favoritas</h2>
            <span className='text-sm text-zinc-400'>Playlists que eu curto</span>
            <div>
                <MediaItem/>
            </div>

        </section>
    )
}
