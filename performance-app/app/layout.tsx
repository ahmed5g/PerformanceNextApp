import { ModelProvider } from '@/providers/model-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import prismadb from '@/lib/prisma'
import { ToastProvider } from '@/providers/toast-provider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModelProvider />
        <ToastProvider />
        {children}</body>
    </html> 
    </ClerkProvider>
  )
}
