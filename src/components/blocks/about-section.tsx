const facts = [
    { label: 'Localisation', value: 'Wattrelos, Hauts-de-France' },
    { label: 'Statut', value: 'Étudiant en informatique' },
    { label: 'Disponibilité', value: 'Alternance 2026–2027' },
    { label: 'Langues', value: 'Français · Anglais' },
]

export function AboutSection() {
    return (
        <section id="about" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">À propos</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start max-w-5xl mx-auto">

                {/* Bio */}
                <div className="flex flex-col gap-5 text-white/70 text-[15px] leading-relaxed">
                    <p>
                        Passionné par la création de solutions logicielles et d&apos;interfaces digitales.
                        J&apos;aime assembler du code propre pour offrir la meilleure expérience utilisateur,
                        expérimenter avec les nouvelles technos et prototyper des projets créatifs.
                        Je suis toujours en cours d&apos;apprentissage.
                    </p>
                    <p>
                        Je recherche une <span className="text-white font-medium">alternance pour l&apos;année scolaire 2026–2027</span>.
                    </p>
                </div>

                {/* Facts */}
                <div className="flex flex-col gap-2 shrink-0 lg:min-w-[220px]">
                    {facts.map(({ label, value }) => (
                        <div
                            key={label}
                            className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 backdrop-blur-3xl"
                        >
                            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30 mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm text-white/80 font-medium">{value}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
