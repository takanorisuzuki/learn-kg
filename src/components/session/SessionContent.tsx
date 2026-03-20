interface SessionContentProps {
  content: string
}

export default function SessionContent({ content }: SessionContentProps) {
  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
