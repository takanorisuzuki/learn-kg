import HeroSection from '@/components/home/HeroSection'
import SessionGrid from '@/components/home/SessionGrid'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  return (
    <div>
      <HeroSection />
      <SessionGrid locale={locale} />
    </div>
  )
}
