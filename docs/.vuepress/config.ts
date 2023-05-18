import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    /* "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    */
    "/": {
      lang: "zh-CN",
      title: "息壤",
      description: "中国古代文化的文档整理系统",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
