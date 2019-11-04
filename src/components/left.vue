<template>
    <el-menu router default-active="1-4-1" class="el-menu-vertical-demo" :collapse="false"
             background-color="#333" text-color="#fff" active-text-color="#009688">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span slot="title">工作平台</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1" route="/worker">工作总览</el-menu-item>
                <el-menu-item index="1-2" route="/">我的工作簿</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1" route="/user">用户列表</el-menu-item>
                <el-menu-item index="2-2" >用户列表</el-menu-item>
            </el-menu-item-group>
            <el-submenu>
                <span slot="title">用户列表</span>
                <el-menu-item>用户列表</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航全览</span>
        </el-menu-item>
    </el-menu>
</template>
