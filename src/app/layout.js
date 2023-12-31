import Navigation from '@/components/Navigation'
import './globals.css'
import YourLibrary from '@/components/YourLibrary'
import Player from '@/components/patterns/Player'

export const metadata = {
  title: 'Spotify Layout',
  description: 'Página cópia de layout do Spotify',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className='bg-black overflow-hidden grid grid-cols-main-layout-column text-zinc-300 grid-rows-main-layout-footer h-screen gap-2 p-2 max-h-screen'>
        <aside className='grid grid-rows-aside-layout gap-2 max-h-screen overflow-y-hidden'>
          <Navigation />
          <div className='bg-zinc-900 rounded-lg overflow-y-hidden'>
            <YourLibrary />
          </div>
        </aside>
        <main className='bg-gradient-to-b from-red-800 to-50% to-zinc-900 rounded-lg overflow-y-auto scrollbar-thumb-zinc-600 scrollbar-thin hover:scrollbar-thumb-zinc-500'>
          {children}
        </main>
        <Player/>
      </body>
    </html>
  )
}
