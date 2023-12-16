import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eva Knowles',
  description: 'Artist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header /> 
        </header>
        {children}
      </body>
    </html>
  )
}