'use client'

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-16 w-full bg-[#fdfaf4]">
      <div className="max-w-4xl text-center">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-8">
          Je m&apos;appelle Mateo LEGIGAN
        </h1>
        <p className="text-2xl font-light mb-12 text-gray-800">
          Passionné par le sport et les voyages, je suis un jeune développeur qui apprend la programmation d&apos;applications web et mobile.
        </p>
        <h2 className="text-4xl font-bold mb-4">Mes documents</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="documents/CV.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger mon CV
          </a>
          <a
            href="documents/Synthèse.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger mon tableau de synthèse
          </a>
          <a
            href="documents/veille_technologique_dotnet_2025_complete.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger ma veille technologique
          </a>
          <a
            href="documents/veille_juridique_azure_ad_2025.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger ma veille juridique
          </a>
        </div>
      </div>
    </main>
  )
}