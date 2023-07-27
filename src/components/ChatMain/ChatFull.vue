<!--
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-26 17:28:05
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-27 11:19:43
 * @FilePath: \chat-demo\src\components\ChatMain\ChatFull.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="chat-page-box flex flex-col justify-between">
    <div class="chat-message-header px-3 h-12 text-slate-800 indent-4">
      张三
    </div>
    <div class="chat-message-box overflow-y-auto px-4">
      <ul>
        <li
          v-for="(message, index) in chatListData"
          :key="index"
          class="chat-message-item flex my-4"
          :class="index === 0 ? 'my-message' : 'other-messge'"
        >
          <div class="messgae-header-img">
            <img src="https://www.geekailab.com/img/avatar.png" alt="" />
          </div>
          <div class="message-item-conter p-2 mx-2 rounded-md text-base">
            {{ message.conte }}
          </div>
        </li>
      </ul>
    </div>
    <div class="chat-message-content-box flex flex-col justify-between">
      <div class="chat-message-icon-row h-6 mt-0.5 ml-1">
        <div class="icon-item">
          <i class="iconfont icon-biaoqing text-2xl"></i>
          <i class="iconfont icon-5jietu-1 text-slate-600"></i>
          <i class="iconfont icon-liaotian text-slate-600"></i>
        </div>
        <div class="icon-item"></div>
      </div>
      <div class="chat-message-content overflow-y-auto p-4"></div>
      <div class="send-message h-8 relative">
        <el-button class="absolute right-4 bottom-2">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const chatListData = [
  {
    conte:
      "为了提升开发者体验，平台在代码提审环节会协助开发者对地提审环节会协助开发者对地提审环节会协助开发者对地提审环节会协助开发者对地理位置接口进行检测，如检测出代码中包含未完成准入开通的地理位置接口，平台将再次提醒开发者确认是否需使用相关接口",
  },
  {
    conte:
      "需要在上传代码时通过参数在 ext.json 中声明其需调用的地理位置相关接口",
  },
  {
    conte: "若无需使用，可在提审时通过参数声明不使用该接口",
  },
  {
    conte:
      "为了提升开发者体验，平台在代码提审环节会协助开发者对地提审环节会协助开发者对地提审环节会协助开发者对地提审环节会协助开发者对地理位置接口进行检测，如检测出代码中包含未完成准入开通的地理位置接口，平台将再次提醒开发者确认是否需使用相关接口",
  },

  {
    conte:
      "需要在上传代码时通过参数在 ext.json 中声明其需调用的地理位置相关接口",
  },
  {
    conte: "若无需使用，可在提审时通过参数声明不使用该接口",
  },
  {
    conte:
      "需要在上传代码时通过参数在 ext.json 中声明其需调用的地理位置相关接口",
  },
  {
    conte: "若无需使用，可在提审时通过参数声明不使用该接口",
  },
  {
    conte:
      "需要在上传代码时通过参数在 ext.json 中声明其需调用的地理位置相关接口",
  },
  {
    conte: "若无需使用，可在提审时通过参数声明不使用该接口",
  },
];
</script>

<style lang="scss" scoped>
.chat-page-box {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.chat-message-header {
  line-height: 3rem;
  width: 100%;
  border-bottom: 1px solid rgb(214 211 209);
}
.chat-message-box {
  height: calc(100% - 13rem);
  /* border: 1px solid rgb(214 211 209); */
}
.messgae-header-img {
  height: 42px;
  width: 42px;
}
.chat-message-content-box {
  height: 12rem;
  width: 100%;
  border-top: 1px solid rgb(214 211 209);
}

.chat-message-content {
  height: calc(100% - 5rem);
}
.message-item-conter {
  max-width: 70%;
  /* margin: 0 10px; */
}
.my-message {
  direction: rtl;
}
.other-messge .message-item-conter {
  background-color: #fff;
}
.my-message .message-item-conter {
  background-color: #95ec69;
}

.iconfont {
  font-size: 1.3rem;
  margin: 0 0.25rem;
  cursor: pointer;
}
</style>
