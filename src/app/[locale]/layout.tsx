import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/widgets/SideBar'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

const monserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--montserrat' })

export const metadata: Metadata = {
    title: 'Pepper CRM',
    description: 'The best CRM ON ZAWARUDO',
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    let messages
    try {
        console.log(locale)
        messages = (await import(`../../../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body className={monserrat.className + ' grid grid-cols-[1fr_6fr]'}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Sidebar />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
