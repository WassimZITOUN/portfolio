'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    ExternalLink,
    Palette,
    Search,
    Rocket,
    HeartPulse,
    Scale,
    Users,
    CalendarCheck,
} from 'lucide-react'
import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardContent,
} from '@/components/ui/glass-card'
import { InteractiveNebulaShader } from '@/components/ui/liquid-shader'
import { cn } from '@/lib/utils'
import mockupHeader    from '@/app/assets/cabinet/MockupMacbook_hear-headeraccueil.png'
import mockupPhone     from '@/app/assets/cabinet/MockupPixelPhone_accueil.png'
import mockupPresentation from '@/app/assets/cabinet/MockupMacbook_divpresentation.png'
import mockupExpertise from '@/app/assets/cabinet/MockupMacbook_divexpertise.png'
import mockupContact   from '@/app/assets/cabinet/MockupMacbook_divcontact-prisederdv.png'

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const MISSION = [
    {
        icon: Palette,
        title: 'Conception graphique',
        desc: 'Création de l\'identité visuelle : choix des couleurs, typographie et mise en page. Un design épuré et professionnel adapté à l\'image d\'une avocate.',
        color: 'text-cyan-400',
        glow: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
    },
    {
        icon: Search,
        title: 'SEO On-page',
        desc: 'Optimisation pour les moteurs de recherche : meilleure visibilité sur Google, chargement rapide et contenu bien structuré pour que le site soit facile à trouver.',
        color: 'text-blue-400',
        glow: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        icon: Rocket,
        title: 'Déploiement',
        desc: 'Mise en ligne du site en production : configuration du domaine, sécurité et tests finaux pour assurer que tout fonctionne correctement.',
        color: 'text-violet-400',
        glow: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    },
]

const SPECIALTIES = [
    {
        icon: HeartPulse,
        title: 'Droit de la santé',
        desc: 'Responsabilité médicale, représentation des professionnels de santé ou des victimes devant les juridictions civiles, administratives et disciplinaires.',
        color: 'text-rose-400',
    },
    {
        icon: Scale,
        title: 'Droit pénal',
        desc: 'Assistance en garde à vue, défense devant toutes les juridictions pénales, dépôt de plainte et constitution de partie civile.',
        color: 'text-amber-400',
    },
    {
        icon: Users,
        title: 'Droit de la famille',
        desc: 'Accompagnement sur l\'ensemble du territoire français dans toutes les problématiques familiales.',
        color: 'text-emerald-400',
    },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const easeOutQuart: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20, filter: 'blur(12px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.8, delay, ease: easeOutQuart },
})

const fadeUpInView = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: easeOutQuart },
}

function Tag({ children, color = 'cyan' }: { children: React.ReactNode; color?: string }) {
    const styles: Record<string, string> = {
        cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
        blue: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
        violet: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    }
    return (
        <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border', styles[color] ?? styles.cyan)}>
            {children}
        </span>
    )
}

/* ------------------------------------------------------------------ */
/* Nav                                                                  */
/* ------------------------------------------------------------------ */

function KaabiaNav() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed z-20 w-full px-2">
            <nav className={cn(
                'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                isScrolled && 'bg-background/05 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5',
            )}>
                <div className="flex items-center justify-between py-3 lg:py-4">
                    <Link href="/#projets" className="flex items-center gap-2 group">
                        <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                        <span className="font-black text-xl tracking-[-0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7]">
                            WZ
                        </span>
                    </Link>

                    <a
                        href="https://kaabia-avocat.fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Voir le site
                    </a>
                </div>
            </nav>
        </header>
    )
}

/* ------------------------------------------------------------------ */
/* Hero — mockup : page d'accueil                                       */
/* ------------------------------------------------------------------ */

