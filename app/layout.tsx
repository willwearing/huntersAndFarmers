import type { Metadata } from 'next'
import { DM_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getOrganizationSchema } from '@/lib/structured-data'
import '../styles/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hunters and Farmers',
    template: '%s | Hunters and Farmers',
  },
  description: 'Simple, effective recruitment focused on connecting great sales professionals with businesses. Our consultants have worked in sales themselves.',
  keywords: ['recruitment', 'sales recruitment', 'sales jobs', 'Melbourne recruitment', 'sales professionals'],
  authors: [{ name: 'Hunters and Farmers' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://huntersandfarmers.com',
    siteName: 'Hunters and Farmers',
    title: 'Hunters and Farmers',
    description: 'Simple, effective recruitment focused on connecting great sales professionals with businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunters and Farmers',
    description: 'Simple, effective recruitment focused on connecting great sales professionals with businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
