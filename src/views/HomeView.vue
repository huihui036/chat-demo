<!--
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-21 16:28:11
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-27 09:16:28
 * @FilePath: \chat-demo\src\views\HomeView.vue
 * @Description: 主页
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="home flex">
    <div class="home-left">
      <HomeLeft />
    </div>
    <div class="home-user">
      <ChatList />
    </div>
    <div class="home-center">
      <ChatFull></ChatFull>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HomeLeft from "@/components/HomeLeft.vue";
import ChatList from "@/components/ChatList.vue";
import ChatFull from "@/components/ChatMain/ChatFull.vue";
import { onMounted } from "vue";
import { ipcRenderer } from "electron";

onMounted(() => {
  ipcRenderer.send("changWindowSize");
});
</script>
<style lang="scss">
.home {
  height: 100%;
}
.home-center {
  height: 100%;
  width: 100%;
}
</style>
