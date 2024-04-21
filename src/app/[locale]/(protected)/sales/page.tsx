'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Sales = () => {
    const t = useTranslations('sales')
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    })
    const [searchFilter, setSearchFilter] = useState('')

    // @ts-ignore
    const handleValueChange = (newValue) => {
        console.log('newValue:', newValue)
        setValue(newValue)
    }

    const FILTERS = [
        //fetch it or set as const
        {
            title: 'option1',
            value: 'val1',
        },
        {
            title: 'option2',
            value: 'val2',
        },
        {
            title: 'option3',
            value: 'val3',
        },
        {
            title: 'option4',
            value: 'val4',
        },
    ]

    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">{t('Продажи')}</h1>
            <div className="flex flex-1">
                <div className="my-5 w-1/3">
                    <div className="w-full lg:w-72">
                        <p>{t('Выбор даты')}</p>
                        <Datepicker
                            //@ts-ignore
                            value={value}
                            onChange={handleValueChange}
                        />
                    </div>
                    <div className="my-8 border-t">
                        <form className="max-w-sm">
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {t('Фильтры-селектор')}
                            </label>
                            <select
                                value={searchFilter}
                                onChange={(e) => setSearchFilter(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {FILTERS.map((filter) => {
                                    return (
                                        <option key={filter.title} value={`${filter.value}`}>
                                            {filter.title}
                                        </option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
                </div>
                <div className="w-2/3">
                    {/*    INPUT METRICS HERE*/}
                    {/* INPUT METRICS HERE */}
                </div>
            </div>
        </div>
    )
}

export default Sales
