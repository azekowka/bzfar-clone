import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="mx-auto max-w-3xl px-6 text-center text-sm text-muted-foreground">
        Built with joy by{" "}
        <Link
          href="https://github.com/azekowka"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
        >
          Abdulaziz Gabitov
        </Link>
      </div>
    </footer>
  )
}
