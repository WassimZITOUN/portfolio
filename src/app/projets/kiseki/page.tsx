'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Github,
    ExternalLink,
    ArrowLeft,
    Smartphone,
    Eye,
    Users,
    Share2,
    History,
    ShieldCheck,
    ChevronDown,
    Sun,
    ClipboardList,
    Moon,
    RefreshCw,
    Database,
    BellRing,
    Clock,
    type LucideIcon,
} from 'lucide-react'
import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
} from '@/components/ui/glass-card'
import { InteractiveNebulaShader } from '@/components/ui/liquid-shader'
import { cn } from '@/lib/utils'
import pcMockup from '@/app/assets/PCmockup.png'
import mobileMockup from '@/app/assets/MobileMockup.png'
import mockupVote from '@/app/assets/Kiseki/MockupIphoneTransparent_Momentdevoter.png'
import mockupResultat from '@/app/assets/Kiseki/MockupIphoneTransparent_ResultaRevealed.png'
import mockupDetailVotes from '@/app/assets/Kiseki/MockupIphoneTransparent_resultat-detaildesvotes.png'
import mockupSaisie from '@/app/assets/Kiseki/MockupIphoneTransparent_SaisiDelaquestion.png'
import mockupPartage from '@/app/assets/Kiseki/MockupIphoneTransparent_ApercuPartagedimage.png'

/* ------------------------------------------------------------------ */
/* Metadata is exported from a server wrapper — this file is 'use client' */
/* ------------------------------------------------------------------ */

const TECH_STACK = [
    'Turborepo', 'Next.js 15', 'Expo SDK 54', 'Supabase', 'TypeScript', 'PostgreSQL RLS',
]

const FEATURES: { icon: LucideIcon; title: string; desc: string; color: string; glow: string; border: string; planned?: boolean }[] = [
    {
        icon: Smartphone,
        title: 'Widget Android',
        desc: 'Vote depuis l\'écran d\'accueil sans ouvrir l\'app. Fonctionnalité en cours de développement.',
        color: 'text-violet-400',
        glow: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        planned: true,
    },
    {
        icon: Eye,
        title: 'Révélation du soir',
        desc: 'Les votes restent anonymes jusqu\'à la révélation collective à 20h.',
        color: 'text-blue-400',
        glow: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        icon: Users,
        title: 'Codes d\'invitation',
        desc: 'Rejoindre un groupe via un code à 8 caractères. Jusqu\'à 12 personnes par groupe.',
        color: 'text-emerald-400',
        glow: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    },
    {
        icon: Share2,
        title: 'Stories Instagram',
        desc: 'Génération d\'une carte résultats 1080×1920 via Edge Function Supabase, partageable directement.',
        color: 'text-pink-400',
        glow: 'bg-pink-500/10',
        border: 'border-pink-500/20',
    },
    {
        icon: History,
        title: '30 jours d\'historique',
        desc: 'Retrouve toutes les questions et résultats des 30 derniers jours.',
        color: 'text-amber-400',
        glow: 'bg-amber-500/10',
        border: 'border-amber-500/20',
    },
    {
        icon: ShieldCheck,
        title: 'Anti-triche RLS',
        desc: '20 politiques Row Level Security + contraintes SQL pour 1 vote/personne.',
        color: 'text-red-400',
        glow: 'bg-red-500/10',
        border: 'border-red-500/20',
    },
]

const GAME_STEPS: { time: string; icon: LucideIcon; label: string; sub: string }[] = [
    { time: 'Matin', icon: Sun, label: 'La question du jour est révélée', sub: 'Tout le groupe partage la même question à 9h00.' },
    { time: 'Journée', icon: ClipboardList, label: 'Chacun vote anonymement', sub: 'Vote depuis l\'app ou directement via le widget Android.' },
    { time: 'Soir', icon: Moon, label: 'Les résultats sont dévoilés', sub: 'Podium, scores et qui a voté pour qui — tout est révélé.' },
]

