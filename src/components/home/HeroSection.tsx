import Link from 'next/link'

const STATS = [
  { label: 'セッション', value: '12' },
  { label: '学習時間', value: '約10h' },
  { label: 'APIキー不要', value: 'Local' },
]

export default function HeroSection({ locale }: { locale: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-10 px-8 py-12"
      style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #172554 50%, #052e16 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 70% 20%, #10b981 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(99,102,241,0.3)', color: '#c7d2fe' }}
          >
            LLM Developers向け実践コース
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight"
          style={{ color: '#fafafa' }}
        >
          GraphRAGは入口。<br />
          KGはもっとできる。
        </h1>

        <p className="text-base mb-8" style={{ color: '#a5b4fc' }}>
          LLM開発者がナレッジグラフを体系的に学ぶ12セッションの実践コース。
          Ollama + Neo4j Dockerでローカル動作。
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 mb-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <span className="text-xl font-bold" style={{ color: '#fafafa' }}>{stat.value}</span>
              <span className="text-sm" style={{ color: '#a1a1aa' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/${locale}/s01`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: '#ffffff' }}
        >
          セッション1から始める
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
