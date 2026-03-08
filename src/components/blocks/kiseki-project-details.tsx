import { Github, ExternalLink } from 'lucide-react'

const TECH_STACK = [
    'Turborepo',
    'Next.js',
    'Expo',
    'Supabase',
    'TypeScript',
    'PostgreSQL (RLS)',
]

export function KisekiProjectDetails() {
    return (
        <div>
            {/* Title & Links */}
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                    Kiseki — App Sociale
                </h2>

                <div className="flex items-center gap-2 shrink-0 ml-4">
                    <a
                        href="https://github.com/WassimZITOUN/Kiseki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                    <span
                        title="Projet en cours — bientôt en ligne"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/30 bg-white/5 border border-white/10 rounded-full cursor-not-allowed select-none"
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                    </span>
                </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
                {TECH_STACK.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-blue-100 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Divider & Summary */}
            <hr className="my-6 border-white/10" />
            <p className="text-sm italic text-gray-400">
                Application sociale de vote quotidien entre amis, développée au sein d&apos;une architecture monorepo.
            </p>
        </div>
    )
}
