<template>
    <div id="line" :style="{width,height}">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "line",
        props: [
            "width",
            "height"
        ],
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("line"));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '数量统计',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>
