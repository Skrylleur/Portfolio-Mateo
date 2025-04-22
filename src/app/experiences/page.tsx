'use client'

export default function ExperiencesPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Expériences
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Mon parcours scolaire et professionnel dans le développement informatique.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-12">
        {/* Scolaires */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Expériences scolaires</h2>

          <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm mb-6">
            <h3 className="text-lg font-semibold">Baccalauréat Général – Spécialités Mathématiques et NSI</h3>
            <p className="text-gray-700">Lycée Sainte-Marie, Caen</p>
            <p className="text-sm text-gray-600 mt-2">Formation scientifique et informatique solide, avec un accent sur la logique algorithmique, l’analyse mathématique et l’initiation au développement logiciel.</p>
          </div>

          <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">BTS SIO SLAM – Alternance</h3>
            <p className="text-gray-700">Caensup Sainte-Ursule, Caen</p>
            <p className="text-sm text-gray-600 mt-2">
              Spécialisation en développement d&apos;applications web et mobiles, gestion d&apos;API REST, bases de données relationnelles, frameworks modernes (React, Spring Boot, Next.js), et gestion de projet Agile en entreprise.
            </p>
          </div>
        </section>

        {/* Professionnelle */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Expérience professionnelle</h2>

          <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Apprenti Chef de Projet – Mojovida</h3>
            <p className="text-gray-700">Entreprise de communication digitale</p>
            <p className="text-sm text-gray-600 mt-2">
              Participation active à la conception, au développement et à la mise en ligne d&apos;un site web professionnel vitrine. Mise en place d’une interface de gestion interne pour les besoins de l&apos;équipe commerciale.  
              Utilisation de Next.js, Tailwind CSS, Spring Boot et bases de données relationnelles.  
              Suivi régulier avec le client, organisation des sprints en autonomie, documentation fonctionnelle et technique.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}