"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[2479],{5465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var h=r(5893),i=r(1151);const s={slug:"fury_0_7_0_release",title:"Fury v0.7.0 Released",authors:["chaokunyang"],tags:["fury"]},n=void 0,l={permalink:"/zh-CN/blog/fury_0_7_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2024-08-04-fury_0_7_0_release.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-08-04-fury_0_7_0_release.md",title:"Fury v0.7.0 Released",description:"The Apache Fury team is pleased to announce the 0.6.0 release. This is a major release that includes 24 PR from 7 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-08-04T00:00:00.000Z",formattedDate:"2024\u5e748\u67084\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:3.195,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_7_0_release",title:"Fury v0.7.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,nextItem:{title:"Fury 0.6.0 Released",permalink:"/zh-CN/blog/fury_0_6_0_release"}},a={authorsImageUrls:[void 0]},c=[{value:"High Light",id:"high-light",level:2},{value:"Experimental",id:"experimental",level:3},{value:"Features",id:"features",level:2},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(t.p,{children:["The Apache Fury team is pleased to announce the 0.6.0 release. This is a major release that includes ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.6.0...v0.7.0",children:"24 PR"})," from 7 distinct contributors. See the ",(0,h.jsx)(t.a,{href:"https://fury.apache.org/docs/start/install",children:"Install"})," Page to learn how to get the libraries for your platform."]}),"\n",(0,h.jsx)(t.h2,{id:"high-light",children:"High Light"}),"\n",(0,h.jsx)(t.h3,{id:"experimental",children:"Experimental"}),"\n",(0,h.jsx)(t.p,{children:"Implement fast object deep copy framework for java:"}),"\n",(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:"language-java",children:"Fury fury = Fury.builder().withRefCopy(true).build();\nfury.register(SomeClass.class);\nSomeClass a = xxx;\nSomeClass copied = fury.copy(a);\n"})}),"\n",(0,h.jsx)(t.p,{children:"Benchmark result:"}),"\n",(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:"Benchmark"}),(0,h.jsx)(t.th,{children:"objectType"}),(0,h.jsx)(t.th,{children:"Score"}),(0,h.jsx)(t.th,{children:"Error"}),(0,h.jsx)(t.th,{children:"Units"})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy"}),(0,h.jsx)(t.td,{children:"MEDIA_CONTENT"}),(0,h.jsx)(t.td,{children:"1243297.690"}),(0,h.jsx)(t.td,{children:"\xb1  451828.452"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy"}),(0,h.jsx)(t.td,{children:"SAMPLE"}),(0,h.jsx)(t.td,{children:"2670545.816"}),(0,h.jsx)(t.td,{children:"\xb1 1378536.021"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy"}),(0,h.jsx)(t.td,{children:"STRUCT"}),(0,h.jsx)(t.td,{children:"2673356.422"}),(0,h.jsx)(t.td,{children:"\xb1  202288.322"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy"}),(0,h.jsx)(t.td,{children:"STRUCT2"}),(0,h.jsx)(t.td,{children:"1943587.774"}),(0,h.jsx)(t.td,{children:"\xb1  392513.707"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy_int_map"}),(0,h.jsx)(t.td,{children:"int map"}),(0,h.jsx)(t.td,{children:"1470264.733"}),(0,h.jsx)(t.td,{children:"\xb1 1021875.257"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy_list"}),(0,h.jsx)(t.td,{children:"int list"}),(0,h.jsx)(t.td,{children:"3556892.276"}),(0,h.jsx)(t.td,{children:"\xb1  127410.724"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy_object_array"}),(0,h.jsx)(t.td,{children:"array"}),(0,h.jsx)(t.td,{children:"4430589.112"}),(0,h.jsx)(t.td,{children:"\xb1   25366.893"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"fury_copy_string_map"}),(0,h.jsx)(t.td,{children:"string map"}),(0,h.jsx)(t.td,{children:"1736145.327"}),(0,h.jsx)(t.td,{children:"\xb1  377806.877"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy"}),(0,h.jsx)(t.td,{children:"MEDIA_CONTENT"}),(0,h.jsx)(t.td,{children:"804208.092"}),(0,h.jsx)(t.td,{children:"\xb1   27429.069"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy"}),(0,h.jsx)(t.td,{children:"SAMPLE"}),(0,h.jsx)(t.td,{children:"717669.608"}),(0,h.jsx)(t.td,{children:"\xb1   71093.370"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy"}),(0,h.jsx)(t.td,{children:"STRUCT"}),(0,h.jsx)(t.td,{children:"1076048.642"}),(0,h.jsx)(t.td,{children:"\xb1  223194.146"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy"}),(0,h.jsx)(t.td,{children:"STRUCT2"}),(0,h.jsx)(t.td,{children:"141374.767"}),(0,h.jsx)(t.td,{children:"\xb1   14150.535"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy_int_map"}),(0,h.jsx)(t.td,{children:"int map"}),(0,h.jsx)(t.td,{children:"546203.187"}),(0,h.jsx)(t.td,{children:"\xb1   54669.173"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy_list"}),(0,h.jsx)(t.td,{children:"int list"}),(0,h.jsx)(t.td,{children:"843643.496"}),(0,h.jsx)(t.td,{children:"\xb1  312306.921"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy_object_array"}),(0,h.jsx)(t.td,{children:"object array"}),(0,h.jsx)(t.td,{children:"1593267.344"}),(0,h.jsx)(t.td,{children:"\xb1 1721824.436"}),(0,h.jsx)(t.td,{children:"ops/s"})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:"kryo_copy_string_map"}),(0,h.jsx)(t.td,{children:"string map"}),(0,h.jsx)(t.td,{children:"574809.875"}),(0,h.jsx)(t.td,{children:"\xb1   47316.340"}),(0,h.jsx)(t.td,{children:"ops/s"})]})]})]}),"\n",(0,h.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["feat(Rust): add meta string encoding algorithm in Rust by @urlyy in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1712",children:"https://github.com/apache/fury/pull/1712"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(Rust): Implement utf16 to utf8 conversion algorithm by @urlyy in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1730",children:"https://github.com/apache/fury/pull/1730"})]}),"\n",(0,h.jsxs)(t.li,{children:["perf(java): add struct benchmark with pb by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1736",children:"https://github.com/apache/fury/pull/1736"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(java): fast object copy framework in fury java by @zhaommmmomo in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1701",children:"https://github.com/apache/fury/pull/1701"})]}),"\n",(0,h.jsxs)(t.li,{children:["perf(java): optimize pojo copy performance by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1739",children:"https://github.com/apache/fury/pull/1739"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(java): support jdk17+ record copy by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1741",children:"https://github.com/apache/fury/pull/1741"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(RUST): String detection is performed using SIMD techniques by @kitty-eu-org in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1752",children:"https://github.com/apache/fury/pull/1752"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(java): Add 'Expose' annotation to support \"only de/serialize annotated fields\" by @urlyy in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1751",children:"https://github.com/apache/fury/pull/1751"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(java): support Ignore inconsistent types deserialize by @weijiang157152688 in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1737",children:"https://github.com/apache/fury/pull/1737"})]}),"\n",(0,h.jsxs)(t.li,{children:["perf(java): optimize map copy perf by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1767",children:"https://github.com/apache/fury/pull/1767"})]}),"\n",(0,h.jsxs)(t.li,{children:["perf(java): optimize list copy perf by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1769",children:"https://github.com/apache/fury/pull/1769"})]}),"\n",(0,h.jsxs)(t.li,{children:["perf(java): optimize object array copy perf by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1770",children:"https://github.com/apache/fury/pull/1770"})]}),"\n",(0,h.jsxs)(t.li,{children:["feat(java): support deep ref copy by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1771",children:"https://github.com/apache/fury/pull/1771"})]}),"\n"]}),"\n",(0,h.jsx)(t.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["fix(java): fix janino commons classes issue by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1753",children:"https://github.com/apache/fury/pull/1753"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(scala): fix scala release version by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1756",children:"https://github.com/apache/fury/pull/1756"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(java): fix streaming classdef read by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1758",children:"https://github.com/apache/fury/pull/1758"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(java): fix big buffer streaming MetaShared read offset by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1760",children:"https://github.com/apache/fury/pull/1760"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(java): fix fury logger npe by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1762",children:"https://github.com/apache/fury/pull/1762"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(java): fix enum abstract field serialization by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1765",children:"https://github.com/apache/fury/pull/1765"})]}),"\n",(0,h.jsxs)(t.li,{children:["fix(java): Fix memory leak in ",(0,h.jsx)(t.code,{children:"StructSerializer.xread()"})," caused by re-pushing instead of popping ",(0,h.jsx)(t.code,{children:"GenericType"}),". by @komamitsu in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1768",children:"https://github.com/apache/fury/pull/1768"})]}),"\n"]}),"\n",(0,h.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["chore: Update case in DISCLAIMER by @pjfanning in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1746",children:"https://github.com/apache/fury/pull/1746"})]}),"\n",(0,h.jsxs)(t.li,{children:["chore: bump dev version to 0.7.0 by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1755",children:"https://github.com/apache/fury/pull/1755"})]}),"\n",(0,h.jsxs)(t.li,{children:["chore(java): rename copyTrackingRef to copyRef by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1748",children:"https://github.com/apache/fury/pull/1748"})]}),"\n",(0,h.jsxs)(t.li,{children:["chore(java): add fury deep copy documentation by @chaokunyang in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1773",children:"https://github.com/apache/fury/pull/1773"})]}),"\n"]}),"\n",(0,h.jsx)(t.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,h.jsxs)(t.ul,{children:["\n",(0,h.jsxs)(t.li,{children:["@urlyy made their first contribution in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1712",children:"https://github.com/apache/fury/pull/1712"})]}),"\n",(0,h.jsxs)(t.li,{children:["@zhaommmmomo made their first contribution in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1701",children:"https://github.com/apache/fury/pull/1701"})]}),"\n",(0,h.jsxs)(t.li,{children:["@kitty-eu-org made their first contribution in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1752",children:"https://github.com/apache/fury/pull/1752"})]}),"\n",(0,h.jsxs)(t.li,{children:["@komamitsu made their first contribution in ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1768",children:"https://github.com/apache/fury/pull/1768"})]}),"\n"]}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.6.0...v0.7.0",children:"https://github.com/apache/fury/compare/v0.6.0...v0.7.0"})]}),"\n",(0,h.jsx)(t.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,h.jsx)(t.p,{children:"Thanks @komamitsu @pjfanning @chaokunyang @weijiang157152688 @kitty-eu-org @urlyy @zhaommmmomo\nA big thank you to all our contributors who have worked hard on this release. Your contributions, whether through code,\ndocumentation, or issue reporting, are really appreciated."}),"\n",(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,h.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.6.0...v0.7.0",children:"https://github.com/apache/fury/compare/v0.6.0...v0.7.0"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>n});var h=r(7294);const i={},s=h.createContext(i);function n(e){const t=h.useContext(s);return h.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),h.createElement(s.Provider,{value:t},e.children)}}}]);