function KaabiaHero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
            <div className="absolute left-[5%] top-[20%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />
            <div className="absolute right-[10%] top-[45%] w-[25%] h-[30%] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
                <motion.p {...fadeUp(0)} className="text-xs tracking-[0.4em] text-white/25 uppercase mb-4 font-light">
                    Site Vitrine · Projet de Stage
                </motion.p>

                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 select-none mb-2"
                >
                    Cabinet Avocat
                </motion.h1>
                <motion.h1
                    {...fadeUp(0.18)}
                    className="font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-teal-500 select-none"
                >
                    Kaabia
                </motion.h1>

                <motion.p {...fadeUp(0.3)} className="mt-6 text-base md:text-lg text-white/50 font-medium max-w-xl">
                    Site vitrine professionnel livré en production pour Maître Rania KAABIA, avocate au Barreau de Montpellier.
                </motion.p>

                <motion.div {...fadeUp(0.4)} className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <Tag color="cyan">UI/UX Design</Tag>
                    <Tag color="blue">SEO On-page</Tag>
                    <Tag color="violet">Déploiement</Tag>
                </motion.div>

                {/* Composition Mac + Phone */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: easeOutQuart }}
                    className="relative mt-14 w-full max-w-4xl h-[340px] md:h-[420px]"
                >
                    {/* Glow */}
                    <div className="absolute left-[15%] top-[20%] w-[55%] h-[55%] rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
                    <div className="absolute right-[8%] bottom-[10%] w-[20%] h-[40%] rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />

                    {/* Mac mockup */}
                    <div className="absolute left-0 top-[5%] w-[80%] md:w-[78%] [perspective:1200px]">
                        <Image
                            src={mockupHeader}
                            alt="Page d'accueil du site Cabinet Avocat Kaabia"
                            className="h-auto w-full object-contain [transform:rotateY(5deg)_rotateX(-1deg)_rotate(0.5deg)] drop-shadow-[0_32px_56px_rgba(6,182,212,0.3)]"
                            priority
                        />
                    </div>

                    {/* Phone mockup — superposed */}
                    <div className="absolute bottom-[15%] right-[8%] w-[24%] md:w-[22%] min-w-[75px] z-20 [perspective:1200px]">
                        <Image
                            src={mockupPhone}
                            alt="Version mobile du site Cabinet Avocat Kaabia"
                            className="h-auto w-full object-contain [transform:rotateY(-4deg)_rotateX(1deg)_rotate(-0.5deg)] drop-shadow-[0_32px_56px_rgba(6,182,212,0.35)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Context — mockup : section présentation                              */
/* ------------------------------------------------------------------ */

function KaabiaContext() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                {/* Text */}
                <motion.div {...fadeUpInView} className="flex flex-col gap-5">
                    <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase">Contexte</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Un projet livré de bout en bout
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed">
                        Dans le cadre de mon stage, j&apos;ai conçu et livré en production le site vitrine de
                        Maître Rania KAABIA, jeune avocate inscrite au Barreau de Montpellier en 2025.
                    </p>
                    <p className="text-white/60 text-base leading-relaxed">
                        L&apos;objectif : construire une présence en ligne crédible et professionnelle, pensée pour
                        rassurer les clients et mettre en valeur le parcours et les valeurs de la cliente.
                    </p>
                </motion.div>

                {/* Mockup — section présentation du site */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: easeOutQuart }}
                    className="relative"
                >
                    <div className="absolute inset-0 rounded-2xl bg-cyan-500/8 blur-2xl" />
                    <Image
                        src={mockupPresentation}
                        alt="Section présentation de Maître Kaabia sur le site"
                        className="relative w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(6,182,212,0.2)] rounded-xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Mission                                                              */
/* ------------------------------------------------------------------ */

