<script setup>
import BaseDoughnutChart from "../components/Doughnut.vue";
import LineChart from '../components/Line.vue';


const data1 = {
    labels: ["已完成", "未完成", "報廢"],
    datasets: [
        {
            data: [500, 100, 10],
            backgroundColor: ["#0d6efd", "#e9ecef", "rgba(220, 20, 60, 1)"],
        },
    ],
};

const myChartData = {
    labels: ['7:10', '12:35', '17:55', '18:00', '21:00', '02:00', '5:23'],
    datasets: [
        {
            label: '正常',
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: 'rgba(60, 179, 113, 1)',
            data: [98, 100, 99, 90, 100, 95, 99],
        },
        {
            label: '故障/警報',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(220, 20, 60, 1)',
            data: [2, 0, 1, 10, 0, 5, 1],
        },
    ],
}
</script>

<template>
    <div class="h3 text-center" style="padding: 20px;margin-top: 10px;">2025/4/21-工廠機械Log</div>
    <div class="line-container">
        <LineChart :chartData="myChartData" />
    </div>
    <div class="doughnut-container">
        <div class="">
            <div class="h3 text-center">報表</div>
            <div class="">
                <BaseDoughnutChart :chartData="data1" />
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">每日統計</h4>
                <p class="card-text" style="margin-top: 20px;">已完成:500</p>
                <p class="card-text">未完成:100</p>
                <p class="card-text">報廢:10</p>
                <p class="card-text">系統故障/警報:19</p>
                <a href="#" class="card-link">詳細資料</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.doughnut-container {
    padding: 40px;
    display: flex;
    justify-content: space-evenly;
}

.line-container {
    padding: 20px;
}

.card-body {
    background-color: var(--sub-color);
    color: var(--main-color);
}

@media screen and (max-width: 992px) {
    .slider-box {
        display: none;
    }

    .line-container {
        padding: 0px 20px 20px 20px;
    }

    .doughnut-container {
        display: grid;
        justify-items: center;
        justify-content: center;
        padding: 0px 20px 20px 20px;
    }

    .card {
        margin: 20px 0 0 0;
    }
}
</style>