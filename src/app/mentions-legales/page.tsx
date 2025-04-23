export default function MentionsLegales() {
    return(
        <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold">Mentions Légales</h1>

                <p><strong>Nom : </strong> Antonin Gourinchas</p>
                <p><strong>Adresse : </strong>Caen</p>
                <p><strong>Email : </strong> antonin.gourinchas@gmail.com</p>

                <p><strong>Hébergeur :</strong> Netlify, Inc. <br />
                44 Montgomery Street, Suite 300, San Francisco, California 94104 <br />
                <a href="https://www.netlify.com/">www.netlify.com</a></p>

                <p>Ce site est un portfolio publié à titre non lucratif.</p>
            </div>
        </main>
    )
}