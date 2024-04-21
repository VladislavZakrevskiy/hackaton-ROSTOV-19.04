'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

// DELETE IGNORE AND ADD TYPE I FORGOT HOW 2 MAKE IT XDDDDDDDD DDSADJFASBHGFASHBG
// @ts-ignore
const ProductById = ({ params }) => {
    const { id } = params
    const t = useTranslations('product')

    const DATA = [
        {
            typeTitle: 'type1',
            stats: '1200/1500',
        },
        {
            typeTitle: 'type2',
            stats: '1201/1500',
        },
        {
            typeTitle: 'type3',
            stats: '1202/1600',
        },
    ]
    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">
                {t('Товар')} id: {id}
            </h1>
            <div className="my-5 flex gap-3 items-start justify-center">
                <div className="w-1/2 flex flex-col gap-3">
                    {DATA.map((data, key) => {
                        return (
                            <div key={key} className="border p-3 rounded-md">
                                <p className="text-xl font-semibold">{data.typeTitle}</p>
                                <p>{data.stats}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-1/2 flex flex-col items-start gap-8">
                    <div className="p-3 rounded-md border h-60 w-full">
                        <p>{t('Уведомления')}</p>
                    </div>
                    <div className="p-3 rounded-md border h-60 w-full">
                        <p>{t('Статистика')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductById
