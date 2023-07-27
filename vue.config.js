/*
 * @Author: huihui036 1315574336@qq.com
 * @Date: 2023-07-21 16:28:11
 * @LastEditors: huihui036 1315574336@qq.com
 * @LastEditTime: 2023-07-21 17:23:25
 * @FilePath: \chat-demo\vue.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    },
  },
});
