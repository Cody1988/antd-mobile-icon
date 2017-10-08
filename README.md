# antd-mobile beta2.x版本中custom icon

# 使用dva创建项目，详情参考官方文档

# 添加svg-sprite-loader依赖

npm install svg-sprite-loader@0.3.1 -D
  
# 配置文件修改
1. 删除配置文件.roadhogrc
2. 添加.roadhogrc.js

```
const path = require('path');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets'),  // 业务代码本地私有 svg 存放目录
];

export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd-mobile", "style": "css" }]
      ]
    }
  },
  // ...
  svgSpriteLoaderDirs: svgSpriteDirs,
  //...

}

```
# 定义CustomIcon组件并使用

```
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
  return (
    <svg
      className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={`#${type.default.id}`} />
    </svg>
  );
};

<CustomIcon type={require('../assets/activity.svg')} />

```



