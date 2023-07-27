/*
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-21 16:28:11
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-25 15:10:57
 * @FilePath: \chat-demo\src\main.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./assets/tailMain.css";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";

import "./assets/icon-font/iconfont.css";

createApp(App).use(router).use(ElementPlus).mount("#app");
