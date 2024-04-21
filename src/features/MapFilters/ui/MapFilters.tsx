import Image from 'next/image'
import React, { useState } from 'react'

export const MapFilters = () => {
    const [search, setSearch] = useState('')
    const [searchFilter, setSearchFilter] = useState('')
    const [toggler, setToggler] = useState(false)

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
            <h1 className="text-4xl font-semibold">Карта</h1>
            <div className="flex items-center gap-20 flex-wrap mt-5">
                <form className="max-w-sm">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Фильтры-селектор
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
                <div className="h-full flex items-end">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={toggler}
                            onChange={(e) => setToggler(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-[#e5e7eb] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-[#374151] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fff] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                        <span className="ms-3 text-sm font-medium text-[#4b5563]">Toggle me</span>
                    </label>
                </div>
            </div>
            <div className="my-10 flex flex-col justify-center items-center">
                {/*    add component MAP instead image and connect via states & selectors*/}
                <Image
                    src="https://t4.ftcdn.net/jpg/05/06/71/49/360_F_506714946_V47nHgpaFVynocuDiA3YMpTxbZ1uxtme.jpg"
                    alt=""
                    className="w-full h-32 lg:h-[36rem] rounded-md"
                />
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
            </div>
        </div>
    )
}
