import './globals.css'
import { Roboto, Work_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from './components/ui/navigation'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToggle } from '@/components/ui/modetoggle'
import { TableDemo } from './components/ui/table'
import Providers from './reduxToolKit/provider'
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const work_Sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is a demo project',
  authors: [
    { name: 'Vikram', url: 'http://vikram.com' },
    { name: 'Handa' },
  ],
  keywords: ['demo', 'home'],
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${work_Sans.variable}`}>
        <ThemeProvider
        attribute="class"
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        >
          {/* <ModeToggle/>
          <TableDemo />
        <Navigation /> */}
        <Providers>
        {children}
        </Providers>
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
