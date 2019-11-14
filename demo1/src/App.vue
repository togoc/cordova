<template>
  <div id="app">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu default-active="1">
          <router-link to="/show">
            <el-menu-item index="1">show</el-menu-item>
          </router-link>
          <router-link to="/home">
            <el-menu-item index="2">HOme</el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push("/show")
  }
};
</script>

<style>
.el-header {
  text-align: center;
  line-height: 60px;
  background-color: #b3c0d1;
  font-weight: bold;
}
.el-main {
  height: 500px;
  background-color: #e9eef3;
}
</style>
