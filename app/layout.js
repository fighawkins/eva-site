import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
const inter = Inter({ subsets: ['latin'] })
import Footer from './Footer'

export const metadata = {
  title: 'Eva Knowles',
  description: 'Artist',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header>
            <Header />
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}