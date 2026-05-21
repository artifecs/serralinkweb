import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata: Metadata = {
  title: 'Serra.link — Experts en creació de pàgines web i programació',
  description: "Més de 20 anys d'experiència en disseny web, programació i màrqueting digital. Pàgines web a Cardedeu i Vilamajor.",
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" data-theme="dark" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('serra-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="google-site-verification" content="AV_DPy46lpx5TQDQF_Twapy5IiQIP3O5tleYFiZr24k" />
      </head>
      <body>
        <ThemeProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
