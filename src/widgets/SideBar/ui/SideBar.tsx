import { ReactNode } from 'react'
import { Logo } from './Logo'
import { SignButton } from '@/entities/Auth/ui/SignOut'
import { SpanUI } from '@/shared/ui'
import { Link } from '@/navigation'
import { LanguageSwitcher } from '@/features/LanguageSwitcher/LanguageSwitcher'
import { useTranslations } from 'next-intl'

const sideBarConfig: { Icon: ReactNode; text: string; href: string }[] = [
    {
        href: '/',
        text: 'Home',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
    },
    {
        href: '/dashboard',
        text: 'Dashboard',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
            </svg>
        ),
    },
    {
        href: '/map',
        text: 'Map',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        href: '/settings',
        text: 'Settings',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        href: '/sales',
        text: 'Продажи',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        href: '/products',
        text: 'Запасы',
        Icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EAE8E4"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        href: '/excel',
        text: 'Excel',
        Icon: (
            <svg
                className="w-6 h-6 text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                fill="#EAE8E4"
                viewBox="0 0 31.425 31.426"
            >
                <path d="M11.15 0 3.011 8.592v22.834h25.403V0H11.15zm-.716 3.613v3.808H6.826l3.608-3.808zm16.015 25.849H4.977V9.385h7.421V1.964h14.053v27.498h-.002z" />
                <path d="M15.004 14.766h.491v-1.768H9.444v1.768h.737c.202 0 .402.055.617.168.203.107.396.306.572.585l2.919 4.738-2.939 4.21c-.16.229-.306.421-.438.576a1.985 1.985 0 0 1-.337.321.936.936 0 0 1-.307.148 1.814 1.814 0 0 1-.462.051h-.608v1.769h5.438v-1.276l-.055-.49h-.491c-.449 0-.643-.057-.724-.094 0-.053.01-.115.028-.186.024-.088.055-.176.095-.264a3.287 3.287 0 0 1 .277-.508l1.65-2.44 1.769 2.843c.068.114.123.209.159.289a.78.78 0 0 1 .054.139l.013.108s-.112.113-.625.113h-.592v1.768h6.033v-1.768h-.729a.914.914 0 0 1-.464-.151c-.133-.08-.35-.259-.616-.613l-3.272-5.259 2.529-3.646c.164-.238.314-.437.452-.594.125-.142.246-.26.362-.349a.848.848 0 0 1 .272-.142c.104-.03.226-.045.361-.045h.655v-1.768h-5.074v1.277l.055.491h.491c.125 0 .237.006.341.02.091.011.145.029.173.029h.001c0 .1-.027.213-.085.336a3.77 3.77 0 0 1-.301.535l-1.349 2.051-1.287-2.08a5.672 5.672 0 0 1-.222-.375 2.248 2.248 0 0 1-.107-.231.66.66 0 0 1-.033-.113c-.006-.039-.009-.08-.031-.089.002-.001.042-.025.162-.049.117-.025.264-.035.493-.035z" />
            </svg>
        ),
    },
]

export function Sidebar() {
    const t = useTranslations('sidebar')
    // const [open, setOpen] = useState(false)

    return (
        <div className="h-full w-full">
            <div className={` flex flex-col h-full p-3 min-h-screen bg-[#e5522e] shadow duration-300`}>
                <div className="flex flex-col gap-3 ">
                    <div className="flex items-center justify-center py-4">
                        <Logo />
                    </div>
                    <div className="flex-1">
                        <ul className="py-2 text-sm flex flex-col gap-1.5">
                            {sideBarConfig.map((item) => (
                                <li key={item.href} className="">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 p-1 rounded-md hover:bg-[rgb(0,0,0,.1)] transition-all"
                                    >
                                        {item.Icon}
                                        <SpanUI className="text-x-white">{t(item.text)}</SpanUI>
                                    </Link>
                                </li>
                            ))}
                            <li className="rounded-sm">
                                <SignButton />
                            </li>
                            <LanguageSwitcher />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
