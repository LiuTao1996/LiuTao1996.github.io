(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{440:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("ul",[a("li",[t._v("vuepress 简洁易用")]),t._v(" "),a("li",[t._v("Github Pages配合github好管理")]),t._v(" "),a("li",[t._v("GithubAction 自动发布")])])]),t._v(" "),a("h1",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("ul",[a("li",[t._v("由于之前使用的自动构建发布工具travis开始收费了，所以打算使用Github Action替代")])]),t._v(" "),a("h1",{attrs:{id:"_2-工具说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-工具说明"}},[t._v("#")]),t._v(" 2. 工具说明")]),t._v(" "),a("ul",[a("li",[t._v("VuePress: 是一款Vue驱动的静态网站生成器,可以方便的快速搭建自己的静态博客")]),t._v(" "),a("li",[t._v("Github Pages: 是一个免费的静态网站托管服务，由 GitHub 提供。特点是 方便快捷，无需备案，免费域名，也可支持自定义域名。")]),t._v(" "),a("li",[t._v("Github Action: github的持续集成服务，使用说明: "),a("a",{attrs:{href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"_3-搭建过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-搭建过程"}},[t._v("#")]),t._v(" 3. 搭建过程")]),t._v(" "),a("h2",{attrs:{id:"_3-1-创建-github-pages-站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建-github-pages-站点"}},[t._v("#")]),t._v(" 3.1 创建 GitHub Pages 站点")]),t._v(" "),a("ul",[a("li",[t._v("创建项目仓库，仓库命名无限制，本博客的仓库名称与访问地址一致，为 liutao1006.github.io")]),t._v(" "),a("li",[t._v("创建两个分支\n"),a("ul",[a("li",[t._v("master : 默认分支，用于保存编译构建后的静态页面，无需手动管理")]),t._v(" "),a("li",[t._v("doc :  文档分支，用于保存博客文档，以及vuepress的配置。")])])]),t._v(" "),a("li",[t._v("将仓库设置为站点,方式如下图： "),a("a",{attrs:{href:"https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("也可参考官方文档"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://raw.githubusercontent.com/liutao1996/images/main/note/CICD/github%E9%85%8D%E7%BD%AE%E7%AB%99%E7%82%B9%E9%A1%B5%E9%9D%A2.jpg",alt:"img"}})])])])]),t._v(" "),a("h2",{attrs:{id:"_3-2-vuepress工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-vuepress工程"}},[t._v("#")]),t._v(" 3.2 vuepress工程")]),t._v(" "),a("ul",[a("li",[t._v("关于vuepress的配置不做描述，"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/page.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("请参考官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("如若进行配置过于繁琐，可使用本博客的模板，"),a("a",{attrs:{href:"https://github.com/liutao1996/liutao1996.github.io/releases/tag/vuepress-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("工程代码位置"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("下载后，进行个人定制化配置，如站点名称，图标等，然后将该工程代码，推送至 doc 分支")])]),t._v(" "),a("h2",{attrs:{id:"_3-3-github-action配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-github-action配置"}},[t._v("#")]),t._v(" 3.3 Github Action配置")]),t._v(" "),a("h3",{attrs:{id:"deploy-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-yml"}},[t._v("#")]),t._v(" deploy.yml")]),t._v(" "),a("ul",[a("li",[t._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的.github/workflows目录，后缀统一为 yml")]),t._v(" "),a("li",[t._v("在doc分支下，创建 .github/workflows/deploy.yml")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/liutao1996/liutao1996.github.io/blob/doc/.github/workflows/deploy.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件样例"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"token配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token配置"}},[t._v("#")]),t._v(" token配置")]),t._v(" "),a("ul",[a("li",[t._v("deploy.yml中存在一个$"+t._s(t.secrets.ACCESS_TOKEN)+"变量，该变量是仓库访问的token，用于工作流向仓库推送代码，")]),t._v(" "),a("li",[t._v("创建token具体操作如下:\n"),a("ul",[a("li",[t._v("点击头像 ---\x3e Setting ---\x3e Developer settings ---\x3e Personal access tokens ---\x3e Generate new token(classic)")]),t._v(" "),a("li",[t._v("创建的token名字要和deploy.yml中的变量保持一致，这里为ACCESS_TOKEN，有效期建议为永久(No expiration)")]),t._v(" "),a("li",[t._v("权限勾选 repo 以及 workflows 即可")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-实际使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-实际使用"}},[t._v("#")]),t._v(" 4. 实际使用")]),t._v(" "),a("ul",[a("li",[t._v("本地IDEA拉取仓库代码，分支切换至 doc")]),t._v(" "),a("li",[t._v("在 docs/views 目录 创建自己的第一篇博客文章(markdown格式)")]),t._v(" "),a("li",[t._v("最后提交，推送至远程仓库，等待工作流构建完毕")]),t._v(" "),a("li",[t._v("访问 liutao1996.github.io 即可")])]),t._v(" "),a("h1",{attrs:{id:"_5-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-问题"}},[t._v("#")]),t._v(" 5.问题")]),t._v(" "),a("h2",{attrs:{id:"如果出现构建失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果出现构建失败"}},[t._v("#")]),t._v(" 如果出现构建失败")]),t._v(" "),a("ul",[a("li",[t._v("查看构建失败的日志，位置：Actions, 点击最新的构建失败的工作流，点击Jobs-build, 即可查看构建过程中的日志")]),t._v(" "),a("li",[t._v("举例，本博客在构建出现以下问题：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn install v1.22.22\nwarning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.\n[1/4] Resolving packages...\n[2/4] Fetching packages...\nerror Error: certificate has expired\n    at TLSSocket.onConnectSecure (_tls_wrap.js:1515:34)\n    at TLSSocket.emit (events.js:400:28)\n    at TLSSocket._finishInit (_tls_wrap.js:937:8)\n    at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:709:12)\ninfo Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.\nError: Process completed with exit code 1.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("该问题的原因是证书过期导致 https访问失败，那么对应的解决方案是忽略tls证书验证即可")]),t._v(" "),a("li",[t._v("具体操作:deploy.yml增加以下构建步骤即可")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('      # 避免出现HTTPS 证书验证失败\n      - name:\n        run: yarn config set "strict-ssl" false -g\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"依赖问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖问题"}},[t._v("#")]),t._v(" 依赖问题")]),t._v(" "),a("ul",[a("li",[t._v("如果package.json中依赖发生变化")])]),t._v(" "),a("h1",{attrs:{id:"_6-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-扩展"}},[t._v("#")]),t._v(" 6. 扩展")]),t._v(" "),a("h2",{attrs:{id:"_6-1-增加评论功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-增加评论功能"}},[t._v("#")]),t._v(" 6.1 增加评论功能")]),t._v(" "),a("p",[t._v("参考文章:\nhttps://zhuanlan.zhihu.com/p/58229299\nhttps://zhuanlan.zhihu.com/p/393344955\nhttps://zhuanlan.zhihu.com/p/647963756\nhttps://zhuanlan.zhihu.com/p/93030651\nhttps://blog.csdn.net/qq_43173415/article/details/117741139")]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);s.default=r.exports}}]);