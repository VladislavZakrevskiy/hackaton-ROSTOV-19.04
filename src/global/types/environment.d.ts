declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API: string
            DISCORD_CLIENT_ID: string
            DISCORD_CLIENT_SECRET: string

            GITHUB_CLIENT_ID: string
            GITHUB_CLIENT_SECRET: string

            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string

            VK_CLIENT_ID: string
            VK_CLIENT_SECRET: string

            YANDEX_CLIENT_ID: string
            YANDEX_CLIENT_SECRET: string
        }
    }
}

export {}
