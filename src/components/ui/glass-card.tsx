import { cn } from '@/lib/utils'
import React from 'react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

function GlassCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'relative rounded-2xl border bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300 p-6',
                className,
            )}
            {...props}>
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            {children}
        </div>
    )
}

function GlassCardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex flex-col space-y-1.5', className)} {...props}>
            {children}
        </div>
    )
}

function GlassCardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn('text-xl font-semibold leading-none tracking-tight text-white', className)} {...props}>
            {children}
        </h3>
    )
}

function GlassCardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('text-sm text-white/60', className)} {...props}>
            {children}
        </p>
    )
}

function GlassCardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('pt-4 text-sm text-white/80 leading-relaxed', className)} {...props}>
            {children}
        </div>
    )
}

export { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent }
