import Image from 'next/image'
import React from 'react'

export default function MediaItem({playlistData}) {

   //  const placeholderData =  {
   //      "collaborative":false,
   //      "description":"meditação diária",
   //      "external_urls":{
   //         "spotify":"https://open.spotify.com/playlist/6siBOwr7LtG0XFjhPcgISg"
   //      },
   //      "href":"https://api.spotify.com/v1/playlists/6siBOwr7LtG0XFjhPcgISg",
   //      "id":"6siBOwr7LtG0XFjhPcgISg",
   //      "images":[
   //         {
   //            "url":"https://i.scdn.co/image/ab67706c0000bebb3ac42dcb142833eb602353f4",
   //            "height":null,
   //            "width":null
   //         }
   //      ],
   //      "name":"Ni dieu ni maître",
   //      "owner":{
   //         "external_urls":{
   //            "spotify":"https://open.spotify.com/user/dogmaul-br"
   //         },
   //         "href":"https://api.spotify.com/v1/users/dogmaul-br",
   //         "id":"dogmaul-br",
   //         "type":"user",
   //         "uri":"spotify:user:dogmaul-br",
   //         "display_name":"Victor"
   //      },
   //      "public":true,
   //      "snapshot_id":"NDIsYjEwZGQ5ZDlkNDdlYzA5NjdkMDU5Nzc3YThmYjA1NDcyOTIwOTk1ZQ==",
   //      "tracks":{
   //         "href":"https://api.spotify.com/v1/playlists/6siBOwr7LtG0XFjhPcgISg/tracks",
   //         "total":18
   //      },
   //      "type":"playlist",
   //      "uri":"spotify:playlist:6siBOwr7LtG0XFjhPcgISg",
   //      "primary_color":null
   //   }
   const { images, type, name, owner } = playlistData
  return (
    <div className='max-h-[276px] max-w-[200px] bg-gradient-to-b from-zinc-800 from-80% to-neutral-800 rounded-md p-3 flex flex-col gap-4 cursor-pointer hover:from-zinc-700 hover:to-neutral-700 transition'>
        <Image 
            src={images[0]?.url} 
            width={300} 
            height={300} 
            alt={type + " " + name}
            className='rounded-md shadow-lg w-full'
            />
        <div>
            <span className='block font-medium truncate'>{name}</span>
            <span className='text-sm text-zinc-400 truncate'>De {owner.display_name}</span>
        </div>
    </div>
  )
}
