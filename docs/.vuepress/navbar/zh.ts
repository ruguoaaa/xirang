import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "诗藏", icon: "news", link: "https://ruguoaaa.github.io/xirang/诗藏/" },
  { text: "医藏", icon: "note", link: "https://ruguoaaa.github.io/xirang1/医藏/" },
  { text: "易藏", icon: "page", link: "https://ruguoaaa.github.io/xirang2/易藏/" },
  { text: "史藏", icon: "overflow", link: "https://ruguoaaa.github.io/xirang3/史藏/" },
  { text: "子藏", icon: "read", link: "https://ruguoaaa.github.io/xirang4/子藏/" },
  { text: "集藏", icon: "blog", link: "https://ruguoaaa.github.io/xirang5/集藏/" },
  { text: "艺藏", icon: "workingDirectory", link: "https://ruguoaaa.github.io/xirang6/艺藏/" },
  { text: "佛藏", icon: "folder", link: "https://ruguoaaa.github.io/xirang7/佛藏/" },
  { text: "儒藏", icon: "exercise", link: "https://ruguoaaa.github.io/xirang8/儒藏/" },
  { text: "道藏", icon: "list", link: "https://ruguoaaa.github.io/xirang9/道藏/" },
  /*
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  */
  {
    text: "赞助",
    icon: "flower",
    link: "/donate",
  },
]);
