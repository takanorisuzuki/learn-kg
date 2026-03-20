interface SessionContentProps {
  content: string
}

export default function SessionContent({ content }: SessionContentProps) {
  return (
    <div
      className="prose prose-gray max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
