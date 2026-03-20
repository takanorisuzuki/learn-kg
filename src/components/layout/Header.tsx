import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <Link href="/ja" className="text-xl font-bold text-gray-900 hover:text-blue-600">
          Learn KG
        </Link>
        <span className="text-sm text-gray-500">Knowledge Graph for LLM Developers</span>
      </div>
    </header>
  )
}
