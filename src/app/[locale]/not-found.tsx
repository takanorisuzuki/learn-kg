import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <p className="font-mono text-4xl font-bold" style={{ color: 'var(--color-text-secondary)' }}>404</p>
      <h1 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
        Page not found
      </h1>
      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        The session or page you are looking for does not exist.
      </p>
      <Link
        href="/en"
        className="text-sm px-4 py-2 rounded-lg transition-colors"
        style={{ backgroundColor: '#3B82F618', color: '#3B82F6', border: '1px solid #3B82F630' }}
      >
        Back to course
      </Link>
    </div>
  )
}
