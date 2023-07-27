<!--
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-21 16:28:11
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-27 08:44:12
 * @FilePath: \chat-demo\src\components\HomeLeft.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div
    class="lect-center text-stone-50 flex flex-col justify-between align-center"
  >
    <div class="icon-top-box">
      <div class="item-box-left user-header">
        <img
          alt="头像"
          src="https://tupian.qqw21.com/article/UploadPic/2020-8/20208522181014944.jpg"
        />
      </div>
      <div class="item-box-left">
        <i class="iconfont icon-yonghu text-slate-400"></i>
      </div>
    </div>
    <div class="icon-footer-box">
      <div class="item-box-left" @click="outLogin">
        <i class="iconfont icon-shezhi text-slate-400"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lect-center {
  width: 55px;
  height: 100vh;
  text-align: center;
  background-color: #2e2e2e;
}
.user-header {
  width: 40px;
  height: 40px;
}
.icon-top-box,
.icon-footer-box {
  /* padding: 20px 0; */
}
.iconfont {
  font-size: 20px;
}
.item-box-left {
  cursor: pointer;
  margin: 20px auto;
}
</style>
