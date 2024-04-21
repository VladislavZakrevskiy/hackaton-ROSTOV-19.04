import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {
    const t = useTranslations('settings')

    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">{t('Настройки')}</h1>
            <div className="my-3 w-full lg:max-w-3xl">
                <p className="font-semibold text-xl">{t('Пользовательские')}</p>
                <div className="rounded-md bg-[#c9d1db] p-3">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-[#e5e7eb] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#374151] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                        <span className="ms-3 text-sm font-medium text-[#4b5563]">{t('Toggle me')}</span>
                    </label>
                </div>
            </div>
            <div className="flex w-full lg:max-w-3xl h-[1px] rounded-md bg-[#c9d1db] my-2.5" />
            <div className="my-3 w-full lg:max-w-3xl">
                <p className="font-semibold text-xl">{t('Уведомления')}</p>
                <div className="rounded-md bg-[#c9d1db] p-3">
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-[#e5e7eb] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#374151] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                        <span className="ms-3 text-sm font-medium text-[#4b5563]">{t('Toggle me')}</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Page
