import { Smartphone, Server, ShieldCheck } from 'lucide-react'
import {
    GlassCard,
    GlassCardHeader,
    GlassCardTitle,
    GlassCardDescription,
    GlassCardContent,
} from '@/components/ui/glass-card'

const skills = [
    {
        icon: <Smartphone className="w-8 h-8 mb-4 text-blue-400" />,
        title: 'Frontend & Mobile',
        description: "Développement d'interfaces modernes et applications cross-platform.",
        body: "Maîtrise de l'écosystème React, Next.js (App Router) et React Native avec Expo. Expérience en architecture monorepo (Turborepo) pour la mutualisation du code.",
    },
    {
        icon: <Server className="w-8 h-8 mb-4 text-emerald-400" />,
        title: 'Backend & API REST',
        description: "Conception d'architectures serveurs robustes et scalables.",
        body: "Expertise sur Symfony 6.4 et PHP 8.1+. Création d'API REST standardisées avec API Platform et implémentation de logique métier complexe (machines à états, algorithmes).",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 mb-4 text-purple-400" />,
        title: 'Base de données & Sécurité',
        description: 'Modélisation relationnelle et protection des données.',
        body: 'Gestion avancée sur PostgreSQL et MySQL. Sécurisation via Row Level Security (RLS) sur Supabase, authentification RBAC, et implémentation de tokens JWT.',
    },
]

export function ExpertiseSection() {
    return (
        <section id="competences" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <GlassCard key={skill.title}>
                        <GlassCardHeader>
                            {skill.icon}
                            <GlassCardTitle>{skill.title}</GlassCardTitle>
                            <GlassCardDescription>{skill.description}</GlassCardDescription>
                        </GlassCardHeader>
                        <GlassCardContent>{skill.body}</GlassCardContent>
                    </GlassCard>
                ))}
            </div>
        </section>
    )
}
