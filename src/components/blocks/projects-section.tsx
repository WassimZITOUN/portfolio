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
import gestionRDVMockup from '@/app/assets/GestionRDVmockup.png'
import kaabiaMockup from '@/app/assets/KaabiaAvocatMockup.png'

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[680px]">

                {/* Row 1 — Kiseki (full width) */}
                <GlassCard className="md:col-span-2">
                    <div className="flex h-full flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex md:flex-1 flex-col justify-between gap-4">
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

                        <div className="relative h-[200px] w-full md:h-full md:flex-1">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] rounded-full bg-purple-500/15 blur-3xl" />
                            <div className="absolute left-[5%] top-[5%] w-[75%] [perspective:800px]">
                                <Image
                                    src={pcMockup}
                                    alt="Aperçu desktop de l'application Kiseki"
                                    className="h-auto w-full object-contain [transform:rotateY(-4deg)_rotateX(2deg)] drop-shadow-[0_20px_40px_rgba(139,92,246,0.25)]"
                                />
                            </div>
                            <div className="absolute bottom-0 right-[5%] w-[28%] min-w-[65px] [perspective:800px]">
                                <Image
                                    src={mobileMockup}
                                    alt="Aperçu mobile de l'application Kiseki"
                                    className="h-auto w-full object-contain [transform:rotateY(6deg)_rotateX(1deg)] drop-shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
                                />
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Row 2 — Left: GestionRDV */}
                <GlassCard className="md:col-span-1">
                    <div className="flex h-full flex-col justify-between gap-3">
                        <GlassCardHeader>
                            <GlassCardTitle>GestionRDV</GlassCardTitle>
                            <GlassCardDescription>
                                Plateforme médicale de prise de rendez-vous.
                            </GlassCardDescription>
                        </GlassCardHeader>

                        <div className="relative flex items-center justify-center py-2">
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
                            <Image
                                src={gestionRDVMockup}
                                alt="Aperçu de GestionRDV"
                                className="relative w-[85%] h-auto object-contain [transform:rotateY(-4deg)_rotateX(2deg)] drop-shadow-[0_20px_40px_rgba(59,130,246,0.25)]"
                            />
                        </div>

                        <GlassCardContent className="flex flex-col gap-3 pt-0">
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
                    </div>
                </GlassCard>

                {/* Row 2 — Right: Cabinet Kaabia */}
                <GlassCard className="md:col-span-1">
                    <div className="flex h-full flex-col justify-between gap-3">
                        <GlassCardHeader>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg text-cyan-400">⚖</span>
                                <GlassCardTitle>Cabinet Avocat Kaabia</GlassCardTitle>
                            </div>
                            <GlassCardDescription>
                                Site vitrine livré en production pour une cliente réelle.
                            </GlassCardDescription>
                        </GlassCardHeader>

                        <div className="relative flex items-center justify-center py-2">
                            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
                            <Image
                                src={kaabiaMockup}
                                alt="Aperçu du site Cabinet Avocat Kaabia"
                                className="relative w-[85%] h-auto object-contain [transform:rotateY(-4deg)_rotateX(2deg)] drop-shadow-[0_20px_40px_rgba(6,182,212,0.25)]"
                            />
                        </div>

                        <GlassCardContent className="flex flex-col gap-3 pt-0">
                            <p className="text-white/50 text-xs leading-relaxed">
                                Conception graphique, optimisation SEO on-page et déploiement en production. Projet freelance livré de bout en bout.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Tag>UI/UX</Tag>
                                <Tag>SEO</Tag>
                                <Tag>Déploiement</Tag>
                            </div>
                        </GlassCardContent>
                    </div>
                </GlassCard>

                {/* Row 3 — AJIR (full width) */}
                <GlassCard className="md:col-span-2 flex flex-col md:flex-row md:items-center md:gap-16">
                    <GlassCardHeader className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg text-emerald-400">⚡</span>
                            <GlassCardTitle>AJIR — Intranet Pédagogique</GlassCardTitle>
                        </div>
                        <GlassCardDescription>
                            Application web Offline-First (LAN) développée en 2 jours pour une association éducative.
                        </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="md:w-1/2 flex flex-col gap-4">
                        <p className="text-white/50 text-xs leading-relaxed">
                            Digitalisation des bilans avec algorithmes de répartition, Drag &amp; Drop fluide, et génération de rapports PDF officiels.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Tag>React</Tag>
                            <Tag>Node.js</Tag>
                            <Tag>Prisma</Tag>
                            <Tag>Offline-First</Tag>
                        </div>
                    </GlassCardContent>
                </GlassCard>

            </div>
        </section>
    )
}
