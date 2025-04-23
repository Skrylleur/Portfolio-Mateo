'use client'

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#fdfaf4] text-[#0c1c3c] px-8 pt-16 pb-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>

        <p>
          Cette politique de confidentialité explique comment les données personnelles sont traitées sur le site <strong>mateo-legigan.netlify.app</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Collecte de données</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle. Il ne propose aucun formulaire, inscription, espace utilisateur ou système de suivi personnalisé.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Utilisation de cookies</h2>
        <p>
          Aucune technologie de suivi, de publicité ou de mesure d’audience n’est utilisée. Seuls des cookies strictement nécessaires à l’affichage du site peuvent être générés par la plateforme d’hébergement (Netlify).
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Services externes</h2>
        <p>
          Ce site ne fait appel à aucun service externe collectant des données personnelles, à l’exception des éventuels outils intégrés par Netlify (hébergeur), dont les politiques peuvent être consultées directement sur <a href="https://www.netlify.com/gdpr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#2d5fff]">netlify.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Contact</h2>
        <p>
          Pour toute question concernant la confidentialité, vous pouvez envoyer un e-mail à :{' '}
          <a href="mailto:antonin.gourinchas@gmail.com" className="underline hover:text-[#2d5fff]">mateo.legigan@sts-sio-caen.info</a>.
        </p>

        <p className="mt-8 text-sm text-gray-500 italic">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
      </div>
    </main>
  )
}