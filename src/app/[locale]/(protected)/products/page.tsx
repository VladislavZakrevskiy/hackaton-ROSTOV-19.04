'use client'
import { Link } from '@/navigation'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'

const ProductsPage = () => {
    const t = useTranslations('product')

    const [search, setSearch] = useState('')
    const [searchFilter1, setSearchFilter1] = useState('')
    const [searchFilter2, setSearchFilter2] = useState('')
    const [searchFilter3, setSearchFilter3] = useState('')

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

    const CARDS = [
        {
            title: 'sklad1',
            desc: 'description1',
            stats: ['1', 'a', '!'],
            link: '/xxx123',
        },
        {
            title: 'sklad2',
            desc: 'description1',
            stats: ['1', 'a', '!'],
            link: '/xxx12345',
        },
        {
            title: 'sklad3',
            desc: 'description1',
            stats: ['1', 'a', '!'],
            link: '/xxx123456789',
        },
    ]

    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">{t('Запасы')}</h1>
            <div className="relative my-3 border rounded-md flex w-60 lg:w-96">
                <span className="absolute inset-y-0 left-0 flex items-center py-4 gap-2">
                    <button type="submit" className="p-2 focus:outline-none focus:ring">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </span>
                <input
                    type="search"
                    name="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none text-center"
                />
            </div>
            <div className="my-3 flex flex-wrap gap-5 items-center">
                <form className="max-w-sm">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Фильтры-селектор1
                    </label>
                    <select
                        value={searchFilter1}
                        onChange={(e) => setSearchFilter1(e.target.value)}
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
                <form className="max-w-sm">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Фильтры-селектор2
                    </label>
                    <select
                        value={searchFilter2}
                        onChange={(e) => setSearchFilter2(e.target.value)}
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
                <form className="max-w-sm">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Фильтры-селектор3
                    </label>
                    <select
                        value={searchFilter3}
                        onChange={(e) => setSearchFilter3(e.target.value)}
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
            <div className="my-1.5 grid grid-cols-3 gap-5">
                {/*    кто это читает и считает пидорасом - согласен. мне стало лень выносить это в другой компонент. Но если ты крутышка и такая ⭐ то сделай это пожалуйста я уже устал ;) */}
                {CARDS.map((card, key) => {
                    return (
                        <Link key={card.link} href={`/products/${card.link}`} className="group">
                            <div className="w-full p-4 rounded-md border group-hover:border-2" key={key}>
                                <p className="text-xl font-semibold">{card.title}</p>
                                <p>{card.desc}</p>
                                <div className="flex gap-3">
                                    <p>{t('Статистика')}:</p>
                                    {card.stats.map((stat, key) => {
                                        return <p key={key}>{stat}</p>
                                    })}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsPage
