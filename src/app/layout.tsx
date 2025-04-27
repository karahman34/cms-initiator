'use client'

import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import Navbar from '@/components/ui/navbar'
import { useEffect } from 'react'
import { LS_THEME_KEY, setTheme } from '@/lib/theme'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const currentTheme = localStorage.getItem(LS_THEME_KEY)
    setTheme((currentTheme as 'dark' | 'light') || 'light')
  }, [])

  return (
    <html lang='en' data-theme='dark'>
      <body className={`antialiased bg-background text-foreground`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <Navbar />

            <div className='px-4 md:px-6 mt-6'>{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
