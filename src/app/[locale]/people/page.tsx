'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { loginin } from '@/shared/lib/server/loginin'
import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from '@/shared/consts/localStorage'
import { addPeople } from '@/shared/lib/server/addPeople'
import { Link } from '@/navigation'

const UserProfilePage = () => {
    // const [userData, setUserData] = useState<User | null>(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //   const fetchUser = async (userId: string) => {
    //     try {
    //       const response = await fetch(`http://ilshaw.site/api/user/profile?id=${userId}`, {
    //         method: 'GET',
    //         headers: {
    //           Authorization: 'authorization-token'
    //         }
    //       });
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const json = await response.json();
    //       if (json.status !== 200) {
    //         throw new Error('API returned an error');
    //       }
    //       setUserData(json.data?.user);
    //     } catch (error) {
    //       //@ts-ignore
    //       setError(error.message);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };

    //   fetchUser('your-user-id');
    // }, []);

    // if (isLoading) {
    //   return <p>Запрос данных...</p>;
    // }

    // if (error) {
    //   return <p>{error}</p>;
    // }

    // if (!userData) {
    //   return <p>Пользователь не найден</p>;
    // }

    const [search, setSearch] = useState('')
    const [searchFilter1, setSearchFilter1] = useState('')
    const [searchFilter2, setSearchFilter2] = useState('')
    const [searchFilter3, setSearchFilter3] = useState('')

    const FILTERS = [
        //fetch it or set as const
        {
            title: 'Администратор',
            value: 'admin',
        },
        {
            title: 'Логист',
            value: 'logist',
        },
        {
            title: 'Аналитик',
            value: 'anal',
        },
        {
            title: 'Персонал склада',
            value: 'worker',
        },
    ]

    const CARDS = [
        {
            id: '1',
            firstName: 'Timur',
            lastName: 'Engalytchev',
            created_at: '01/02/2021',
            updated_at: '12/12/2022',
            role: 'logist',
        },
        {
            id: '2',
            firstName: 'Vlad',
            lastName: 'Vlados',
            created_at: '01/02/2021',
            updated_at: '12/12/2022',
            role: 'admin',
        },
        {
            id: '3',
            firstName: 'Dima',
            lastName: 'Dimas',
            created_at: '01/02/2021',
            updated_at: '12/12/2022',
            role: 'worker',
        },
        {
            id: '4',
            firstName: 'Khadzi',
            lastName: 'Hadziev',
            created_at: '01/02/2021',
            updated_at: '12/12/2022',
            role: 'anal',
        },
        {
            id: '5',
            firstName: 'Andrew',
            lastName: 'Andreew',
            created_at: '01/02/2021',
            updated_at: '12/12/2022',
            role: 'admin',
        },
    ]
    const [name, setName] = useState('')
//@ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addPeople(JSON.stringify({ name: name })).then((data) => {
            // const agreedData = JSON.parse(data)
            console.log(data)
        })
    }
    // БЛЯТЬ ЕЩЁ БОЛЬШАЯ ОШИБКА! андрей забыл как указывать акцесс токен при добавлении. пожалуйста, кто читает, спросите у него и сделайте добавление через localStore.get и тд и просто в запрос засуньте токен!

    // Блять а смысл добавления если нет get который будет спрашивать какие люди есть ваще. ну ок реализовал add

    return (
        <div className="p-6">
            <h1 className="text-4xl font-semibold">Сотрудники</h1>
            <div className="my-3 flex flex-wrap gap-5 items-center">
                <form className="max-w-sm">
                    <select
                        value={searchFilter1}
                        onChange={(e) => setSearchFilter1(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {FILTERS.map((filter) => {
                            return (
                                <option key={filter.title} value={filter.value}>
                                    {filter.title}
                                </option>
                            )
                        })}
                    </select>
                </form>
                <button type="button" className="apply-filter-button" onClick={() => console.log('filter')}>
                    Применить фильтр
                </button>
            </div>
            <div className="my-2">
                <p>Добавить сотрудника</p>
                <input
                    className="border rounded-md mr-2"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <button
                    onClick={(e) => {
                        handleSubmit(e)
                    }}
                >
                    добавить
                </button>
            </div>
            <div className="my-1.5 grid grid-cols-3 gap-5">
                {CARDS.map((people, key) => {
                    return (
                        <Link key={people.id} href={`/people/${people.id}`} className="group">
                            <div className="w-full p-4 rounded-md border group-hover:border-2" key={key}>
                                <p className="text-xl font-semibold">{people.firstName}</p>
                                <p className="text-xl font-semibold">{people.lastName}</p>
                                <p>{people.role}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default UserProfilePage
