<template>
    <div id="app">
        <!-- 头部 导航 -->
        <IHeader></IHeader>

        <section style="display: flex;flex: 1">
            <!-- 左侧栏 -->
            <div style="min-width: 201px;background: #333333">
                <ILeft ></ILeft>
            </div>

            <article style="flex: 1; padding: 10px;">
                <!-- 面包屑 -->
                <ICrumbs></ICrumbs>

                <!-- 视图 -->
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>

<script>
    import {IHeader, ILeft, ICrumbs} from "@/components";
    export default {
        components: {
            IHeader,ILeft,ICrumbs
        }
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/

        color: #2c3e50;
        margin-top: 0px;

        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
