'use client'

export default function SkillsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Compétences
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Un aperçu des langages, frameworks et méthodes que j&apos;utilise.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Langues',
            items: ['Anglais']
          },
          {
            title: 'Développement front-end',
            items: ['HTML / CSS', 'Razor']
          },
          {
            title: 'Langages',
            items: ['Kotlin', 'Python', 'C#', 'JavaScript / TypeScript', 'PHP']
          },
          {
            title: 'Frameworks',
            items: ['Spring Boot', 'React', 'Next.js', '.NET 8 / Blazor']
          },
          {
            title: 'Conception & gestion de projet',
            items: ['Agile', 'Scrum', 'UML']
          }
        ].map((section, i) => (
          <div
            key={i}
            className={`bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm ${
              section.title === 'Conception & gestion de projet' ? 'md:col-span-2' : ''
            }`}
          >
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}