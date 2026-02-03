"use client"

import { ExternalLink } from "lucide-react"

interface LinkItem {
  id: number
  url: string
  topic: string
}

interface Section {
  title: string
  links: LinkItem[]
}

interface TermSectionProps {
  termTitle: string
  sections: Section[]
}

export function TermSection({ termTitle, sections }: TermSectionProps) {
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
    <div className="mb-12">
      <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-foreground">
        {termTitle}
      </h2>
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <p className="mb-3 text-center text-sm text-muted-foreground">
              {section.title}
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="w-12 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      #
                    </th>
                    <th className="w-36 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Link
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Topic
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {section.links.map((link) => (
                    <tr
                      key={link.id}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <td className="w-12 px-4 py-3 text-sm font-medium text-muted-foreground">
                        {link.id}
                      </td>
                      <td className="w-36 px-4 py-3">{renderUrl(link.url)}</td>
                      <td className="px-4 py-3 text-sm text-foreground">
                        {link.topic || (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
