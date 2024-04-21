import React, { CSSProperties, HTMLAttributes } from 'react'

interface SpanProps extends HTMLAttributes<HTMLParagraphElement> {
    type?: 'small' | 'medium' | 'large' | 'xlarge'
    color?: string
    children: React.ReactNode
}

export const SpanUI: React.FC<SpanProps> = ({ type = 'medium', color, children, ...otherProps }) => {
    const typeStyles: Record<'small' | 'medium' | 'large' | 'xlarge', CSSProperties> = {
        small: {
            fontSize: '12px',
            fontWeight: 'normal',
            color: color,
            // margin: '10px',
        },
        medium: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: color,
            // margin: '12px',
        },
        large: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: color,
            // margin: '15px',
        },
        xlarge: {
            fontSize: '34px',
            fontWeight: '600px',
        },
    }

    const spanStyle = {
        ...typeStyles[type],
    }

    return (
        <span style={spanStyle} {...otherProps}>
            {children}
        </span>
    )
}
