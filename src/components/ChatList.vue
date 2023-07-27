<!--
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-26 15:37:56
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-27 08:47:31
 * @FilePath: \chat-demo\src\components\ChatList.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="chat-list-c">
    <div
      class="search-header bg-white h-12 px-3 flex items-center justify-between"
    >
      <div class="w-5/6">
        <el-input
          v-model="input2"
          placeholder="搜索"
          clearable
          :prefix-icon="Search"
        />
      </div>
      <div class="header-add-icon">+</div>
    </div>
    <ul>
      <li
        v-for="chatItem in chatList"
        :key="chatItem.uid"
        class="user-chat-item flex justify-between cursor-pointer px-2 py-2"
      >
        <div class="user-header-img w-full">
          <img :src="chatItem.header" />
        </div>
        <div class="user-conter ml-2">
          <p class="chat-user-name text-base gray-600">
            {{ chatItem.userName }}
          </p>
          <p class="chat-user-center text-sm text-gray-500 w-full truncate">
            这个一个这个一个聊天内容这个一个聊天内容这个一个聊天内容聊天内容
          </p>
        </div>
        <div class="chat-tiem">15:13</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const input2 = ref("");
const chatList = [
  {
    header: "https://www.geekailab.com/img/avatar.png",
    userName: "张三",
    uid: "0",
  },
  {
    header:
      "https://tupian.qqw21.com/article/UploadPic/2021-7/202171422365821818.jpg",
    userName: "李四",
    uid: "2",
  },
];
</script>

<style lang="scss" scoped>
.chat-list-c {
  width: 260px;
  height: 100vh;
  background-color: #ece9e79e;
  border-right: 1px solid #bababa4b;
}
.user-conter {
  height: 40px;
  width: 60%;
}
.user-header-img {
  height: 42px;
  width: 42px;
  border: 1px solid #ccc;
}
.chat-tiem {
  font-size: 0.75rem;
  color: #a2a1a1;
}
.header-add-icon {
  width: 25px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border-radius: 4px;
  /* font-size: 20px; */
  background-color: #e2e2e2;
  color: #585858;
  cursor: pointer;
}
</style>
