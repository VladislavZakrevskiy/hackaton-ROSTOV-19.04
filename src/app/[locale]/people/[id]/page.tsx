'use client'
import React from 'react'
import { useRouter } from 'next/router'

// @ts-ignore
const PeopleById = ({ params }) => {
    const { id } = params

    const DATA = [
        {
            task: 'Убрать мусор',
            date_create: '01/11/2022',
            date_end: '01/11/2030',
        },
        {
            task: 'Сложить мусор',
            date_create: '01/12/2023',
            date_end: '01/11/2030',
        },
        {
            task: 'Разбросать мусор',
            date_create: '22/02/2020',
            date_end: '01/11/2030',
        },
    ]
    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">id Рабочего: {id}</h1>

            <div className="my-5 flex gap-3 items-start justify-center">
                <div className="w-1/2 flex flex-col gap-3">
                    {DATA.map((data, key) => {
                        return (
                            <div key={key} className="border p-3 rounded-md">
                                <p className="text-xl font-semibold">{data.task}</p>
                                <p>date create {data.date_create}</p>
                                <p>date end {data.date_end}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-1/2 flex flex-col items-start gap-8">
                    <div className="p-3 rounded-md border h-60 w-full">
                        <p>Уведомления</p>
                    </div>
                    <div className="p-3 rounded-md border h-60 w-full">
                        <p>Stats</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleById
