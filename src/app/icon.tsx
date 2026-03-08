import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        <div
            style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#0a0a0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <span
                style={{
                    fontSize: 14,
                    fontWeight: 900,
                    letterSpacing: '-0.05em',
                    background: 'linear-gradient(135deg, #9B99FE, #2BC8B7)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                WZ
            </span>
        </div>,
        { ...size }
    )
}
