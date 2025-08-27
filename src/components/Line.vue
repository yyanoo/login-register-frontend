<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// 接收父層傳進來的資料與設定
const props = defineProps({
    chartData: {
        type: Object,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff', // 圖例文字顏色
                        font: { size: 14 }
                    }
                },
                datalabels: {
                    color: '#FFFFFF', // 圓餅上數字文字顏色
                    font: { weight: 'bold', size: 14 },
                    formatter: (value) => value + '%'
                }
            }
        })
    }
});
</script>

<template>
    <Line :data="props.chartData" :options="props.chartOptions" />
</template>
