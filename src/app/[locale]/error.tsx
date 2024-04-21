'use client'

import { ButtonUI, CardUI, Page, SpanUI, VStack } from '@/shared/ui'

const Error = () => {
    const reload = () => location.reload()

    return (
        <Page className="w-full h-full">
            <VStack justifyContent="center" alignItems="center">
                <CardUI>
                    <VStack>
                        <SpanUI className="text-x-white">Извините, наша ошибка! Зато у вас их не случается!</SpanUI>
                        <ButtonUI textStyle="semibold" onClick={reload}>
                            Обновить страницу
                        </ButtonUI>
                    </VStack>
                </CardUI>
            </VStack>
        </Page>
    )
}

export default Error
