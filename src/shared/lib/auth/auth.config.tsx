import { NextAuthConfig } from 'next-auth'

import Discord from 'next-auth/providers/discord'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Vk from 'next-auth/providers/vk'
import Yandex from 'next-auth/providers/yandex'

export const authConfig = {
    pages: {
        // signIn: '/login',
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
        GitHub({ clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET }),
        Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }),
        Vk({ clientId: process.env.VK_CLIENT_ID, clientSecret: process.env.VK_CLIENT_SECRET }),
        Yandex({ clientId: process.env.YANDEX_CLIENT_ID, clientSecret: process.env.YANDEX_CLIENT_SECRET }),
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            let isLoggedIn = !!auth?.user
            let isOnDashboard = nextUrl.pathname.startsWith('/')

            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl))
            }

            return true
        },
    },
} satisfies NextAuthConfig
