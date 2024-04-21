'use client'
import { Directions } from '@2gis/mapgl-directions'
import { load } from '@2gis/mapgl'
import { Map, Marker } from '@2gis/mapgl/types'
import { memo, useEffect, useRef, useState } from 'react'
import { startAntAlg } from '@/shared/utils/algorithms/AntAlg/AntAlg'
import { PDFButton } from '@/features/PDFButton/ui/PDFButton'
import { ButtonUI, SpanUI, VStack } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const data = [
    { longitude: 47.15389021, latitude: 39.73343477, label: 'Склад 1', text: 'Склад 1', id: '1' },
    { longitude: 47.27843879, latitude: 39.66504917, label: 'Склад 2', text: 'Склад 2', id: '2' },
    { longitude: 47.27908131, latitude: 39.8532115, label: 'Склад 3', text: 'Склад 3', id: '3' },
    { longitude: 47.23956633, latitude: 39.686936, label: 'Клиент 1', text: 'Клиент 1', id: ' 4' },
    { longitude: 47.23876258, latitude: 39.72910032, label: 'Клиент 2', text: 'Клиент 2', id: '5' },
    { longitude: 47.26100013, latitude: 39.7189723, label: 'Клиент 3', text: 'Клиент 3', id: '6 ' },
    { longitude: 47.21593813, latitude: 39.67961893, label: 'Клиент 4', text: 'Клиент 4', id: '7' },
    { longitude: 47.2294162, latitude: 39.6284853, label: 'Клиент 5', text: 'Клиент 5', id: '8' },
    { longitude: 47.23343191, latitude: 39.75903914, label: 'Клиент 6', text: 'Клиент 6', id: '9 ' },
    { longitude: 47.25423635, latitude: 39.76570175, label: 'Клиент 7', text: 'Клиент 7', id: '10' },
    { longitude: 47.23600049, latitude: 39.59843919, label: 'Клиент 8', text: 'Клиент 8', id: '11' },
    { longitude: 47.29597385, latitude: 39.71406386, label: 'Клиент 9', text: 'Клиент 9', id: '12' },
    { longitude: 47.29408339, latitude: 39.70305607, label: 'Клиент 10', text: 'Клиент 10', id: '13' },
    { longitude: 47.26360024, latitude: 39.85908554, label: 'Клиент 11', text: 'Клиент 11', id: '14' },
    { longitude: 47.22374472, latitude: 39.72594068, label: 'Клиент 12', text: 'Клиент 12', id: '15' },
    { longitude: 47.28950657, latitude: 39.71387074, label: 'Клиент 13', text: 'Клиент 13', id: '16' },
    { longitude: 47.28401677, latitude: 39.7063391, label: 'Клиент 14', text: 'Клиент 14', id: '17' },
    { longitude: 47.28298007, latitude: 39.71715376, label: 'Клиент 15', text: 'Клиент 15', id: '18' },
    { longitude: 47.26878544, latitude: 39.88010333, label: 'Клиент 16', text: 'Клиент 16', id: '19' },
    { longitude: 47.23348307, latitude: 39.71436963, label: 'Клиент 17', text: 'Клиент 17', id: '20' },
    { longitude: 47.22882423, latitude: 39.69366298, label: 'Клиент 18', text: 'Клиент 18', id: '21' },
    { longitude: 47.23015798, latitude: 39.68220458, label: 'Клиент 19', text: 'Клиент 19', id: '22' },
    { longitude: 47.27205698, latitude: 39.75013421, label: 'Клиент 20', text: 'Клиент 20', id: '23' },
]

// eslint-disable-next-line react/display-name
const MapWrapper = memo(
    () => <div id="map-container" className="h-full w-full" />,
    () => true
)

export default memo(
    function Home() {
        const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
        const directionsRef = useRef<Directions | null>(null)
        const [canPrint, setCanPrint] = useState<boolean>(false)
        const t = useTranslations('map')

        const routeDirections = () => {
            console.log('ant')
            const antalg = startAntAlg(
                Array.from(selectedIds).map((id) => {
                    const candidate = data.find((dataId) => dataId.id === id)
                    return [candidate?.latitude || 0, candidate?.longitude || 0]
                }),
                (path) => directionsRef.current?.carRoute({ points: path })
            )
            console.log('ant')
            antalg()
            console.log('ant')
            setCanPrint(true)
            console.log('ant')
        }

        useEffect(() => {
            let map: Map
            load().then((mapglAPI) => {
                map = new mapglAPI.Map('map-container', {
                    center: [39.810833, 47.240556],
                    zoom: 13,
                    key: process.env.NEXT_PUBLIC_2GIS_MAPS_KEY,
                })

                const directions = new Directions(map, {
                    directionsApiKey: process.env.NEXT_PUBLIC_2GIS_MAPS_KEY || '',
                })
                directionsRef.current = directions

                const markers: { marker: Marker; id: string }[] = []

                data.map(({ latitude, longitude, id }) =>
                    markers.push({ marker: new mapglAPI.Marker(map, { coordinates: [latitude, longitude] }), id })
                )

                markers.forEach(({ marker, id }) => {
                    marker.on('click', () => {
                        const candidate = selectedIds.has(id)
                        console.log(candidate, selectedIds, id)
                        if (candidate) {
                            console.log('candidate')
                            marker.setLabel({ text: '' })
                            setSelectedIds((prev) => {
                                prev.delete(id)
                                return prev
                            })
                        }
                        if (!candidate) {
                            console.log('!candidate')
                            marker.setLabel({ text: `Выбран ${data.find(({ id: dataId }) => id == dataId)?.label}` })
                            setSelectedIds((prev) => {
                                prev.add(id)
                                return prev
                            })
                        }
                    })
                })
            })

            // Удаляем карту при размонтировании компонента
            return () => map && map.destroy()
        }, [])

        return (
            <main className="grid grid-cols-2">
                <VStack alignItems="center" gap={5} className="mt-5">
                    <ButtonUI onClick={routeDirections} textStyle="medium">
                        {t('Построить маршрут между точками')}
                    </ButtonUI>
                    {canPrint && (
                        <PDFButton
                            places={Array.from(selectedIds).map((id) => data.find((dataId) => dataId.id === id)!)}
                        />
                    )}
                    <div className="grid grid-cols-1 gap-2">
                        <div className="grid grid-cols-5 gap-2 justify-center">
                            <SpanUI className="text-center">{t('Номер в маршруте')}</SpanUI>
                            <SpanUI className="text-center">{t('ID в системе')}</SpanUI>
                            <SpanUI className="text-center">{t('Широта')}</SpanUI>
                            <SpanUI className="text-center">{t('Долгота')}</SpanUI>
                            <SpanUI className="text-center">{t('Адрес')}</SpanUI>
                        </div>
                        {Array.from(selectedIds)
                            .map((id) => data.find((dataId) => dataId.id === id)!)
                            .map((place, i) => (
                                <div className="grid grid-cols-5 gap-2" key={place.id}>
                                    <SpanUI className="text-center">{i + 1}</SpanUI>
                                    <SpanUI className="text-center">{place.id}</SpanUI>
                                    <SpanUI className="text-center">{place.latitude}</SpanUI>
                                    <SpanUI className="text-center">{place.longitude}</SpanUI>
                                    <SpanUI className="text-center">{place.text}</SpanUI>
                                </div>
                            ))}
                    </div>
                </VStack>
                <MapWrapper />
            </main>
        )
    },
    () => true
)
