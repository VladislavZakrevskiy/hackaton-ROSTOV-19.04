'use server'

import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from "@/shared/consts/localStorage";

export async function addPeople(data) { // Accept login and password as arguments
    console.log(data)
    try {
        const response = await fetch(process.env.API + '/api/consumer/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data // Send login and password in request body
        });

        if (!response.ok) {
            // If response is not ok, throw an error with the status text
            const errorText = await response.text();
            throw new Error(`adding people failed: ${errorText}`);
        }

        const datas = await response.json();
        console.log(datas)
        return(JSON.stringify(datas))

    } catch (error) {
        console.error('Registration Error:', error);
    }
}
