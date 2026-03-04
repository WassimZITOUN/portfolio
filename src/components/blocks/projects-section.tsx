import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
} from '@/components/ui/glass-card'

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-300 border border-blue-500/20">
            {children}
        </span>
    )
}

export function ProjectsSection() {
    return (
        <section id="projets" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Projets</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                {/* Row 1 — Col 1: Kiseki (flagship, 2 columns) */}
                <GlassCard className="md:col-span-2 flex flex-col justify-between">
                    <GlassCardHeader>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">✦</span>
                            <GlassCardTitle className="text-2xl">Kiseki — App Sociale</GlassCardTitle>
                        </div>
                        <GlassCardDescription>
                            Application sociale de vote quotidien entre amis. Architecture monorepo complexe avec logique métier partagée.
                        </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="flex flex-col gap-4">
                        <p className="text-white/50 text-xs leading-relaxed">
                            Mise en place de Edge Functions, CRON jobs et Row Level Security (RLS).
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Tag>Next.js</Tag>
                            <Tag>Expo</Tag>
                            <Tag>Supabase</Tag>
                            <Tag>TypeScript</Tag>
                        </div>
                    </GlassCardContent>
                </GlassCard>

                {/* Row 1 — Col 2: GestionRDV (1 column) */}
                <GlassCard className="md:col-span-1 flex flex-col justify-between">
                    <GlassCardHeader>
                        <GlassCardTitle>GestionRDV</GlassCardTitle>
                        <GlassCardDescription>
                            Plateforme médicale de prise de rendez-vous.
                        </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="flex flex-col gap-4">
                        <p className="text-white/50 text-xs leading-relaxed">
                            Conception d&apos;un algorithme de génération de créneaux en temps réel et implémentation RBAC avec JWT.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Tag>Symfony 6</Tag>
                            <Tag>PHP 8</Tag>
                            <Tag>API Platform</Tag>
                            <Tag>MySQL</Tag>
                        </div>
                    </GlassCardContent>
                </GlassCard>

                {/* Row 2 — Col 3: Cabinet Kaabia (full width) */}
                <GlassCard className="md:col-span-3 flex flex-col md:flex-row md:items-center md:gap-16">
                    <GlassCardHeader className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg text-cyan-400">⚖</span>
                            <GlassCardTitle>Cabinet Avocat Kaabia</GlassCardTitle>
                        </div>
                        <GlassCardDescription>
                            Site vitrine livré en production pour une cliente réelle.
                        </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="md:w-1/2 flex flex-col gap-4">
                        <p className="text-white/50 text-xs leading-relaxed">
                            Conception graphique, optimisation SEO on-page et déploiement en production. Projet freelance livré de bout en bout.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Tag>UI/UX</Tag>
                            <Tag>SEO</Tag>
                            <Tag>Déploiement</Tag>
                        </div>
                    </GlassCardContent>
                </GlassCard>

            </div>
        </section>
    )
}
