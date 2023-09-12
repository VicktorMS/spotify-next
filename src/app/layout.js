import Navigation from '@/components/Navigation'
import './globals.css'
import YourLibrary from '@/components/YourLibrary'

export const metadata = {
  title: 'Spotify Layout',
  description: 'Página cópia de layout do Spotify',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className='bg-neutral-950 grid grid-cols-main-layout-column text-zinc-300 grid-rows-main-layout-footer h-screen gap-2 p-2 max-h-screen'>
        <aside className='grid grid-rows-aside-layout gap-2 max-h-screen overflow-y-hidden'>
          <Navigation />
          <div className='bg-zinc-900 rounded-lg overflow-y-hidden'>
            <YourLibrary />
          </div>
        </aside>
        <main className='bg-gradient-to-b from-blue-950 to-70% to-zinc-900 rounded-lg px-4'>
          {children}
        </main>
        <footer className='col-span-2'>
          footer
        </footer>
      </body>
    </html>
  )
}
