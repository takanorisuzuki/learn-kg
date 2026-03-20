import Link from 'next/link'
import { LAYERS, SESSION_META, SessionId } from '@/data/sessions'

interface SidebarProps {
  locale: string
  currentSession?: string
}

const LAYER_COLOR: Record<string, string> = {
  foundations: '#3B82F6',
  graphrag: '#10B981',
  beyond: '#F59E0B',
}

const LAYER_BG: Record<string, string> = {
  foundations: 'rgba(59,130,246,0.08)',
  graphrag: 'rgba(16,185,129,0.08)',
  beyond: 'rgba(245,158,11,0.08)',
}

const LEVEL_LABEL: Record<string, string> = {
  beginner: '初級',
  intermediate: '中級',
}

export default function Sidebar({ locale, currentSession }: SidebarProps) {
  return (
    <aside
      className="w-60 shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto border-r"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <nav className="p-3 space-y-5">
        {LAYERS.map((layer) => {
          const color = LAYER_COLOR[layer.id]
          const bg = LAYER_BG[layer.id]
          return (
            <div key={layer.id}>
              <div
                className="flex items-center gap-1.5 px-2 mb-1.5"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <h3
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {layer.label}
                </h3>
              </div>
              <ul className="space-y-0.5">
                {layer.sessions.map((sessionId) => {
                  const session = SESSION_META[sessionId as SessionId]
                  const isActive = currentSession === sessionId
                  return (
                    <li key={sessionId}>
                      <Link
                        href={`/${locale}/${sessionId}`}
                        className="flex items-start gap-2 px-2 py-1.5 rounded-md text-sm transition-colors"
                        style={
                          isActive
                            ? { backgroundColor: bg, color: color, fontWeight: 600 }
                            : { color: 'var(--color-text-secondary)' }
                        }
                      >
                        <span
                          className="font-mono text-xs shrink-0 mt-0.5 w-7"
                          style={{ color: isActive ? color : 'var(--color-text-secondary)', opacity: isActive ? 1 : 0.6 }}
                        >
                          {sessionId}
                        </span>
                        <span className="flex-1 leading-snug">{session.title}</span>
                        <span
                          className="shrink-0 text-xs px-1.5 py-0.5 rounded-full mt-0.5"
                          style={
                            session.level === 'beginner'
                              ? { backgroundColor: 'rgba(16,185,129,0.12)', color: '#10B981' }
                              : { backgroundColor: 'rgba(245,158,11,0.12)', color: '#F59E0B' }
                          }
                        >
                          {LEVEL_LABEL[session.level]}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
