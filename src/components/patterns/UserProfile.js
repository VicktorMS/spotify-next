import Image from 'next/image'
import React from 'react'

export default function UserProfile() {

    const userProfileData = {
        "display_name": "Victor",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/dogmaul-br"
        },
        "followers": {
            "href": null,
            "total": 3
        },
        "href": "https://api.spotify.com/v1/users/dogmaul-br",
        "id": "dogmaul-br",
        "images": [
            {
                "url": "https://i.scdn.co/image/ab67757000003b82c9cf6c7843e4816f11bcb809",
                "height": 64,
                "width": 64
            },
            {
                "url": "https://i.scdn.co/image/ab6775700000ee85c9cf6c7843e4816f11bcb809",
                "height": 300,
                "width": 300
            }
        ],
        "type": "user",
        "uri": "spotify:user:dogmaul-br"
    }
    const {
        id,
        display_name: name,
        external_urls: externalUrls,
        followers,
        images,


    } = userProfileData

    return (
        <section className='flex items-center gap-5 px-4 my-4'>
            <Image
                src={images[1].url}
                width={232}
                height={232}
                className='rounded-full shadow-xl'
                alt='profile picture'
            />
            <div className='h-[232px] flex flex-col justify-center text-white'>
                <div>
                    <span className='text-sm'>Perfil</span>
                    <h1 className='text-8xl font-extrabold'>{name}</h1>
                </div>
                <div className='text-sm mt-2 pl-5 flex gap-1'>
                    <span>5 Playlists</span>
                    <span>&#8226;</span>
                    <span className=''>
                        {followers.total} Seguidores 
                    </span>
                </div>
            </div>
        </section>
    )
}
