<template>
<!--外部容器 -->
<el-container>
  <!-- 侧边栏容器 -->
  <el-aside style="width:200px; background:#323745;">
<layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <!-- 头部容器 -->
<el-header>
  <layout-header></layout-header>
</el-header>
<!-- 主要区域容器 -->
<el-main style="margin:0;padding:0">
<router-view></router-view>
   </el-main>
</el-container>
</el-container>
</template>

<script>
// import LayoutAside from '../../components/home/layout-aside'
// import LayoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layout-aside': LayoutAside,
  //   'layout-header': LayoutHeader
  // }
}
</script>

<style>

</style>
