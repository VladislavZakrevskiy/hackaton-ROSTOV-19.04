import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'ru']

export default getRequestConfig(async ({ locale }) => {
    console.log(locale)
    if (!locales.includes(locale as 'ru' | 'en')) notFound()

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})
