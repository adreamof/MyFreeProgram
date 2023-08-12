<!-- 主页 -->
<template>
  <!-- 0级---最外层容器 -->
  <div class="common-layout">
    <!-- 1级---内容容器 -->
    <el-container>
      <!-- 
        2级---头部
          LOGO
          页面导航
          搜索框
       -->
      <el-header id="headerCard">
        <p>{{ store }}</p>
      </el-header>

      <!-- 
        2级---身体
          侧边栏: 内容导航
          主体: 主体内容(卡片形式)
       -->
      <el-container>
        <!-- 
          3级---侧边栏
            内容导航
         -->
        <el-aside id="asideCard">
          <RouterLink to="/">Home</RouterLink>
        </el-aside>

        <!-- 
          3级---主体: 主体内容(卡片形式)
         -->
        <el-main id="mainCard">
          <RouterView />
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';

let store = useCounterStore()
store.count = 7
store.increment()

</script>

<style scoped>
#headerCard {
  background: #e0e2c4;
}

#asideCard {
  width: 10%;
  background: #ce9c9c;
}

#mainCard {
  background: #96d1ce;
}

</style>
