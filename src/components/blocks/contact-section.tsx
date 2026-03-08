import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const links = [
    {
        label: 'Email',
        value: 'wassim.zitoun.etu@gmail.com',
        href: 'mailto:wassim.zitoun.etu@gmail.com',
        icon: <Mail className="w-4 h-4" />,
    },
    {
        label: 'LinkedIn',
        value: 'wassim-zitoun',
        href: 'https://www.linkedin.com/in/wassim-zitoun/',
        icon: <Linkedin className="w-4 h-4" />,
    },
    {
        label: 'GitHub',
        value: 'WassimZITOUN',
        href: 'https://github.com/WassimZITOUN',
        icon: <Github className="w-4 h-4" />,
    },
]

export function ContactSection() {
    return (
        <section id="contact" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">

            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-3">Travaillons ensemble.</h2>
                <p className="text-white/50 text-sm">
                    Disponible pour des missions freelance, alternances ou opportunités CDI.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    {links.map(({ label, value, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-left"
                        >
                            <span className="text-white/40 group-hover:text-white/80 transition-colors duration-200 shrink-0">
                                {icon}
                            </span>
                            <span className="flex flex-col min-w-0">
                                <span className="text-[10px] font-medium uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors duration-200">
                                    {label}
                                </span>
                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 truncate">
                                    {value}
                                </span>
                            </span>
                        </a>
                    ))}
                </div>

                <p className="mt-10 text-xs text-white/25 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Wattrelos, Hauts-de-France
                </p>
            </div>

        </section>
    )
}
