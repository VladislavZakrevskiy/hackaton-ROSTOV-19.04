'use client'
import { ContainerUI, VStack } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'

const Excel = () => {
    const t = useTranslations('excel')
    const [file, setFile] = useState<File | null>(null)
    const [data, setData] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [downloadLink, setDownloadLink] = useState<string | null>(null)
    const [createdDownloadLink, setCreatedDownloadLink] = useState(false)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0]
        if (selectedFile) {
            setFile(selectedFile)
            setError(null)
        } else {
            setError(t('Файл не выбран'))
        }
    }

    const createDownloadLink = () => {
        if (!file || !data) return

        const worksheet = XLSX.utils.json_to_sheet(data)
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
        const blob = new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
        setDownloadLink(window.URL.createObjectURL(blob))
        setCreatedDownloadLink(true)
    }

    useEffect(() => {
        const loadFile = () => {
            if (!file) return

            const reader = new FileReader()
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    const workbook = XLSX.read(e.target.result as ArrayBuffer)
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]]

                    const dataJSON = XLSX.utils.sheet_to_json(firstSheet)
                    setData(dataJSON)
                    //console.log(dataJSON);
                } else {
                    console.error('Target is null')
                }
            }
            reader.readAsArrayBuffer(file)
        }
        loadFile()
    }, [file])

    return (
        <ContainerUI typeContainer="xlarge">
            <VStack alignItems="start">
                <input type="file" onChange={handleFileChange} style={{ paddingLeft: '30px', paddingTop: '30px' }} />
            </VStack>
            <VStack alignItems="start">
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {!createdDownloadLink && (
                    <button
                        style={{ paddingLeft: '30px', paddingTop: '30px', fontWeight: '600', color: 'orange' }}
                        onClick={createDownloadLink}
                    >
                        {t('Получить ссылку на скачивание')}
                    </button>
                )}
                {downloadLink && (
                    <p>
                        <a href={downloadLink} download="data.xlsx">
                            {t('Скачать файл')}
                        </a>
                    </p>
                )}
            </VStack>
            <VStack alignItems="start">
                <table style={{ margin: '10px' }}>
                    <thead>
                        <tr>
                            {data[0] &&
                                Object.keys(data[0]).map((key, index) => (
                                    <th key={index}>{key ? !`__EMPTY_+${key}` : ''}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, innerIndex) => (
                                    //@ts-ignore
                                    <td key={innerIndex} style={{ border: '1px solid black' }}>
                                        {value as string}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </VStack>
        </ContainerUI>
    )
}

export default Excel
