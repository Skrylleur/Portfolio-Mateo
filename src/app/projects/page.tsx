'use client'

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Projets
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Quelques projets significatifs réalisés au cours de ma formation, de mon temps personnel et de mon alternance.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-10">
        
        {/* Projet 1 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Conception d’une API REST avec Spring Boot</h2>
          <img
            src="/images/R1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
            Développement d’une API Java robuste avec le framework Spring Boot. Gestion des entités, routes sécurisées, validations, tests, et documentation technique.
          </p>
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Travailler en mode projet</li>
          </ul>
          <a
            href="https://github.com/otemALS/API-REST"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#0c1c3c] underline hover:text-[#2d5fff] transition"
          >
            Voir le projet sur GitHub
          </a>          
        </div>

        {/* Projet 2 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Développement d’une application mobile</h2>
          <p className="text-gray-700 mb-4">
            Réalisation d’une application Android connectée à une API Spring Boot. Conception d’interface en Kotlin, gestion de formulaires, intégration d’un design responsive.
          </p>
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Travailler en mode projet</li>
          </ul>
          <img
            src="/images/R2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <a
            href="https://github.com/otemALS/ImmoAndroid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#0c1c3c] underline hover:text-[#2d5fff] transition"
          >
            Voir le projet sur GitHub
          </a>          
        </div>

        {/* Projet 3 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Plateforme RH : entretiens salariés / managers</h2>
          <img
            src="/images/R3-1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <img
            src="/images/R3-2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
            Conception et développement complet d’une plateforme interne permettant la gestion d’entretiens professionnels, avec espace de connexion, suivi RH, export PDF, et design adapté aux utilisateurs métiers.
          </p>
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Mettre à disposition des utilisateurs un service informatique</li>
          </ul>
        </div>

        {/* Projet 4 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Déploiement technique sur site</h2>
          <p className="text-gray-700 mb-4">
            Préparation des serveurs en atelier, installation en magasin (serveur, caisse), tests sur site, mise en réseau, assistance aux équipes. Réalisé en autonomie ou en binôme avec un technicien.
          </p>
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Gérer le patrimoine informatique</li>
            <li>Répondre aux incidents et demandes d’assistance et d’évolution</li>
          </ul>
        </div>

        {/* Projet 5 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Gestion de projet avec suivi client</h2>
          <img
            src="/images/R3-3.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
            Organisation de réunions avec le chef de projet et la RH. Présentation des livrables, ajustements, démonstrations, mise en production. Méthodologie Agile en autonomie.
          </p>
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Travail en mode projet</li>
            <li>Mise à disposition des utilisateurs un service informatique</li>
          </ul>
        </div>

        {/* Projet 6 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Conception d’une application web en Next.js</h2>
          <p className="text-gray-700 mb-4">
            Développement d’une interface web en Next.js liée à une API Spring Boot.
          </p>
          <img
            src="/images/R6.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <h3 className="font-semibold text-base mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Travailler en mode projet</li>
          </ul>
          <a
            href="https://github.com/otemALS/FrontAzurrimoNext"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#0c1c3c] underline hover:text-[#2d5fff] transition"
          >
            Voir le projet sur GitHub
          </a>          
        </div>

      </div>
    </main>
  )
}