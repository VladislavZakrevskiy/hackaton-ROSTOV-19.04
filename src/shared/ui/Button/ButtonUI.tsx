import { cn } from '@/shared/utils/cn'
import React, { ButtonHTMLAttributes, CSSProperties, MutableRefObject, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active_type?: 'default' | 'active' | 'hover'
    children: ReactNode
    width?: string
    height?: string
    ref?: MutableRefObject<HTMLButtonElement | null>
    textStyle?: 'regular' | 'medium' | 'semibold' | 'bold' | 'extaBold'
}

export const ButtonUI: React.FC<ButtonProps> = ({
    active_type = 'default',
    children,
    width,
    height,
    textStyle = 'regular',
    className,
    ref,
    ...otherProps
}) => {
    const buttonStyles: Record<'default' | 'active' | 'hover', CSSProperties> = {
        default: {
            backgroundColor: '#F37022',
            color: 'white',
            borderRadius: '5px',
        },
        active: {
            backgroundColor: '#d0f5cd',
            color: 'black',
            borderRadius: '5px',
        },
        hover: {
            backgroundColor: '#EB9B6C',
            color: 'white',
            borderRadius: '5px',
        },
    }

    const defaultTextStyle: Record<'regular' | 'medium' | 'semibold' | 'bold' | 'extaBold', CSSProperties> = {
        regular: {
            fontSize: '10px',
        },
        medium: {
            fontSize: '18px',
        },
        semibold: {
            fontSize: '36px',
        },
        bold: {
            fontSize: '44px',
        },
        extaBold: {
            fontSize: '54px',
        },
    }

    const mergedTextStyle = defaultTextStyle[textStyle]
    const buttonStyle = { ...buttonStyles[active_type], width, height }

    return (
        <button
            ref={ref}
            className={cn(`pt-2 pb-2 pr-6 pl-6`, {}, [className])}
            style={{ ...buttonStyle, ...mergedTextStyle }}
            {...otherProps}
        >
            {children}
        </button>
    )
}
