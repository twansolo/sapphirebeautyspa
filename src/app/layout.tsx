import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sapphire Spa',
  description: 'Luxury spa treatments and lash extensions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-blue-50`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}