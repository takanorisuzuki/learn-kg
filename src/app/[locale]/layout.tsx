import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar locale={locale} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
