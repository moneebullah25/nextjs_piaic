(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4890],{75702:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/foundations/how-nextjs-works/buildtime-and-runtime",function(){return __webpack_require__(16182)}])},95933:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return answer_box}});var jsx_runtime=__webpack_require__(97458),style=__webpack_require__(27546),style_default=__webpack_require__.n(style);__webpack_require__(52983);var cross=function(param){let{color}=param;return(0,jsx_runtime.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,jsx_runtime.jsx)("g",{fill:color||"#111111",children:(0,jsx_runtime.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:color||"#111111"})})})},check=__webpack_require__(42752),records=__webpack_require__(53192),learn_button=__webpack_require__(92856);function Area(props){return(0,jsx_runtime.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[props.children,(0,jsx_runtime.jsx)(style_default(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function Answer(param){let{value,onChange,selected,readOnly,children}=param;return(0,jsx_runtime.jsxs)("label",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])+" "+`f5${readOnly?" disabled":""}`,children:[(0,jsx_runtime.jsx)("input",{defaultChecked:selected,disabled:readOnly,name:"answer",onChange:onChange,type:"radio",value:value,className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]])}),(0,jsx_runtime.jsx)("span",{className:style_default().dynamic([["eb16188a399713d6",[readOnly?"":"cursor: pointer;"]]]),children:children}),(0,jsx_runtime.jsx)(style_default(),{id:"eb16188a399713d6",dynamic:[readOnly?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${readOnly?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function Symbol(param){let{correct,selected}=param;return correct||selected?(0,jsx_runtime.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[correct?(0,jsx_runtime.jsx)(check.Z,{color:"#0070f3"}):(0,jsx_runtime.jsx)(cross,{color:"#e00"}),(0,jsx_runtime.jsx)(style_default(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function AnswerResultMessage(param){let{answer,correctAnswer}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==answer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:!0})," "]}),void 0===answer?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["The correct answer is: ",(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:correctAnswer})]}):answer===correctAnswer?(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,jsx_runtime.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,jsx_runtime.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,jsx_runtime.jsx)(style_default(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var answer_box=function(param){let{meta,answers,correctAnswer,children}=param,[record,dispatchRecord]=(0,records.a)(meta);return(0,jsx_runtime.jsxs)(Area,{children:[children,answers.map(answer=>(0,jsx_runtime.jsxs)(Answer,{onChange:e=>dispatchRecord({type:"answer",answer:e.target.value}),readOnly:record.submitted,selected:answer===record.answer,value:answer,children:[answer," ",record.submitted?(0,jsx_runtime.jsx)(Symbol,{correct:answer===correctAnswer,selected:answer===record.answer}):null]},answer)),(0,jsx_runtime.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[record.submitted?(0,jsx_runtime.jsx)(AnswerResultMessage,{answer:record.answer,correctAnswer:correctAnswer}):(0,jsx_runtime.jsx)(learn_button.Z,{color:"#252525",invert:!0,onClick(){dispatchRecord({type:"submit"}),record.answer===correctAnswer&&dispatchRecord({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,jsx_runtime.jsx)(style_default(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},16182:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95933);let meta={title:"How Next.js Works",courseId:"foundations",lessonId:"how-nextjs-works",stepId:"buildtime-and-runtime",subtitle:"Build Time and Runtime"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"Build time"})," (or build step) is the name given to a series of steps that prepare your application code for production."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["When you build your application, Next.js will transform your code into production-optimized files ready to be deployed to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"p",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"servers"})," and consumed by users. These files include:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:"HTML files for statically generated pages"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["JavaScript code for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/rendering"},children:"rendering"})," pages on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"server"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["JavaScript code for making pages interactive on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"client"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:"CSS files"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"Runtime"}),` (or request time) refers to the period of time when your application runs in response to a user’s request, `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"em",components:components,parentName:"p",children:"after"})," your application has been built and deployed."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:`Next, let’s discuss some of the terms introduced in this section, such as client, server, and rendering.`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_answer_box__WEBPACK_IMPORTED_MODULE_4__.Z,{meta:meta,answers:["True","False"],correctAnswer:"False",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"True or False"}),": Build time is the period of time when an application is being built in response to a user's request."]})})]})}}MDXContent.isMDXComponent=!0}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=75702)}),_N_E=__webpack_require__.O()}]);