import Link from 'next/link'
import { SESSION_ORDER, SESSION_META, SessionId } from '@/data/sessions'

interface PrevNextNavProps {
  locale: string
  currentSession: string
}

export default function PrevNextNav({ locale, currentSession }: PrevNextNavProps) {
  const currentIndex = SESSION_ORDER.indexOf(currentSession as SessionId)
  const prevId = currentIndex > 0 ? SESSION_ORDER[currentIndex - 1] : null
  const nextId = currentIndex < SESSION_ORDER.length - 1 ? SESSION_ORDER[currentIndex + 1] : null

  return (
    <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
      <div>
        {prevId && (
          <Link href={`/${locale}/${prevId}`} className="text-sm text-blue-600 hover:underline">
            ← {SESSION_META[prevId].title}
          </Link>
        )}
      </div>
      <div>
        {nextId && (
          <Link href={`/${locale}/${nextId}`} className="text-sm text-blue-600 hover:underline">
            {SESSION_META[nextId].title} →
          </Link>
        )}
      </div>
    </div>
  )
}
