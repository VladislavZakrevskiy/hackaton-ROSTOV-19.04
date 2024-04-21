import { cn } from '@/shared/utils/cn'
import { FC, HTMLAttributes, ReactNode } from 'react'

export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'evenly' | 'around' | 'stretch'
const justifyStyle: Record<JustifyContent, string> = {
    around: 'justify-around',
    between: 'justify-between',
    center: 'justify-center',
    end: 'justify-end',
    evenly: 'justify-evenly',
    start: 'justify-start',
    stretch: 'justify-stretch',
}

export type AlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
const alignStyle: Record<AlignItems, string> = {
    baseline: 'items-baseline',
    center: 'items-center',
    end: 'items-end',
    start: 'items-start',
    stretch: 'items-stretch',
}

export type Gap = number
const gapStyle: Record<number, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
    9: 'gap-9',
    10: 'gap-10',
}

export interface FlexProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
    children: ReactNode
    className?: string
    justifyContent?: JustifyContent
    alignItems?: AlignItems
    gap?: Gap
    direction?: 'col' | 'row'
}

export const Flex: FC<FlexProps> = ({
    className,
    children,
    justifyContent,
    alignItems,
    gap,
    direction,
    ...otherProps
}) => {
    const directionStyle: Record<'col' | 'row', string> = {
        col: 'flex-col',
        row: 'flex-row',
    }

    return (
        <div
            className={cn(
                `flex ${justifyContent ? justifyStyle[justifyContent] : ''} 
				${alignItems ? alignStyle[alignItems] : ''} 
				${gap ? gapStyle[gap] : ''} 
				${direction ? directionStyle[direction] : ''}`,
                {},
                [className]
            )}
            {...otherProps}
        >
            {children}
        </div>
    )
}
