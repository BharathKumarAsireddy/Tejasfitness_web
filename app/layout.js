import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'TejasFitness — Transform Your Body. Transform Your Life.',
  description:
    'Professional fitness coaching by Tejas. Customized workout plans, nutrition guidance, and dedicated support to help you achieve the physique you deserve.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
