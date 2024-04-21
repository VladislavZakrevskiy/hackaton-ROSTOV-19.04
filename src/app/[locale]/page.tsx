import { CardUI, ContainerUI, HStack, Page, SpanUI, VStack } from '@/shared/ui'
import { useTranslations } from 'next-intl'

export default function Home() {
    const t = useTranslations('main')

    return (
        <main className="">
            <Page className="w-full h-full">
                <HStack alignItems="center" className="p-8">
                    <VStack alignItems="center" className="p-8">
                        <SpanUI type="xlarge" color="darkorange">
                            {t('Конроль всех аспектов бизнеса в одном приложении')}
                        </SpanUI>
                        <VStack alignItems="center" className="p-8">
                            <HStack justifyContent="between">
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Построить маршрут')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                                <div style={{ paddingRight: '20px', paddingLeft: '20px' }} />
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Маршрут в PDF')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                            </HStack>
                        </VStack>

                        <VStack alignItems="center" className="p-8">
                            <HStack justifyContent="between">
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Импорт EXCEL файлов')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                                <div style={{ paddingRight: '20px', paddingLeft: '20px' }} />
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Экпорт EXCEL файлов')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                            </HStack>
                        </VStack>

                        <VStack alignItems="center" className="p-8">
                            <HStack justifyContent="between">
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Учет сотрудников')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                                <div style={{ paddingRight: '20px', paddingLeft: '20px' }} />
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Изменение данных')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                            </HStack>
                        </VStack>
                        <VStack alignItems="center" className="p-8">
                            <HStack justifyContent="between">
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Учет товара')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                                <div style={{ paddingRight: '20px', paddingLeft: '20px' }} />
                                <CardUI bgColor="light">
                                    <div style={{ paddingBottom: '15px', paddingTop: '15px' }}>
                                        <ContainerUI typeContainer="small">
                                            <SpanUI type="large">{t('Изменение товара')}</SpanUI>
                                        </ContainerUI>
                                    </div>
                                </CardUI>
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>
            </Page>
        </main>
    )
}
