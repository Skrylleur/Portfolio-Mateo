import NavBar from "@/components/NavBar";

export default function AboutPage() {
    return (
        <>
        <NavBar />
      <main className="min-h-screen bg-[#fdfaf4] text-[#0c1c3c] flex flex-col items-center justify-center px-8 py-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-8">
            À propos de moi
          </h1>
          <p className="text-2xl font-light mb-12 text-gray-800">
            Passionné par le sport et les voyages, je suis un jeune développeur qui apprend la programmation d&apos;applications web et mobile.
          </p>
        </div>
  
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Mon parcours</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Actuellement en deuxième année de BTS SIO option SLAM en alternance, j’ai eu
              l’opportunité de travailler sur des projets concrets mêlant développement web,
              API et base de données. Je me spécialise dans les technologies modernes telles
              que React, Next.js, Java Spring Boot et Kotlin.
            </p>
          </div>
  
          <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Mes valeurs</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Rigueur, autonomie, esprit d’équipe, et curiosité. J’accorde une grande
              importance à la qualité du code, à l’expérience utilisateur et à l’impact humain
              des outils numériques.
            </p>
          </div>
        </div>
      </main>
      </>
    );
  }