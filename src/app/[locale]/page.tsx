import HeroSection from '@/components/home/HeroSection'
import SessionGrid from '@/components/home/SessionGrid'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isJa = locale === 'ja'
  return {
    title: isJa ? 'Learn KG — LLM開発者のためのナレッジグラフ実践コース' : 'Learn KG — Knowledge Graph for LLM Developers',
    description: isJa
      ? 'RAGの限界を超える。Neo4j + Ollamaでローカル動作するGraphRAGパイプラインを13セッションで習得。'
      : 'Go beyond RAG. Master GraphRAG pipelines with Neo4j + Ollama in 13 hands-on sessions — no cloud, no API key.',
    openGraph: {
      title: isJa ? 'Learn KG — ナレッジグラフ実践コース' : 'Learn KG — Knowledge Graph Course',
      description: isJa ? 'LLM開発者向け13セッション実践コース' : '13-session practical course for LLM developers',
      siteName: 'Learn KG',
      locale: locale === 'en' ? 'en_US' : 'ja_JP',
    },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  return (
    <div>
      <HeroSection locale={locale} />
      <SessionGrid locale={locale} />
    </div>
  )
}
