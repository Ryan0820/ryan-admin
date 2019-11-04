<template>
    <el-breadcrumb style="margin: 10px 0;" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "crumbs"
    }
</script>

<style scoped>

</style>
