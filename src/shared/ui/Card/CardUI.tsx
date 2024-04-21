import { cn } from '@/shared/utils/cn'
import { FC, HTMLAttributes } from 'react'

interface CardUIProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    tag?: 'div' | 'section' | 'article'
    className?: string
    bgColor?: 'primary' | 'secondary' | 'neutral' | 'light' | 'xneutral'
    variant?: 'ghost' | 'default'
}

const bgStyle: Record<'primary' | 'secondary' | 'neutral' | 'light' | 'xneutral', string> = {
    primary: 'bg-x-light-orange',
    secondary: 'bg-x-purple',
    neutral: 'bg-gray-50',
    light: 'bg-x-white',
    xneutral: 'bg-gray-50',
}

const variantStyles: Record<'default' | 'ghost', string> = {
    default: 'border-none',
    ghost: 'border-solid border-2 border-x-black',
}

export const CardUI: FC<CardUIProps> = ({
    tag: Wrapper = 'div',
    children,
    className,
    bgColor = 'primary',
    variant = 'default',
}) => {
    return (
        <Wrapper className={cn(`p-4 rounded-xl ${bgStyle[bgColor]} ${variantStyles[variant]}`, {}, [className])}>
            {children}
        </Wrapper>
    )
}
