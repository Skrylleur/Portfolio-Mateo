import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 gap-12 min-h-screen text-center">
      <div className="max-w-xl">
      <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-8">Mateo LEGIGAN</h1>
        <h2 className="text-4xl font-bold mb-4">Bienvenue sur mon PortFolio</h2>
        <p className="text-2xl font-light mb-6">
          Je suis <span className="font-semibold">Développeur Web et Mobile</span> en deuxième année de BTS SIO option SLAM en alternance.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-[#f4d9ac] border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
        >
          En savoir plus
        </Link>      
      </div>
    </section>
  )
}