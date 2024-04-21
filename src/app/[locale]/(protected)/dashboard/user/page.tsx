'use client'
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ContainerUI from '@/shared/ui/Container/ContainerUI';
import { HStack, VStack } from '@/shared/ui';
import {SpanUI} from '@/shared/ui/Span/SpanUI';


Chart.register(...registerables);

const Dashboard = () => {
  const pieChartRef = useRef<HTMLCanvasElement>(null);
  const barChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (pieChartRef.current && barChartRef.current) {
      const pieChartCtx = pieChartRef.current.getContext('2d');
      const barChartCtx = barChartRef.current.getContext('2d');

      if (pieChartCtx && barChartCtx) {
        
        Chart.getChart(pieChartCtx)?.destroy();
        Chart.getChart(barChartCtx)?.destroy();

        const productData = {
          labels: ['Product A', 'Product B', 'Product C', 'Product D'],
          datasets: [{
            label: 'Product Sales',
            data: [300, 450, 200, 350],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
            ],
          }],
        };
        const data = {
          labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
        };

        new Chart(pieChartCtx, {
          type: 'polarArea',
          data: productData,
        });

        new Chart(barChartCtx, {
          type: 'radar',
          data: data,
        });
      }
    }
  }, []);

  return (
    <>
    <VStack alignItems='center'>
      <ContainerUI typeContainer="large">
        <HStack justifyContent='start'>

        
      <HStack justifyContent='start'>
                <ContainerUI typeContainer='small'>
            <VStack alignItems='start'> 
            <SpanUI type="medium" color="#333">Navigation</SpanUI>
            <SpanUI type="medium" color="#333">-Route1</SpanUI>
            <SpanUI type="medium" color="#333">-Route2</SpanUI>
            <SpanUI type="medium" color="#333">-Route3</SpanUI>
            <SpanUI type="medium" color="#333">-Route4</SpanUI>
            </VStack>

            </ContainerUI>
        </HStack>
        <HStack justifyContent='center'>
        
        <VStack alignItems='center'>
      <SpanUI type="large" color="#333" >Dashboard</SpanUI>
      <ContainerUI typeContainer='medium'>
      <VStack alignItems='center'>
      <div style={{ width: '300px', height: '300px' }}>
        <canvas ref={pieChartRef} width="300px" height="300px"></canvas>
      </div>

        </VStack>
    </ContainerUI>
    
    
    <ContainerUI typeContainer='medium'>
      <VStack alignItems='center'>
        <div style={{ width: '300px', height: '300px' }}>
          <canvas ref={barChartRef} width="400" height="400"></canvas>
        </div>
      </VStack>
    
    </ContainerUI>
    </VStack>


        </HStack>
        </HStack>
      </ContainerUI>
    </VStack>
      
    
    </>
  );
};

export default Dashboard;
