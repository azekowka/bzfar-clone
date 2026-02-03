import { TermSection } from "@/components/term-section"

const term1Data = {
  termTitle: "TERM 1",
  sections: [
    {
      title: "Раздел 12.1A",
      links: [
        { id: 1, url: "b2a.kz/oa1", topic: "Artificial intelligence" },
        { id: 2, url: "b2a.kz/Acd", topic: "AR and VR" },
        { id: 3, url: "b2a.kz/y7r", topic: "Data protection measures" },
      ],
    },
    {
      title: "Раздел 12.1B",
      links: [
        { id: 4, url: "b2a.kz/yzm", topic: "Methods of information systems protection" },
        { id: 5, url: "b2a.kz/rfs", topic: "Methods of information systems protection (Malware)" },
        { id: 6, url: "b2a.kz/bs0", topic: "Intellectual property" },
        { id: 7, url: "b2a.kz/R2v", topic: "Methods of intellectual property protection" },
        { id: 8, url: "b2a.kz/vx3", topic: "Information security" },
      ],
    },
    {
      title: "Раздел 12.1C",
      links: [
        { id: 1, url: "b2a.kz/F3j", topic: "Testing strategies" },
        { id: 2, url: "b2a.kz/Q0U", topic: "Types of test data" },
        { id: 3, url: "b2a.kz/Avj", topic: "Testing strategies 2" },
      ],
    },
  ],
}

const term2Data = {
  termTitle: "TERM 2",
  sections: [
    {
      title: "Раздел 12.2A",
      links: [
        { id: 1, url: "b2a.kz/xDF", topic: "Data protection measures" },
        { id: 2, url: "b2a.kz/wpr", topic: "Data protection measures" },
      ],
    },
    {
      title: "Раздел 12.2B",
      links: [
        { id: 1, url: "b2a.kz/ZCT", topic: "Declarative and imperative programming languages" },
        { id: 2, url: "b2a.kz/2ux", topic: "Expert systems" },
        { id: 3, url: "b2a.kz/5Co", topic: "Expert systems" },
        { id: 4, url: "b2a.kz/Fyt", topic: "Expert systems" },
        { id: 5, url: "b2a.kz/f05", topic: "Stages in the compilation of a program" },
        { id: 6, url: "b2a.kz/zF3", topic: "Stages in the compilation of a program" },
        { id: 7, url: "b2a.kz/N9H", topic: "Stages in the compilation of a program" },
      ],
    },
    {
      title: "Раздел 12.2C",
      links: [
        { id: 1, url: "b2a.kz/rHD", topic: "Making a text document" },
        { id: 2, url: "b2a.kz/7J1", topic: "Methods of system implementation" },
        { id: 3, url: "b2a.kz/fKF", topic: "Methods of system implementation" },
      ],
    },
  ],
}

const term3Data = {
  termTitle: "TERM 3",
  sections: [
    {
      title: "Раздел 12.3A",
      links: [
        { id: 1, url: "b2a.kz/EPD", topic: "OS types" },
        { id: 2, url: "b2a.kz/CLg", topic: "Types of user interfaces" },
        { id: 3, url: "b2a.kz/9H6\nb2a.kz/8Bw", topic: "CPU architectures" },
        { id: 4, url: "b2a.kz/O8c", topic: "Memory addressing principle" },
        { id: 5, url: "b2a.kz/6Gk", topic: "Fetch-decode-execute cycle" },
        { id: 6, url: "b2a.kz/ANM\nb2a.kz/aHK", topic: "Boolean logic" },
        { id: 7, url: "", topic: "" },
        { id: 8, url: "", topic: "" },
        { id: 9, url: "", topic: "" },
      ],
    },
  ],
}

export default function Grade12() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
          Grade 12
        </h1>
        <TermSection termTitle={term3Data.termTitle} sections={term3Data.sections} />
        <TermSection termTitle={term2Data.termTitle} sections={term2Data.sections} />
        <TermSection termTitle={term1Data.termTitle} sections={term1Data.sections} />
      </div>
    </main>
  )
}