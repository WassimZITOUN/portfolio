'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Scale, Zap, Wrench } from 'lucide-react'
import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
} from '@/components/ui/glass-card'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import Image from 'next/image'
import pcMockup from '@/app/assets/PCmockup.png'
import mobileMockup from '@/app/assets/MobileMockup.png'
import gestionRDVMockup from '@/app/assets/GestionRDVmockup.png'
import kaabiaMockup from '@/app/assets/KaabiaAvocatMockup.png'
import ajirPcMockup from '@/app/assets/mockupajirpc.png'
import ajirMobileMockup from '@/app/assets/mockupajirMobile.png'

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/15 text-blue-300 border border-blue-500/20">
            {children}
        </span>
    )
}

export function ProjectsSection() {
    const [comingSoonOpen, setComingSoonOpen] = useState(false)
    const router = useRouter()

    return (
      <>
        <Sheet open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-sm bg-[#0a0a0f]/95 backdrop-blur-2xl border-white/10 text-white p-8 flex flex-col items-center justify-center text-center gap-4"
            >
                <Wrench className="w-10 h-10 text-white/40" />
                <h3 className="text-xl font-bold tracking-tight text-white">Bientôt disponible</h3>
                <p className="text-sm text-gray-400">
                    La fiche détaillée de ce projet est en cours de rédaction.<br />Reviens très vite !
                </p>
            </SheetContent>
        </Sheet>
        <section id="projets" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Projets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[520px]">

                {/* Row 1 — Kiseki (full width) */}
                <GlassCard
                    className="md:col-span-2 cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    onClick={() => router.push('/projets/kiseki')}
                >
                    <div className="flex h-full flex-col md:flex-row md:items-center gap-6">

                        {/* Left: text, centré verticalement */}
                        <div className="flex flex-col justify-center gap-5 md:w-[40%] shrink-0">
                            <GlassCardHeader>
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-5 h-5 text-violet-400" />
                                    <GlassCardTitle className="text-2xl">Kiseki — App Sociale</GlassCardTitle>
                                </div>
                                <GlassCardDescription>
                                    Application sociale de vote quotidien entre amis. Architecture monorepo complexe avec logique métier partagée.
                                </GlassCardDescription>
                            </GlassCardHeader>
                            <GlassCardContent className="flex flex-col gap-4 pt-0">
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

                        {/* Right: composition croisée PC + phone */}
                        <div className="relative flex-1 flex items-center justify-center md:block md:h-full">
                            {/* Glow */}
                            <div className="absolute left-[20%] top-[30%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
                            <div className="hidden md:block absolute right-[10%] bottom-[15%] w-[25%] h-[40%] rounded-full bg-violet-400/15 blur-2xl pointer-events-none" />

                            {/* PC mockup — mobile: flux normal centré / desktop: absolu */}
                            <div className="relative md:absolute md:left-[2%] md:top-[28%] w-[90%] md:w-[70%] [perspective:1200px]">
                                <Image
                                    src={pcMockup}
                                    alt="Aperçu desktop de l'application Kiseki"
                                    className="h-auto w-full object-contain [transform:rotateY(-10deg)_rotateX(4deg)_rotate(-1deg)] drop-shadow-[0_32px_56px_rgba(139,92,246,0.35)]"
                                />
                            </div>

                            {/* Phone mockup — desktop only */}
                            <div className="hidden md:block absolute bottom-[4%] right-[6%] w-[26%] min-w-[70px] z-10 [perspective:1200px]">
                                <Image
                                    src={mobileMockup}
                                    alt="Aperçu mobile de l'application Kiseki"
                                    className="h-auto w-full object-contain [transform:rotateY(12deg)_rotateX(-3deg)_rotate(2deg)] drop-shadow-[0_32px_56px_rgba(139,92,246,0.4)]"
                                />
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Row 2 — Left: GestionRDV */}
                <GlassCard
                    className="md:col-span-1 cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    onClick={() => setComingSoonOpen(true)}
                >
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
                <GlassCard
                    className="md:col-span-1 cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    onClick={() => setComingSoonOpen(true)}
                >
                    <div className="flex h-full flex-col justify-between gap-3">
                        <GlassCardHeader>
                            <div className="flex items-center gap-2 mb-1">
                                <Scale className="w-5 h-5 text-cyan-400" />
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
                <GlassCard
                    className="md:col-span-2 cursor-pointer transition-transform duration-200 active:scale-[0.98]"
                    onClick={() => setComingSoonOpen(true)}
                >
                    <div className="flex h-full flex-col md:flex-row md:items-center gap-6">

                        {/* Left: PC + phone composition */}
                        <div className="relative flex-1 flex items-center justify-center md:block md:h-full">
                            {/* Glow */}
                            <div className="absolute left-[20%] top-[30%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
                            <div className="hidden md:block absolute left-[5%] bottom-[15%] w-[25%] h-[40%] rounded-full bg-teal-400/15 blur-2xl pointer-events-none" />

                            {/* PC mockup */}
                            <div className="relative md:absolute md:left-[2%] md:top-[25%] w-[90%] md:w-[65%] [perspective:1200px]">
                                <Image
                                    src={ajirPcMockup}
                                    alt="Aperçu desktop de l'application AJIR"
                                    className="h-auto w-full object-contain [transform:rotateY(10deg)_rotateX(4deg)_rotate(1deg)] drop-shadow-[0_32px_56px_rgba(16,185,129,0.35)]"
                                />
                            </div>

                            {/* Phone mockup — desktop only */}
                            <div className="hidden md:block absolute bottom-[15%] right-[4%] w-[24%] min-w-[70px] z-10 [perspective:1200px]">
                                <Image
                                    src={ajirMobileMockup}
                                    alt="Aperçu mobile de l'application AJIR"
                                    className="h-auto w-full object-contain [transform:rotateY(-12deg)_rotateX(-3deg)_rotate(-2deg)] drop-shadow-[0_32px_56px_rgba(16,185,129,0.4)]"
                                />
                            </div>
                        </div>

                        {/* Right: text */}
                        <div className="flex flex-col justify-center gap-5 md:w-[38%] shrink-0">
                            <GlassCardHeader>
                                <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-5 h-5 text-emerald-400" />
                                    <GlassCardTitle>AJIR — Intranet Pédagogique</GlassCardTitle>
                                </div>
                                <GlassCardDescription>
                                    Application web Offline-First (LAN) développée en 2 jours pour une association éducative.
                                </GlassCardDescription>
                            </GlassCardHeader>
                            <GlassCardContent className="flex flex-col gap-4 pt-0">
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
                        </div>
                    </div>
                </GlassCard>

            </div>
        </section>
      </>
    )
}
