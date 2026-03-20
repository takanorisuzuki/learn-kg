import Link from 'next/link'
import { LAYERS, SESSION_META, SessionId } from '@/data/sessions'

interface SidebarProps {
  locale: string
  currentSession?: string
}

export default function Sidebar({ locale, currentSession }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-gray-200 bg-gray-50 min-h-screen p-4">
      <nav>
        {LAYERS.map((layer) => (
          <div key={layer.id} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {layer.label}
            </h3>
            <ul className="space-y-1">
              {layer.sessions.map((sessionId) => {
                const session = SESSION_META[sessionId as SessionId]
                const isActive = currentSession === sessionId
                return (
                  <li key={sessionId}>
                    <Link
                      href={`/${locale}/${sessionId}`}
                      className={`block px-3 py-2 rounded text-sm ${
                        isActive
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-mono text-xs text-gray-400 mr-1">{sessionId}</span>
                      {session.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
