import './globals.css'
import { Montserrat, Neucha } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const neucha = Neucha({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-neucha',
  weight: ["400"],
})

export const metadata = {
  title: 'InspireEd',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${neucha.variable}`}>
      <body>{children}</body>
    </html>
  )
}
