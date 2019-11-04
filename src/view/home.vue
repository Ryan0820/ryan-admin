<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>柱形图趋势</span>
                    </div>
                    <div>
                        <IColumn width="320px" height="200px"></IColumn>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>折线图趋势</span>
                    </div>
                    <div>
                        <ILine width="350px" height="200px"></ILine>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>饼图趋势</span>
                    </div>
                    <div>
                        <IPie width="350px" height="200px"></IPie>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {IColumn, ILine,IPie} from '@/view'

    export default {
        name: "home",
        components: {
            IColumn, ILine,IPie
        }
    }
</script>
