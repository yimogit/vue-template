# vue-template

[![Build Status](https://www.travis-ci.org/yimogit/vue-template.svg?branch=master)](https://www.travis-ci.org/yimogit/vue-template)

> 一个 vue.j 基架

1. vuex 使用
2. 图片剪切,预览
3. 底部加载更多
4. 缓存
5. axios
6. loading
7. 弹层
8. 提示

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 其他配置

> 开发工具：vscode

### vscode 中安装插件

`wpy-beautify`：格式化 vue 模板
`vetur`:vue 语法高亮纠错

### vscode 插件 vetur 设置

`"vetur.format.defaultFormatter.js": "vscode-typescript"` //避免将单引号格式化成双引号

### eslint 问题

错误提示：`Expected linebreaks to be 'LF' but found 'CRLF'`
解决方式：.eslintrc.js 的 rules 下添加节点 `'linebreak-style': 'off'`
错误提示：`Expected indentation of 6 spaces but found 12`
解决方式：.eslintrc.js 的 rules 下添加节点`'indent':'off'`

### 使用 less

安装命令：`npm install less less-loader --save-dev`

### 使用 sass

安装命令：
`npm install node-sass --save-dev`
`npm install sass-loader --save-dev`
