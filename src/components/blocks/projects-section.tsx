import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
} from '@/components/ui/glass-card'
import Image from 'next/image'
import pcMockup from '@/app/assets/PCmockup.png'
import mobileMockup from '@/app/assets/MobileMockup.png'

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
                <GlassCard className="md:col-span-2">
                    <div className="flex h-full flex-col gap-6 md:flex-row md:items-center">
                        <div className="flex flex-1 flex-col justify-between gap-4">
                            <GlassCardHeader>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl">✦</span>
                                    <GlassCardTitle className="text-2xl">Kiseki — App Sociale</GlassCardTitle>
                                </div>
                                <GlassCardDescription>
                                    Application sociale de vote quotidien entre amis. Architecture monorepo complexe avec logique métier partagée.
                                </GlassCardDescription>
                            </GlassCardHeader>

                            <GlassCardContent className="flex flex-col gap-4 pt-2">
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
                        </div>

                        <div className="relative mx-auto h-[220px] w-full max-w-[360px] md:h-full md:flex-1 md:max-w-none">
                            {/* Subtle glow behind mockups */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] rounded-full bg-purple-500/15 blur-3xl" />

                            {/* PC mockup — perspective tilt */}
                            <div className="absolute left-[5%] top-[10%] w-[80%] [perspective:800px]">
                                <Image
                                    src={pcMockup}
                                    alt="Aperçu desktop de l'application Kiseki"
                                    className="h-auto w-full rounded-lg object-contain [transform:rotateY(-4deg)_rotateX(2deg)] drop-shadow-[0_20px_40px_rgba(139,92,246,0.25)]"
                                />
                            </div>

                            {/* Mobile mockup — overlapping in front */}
                            <div className="absolute bottom-0 right-[5%] w-[30%] min-w-[80px] md:min-w-[100px] [perspective:800px]">
                                <Image
                                    src={mobileMockup}
                                    alt="Aperçu mobile de l'application Kiseki"
                                    className="h-auto w-full rounded-xl object-contain [transform:rotateY(6deg)_rotateX(1deg)] drop-shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
                                />
                            </div>
                        </div>
                    </div>
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
