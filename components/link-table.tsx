"use client"

import { ExternalLink } from "lucide-react"

interface LinkItem {
  id: number
  url: string
  topic: string
}

interface LinkTableProps {
  links: LinkItem[]
}

export function LinkTable({ links }: LinkTableProps) {
  const renderUrl = (url: string) => {
    if (!url) return <span className="text-muted-foreground">—</span>

    const urls = url.split("\n").filter(Boolean)
    return (
      <div className="flex flex-col gap-1">
        {urls.map((u, index) => (
          <a
            key={index}
            href={`https://${u.trim()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-sm text-foreground underline-offset-2 hover:underline"
          >
            {u.trim()}
            <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="w-12 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              #
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Link
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Topic
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {links.map((link) => (
            <tr
              key={link.id}
              className="transition-colors hover:bg-muted/30"
            >
              <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                {link.id}
              </td>
              <td className="px-4 py-3">{renderUrl(link.url)}</td>
              <td className="px-4 py-3 text-sm text-foreground">
                {link.topic || <span className="text-muted-foreground">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
