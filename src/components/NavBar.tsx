import Link from "next/link";

export default function NavBar() {
    return (
      <header className="w-full bg-[#fdfaf4] text-[#0c1c3c] border-b border-[#e2e2e2]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/">
            <h1 className="text-2xl font-bold hover:opacity-80 transition">
                Mateo LEGIGAN
            </h1>
        </Link>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-[#2d5fff] transition">Accueil</a>
            <a href="#about" className="hover:text-[#2d5fff] transition">À propos</a>
            <a href="#about" className="hover:text-[#2d5fff] transition">Compétences</a>
            <a href="#about" className="hover:text-[#2d5fff] transition">Expériences</a>
            <a href="#about" className="hover:text-[#2d5fff] transition">Me contacter</a>
          </nav>
        </div>
      </header>
    );
}