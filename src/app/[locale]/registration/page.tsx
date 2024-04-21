'use client'
import React, { useState } from 'react';
import { register } from '@/shared/lib/server/signup';
import {USER_ACCESS_TOKEN, USER_REFRESH_TOKEN} from "@/shared/consts/localStorage";

export default function SignIn() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(JSON.stringify({ login: login, password: pass }))
            .then((data)=>{
                //@ts-ignore
                const agreedData = JSON.parse(data)
                console.log(agreedData);
                if(agreedData.access && agreedData.refresh){
                    localStorage.setItem(USER_ACCESS_TOKEN, agreedData.access);
                    localStorage.setItem(USER_REFRESH_TOKEN, agreedData.refresh);
                    window.location.href = '/';
                } else {
                    console.error('BAD DATA! maybe user registered or else error')
                }
            })
    };

    return (
        <div>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Username" />
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" />
            <button onClick={handleSubmit}>регистрация</button>
        </div>
    );
}
