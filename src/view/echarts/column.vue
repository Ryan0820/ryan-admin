<template>
    <div id="liveness" :style="{width,height}">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "column",
        props: [
            "width",
            "height",
            "liveness"
        ],
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("liveness"));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '每日活跃率'
                },
                tooltip: {},
                legend: {
                    data: ['活跃度']
                },
                xAxis: {
                    data: ["今日更新", "新客到访", "老客回访", "总访问量"]
                },
                yAxis: {},
                series: [{
                    name: '活跃度',
                    type: 'bar',
                    data: [1000, 300, 80, 380]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>
