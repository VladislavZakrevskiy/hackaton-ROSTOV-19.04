'use client'
import { ContainerUI } from '@/shared/ui';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const Excel = () => {
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
        } else {
            setError('Файл не выбран');
        }
    };

    useEffect(() => {
        const loadFile = () => {
            if (!file) return; // Exit early if no file is selected

            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target) {
                    const workbook = XLSX.read(e.target.result as ArrayBuffer);
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

                    const dataJSON = XLSX.utils.sheet_to_json(firstSheet);
                    setData(dataJSON);
                    console.log(dataJSON);
                } else {
                    console.error('Target is null');
                }
            };
            reader.readAsArrayBuffer(file);
        };
        loadFile();
    }, [file]);

    return (
        <ContainerUI typeContainer='large'>
            <input type="file" onChange={handleFileChange} />
            <button disabled={!file}>Load File</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div style={{ backgroundColor: 'grey', zIndex: '100' }}>
                {data.map((row, index) => (
                    <div key={index}>{JSON.stringify(row)}</div>
                ))}
            </div>
        </ContainerUI>
    );
};

export default Excel;
