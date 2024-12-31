'use client'

import { useEffect, useState } from 'react'
import { NotionRenderer } from "@notion-render/client"
import hljsPlugin from "@notion-render/hljs-plugin"
import bookmarkPlugin from "@notion-render/bookmark-plugin"

// interface NotionContentProps {
//   blocks: any[]
// }

export default function NotionContent({ blocks }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    const renderContent = async () => {
      const renderer = new NotionRenderer()
      renderer.use(hljsPlugin({}))
      renderer.use(bookmarkPlugin())
      const renderedHtml = await renderer.render(...blocks)
      setHtml(renderedHtml)
    }

    renderContent()
  }, [blocks])

  if (!html) {
    return <div>Loading content...</div>
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

