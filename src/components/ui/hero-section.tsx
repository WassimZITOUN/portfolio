'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Download } from 'lucide-react'
import { LiquidButton } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    {/* Giant typographic intro — photo remplace le I de WASSIM */}
                                    <div className="flex flex-col items-center w-full mt-10 mb-12 select-none leading-[0.85]" aria-label="Wassim Zitoun">
                                        {/* Row 1: WASS [photo=I] M */}
                                        <div className="flex items-end justify-center w-full gap-[0.5vw] text-[20vw] md:text-[min(16vw,_12rem)]">
                                            <span className="font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                                                WASS
                                            </span>
                                            <Image
                                                src="/assets/WassimPhoto.jpg"
                                                alt="Wassim Zitoun"
                                                width={200}
                                                height={667}
                                                priority
                                                className="flex-shrink-0 w-[0.24em] h-[0.8em] object-cover rounded-[0.11em] shadow-2xl border-2 border-white/10 mb-[0.05em]"
                                            />
                                            <span className="font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                                                M
                                            </span>
                                        </div>
                                        {/* Row 2: ZITOUN. */}
                                        <div className="font-black text-[20vw] md:text-[min(16vw,_12rem)] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 w-full text-center -mt-[1vw]">
                                            ZITOUN.
                                        </div>
                                    </div>

                                    <p className="mx-auto mt-4 max-w-2xl text-balance text-xl font-medium text-muted-foreground">
                                        Spécialiste TypeScript &amp; Symfony
                                    </p>
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        Conception d&apos;architectures backend robustes et d&apos;interfaces front-end modernes et fluides. Passionné par la sécurité des données et les performances.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <LiquidButton
                                        size="xxl"
                                        onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}>
                                        Découvrir mes projets
                                    </LiquidButton>
                                    <Link href="/cv.pdf">
                                        <LiquidButton size="xxl">
                                            Télécharger mon CV
                                            <Download className="w-4 h-4" />
                                        </LiquidButton>
                                    </Link>
                                </AnimatedGroup>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'competences' },
    { name: 'À propos', id: 'about' },
    { name: 'Contact', id: 'contact' },
]

const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                        <div className={cn('mx-auto mt-2 max-w-6xl px-6 duration-300 transition-[max-width,background-color,border-radius,border-color,padding] lg:px-12', isScrolled && 'bg-background/05 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollTo(item.id)}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                            <span>{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background/10 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => { scrollTo(item.id); setMenuState(false) }}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('font-black text-xl tracking-[-0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9B99FE] to-[#2BC8B7]', className)}>
            WZ
        </span>
    )
}
