import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
          BZFAR Clone
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Select your grade to view the study materials.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/grade11"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Grade 11
          </Link>
          <Link
            href="/grade-12"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Grade 12
          </Link>
        </div>
      </div>
    </main>
  )
}
