"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[4591],{36439:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(85893),t=a(11151);const s={id:"install",title:"\u5b89\u88c5 Apache Fury",sidebar_position:0},c=void 0,i={id:"start/install",title:"\u5b89\u88c5 Apache Fury",description:"Apache Fury \u6e90\u7801\u4e0b\u8f7d\u8bf7\u53c2\u89c1 Apache Fury download\u9875\u9762\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/start/install.md",sourceDirName:"start",slug:"/start/install",permalink:"/zh-CN/docs/start/install",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/start/install.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"install",title:"\u5b89\u88c5 Apache Fury",sidebar_position:0},sidebar:"startSidebar",next:{title:"Apache Fury \u4f7f\u7528",permalink:"/zh-CN/docs/start/usage"}},d={},l=[{value:"Fury Java \u5b89\u88c5",id:"fury-java-\u5b89\u88c5",level:3},{value:"Fury Scala \u5b89\u88c5",id:"fury-scala-\u5b89\u88c5",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Apache Fury \u6e90\u7801\u4e0b\u8f7d\u8bf7\u53c2\u89c1 Apache Fury ",(0,r.jsx)(n.a,{href:"https://github.com/apache/fury/releases",children:"download"}),"\u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"fury-java-\u5b89\u88c5",children:"Fury Java \u5b89\u88c5"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u4f7f\u7528 Maven \u6dfb\u52a0\u5bf9 Apache Fury \u7684\u4f9d\u8d56\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.fury</groupId>\n  <artifactId>fury-core</artifactId>\n  <version>0.8.0</version>\n</dependency>\n\x3c!-- row/arrow format support --\x3e\n\x3c!-- <dependency>\n  <groupId>org.apache.fury</groupId>\n  <artifactId>fury-format</artifactId>\n  <version>0.8.0</version>\n</dependency> --\x3e\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fury-scala-\u5b89\u88c5",children:"Fury Scala \u5b89\u88c5"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u4f7f\u7528 Maven \u6dfb\u52a0 scala 2.13 \u7684 Fury scala \u4f9d\u8d56\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.fury</groupId>\n  <artifactId>fury-scala_2.13</artifactId>\n  <version>0.8.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u4f7f\u7528 Maven \u6dfb\u52a0 scala 3 \u7684 Fury scala \u4f9d\u8d56\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.fury</groupId>\n  <artifactId>fury-scala_3</artifactId>\n  <version>0.8.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u4f7f\u7528 sbt \u6dfb\u52a0 scala 2.13 \u7684 Fury scala \u4f9d\u8d56\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sbt",children:'libraryDependencies += "org.apache.fury" % "fury-scala_2.13" % "0.8.0"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u4f7f\u7528 sbt \u6dfb\u52a0 scala 3 \u7684 Fury scala \u4f9d\u8d56\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sbt",children:'libraryDependencies += "org.apache.fury" % "fury-scala_3" % "0.8.0"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>c});var r=a(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);