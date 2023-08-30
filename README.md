# Vue3+Pinia+Vite+TS 还原高性能外卖APP项目

## 相关文档

[Vite官网](https://cn.Vitejs.dev/guide/)

[husky的github地址](https://github.com/typicode/husky)

[commitlint的github地址](https://github.com/conventional-changelog/commitlint)

[https://zh-hans.eslint.org/](Eslint官网)

[Prettier官网](https://www.prettier.cn/)

## 使用Vite创建vue3项目

```
# npm 6.x
npm create Vite@latest my-vue-app --template vue
```

![Snipaste1](./public/Snipaste1.png)

### 为什么选Vite?

当我们的应用越来越大型的时候，就会出现一些性能问题：

- 启动本地开发服务器的时间会很久
- 热更新也会很慢

### Vite是怎么优化的？

总的来说，Vite从两个方面优化：

- 开发服务器启动
- 热更新

#### 开发服务器启动

> Vite从依赖打包和源码打包这两个方面提升性能

- 依赖：使用**Esbuild**进行依赖打包，**Esbuild**使用**Go**编写，会比**javascript-based**的打包工具**快10-100倍**
- 源码：使用浏览器原生**Es module**提供源码，让浏览器接管打包工具的部分工作

#### 热更新

> Vite在文件热更新上做了优化：

- 使用**ESM**不需要重新编译：一些打包工具的开发服务器在文件更改时，需要重新构建整个项目，来获取新的模块依赖关系
- 使用浏览器缓存加速，Vite利用http头来加速整个页面的重新加载

## 配置Eslint、Prettier规范项目

### Eslint有什么用？

- 在运行代码前就发现语法错误和潜在的bug
- 非常适合用于制定团队代码规范
- ESlint的规则分为三个等级
  - off：关闭
  - warn：警告
  - error： 错误

> 可以根据自己的需求来配置等级

### 配置.eslintrc

```
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "eslint-config-airbnb-base",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue-scoped-css/base",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "globals": {
    "defineProps": "readonly",
    "defineEmits": "readonly"
  },
  "plugins": ["vue", "@typescript-eslint"],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"]
  },
  "rules": {
    "no-console": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "guard-for-in": "off",

    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/first": "off", // https://github.com/vuejs/vue-eslint-parser/issues/58
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/first-attribute-linebreak": 0,

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "class-methods-use-this": "off" // 因为AxiosCancel必须实例化而能静态化所以加的规则，如果有办法解决可以取消
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "vue/component-name-in-template-casing": [2, "kebab-case"],
        "vue/require-default-prop": 0,
        "vue/multi-word-component-names": 0,
        "vue/no-reserved-props": 0,
        "vue/no-v-html": 0,
        "vue-scoped-css/enforce-style-type": ["error", { "allows": ["scoped"] }]
      }
    },
    {
      "files": ["*.ts", "*.tsx"], // https://github.com/typescript-eslint eslint-recommended
      "rules": {
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-new-symbol": "off", // ts(2588)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376)
        "no-undef": "off", // ts(2304)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
        "prefer-const": "error", // ts provides better types with const
        "prefer-rest-params": "error", // ts provides better types with rest args over arguments
        "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
        "valid-typeof": "off" // ts(2367)
      }
    }
  ]
}
```

### 什么是Prettier？

- 代码格式化工具，用于检测代码中的格式问题
- Eslint偏向于把控项目的代码质量，而Prettier更偏向于统一项目的编码风格

### 配置.prettierrc.js

```
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'chore',
          'revert',
          'build',
        ],
      ],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72],
    },
  }
```

### .vscode下新建settings.json

```
# settings.json
{
  "files.autoSave": "off",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true, // 开启保存文件自动格式化代码
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认的代码格式化工具
  "prettier.requireConfig": true,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  } // 需要Prettier的配置文件
}
```

## 使用husky管理Git hooks

- husky
- Git hooks

### 什么是Git hooks？

- hooks: 一些时机的回调
- Git hooks：Git流程中时机的回调

### 如何使用Git hooks?

- 自己写脚本
- 对Git有一定了解

### 什么是husky？

- 校验commit信息
- 运行测试代码
- 校验代码格式......

### 安装husky

[相关文档](https://juejin.cn/post/7193519302853525560?searchId=20230829165842AC44965ADE8AA0B17254)

1. 安装

```
git init
npx husky-init '&&' npm install
# 另外新增一个hooks，commit-msg
npx husky add .husky/commit-msg
```

2. 在**commit-msg**文件中添加 `npm run commitlint`
3. 在pre-commit文件中有一个`npm run test`我们注释掉，不然会报错

## 使用commitlint规范commit信息

- commitlint规范
- 如何使用commitlint

### 什么是commitlint?

> 提交commit时需要填写commit信息，对这些commit的填写做一个规范

### 为什么需要commitlint?

- 产生大量的commit版本，这些commit记录了整个项目的开发进程
- 良好的commit信息有利于后期维护

### 怎么规范？

- 提供一套规范来约束项目的commit信息
- 在提交commit的时候自动校验
- 规范要求我们按一下规定来填写commit信息

```
type(scope?):subject
// type表示commit的类型
// scope是可选的，表示当前commit修改的模块范围
// subject就是描述commit的详细说明
```

### 安装commitlint

[相关文档](https://juejin.cn/post/7193519302853525560?searchId=20230829165842AC44965ADE8AA0B17254)

​	1.安装

```
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

2. 添加配置文件，新建`commitlint.config.js`，然后添加下面的代码

```
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'chore',
          'revert',
          'build',
        ],
      ],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72],
    },
  }
```

3. 配置script

   > 因为我们需要运行`npm run commitlint`，所以需要在`package.json`文件中添加如下代码：

   ```
   # 在scrips中添加下面的代码
   {
   "scripts": {
       "commitlint": "commitlint --config commitlint.config.js -e -V"
     },
   }
   ```

   