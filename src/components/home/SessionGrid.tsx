import Link from 'next/link'
import { LAYERS, SESSION_META, SessionId } from '@/data/sessions'

interface SessionGridProps {
  locale: string
}

const LEVEL_LABEL: Record<string, string> = {
  beginner: '初級',
  intermediate: '中級',
}

const LEVEL_COLOR: Record<string, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-orange-100 text-orange-700',
}

export default function SessionGrid({ locale }: SessionGridProps) {
  return (
    <div className="space-y-8">
      {LAYERS.map((layer) => (
        <section key={layer.id}>
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {layer.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {layer.sessions.map((sessionId) => {
              const session = SESSION_META[sessionId as SessionId]
              return (
                <Link
                  key={sessionId}
                  href={`/${locale}/${sessionId}`}
                  className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-gray-400">{sessionId}</span>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${LEVEL_COLOR[session.level]}`}>
                        {LEVEL_LABEL[session.level]}
                      </span>
                      <span className="text-xs text-gray-400">{session.duration}分</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{session.title}</h3>
                  <p className="text-xs text-gray-500">{session.subtitle}</p>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
