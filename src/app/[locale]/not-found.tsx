import { Link } from '@/navigation'
import { ButtonUI, CardUI, Page, SpanUI, VStack } from '@/shared/ui'

const NotFound = () => {
    return (
        <Page className="w-full h-full">
            <VStack justifyContent="center" alignItems="center">
                <CardUI>
                    <VStack alignItems="center">
                        <SpanUI className="text-x-white">Ничего не найдено! Не отчаиваейтесь - все ошибаются</SpanUI>
                        <Link href={'/'}>
                            <ButtonUI textStyle="semibold">На главную</ButtonUI>
                        </Link>
                    </VStack>
                </CardUI>
            </VStack>
        </Page>
    )
}

export default NotFound
