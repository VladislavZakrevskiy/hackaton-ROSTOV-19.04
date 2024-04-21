import { cn } from '@/shared/utils/cn'
import React, { FC, HTMLAttributes } from 'react'

interface CardUIProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    tag?: 'div' | 'section' | 'article'
    className?: string
    bgColor?: 'primary' | 'secondary' | 'neutral' | 'light'
    border?: 'primary' | 'light' | 'dark' | 'none'
    is_hr?: boolean
}

const bgStyle: Record<'primary' | 'secondary' | 'neutral' | 'light', string> = {
    primary: 'bg-x-orange',
    secondary: 'bg-x-purple',
    neutral: 'bg-x-white',
    light: 'bg-x-light-orange',
}

const borderStyle: Record<'primary' | 'light' | 'dark' | 'none', string> = {
    light: 'border-solid border-2 border-x-white',
    dark: 'border-solid border-2 border-x-black',
    primary: 'border-solid border-2 border-x-orange',
    none: 'border-none',
}

export const CardHeader: FC<CardUIProps> = ({
    tag: Wrapper = 'div',
    className,
    bgColor = 'light',
    children,
    border = 'none',
    is_hr,
    ...otherProps
}) => {
    return (
        <Wrapper className={cn(`p-4 ${bgStyle[bgColor]} ${borderStyle[border]}`, {}, [className])} {...otherProps}>
            {is_hr && <hr />}
            {children}
        </Wrapper>
    )
}
