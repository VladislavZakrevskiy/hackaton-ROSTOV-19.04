'use client'
import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import { ButtonUI, CardUI, ContainerUI, HStack, InputUI, Page, SpanUI, VStack } from '@/shared/ui'
import { useTranslations } from 'next-intl'

Chart.register(...registerables)

const Dashboard = () => {
    const t = useTranslations('dashboard')
    const pieChartRef = useRef<HTMLCanvasElement>(null)
    const barChartRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (pieChartRef.current && barChartRef.current) {
            const pieChartCtx = pieChartRef.current.getContext('2d')
            const barChartCtx = barChartRef.current.getContext('2d')

            if (pieChartCtx && barChartCtx) {
                Chart.getChart(pieChartCtx)?.destroy()
                Chart.getChart(barChartCtx)?.destroy()

                const productData = {
                    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
                    datasets: [
                        {
                            label: 'Product Sales',
                            data: [300, 450, 200, 350],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.7)',
                                'rgba(54, 162, 235, 0.7)',
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)',
                            ],
                        },
                    ],
                }
                const data = {
                    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                    datasets: [
                        {
                            label: 'My First Dataset',
                            data: [65, 59, 90, 81, 56, 55, 40],
                            fill: true,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)',
                        },
                        {
                            label: 'My Second Dataset',
                            data: [28, 48, 40, 19, 96, 27, 100],
                            fill: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(54, 162, 235)',
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)',
                        },
                    ],
                }

                new Chart(pieChartCtx, {
                    type: 'polarArea',
                    data: productData,
                    options: { color: '#000', font: { family: `'Montserrat', sans-serif` } },
                })

                new Chart(barChartCtx, {
                    type: 'radar',
                    data: data,
                })
            }
        }
    }, [])

    return (
        <Page className="w-full">
            <VStack alignItems="center" className="p-8">
                <HStack justifyContent="between">
                    <CardUI bgColor="light">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="grid grid-rows-2 gap-3">
                                <CardUI className="w-full p-8 h-full" bgColor="neutral">
                                    <VStack justifyContent="between">
                                        <SpanUI type="large" color="#333">
                                            {t('Настройка')}
                                        </SpanUI>
                                        <SpanUI type="large" color="#333">
                                            {t('фильтрации')}
                                        </SpanUI>
                                        <VStack justifyContent="between">
                                            <SpanUI type="medium" color="#333">
                                                {t('Товар')}
                                            </SpanUI>
                                            <InputUI
                                                width={'265px'}
                                                height={'30px'}
                                                backgroundColor={'#ffd8ae'}
                                                textStyle={'bold'}
                                                type={'active'}
                                                text={''}
                                            ></InputUI>
                                        </VStack>
                                        <VStack justifyContent="between">
                                            <SpanUI type="medium" color="#333">
                                                {t('Количество')}
                                            </SpanUI>
                                            <InputUI
                                                width={'265px'}
                                                height={'30px'}
                                                backgroundColor={'#ffd8ae'}
                                                textStyle={'bold'}
                                                type={'active'}
                                                text={''}
                                            ></InputUI>
                                        </VStack>
                                        <ButtonUI textStyle="medium">{t('Применить')}</ButtonUI>
                                    </VStack>
                                </CardUI>
                                <CardUI className="w-full p-8 h-full" bgColor="light">
                                    <VStack justifyContent="between">
                                        <SpanUI type="large" color="#333">
                                            {t('Редактирование')}
                                        </SpanUI>
                                        <SpanUI type="large" color="#333">
                                            {t('товаров')}
                                        </SpanUI>
                                        <VStack justifyContent="between">
                                            <SpanUI type="medium" color="#333">
                                                {t('Товар')}
                                            </SpanUI>
                                            <InputUI
                                                width={'265px'}
                                                height={'30px'}
                                                backgroundColor={'#ffd8ae'}
                                                textStyle={'bold'}
                                                type={'active'}
                                                text={''}
                                            ></InputUI>
                                        </VStack>
                                        <VStack justifyContent="between">
                                            <SpanUI type="medium" color="#333">
                                                {t('Количество')}
                                            </SpanUI>
                                            <InputUI
                                                width={'265px'}
                                                height={'30px'}
                                                backgroundColor={'#ffd8ae'}
                                                textStyle={'bold'}
                                                type={'active'}
                                                text={''}
                                            ></InputUI>
                                        </VStack>
                                        <ButtonUI textStyle="medium">{t('Применить')}</ButtonUI>
                                    </VStack>
                                </CardUI>
                                {/* <CardUI className="w-full p-8 h-full" bgColor="neutral">
                                    <VStack alignItems="start">
                                        <SpanUI type="medium" color="#333">
                                            Navigation
                                        </SpanUI>
                                        <SpanUI type="medium" color="#333">
                                            -Route1
                                        </SpanUI>
                                        <SpanUI type="medium" color="#333">
                                            -Route2
                                        </SpanUI>
                                        <SpanUI type="medium" color="#333">
                                            -Route3
                                        </SpanUI>
                                        <SpanUI type="medium" color="#333">
                                            -Route4
                                        </SpanUI>
                                    </VStack>
                                </CardUI> */}
                            </div>

                            <div className="grid grid-rows-2 gap-3">
                                <CardUI bgColor="light">
                                    <VStack alignItems="center">
                                        <canvas ref={pieChartRef} width="auto" height="auto"></canvas>
                                    </VStack>
                                </CardUI>
                                <CardUI bgColor="light">
                                    <VStack alignItems="center">
                                        <canvas ref={barChartRef} width="auto" height="auto"></canvas>
                                    </VStack>
                                </CardUI>
                            </div>

                            {/* <CardUI bgColor="light" className="h-full">
                                <VStack gap={5}>
                                    <HStack justifyContent="center">
                                        <SpanUI type="medium" className="text-x-white">
                                            Редактирование
                                        </SpanUI>
                                    </HStack>
                                    <div className="grid grid-rows-2">
                                        <HStack justifyContent="between" alignItems="center">
                                            <SpanUI type="medium" color="#333">
                                                Товар
                                            </SpanUI>
                                            <InputUI
                                                width="130px"
                                                height="30px"
                                                backgroundColor="#EAEAEA"
                                                textStyle="medium"
                                                type="default"
                                                text="lala"
                                            />
                                        </HStack>
                                        <HStack justifyContent="between" alignItems="center">
                                            <SpanUI type="medium" color="#333">
                                                Количество
                                            </SpanUI>
                                            <InputUI
                                                width="130px"
                                                height="30px"
                                                backgroundColor="#EAEAEA"
                                                textStyle="medium"
                                                type="default"
                                                text="lala"
                                            />
                                        </HStack>
                                    </div>
                                    <VStack alignItems="center">
                                        <ButtonUI active_type={'active'} textStyle={'medium'}>
                                            Изменить
                                        </ButtonUI>
                                    </VStack>
                                </VStack>
                            </CardUI> */}
                        </div>
                    </CardUI>
                </HStack>
            </VStack>
        </Page>
    )
}

export default Dashboard
