<template>
  <div class="login-views px-6">
    <div class="longin-heaser">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <el-form :model="form">
      <el-form-item label="">
        <el-input v-model="form.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" style="width: 100%" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const form = reactive({
  name: "",
});
const router = useRouter();
const onSubmit = () => {
  console.log("submit!");
  router.push({ name: "home" });
};
</script>

<style lang="scss" scoped>
.longin-heaser {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  border: 1px solid #61606032;
  overflow: hidden;
  border-radius: 50%;
}
</style>
