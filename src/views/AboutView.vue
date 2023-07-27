<!--
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-21 16:28:11
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-24 16:27:29
 * @FilePath: \chat-demo\src\views\AboutView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ipcRenderer } from "electron";

onMounted(() => {
  ipcRenderer.send("changWindowSize");
});
</script>
