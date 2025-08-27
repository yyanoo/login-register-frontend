<!-- components/BaseDoughnutChart.vue -->
<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "vue-chartjs";

// 註冊 chart.js 元件
ChartJS.register(Title, Tooltip, Legend, ArcElement);

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
    <Doughnut :data="props.chartData" :options="props.chartOptions" />
</template>
