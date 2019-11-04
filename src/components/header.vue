<template>
    <div style="padding: 0 20px;background-color:#333;
        display: flex;align-items: center;justify-content: space-between">
        <div style="color: #ffffff;font-size: 21px;letter-spacing: 3px">
            管理系统
        </div>
        <el-menu class="el-menu-demo" mode="horizontal"
                 background-color="#333" text-color="#fff" active-text-color="#009688">
            <!--<el-menu-item index="1">处理中心</el-menu-item>-->
            <el-submenu index="1">
                <template slot="title">欢迎您！管理员</template>
                <el-menu-item index="1-1">账户信息</el-menu-item>
                <el-menu-item index="1-2">设置</el-menu-item>
                <el-menu-item index="1-3">注销</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

