import { Page, Spinner, VStack } from '@/shared/ui'

const Loading = () => {
    return (
        <Page className="w-full h-full">
            <VStack justifyContent="center" alignItems="center">
                <Spinner />
            </VStack>
        </Page>
    )
}

export default Loading
