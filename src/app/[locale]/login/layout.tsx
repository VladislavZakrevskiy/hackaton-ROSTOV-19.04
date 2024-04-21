import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const monserrat = Montserrat({ subsets: ['cyrillic', 'latin'], variable: '--montserrat' })

export const metadata: Metadata = {
    title: 'Pepper CRM',
    description: 'The best CRM ON ZAWARUDO',
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    return (
        <html lang={locale}>
            <body className={monserrat.className}>{children}</body>
        </html>
    )
}
