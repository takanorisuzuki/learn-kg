'use client'

import { useEffect, useRef } from 'react'

interface SessionContentProps {
  content: string
}

export default function SessionContent({ content }: SessionContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const blocks = ref.current.querySelectorAll<HTMLElement>('code.language-mermaid')
    if (blocks.length === 0) return

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: 'dark' })
      blocks.forEach((block, i) => {
        const id = `mermaid-${i}-${Date.now()}`
        const definition = block.textContent ?? ''
        const container = document.createElement('div')
        container.className = 'mermaid-diagram my-6'
        block.closest('pre')?.replaceWith(container)
        mermaid.render(id, definition).then(({ svg }) => {
          container.innerHTML = svg
        })
      })
    })
  }, [content])

  return (
    <div
      ref={ref}
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
