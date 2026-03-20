import { notFound } from 'next/navigation'
import { getSessionContent, getSessionIds } from '@/lib/content'
import { SESSION_META, SessionId } from '@/data/sessions'
import SessionContent from '@/components/session/SessionContent'
import PrevNextNav from '@/components/session/PrevNextNav'

interface SessionPageProps {
  params: Promise<{ locale: string; session: string }>
}

export async function generateStaticParams() {
  const sessionIds = getSessionIds()
  return sessionIds.map((id) => ({
    locale: 'ja',
    session: id,
  }))
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { locale, session } = await params
  const validIds = getSessionIds()

  if (!validIds.includes(session)) {
    notFound()
  }

  const meta = SESSION_META[session as SessionId]
  const { content } = await getSessionContent(locale, session)

  const LEVEL_LABEL: Record<string, string> = {
    beginner: '初級',
    intermediate: '中級',
  }

  const LAYER_LABEL: Record<string, string> = {
    foundations: 'KG基礎',
    graphrag: 'GraphRAG実装',
    beyond: 'KGを超えて使う',
  }

  return (
    <article className="max-w-3xl">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-sm text-gray-400">{session}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {LEVEL_LABEL[meta.level]}
          </span>
          <span className="text-xs text-gray-400">{LAYER_LABEL[meta.layer]}</span>
          <span className="text-xs text-gray-400">{meta.duration}分</span>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Key Insight: </span>
            {meta.keyInsight}
          </p>
        </div>
      </div>

      <SessionContent content={content} />
      <PrevNextNav locale={locale} currentSession={session} />
    </article>
  )
}
