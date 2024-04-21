import { cn } from '@/shared/utils/cn'
import { FC, HTMLAttributes } from 'react'

interface CardUIProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    tag?: 'div' | 'section' | 'article'
    className?: string
    bgColor?: 'primary' | 'secondary' | 'neutral' | 'light'
    variant?: 'ghost' | 'default'
}

const bgStyle: Record<'primary' | 'secondary' | 'neutral' | 'light', string> = {
    primary: 'bg-x-orange',
    secondary: 'bg-x-purple',
    neutral: 'bg-x-white',
    light: 'bg-x-light-orange',
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
        <Wrapper className={cn(`rounded-xl ${bgStyle[bgColor]} ${variantStyles[variant]}`, {}, [className])}>
            {children}
        </Wrapper>
    )
}