/* ------------------------------------------------------------------ */
/* Sticky navigation bar                                                */
/* ------------------------------------------------------------------ */
function KisekiNav() {
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
                    {/* Logo + back */}
                    <Link href="/#projets" className="flex items-center gap-2 group">
                        <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                        <span className="font-black text-xl tracking-[-0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7]">
                            WZ
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/WassimZITOUN/Kiseki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                        </a>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/30 bg-white/5 border border-white/10 rounded-full cursor-not-allowed select-none">
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live bientôt
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

/* ------------------------------------------------------------------ */
/* Hero section                                                         */
/* ------------------------------------------------------------------ */
function KisekiHero() {
    const easeOutQuart: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

    const fadeUp = (delay: number) => ({
        initial: { opacity: 0, y: 20, filter: 'blur(12px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.8, delay, ease: easeOutQuart },
    })

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
            {/* Glow orbs */}
            <div className="absolute left-[10%] top-[25%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />
            <div className="absolute right-[5%] top-[50%] w-[25%] h-[35%] rounded-full bg-violet-400/15 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                {/* Japanese */}
                <motion.p {...fadeUp(0)} className="text-sm tracking-[0.4em] text-white/25 uppercase mb-4 font-light">
                    奇跡
                </motion.p>

                {/* Main title */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-black text-[22vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-200 to-violet-500 select-none"
                >
                    Kiseki
                </motion.h1>

                {/* Subtitle */}
                <motion.p {...fadeUp(0.3)} className="mt-4 text-lg md:text-xl text-white/55 font-medium">
                    App Sociale de Vote Quotidien
                </motion.p>

                {/* Status badge */}
                <motion.div {...fadeUp(0.45)} className="mt-5">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        En développement
                    </span>
                </motion.div>

                {/* Tech tags */}
                <motion.div {...fadeUp(0.55)} className="mt-6 flex flex-wrap justify-center gap-2">
                    {TECH_STACK.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium text-violet-100 bg-violet-500/10 border border-violet-500/20 rounded-full">
                            {t}
                        </span>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div {...fadeUp(0.65)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://github.com/WassimZITOUN/Kiseki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/15 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all"
                    >
                        <Github className="w-4 h-4" />
                        Voir le code
                    </a>
                    <Link
                        href="/#projets"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/50 hover:text-white/80 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour aux projets
                    </Link>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        className="text-white/20"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Mockups — PC + Mobile */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: easeOutQuart }}
                className="relative w-full max-w-3xl mx-auto mt-12 h-[260px] md:h-[380px] hidden sm:block"
            >
                {/* Glow */}
                <div className="absolute inset-x-[15%] inset-y-[10%] rounded-full bg-purple-500/25 blur-3xl pointer-events-none" />

                {/* PC mockup */}
                <div className="absolute left-0 top-0 w-[80%] [perspective:1200px]">
                    <Image
                        src={pcMockup}
                        alt="Kiseki — aperçu desktop"
                        className="h-auto w-full object-contain [transform:rotateY(-10deg)_rotateX(4deg)_rotate(-1deg)] drop-shadow-[0_32px_56px_rgba(139,92,246,0.35)]"
                    />
                </div>

                {/* Mobile mockup */}
                <div className="absolute bottom-0 right-[2%] w-[22%] z-10 [perspective:1200px]">
                    <Image
                        src={mobileMockup}
                        alt="Kiseki — aperçu mobile"
                        className="h-auto w-full object-contain [transform:rotateY(12deg)_rotateX(-3deg)_rotate(2deg)] drop-shadow-[0_32px_56px_rgba(139,92,246,0.4)]"
                    />
                </div>
            </motion.div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Concept & Game Loop                                                  */
/* ------------------------------------------------------------------ */
function KisekiConcept() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                {/* Left: prose + timeline */}
                <div className="flex-1">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-3"
                    >
                        Le Concept
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                    >
                        Un jeu social<br />asynchrone
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/55 leading-relaxed mb-10"
                    >
                    Au début de chaque cycle, les membres peuvent soit <span className="text-white/80 font-medium">soumettre leur propre question</span>, soit <span className="text-white/80 font-medium">laisser l&apos;algorithme en piocher une</span> dans la base de données, filtrée pour éviter les répétitions sur 30 jours.
                    <br /><br />
                    Puis chaque jour, tout le groupe reçoit la même question ayant pour réponse le vote d'un des joueurs. Tout le monde vote dans la journée, et les résultats sont dévoilés ensemble le soir. Le but est de créer un rituel quotidien de partage entre amis.
                     </motion.p>   
                        

                    {/* Timeline */}
                    <div className="flex flex-col gap-4">
                        {GAME_STEPS.map((step, i) => (
                            <motion.div
                                key={step.time}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                                <GlassCard className="flex items-start gap-4 p-5">
                                    <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <step.icon className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-0.5">{step.time}</p>
                                        <p className="text-white font-semibold text-sm mb-1">{step.label}</p>
                                        <p className="text-white/45 text-xs leading-relaxed">{step.sub}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: phone composition — vote + résultat */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="w-full lg:w-[360px] shrink-0 relative h-[420px] hidden sm:block"
                >
                    {/* Glow */}
                    <div className="absolute inset-[15%] rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />

                    {/* Vote screen — left/front */}
                    <div className="absolute left-0 top-0 w-[58%] z-10 [perspective:1000px]">
                        <Image
                            src={mockupVote}
                            alt="Kiseki — écran de vote"
                            className="h-auto w-full object-contain [transform:rotateY(6deg)_rotate(-2deg)] drop-shadow-[0_28px_56px_rgba(139,92,246,0.45)]"
                        />
                    </div>

                    {/* Résultat révélé — right/behind */}
                    <div className="absolute right-0 bottom-0 w-[58%] z-0 [perspective:1000px] opacity-90">
                        <Image
                            src={mockupResultat}
                            alt="Kiseki — résultat révélé"
                            className="h-auto w-full object-contain [transform:rotateY(-8deg)_rotate(3deg)] drop-shadow-[0_24px_48px_rgba(139,92,246,0.35)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Feature cards                                                        */
/* ------------------------------------------------------------------ */
function KisekiFeatures() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-3 text-center"
            >
                Fonctionnalités
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-white text-center mb-12"
            >
                Ce qui rend Kiseki unique
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURES.map((f, i) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                        <GlassCard className={cn('h-full border', f.border)}>
                            <GlassCardHeader>
                                <div className="flex items-start justify-between mb-3">
                                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', f.glow)}>
                                        <f.icon className={cn('w-5 h-5', f.color)} />
                                    </div>
                                    {f.planned && (
                                        <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                                            Prévu
                                        </span>
                                    )}
                                </div>
                                <GlassCardTitle className="text-base">{f.title}</GlassCardTitle>
                            </GlassCardHeader>
                            <GlassCardContent>
                                <GlassCardDescription>{f.desc}</GlassCardDescription>
                            </GlassCardContent>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Question system deep-dive                                            */
/* ------------------------------------------------------------------ */
function KisekiQuestionSystem() {
    const TIMELINE = [
        { time: '09:00', icon: Sun, label: 'Activation', desc: 'pg_cron déclenche activate_daily_slots(). La question du jour est choisie et les membres sont notifiés.', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
        { time: '09:00–20:00', icon: ClipboardList, label: 'Votes', desc: 'Les membres votent à leur rythme. RLS masque tous les votes des autres — seul le tien est visible.', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
        { time: '19:00', icon: BellRing, label: 'Rappel ciblé', desc: 'Notification envoyée uniquement aux membres n\'ayant pas encore voté. Principe de rareté.', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
        { time: '20:00', icon: Moon, label: 'Révélation', desc: 'reveal_due_questions() bascule le statut. RLS déverrouille : qui a voté pour qui est visible pour tous.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    ]

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-3 text-center"
            >
                Système de Questions
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            >
                Un moteur automatisé,<br className="hidden sm:block" /> juste par design
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-center max-w-2xl mx-auto mb-16"
            >
                Chaque question est choisie automatiquement, chaque membre soumet à tour de rôle, et rien n&apos;est répété dans les 30 derniers jours — le tout sans aucune intervention manuelle.
            </motion.p>

            {/* Top row: Round-Robin + Pool */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                {/* Round-Robin */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <GlassCard className="h-full border-violet-500/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0">
                                <RefreshCw className="w-4 h-4 text-violet-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Rotation Round-Robin</p>
                                <p className="text-white/40 text-xs">Fisher-Yates shuffle · seed déterministe</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            {/* Left: text + cycle table */}
                            <div className="flex-1 min-w-0">
                                <p className="text-white/55 text-sm leading-relaxed mb-4">
                                    Chaque membre soumet exactement une question par cycle. L&apos;ordre est mélangé via un shuffle Fisher-Yates avec une seed déterministe basée sur <code className="text-violet-300 text-xs bg-violet-500/10 px-1 rounded">md5(group_id || cycle_number)</code> — reproductible si régénéré, aléatoire en apparence.
                                </p>
                                {/* Visual cycle */}
                                <div className="rounded-xl border border-white/8 bg-white/3 p-4">
                                    <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Cycle 1 — Groupe de 4</p>
                                    <div className="flex flex-col gap-2">
                                        {[
                                            { day: 'Lun', name: 'Charlie', order: 0 },
                                            { day: 'Mar', name: 'Alice', order: 1 },
                                            { day: 'Mer', name: 'Diana', order: 2 },
                                            { day: 'Jeu', name: 'Bob', order: 3 },
                                        ].map((s, i) => (
                                            <div key={s.name} className="flex items-center gap-3">
                                                <span className="text-xs text-white/30 w-8">{s.day}</span>
                                                <div className={cn(
                                                    'flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium',
                                                    i === 0 ? 'bg-violet-500/20 border-violet-500/40 text-violet-200' : 'bg-white/4 border-white/8 text-white/50'
                                                )}>
                                                    <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[9px] text-white/40">{s.order + 1}</span>
                                                    {s.name}
                                                </div>
                                                {i === 0 && <span className="text-[10px] text-violet-400 font-semibold shrink-0">Slot live</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-white/25 mt-3">Cap à 12 membres · Verrouillage row-level (FOR UPDATE) pour éviter les doublons en concurrence</p>
                                </div>
                            </div>

                            {/* Right: phone mockup */}
                            <div className="w-[30%] shrink-0 [perspective:800px]">
                                <Image
                                    src={mockupSaisie}
                                    alt="Kiseki — saisie de la question"
                                    className="h-auto w-full object-contain [transform:rotateY(-6deg)_rotate(1.5deg)] drop-shadow-[0_16px_32px_rgba(139,92,246,0.4)]"
                                />
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Pool Combiné */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <GlassCard className="h-full border-blue-500/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                                <Database className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Pool Combiné + Anti-doublon</p>
                                <p className="text-white/40 text-xs">UNION SQL · filtre 30 jours · 30 tags</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            {/* Left: text + pool diagram */}
                            <div className="flex-1 min-w-0">
                                <p className="text-white/55 text-sm leading-relaxed mb-4">
                                    La question du jour est piochée dans un pool combiné (banque globale + questions créées par les membres), filtré pour exclure tout ce qui a déjà été posé dans les 30 derniers jours au sein du groupe. Questions normales ou méchantes selon les préférences du groupe.
                                </p>
                                {/* Pool diagram */}
                                <div className="flex flex-col gap-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="rounded-lg border border-blue-400/20 bg-blue-500/8 px-3 py-2.5">
                                            <p className="text-[10px] text-blue-300/70 uppercase tracking-widest mb-1">question_bank</p>
                                            <p className="text-white text-xs font-semibold">Banque globale</p>
                                            <p className="text-white/35 text-[10px]">Normal · Méchantes · tags</p>
                                        </div>
                                        <div className="rounded-lg border border-violet-400/20 bg-violet-500/8 px-3 py-2.5">
                                            <p className="text-[10px] text-violet-300/70 uppercase tracking-widest mb-1">user_questions</p>
                                            <p className="text-white text-xs font-semibold">Questions membres</p>
                                            <p className="text-white/35 text-[10px]">Scoped au groupe</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center py-1">
                                        <div className="h-px flex-1 bg-white/8" />
                                        <span className="mx-3 text-[10px] text-white/30 font-mono">UNION + ORDER BY random()</span>
                                        <div className="h-px flex-1 bg-white/8" />
                                    </div>
                                    <div className="rounded-lg border border-red-400/15 bg-red-500/5 px-3 py-2.5">
                                        <p className="text-[10px] text-red-300/60 uppercase tracking-widest mb-0.5">Filtre anti-doublon</p>
                                        <p className="text-white/50 text-[11px]">
                                            <code className="text-red-300/80">NOT IN</code> daily_questions des 30 derniers jours du groupe
                                        </p>
                                    </div>
                                    <div className="rounded-lg border border-emerald-400/20 bg-emerald-500/8 px-3 py-2 flex items-center gap-2">
                                        <span className="text-emerald-400 text-xs font-bold">→</span>
                                        <p className="text-white/60 text-[11px]">1 question sélectionnée · <code className="text-emerald-300/80">LIMIT 1</code></p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: phone mockup */}
                            <div className="w-[30%] shrink-0 [perspective:800px]">
                                <Image
                                    src={mockupPartage}
                                    alt="Kiseki — partage de résultats"
                                    className="h-auto w-full object-contain [transform:rotateY(6deg)_rotate(-1.5deg)] drop-shadow-[0_16px_32px_rgba(59,130,246,0.35)]"
                                />
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Timeline pg_cron */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <GlassCard className="border-white/8 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4 text-white/50" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Orchestration pg_cron — Schedule fixe 09h / 19h / 20h UTC</p>
                            <p className="text-white/40 text-xs">pg_cron + pg_net + Edge Functions Supabase · aucun serveur dédié</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TIMELINE.map((step, i) => (
                            <div key={step.time} className="flex flex-col gap-3">
                                <div className={cn('rounded-xl border p-4 flex-1', step.bg, step.border)}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <step.icon className={cn('w-4 h-4 shrink-0', step.color)} />
                                        <span className={cn('text-xs font-bold font-mono', step.color)}>{step.time}</span>
                                    </div>
                                    <p className="text-white text-xs font-semibold mb-1">{step.label}</p>
                                    <p className="text-white/45 text-[11px] leading-relaxed">{step.desc}</p>
                                </div>
                                {i < TIMELINE.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-end pr-2 -mr-6 mt-12 pointer-events-none">
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Mockup showcase with parallax                                        */
/* ------------------------------------------------------------------ */
function KisekiMockupShowcase() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -40])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -20])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -60])

    return (
        <section
            ref={ref}
            className="relative py-24"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(109,40,217,0.06), transparent)' }}
        >
            {/* Glow */}
            <div className="absolute left-[25%] top-[10%] w-[50%] h-[80%] rounded-full bg-violet-500/12 blur-[100px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 flex items-end justify-center gap-4 md:gap-8 h-[420px] md:h-[560px]">

                {/* Left — saisie de question */}
                <motion.div style={{ y: y1 }} className="w-[28%] shrink-0 mb-8 opacity-85">
                    <Image
                        src={mockupSaisie}
                        alt="Kiseki — saisie de la question"
                        className="h-auto w-full object-contain [transform:rotateY(8deg)_rotate(-2deg)] drop-shadow-[0_32px_64px_rgba(139,92,246,0.35)]"
                    />
                </motion.div>

                {/* Center — vote (large, front) */}
                <motion.div style={{ y: y2 }} className="w-[34%] shrink-0 z-10">
                    <Image
                        src={mockupVote}
                        alt="Kiseki — moment de voter"
                        className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(139,92,246,0.5)]"
                    />
                </motion.div>

                {/* Right — détail des votes */}
                <motion.div style={{ y: y3 }} className="w-[28%] shrink-0 mb-4 opacity-85">
                    <Image
                        src={mockupDetailVotes}
                        alt="Kiseki — détail des votes"
                        className="h-auto w-full object-contain [transform:rotateY(-8deg)_rotate(2deg)] drop-shadow-[0_32px_64px_rgba(139,92,246,0.35)]"
                    />
                </motion.div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Architecture diagram                                                 */
/* ------------------------------------------------------------------ */
function KisekiArchitecture() {
    const layers = [
        {
            label: 'Turborepo Workspace',
            color: 'border-violet-500/30 bg-violet-500/5',
            children: [
                { label: 'apps/next', sub: 'Web (Next.js 15)', color: 'border-violet-400/25 bg-violet-500/10' },
                { label: 'apps/expo', sub: 'Mobile (Expo SDK 54)', color: 'border-violet-400/25 bg-violet-500/10' },
            ],
        },
    ]

    const stats = [
        { value: '8', label: 'Tables SQL' },
        { value: '20', label: 'Politiques RLS' },
        { value: '∞', label: 'Edge Functions' },
    ]

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-center">
                {/* Left: prose */}
                <div className="w-full lg:w-[512px] shrink-0">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-3"
                    >
                        Architecture
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                    >
                        Monorepo<br />Cross-Platform
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/55 leading-relaxed mb-8"
                    >
                        Un seul dépôt, deux plateformes. Turborepo orchestres les builds. La logique métier est partagée dans <code className="text-violet-300 text-xs bg-violet-500/10 px-1.5 py-0.5 rounded">packages/core</code>, utilisée à la fois par l&apos;app Next.js et l&apos;app Expo.
                    </motion.p>

                    {/* Stat cards */}
                    <div className="flex gap-3 flex-wrap">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex-1 min-w-[90px] px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-center"
                            >
                                <p className="text-2xl font-black text-violet-300">{s.value}</p>
                                <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: visual diagram */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full lg:w-[400px] shrink-0 flex flex-col gap-3"
                >
                    {/* Turborepo wrapper */}
                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-4">
                        <p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-3">Turborepo Workspace</p>
                        {/* apps row */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                                { label: 'apps/next', sub: 'Web — Next.js 15' },
                                { label: 'apps/expo', sub: 'Mobile — Expo 54' },
                            ].map((a) => (
                                <div key={a.label} className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-3 py-2.5">
                                    <p className="text-xs font-mono font-semibold text-violet-200">{a.label}</p>
                                    <p className="text-[10px] text-white/40 mt-0.5">{a.sub}</p>
                                </div>
                            ))}
                        </div>
                        {/* packages row */}
                        <div className="grid grid-cols-3 gap-2">
                            {['packages/core', 'packages/ui', 'packages/types'].map((p) => (
                                <div key={p} className="rounded-xl border border-violet-400/15 bg-violet-500/5 px-2 py-2 text-center">
                                    <p className="text-[10px] font-mono text-violet-300/70">{p.split('/')[1]}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Supabase */}
                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4">
                        <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3">Supabase Backend</p>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { label: 'PostgreSQL + RLS', color: 'border-blue-400/20 bg-blue-500/10' },
                                { label: 'Edge Functions', color: 'border-blue-400/20 bg-blue-500/10' },
                                { label: 'pg_cron (auto)', color: 'border-blue-400/20 bg-blue-500/10' },
                                { label: 'Auth + Storage', color: 'border-blue-400/20 bg-blue-500/10' },
                            ].map((item) => (
                                <div key={item.label} className={cn('rounded-xl border px-3 py-2', item.color)}>
                                    <p className="text-[11px] text-blue-200/80 font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Tech stack badges                                                    */
/* ------------------------------------------------------------------ */
function KisekiTechStack() {
    const groups = [
        { label: 'Frontend Web', tags: ['Next.js 15', 'TypeScript', 'NativeWind (Tailwind v4)'] },
        { label: 'Mobile', tags: ['Expo SDK 54', 'React Native 0.81', 'Expo Router'] },
        { label: 'Backend', tags: ['Supabase', 'PostgreSQL', 'Row Level Security', 'pg_cron', 'Edge Functions'] },
        { label: 'Tooling', tags: ['Turborepo', 'npm workspaces', 'ESLint'] },
    ]

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white text-center mb-12"
            >
                Stack Technique
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {groups.map((g, gi) => (
                    <motion.div
                        key={g.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.1 }}
                    >
                        <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-3">{g.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {g.tags.map((t) => (
                                <span key={t} className="px-3 py-1 text-xs font-medium text-violet-100 bg-violet-500/10 border border-violet-500/20 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Footer CTA                                                           */
/* ------------------------------------------------------------------ */
function KisekiFooter() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <GlassCard className="border-violet-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-xs tracking-[0.3em] text-violet-400 uppercase mb-2">Kiseki</p>
                        <h2 className="text-2xl font-bold text-white mb-2">Voir le projet</h2>
                        <p className="text-white/50 text-sm max-w-sm">
                            Code source disponible sur GitHub. Monorepo Turborepo avec apps web + mobile et backend Supabase.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <a
                            href="https://github.com/WassimZITOUN/Kiseki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-violet-600/80 border border-violet-500/50 rounded-xl hover:bg-violet-600 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/30 bg-white/5 border border-white/10 rounded-xl cursor-not-allowed select-none">
                            <ExternalLink className="w-4 h-4" />
                            Live bientôt
                        </span>
                    </div>
                </GlassCard>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-10"
            >
                <Link href="/#projets" className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/65 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Retour aux projets
                </Link>
            </motion.div>
        </section>
    )
}

/* ------------------------------------------------------------------ */
/* Page root                                                            */
/* ------------------------------------------------------------------ */
export default function KisekiPage() {
    return (
        <div className="min-h-screen text-white">
            <InteractiveNebulaShader
                className="fixed inset-0 -z-10"
                colorBase={[0.05, 0.01, 0.12]}
                colorMult={[0.9, 0.15, 1.8]}
            />
            <KisekiNav />
            <KisekiHero />
            <KisekiConcept />
            <KisekiFeatures />
            <KisekiQuestionSystem />
            <KisekiMockupShowcase />
            <KisekiArchitecture />
            <KisekiTechStack />
            <KisekiFooter />
        </div>
    )
}