function KaabiaMission() {
    return (
        <section className="relative z-10 py-8 px-6 max-w-7xl mx-auto">
            <motion.div {...fadeUpInView}>
                <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-3 text-center">Mission</p>
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Ce que j&apos;ai réalisé</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {MISSION.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutQuart }}
                    >
                        <GlassCard className="h-full">
                            <GlassCardHeader>
                                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-4', item.glow, `border ${item.border}`)}>
                                    <item.icon className={cn('w-5 h-5', item.color)} />
                                </div>
                                <GlassCardTitle>{item.title}</GlassCardTitle>
                            </GlassCardHeader>
                            <GlassCardContent>
                                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                            </GlassCardContent>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Specialties — mockup : section expertise du site                     */
/* ------------------------------------------------------------------ */

function KaabiaSpecialties() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">

            {/* Mockup illustrant la section expertise du site */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: easeOutQuart }}
                className="relative max-w-4xl mx-auto mb-16"
            >
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/8 blur-3xl scale-95" />
                <Image
                    src={mockupExpertise}
                    alt="Section expertise du site Cabinet Avocat Kaabia"
                    className="relative w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(6,182,212,0.2)] rounded-xl"
                />
            </motion.div>

            <motion.div {...fadeUpInView}>
                <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-3 text-center">Contenu</p>
                <h2 className="text-3xl font-bold text-white mb-4 text-center">Domaines d&apos;expertise présentés</h2>
                <p className="text-white/40 text-sm text-center mb-10 max-w-lg mx-auto">
                    La structure et la rédaction du contenu ont été pensées pour mettre en valeur les trois piliers de l&apos;activité de la cliente.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {SPECIALTIES.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutQuart }}
                    >
                        <GlassCard className="h-full">
                            <GlassCardHeader>
                                <item.icon className={cn('w-8 h-8 mb-4', item.color)} />
                                <GlassCardTitle>{item.title}</GlassCardTitle>
                            </GlassCardHeader>
                            <GlassCardContent>
                                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                            </GlassCardContent>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* RDV — mockup : section contact + Calendly                            */
/* ------------------------------------------------------------------ */

function KaabiaRDV() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                {/* Mockup — section contact/prise de RDV du site */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: easeOutQuart }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="absolute inset-0 rounded-2xl bg-cyan-500/8 blur-2xl" />
                    <Image
                        src={mockupContact}
                        alt="Section prise de rendez-vous du site Cabinet Avocat Kaabia"
                        className="relative w-full h-auto object-contain drop-shadow-[0_24px_48px_rgba(6,182,212,0.2)] rounded-xl"
                    />
                </motion.div>

                {/* Text */}
                <motion.div {...fadeUpInView} className="flex flex-col gap-5 order-1 lg:order-2">
                    <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase">Prise de rendez-vous</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Intégration Calendly
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed">
                        Pour simplifier la prise de contact, j&apos;ai intégré <span className="text-white font-medium">Calendly</span> directement
                        dans la section contact du site. Les visiteurs peuvent consulter les disponibilités
                        de Maître KAABIA et réserver un créneau en quelques clics, sans échange d&apos;emails.
                    </p>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit">
                        <CalendarCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-sm text-cyan-300 font-medium">Réservation en ligne 24h/24</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function KaabiaFooter() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <motion.div {...fadeUpInView} className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
                <p className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase">Résultat</p>
                <h2 className="text-3xl font-bold text-white">Disponible en production.</h2>
                <p className="text-white/50 text-sm">
                    Le site est live et accessible à l&apos;adresse suivante.
                </p>
                <a
                    href="https://kaabia-avocat.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50 transition-all"
                >
                    <ExternalLink className="w-4 h-4" />
                    kaabia-avocat.fr
                </a>
                <Link
                    href="/#projets"
                    className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour au portfolio
                </Link>
            </motion.div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function KaabiaPage() {
    return (
        <>
            <InteractiveNebulaShader className="fixed inset-0 -z-10" />
            <KaabiaNav />
            <KaabiaHero />
            <KaabiaContext />
            <KaabiaMission />
            <KaabiaSpecialties />
            <KaabiaRDV />
            <KaabiaFooter />
        </>
    )
}
