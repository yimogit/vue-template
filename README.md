# vue-template

> 一个vue.j基架 
1. vuex使用 
2. 图片剪切 
3. 底部加载更多 
4. 缓存 
5. axios  

## Build Setup

``` bash
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

### vscode中安装插件
`wpy-beautify`：格式化vue模板
`vetur`:vue语法高亮纠错

### vscode插件vetur设置
`"vetur.format.defaultFormatter.js": "vscode-typescript"` //避免将单引号格式化成双引号

### eslint问题
错误提示：`Expected linebreaks to be 'LF' but found 'CRLF'`
解决方式：.eslintrc.js的rules下添加节点 `'linebreak-style': 'off'`
错误提示：`Expected indentation of 6 spaces but found 12`
解决方式：.eslintrc.js的rules下添加节点`'indent':'off'`

### 使用less
安装命令：`npm install less less-loader --save-dev`

### 使用sass
安装命令： 
`npm install node-sass --save-dev`
`npm install sass-loader --save-dev`