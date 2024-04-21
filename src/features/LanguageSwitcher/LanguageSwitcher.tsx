'use client'
import React, { FC, useState } from 'react'
import { useLocale } from 'next-intl'
import ISO6391 from 'iso-639-1'
import { usePathname, useRouter } from '@/navigation'
import { useSearchParams } from 'next/navigation'
import { ButtonUI, SpanUI } from '@/shared/ui'

export const LanguageSwitcher: FC = () => {
    const searchParams = useSearchParams()
    const locale = useLocale()
    const router = useRouter()
    const pathName = usePathname()

    const handleChange = () => {
        router.replace(`${pathName}?${searchParams.toString()}`, { locale: locale === 'ru' ? 'en' : 'ru' })
    }

    return (
        <ButtonUI onClick={handleChange}>
            <SpanUI>{ISO6391.getNativeName(locale)}</SpanUI>
        </ButtonUI>
    )
}
