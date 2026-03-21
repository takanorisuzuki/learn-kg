import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { GoogleAnalytics } from '@next/third-parties/google'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  return (
    <html lang={locale} className="h-full">
      <body className="min-h-full" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="flex flex-col min-h-screen">
          <Header locale={locale} />
          <div className="flex flex-1">
            {/* Sidebar: hidden on mobile, visible on md+ */}
            <div className="hidden md:block">
              <Sidebar locale={locale} />
            </div>
            <main className="flex-1 min-w-0 px-6 py-8 max-w-4xl">
              {children}
            </main>
          </div>
        </div>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-TSTTB1J1Y9" />
        )}
      </body>
    </html>
  )
}
