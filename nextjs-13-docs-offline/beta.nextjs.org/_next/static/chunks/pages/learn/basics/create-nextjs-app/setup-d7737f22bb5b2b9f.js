(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2079],{38498:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/create-nextjs-app/setup",function(){return __webpack_require__(7454)}])},95933:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return answer_box}});var jsx_runtime=__webpack_require__(97458),style=__webpack_require__(27546),style_default=__webpack_require__.n(style);__webpack_require__(52983);var cross=function(param){let{color}=param;return(0,jsx_runtime.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,jsx_runtime.jsx)("g",{fill:color||"#111111",children:(0,jsx_runtime.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:color||"#111111"})})})},check=__webpack_require__(42752),records=__webpack_require__(53192),learn_button=__webpack_require__(92856);function Area(props){return(0,jsx_runtime.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[props.children,(0,jsx_runtime.jsx)(style_default(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function Answer(param){let{value,onChange,selected,readOnly,children}=param;return(0,jsx_runtime.jsxs)("label",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])+" "+`f5${readOnly?" disabled":""}`,children:[(0,jsx_runtime.jsx)("input",{defaultChecked:selected,disabled:readOnly,name:"answer",onChange:onChange,type:"radio",value:value,className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])}),(0,jsx_runtime.jsx)("span",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]]),children:children}),(0,jsx_runtime.jsx)(style_default(),{id:"eb16188a399713d6",dynamic:[readOnly?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${readOnly?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function Symbol(param){let{correct,selected}=param;return correct||selected?(0,jsx_runtime.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[correct?(0,jsx_runtime.jsx)(check.Z,{color:"#0070f3"}):(0,jsx_runtime.jsx)(cross,{color:"#e00"}),(0,jsx_runtime.jsx)(style_default(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function AnswerResultMessage(param){let{answer,correctAnswer}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==answer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:!0})," "]}),void 0===answer?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The correct answer is: ",(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:correctAnswer})]}):answer===correctAnswer?(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,jsx_runtime.jsx)(style_default(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var answer_box=function(param){let{meta,answers,correctAnswer,children}=param,[record,dispatchRecord]=(0,records.a)(meta);return(0,jsx_runtime.jsxs)(Area,{children:[children,answers.map(answer=>(0,jsx_runtime.jsxs)(Answer,{onChange:e=>dispatchRecord({type:"answer",answer:e.target.value}),readOnly:record.submitted,selected:answer===record.answer,value:answer,children:[answer," ",record.submitted?(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:answer===record.answer}):null]},answer)),(0,jsx_runtime.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[record.submitted?(0,jsx_runtime.jsx)(AnswerResultMessage,{answer:record.answer,correctAnswer:correctAnswer}):(0,jsx_runtime.jsx)(learn_button.Z,{color:"#252525",invert:!0,onClick(){dispatchRecord({type:"submit"}),record.answer===correctAnswer&&dispatchRecord({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,jsx_runtime.jsx)(style_default(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},7454:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95933);let meta={title:"Create a Next.js App",courseId:"basics",lessonId:"create-nextjs-app",stepId:"setup",subtitle:"Setup"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:`First, let’s make sure that your development environment is ready.`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[`If you don’t have `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Node.js"})," installed, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"https://nodejs.org/en/"},children:"install it from here"}),`. You’ll need Node.js version `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"10.13"})," or later."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:`You’ll be using your own text editor and terminal app for this tutorial.`})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"blockquote",components:components,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,parentName:"blockquote",children:["If you are on Windows, we recommend ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"https://gitforwindows.org/"},children:"downloading Git for Windows"})," and use Git Bash that comes with it, which supports the UNIX-specific commands in this tutorial. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},children:"Windows Subsystem for Linux (WSL)"})," is another option."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"h3",components:components,children:"Create a Next.js app"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["To create a Next.js app, open your terminal, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"p",children:"cd"}),` into the directory you’d like to create the app in, and run the following command:`]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"pre",components:components,props:{className:"language-shell"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"code",components:components,parentName:"pre",props:{className:"language-shell"},children:["npx create-next-app@latest nextjs-blog --use-npm --example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"span",components:components,parentName:"code",props:{className:"token string"},children:'"https://github.com/vercel/next-learn/tree/master/basics/learn-starter"'}),`
`]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"blockquote",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,parentName:"blockquote",children:["Under the hood, this uses the tool called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"/docs/api-reference/create-next-app"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"a",children:"create-next-app"})}),", which bootstraps a Next.js app for you. It uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"https://github.com/vercel/next-learn/tree/master/basics/learn-starter"},children:"this template"})," through the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"p",children:"--example"})," flag."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,parentName:"blockquote",children:[`If it doesn’t work, please take a look at `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"https://github.com/vercel/next-learn/blob/master/basics/errors/install.md"},children:"this page"}),"."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"h3",components:components,children:"Run the development server"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["You now have a new directory called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"p",children:"nextjs-blog"}),`. Let’s `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"p",children:"cd"})," into it:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"pre",components:components,props:{className:"language-shell"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"code",components:components,parentName:"pre",props:{className:"language-shell"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"span",components:components,parentName:"code",props:{className:"token builtin class-name"},children:"cd"}),` nextjs-blog
`]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:"Then, run the following command:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"pre",components:components,props:{className:"language-shell"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"code",components:components,parentName:"pre",props:{className:"language-shell"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"span",components:components,parentName:"code",props:{className:"token function"},children:"npm"}),` run dev
`]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[`This starts your Next.js app’s "development server" (more on this later) on port `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"3000"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[`Let’s check to see if it’s working. Open `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"http://localhost:3000"},children:"http://localhost:3000"})," from your browser."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__.Z,{meta:meta,answers:["Welcome to Next.js!","Hello Next.js!"],correctAnswer:"Welcome to Next.js!",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"Quick Review"}),": What text do you see on the page?"]})})]})}}MDXContent.isMDXComponent=!0}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=38498)}),_N_E=__webpack_require__.O()}]);