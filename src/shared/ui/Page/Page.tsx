import { cn } from '@/shared/utils/cn'
import { FC, HTMLAttributes } from 'react'

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

export const Page: FC<PageProps> = ({ className, children, ...otherProps }) => {
    return <main className={cn('flex justify-center items-center', {}, [className])}>{children}</main>
}
