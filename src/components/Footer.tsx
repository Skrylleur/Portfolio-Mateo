import { Linkedin } from 'lucide-react'

export default function Footer() {
    return (
      <footer className="w-full bg-[#fdfaf4] text-[#0c1c3c] border-t border-[#e2e2e2]">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Mateo LEGIGAN · Développé avec Next.js par{' '}
            <a
              href="https://gourinchas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#2d5fff] transition"
            >
              Antonin GOURINCHAS
            </a>.
          </p>
  
          <div className="flex gap-4">
            <a
              href="mailto:mateo.legigan@sts-sio-caen.info"
              className="hover:text-[#2d5fff] transition"
              title="Me contacter"
            >
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/mateo-legigan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2d5fff] transition"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>          
            </div>
        </div>
      </footer>
    )
  }