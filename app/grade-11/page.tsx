import { TermSection } from "@/components/term-section"

const term1Data = {
  termTitle: "TERM 1",
  sections: [
    {
      title: "Раздел 11.1A",
      links: [
        { id: 1, url: "b2a.kz/CD0", topic: "Software categories" },
        { id: 2, url: "b2a.kz/wGV", topic: "Operating system" },
        { id: 3, url: "b2a.kz/7p9", topic: "Types of operating system" },
        { id: 4, url: "b2a.kz/V9b", topic: "Von Neumann architecture" },
        { id: 5, url: "b2a.kz/u1d", topic: "Little man computer" },
        { id: 6, url: "b2a.kz/AFL", topic: "Little man computer 2" },
        { id: 7, url: "b2a.kz/p6B", topic: "Little man computer + Memory types" },
        { id: 8, url: "b2a.kz/sMf", topic: "Virtual and cache memories and Boolean logic" },
        { id: 9, url: "b2a.kz/WJ3", topic: "Simplifying logic expressions" },
        { id: 10, url: "b2a.kz/meu", topic: "Truth tables" },
      ],
    },
    {
      title: "Раздел 11.1B",
      links: [
        { id: 1, url: "b2a.kz/mkD", topic: "Generations of programming languages" },
        { id: 2, url: "b2a.kz/6df", topic: "High and low programming languages" },
        { id: 3, url: "b2a.kz/7Yv", topic: "Assembly language" },
        { id: 4, url: "b2a.kz/K4p", topic: "Trace table" },
        { id: 5, url: "b2a.kz/BGS", topic: "Translators" },
      ],
    },
    {
      title: "Раздел 11.1C",
      links: [
        { id: 1, url: "b2a.kz/c1k", topic: "System lifecycle stages" },
        { id: 2, url: "b2a.kz/d1A", topic: "System lifecycle model & Data collection methods" },
        { id: 3, url: "b2a.kz/m3K", topic: "Data flow Diagram" },
        { id: 4, url: "b2a.kz/2Li", topic: "Flowcharts & Revision" },
      ],
    },
    {
      title: "Раздел 11.3A",
      links: [
        { id: 1, url: "b2a.kz/7cf", topic: "Structure of one-dimensional and two-dimensional arrays" },
        { id: 2, url: "b2a.kz/5YZ", topic: "Structure of two-dimensional arrays" },
        { id: 3, url: "b2a.kz/Ke8", topic: "Structure of two-dimensional arrays 2" },
        { id: 4, url: "b2a.kz/jDn", topic: "Structure of two-dimensional arrays 3" },
        { id: 5, url: "b2a.kz/eQU", topic: "Sorting algorithms" },
        { id: 6, url: "b2a.kz/0FP", topic: "" },
        { id: 7, url: "b2a.kz/jxX", topic: "" },
        { id: 8, url: "b2a.kz/EU0", topic: "" },
        { id: 9, url: "b2a.kz/kf0", topic: "" },
      ],
    },
  ],
}

const term2Data = {
  termTitle: "TERM 2",
  sections: [
    {
      title: "Раздел 11.2A",
      links: [
        { id: 1, url: "b2a.kz/2Jf\nb2a.kz/MZ5", topic: "Database basics" },
        { id: 2, url: "b2a.kz/O84", topic: "Composite and Foreign key" },
        { id: 3, url: "b2a.kz/ECt", topic: "Normalization" },
        { id: 4, url: "b2a.kz/kyE", topic: "Normalization" },
        { id: 5, url: "b2a.kz/A2c", topic: "Normalization b2a.kz/Ztf - 3nf tables" },
        { id: 6, url: "b2a.kz/MPO", topic: "Entity-Relationship Diagrams (ERD)" },
        { id: 7, url: "b2a.kz/gyT", topic: "ERD 2" },
        { id: 8, url: "b2a.kz/A7h", topic: "ERD 3" },
        { id: 9, url: "b2a.kz/4bq", topic: "SQL 1" },
        { id: 10, url: "b2a.kz/cCW", topic: "SQL 2" },
        { id: 11, url: "b2a.kz/z6h", topic: "DFD b2a.kz/myB - additional info about DFD" },
        { id: 12, url: "b2a.kz/R6F", topic: "DFD" },
        { id: 13, url: "b2a.kz/m9O", topic: "DFD" },
        { id: 14, url: "b2a.kz/5A3", topic: "Flowcharts" },
        { id: 15, url: "b2a.kz/4UX", topic: "Prototyping" },
        { id: 16, url: "b2a.kz/Djc", topic: "Advantages and restrictions of system" },
        { id: 17, url: "b2a.kz/40J", topic: "Technical specification (additional topic)" },
      ],
    },
  ],
}

export default function Grade11() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
          Grade 11
        </h1>
        <TermSection termTitle={term2Data.termTitle} sections={term2Data.sections} />
        <TermSection termTitle={term1Data.termTitle} sections={term1Data.sections} />
      </div>
    </main>
  )
}