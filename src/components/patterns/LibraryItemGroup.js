import React from 'react'
import LibraryItem from '../LibraryItem'

export default function LibraryItemGroup() {
  
  // const { image, title, type, info, author } = data;
  
  const playlist1 = {
    image: '',
    title: "Músicas Curtidas",
    type: 'Playlist',
    info: 1234,
    author: 'Victor'
  }

  return (
    <>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
        <LibraryItem data={playlist1}/>
    </>
  )
}
