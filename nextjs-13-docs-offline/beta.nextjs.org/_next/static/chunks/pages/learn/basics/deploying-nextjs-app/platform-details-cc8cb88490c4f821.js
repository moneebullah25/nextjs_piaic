(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5417],{28318:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/deploying-nextjs-app/platform-details",function(){return __webpack_require__(22998)}])},87472:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{n:function(){return Video}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52983),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14517),_intersection_observer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37800);function ImageContent(props){let{videoSrc,video,renderImage,src,alt}=props;return src?videoSrc||video?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:src}):renderImage?renderImage(props):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{alt:alt,src:src||null}):null}class Image extends react__WEBPACK_IMPORTED_MODULE_2__.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=entry=>{entry.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption,width,height,margin=40,video=!1,videoSrc,captionSpacing=null,renderImage,oversize=!0,float,lazy,shadow,style,...rest}=this.props,aspectRatio=`${String(height/width*100)}%`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.Z,{disabled:!lazy,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" "+((0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)({oversize:width>650&&oversize,float:float&&width<520})||""),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{paddingBottom:aspectRatio,...style},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageContent,{alt:rest.alt,height:height,renderImage:renderImage,video:video,videoSrc:videoSrc,width:width,...rest,src:this.state.src})}),caption?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption",{style:captionSpacing?{marginTop:captionSpacing}:{},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:caption}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"95f21c269387503e",dynamic:[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${margin}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${width?`width: ${width}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${width}px;margin:${margin}px 0 ${margin}px -webkit-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px -moz-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px calc(((${width}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${float};margin:${margin}px;margin-${float}:-150px}}`})]})})}}function Video(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:"",video:!0})}__webpack_exports__.Z=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:""})}},37800:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Observer}});var react=__webpack_require__(52983),react_dom=__webpack_require__(63730);function hasEqualOptions(observer,options){return equalPair(options.root,observer.root)&&equalPair(options.rootMargin,observer.rootMargin)&&equalPair(options.threshold,observer.thresholds)}function validateRootMargin(margin){if(!/^-?\d*\.?\d+(?:px|%)$/.test(margin))throw Error("rootMargin must be specified as a CSS margin property")}function equalPair(optionA,optionB){return Array.isArray(optionA)&&Array.isArray(optionB)&&optionA.length===optionB.length?optionA.every((element,idx)=>equalPair(optionA[idx],optionB[idx])):optionA===optionB}__webpack_require__(81324);let manager=function(){let observers=new Map;function getObserverTargets(observer){return observers.has(observer)?observers.get(observer):observers.set(observer,new Map).get(observer)}function intersectionCallback(entries,observer){for(let entry of entries){let handlers=getObserverTargets(observer),handler=handlers.get(entry.target);handler&&handler(entry)}}return{getObserver:function(options){return function(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},parsedOptions=function(){var threshold;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:options.root||null,rootMargin:function(rootMargin){let margins=(rootMargin||"0px").trim().split(/\s+/);return margins.forEach(validateRootMargin),margins[1]=margins[1]||margins[0],margins[2]=margins[2]||margins[0],margins[3]=margins[3]||margins[1],margins.join(" ")}(options.rootMargin),threshold:Array.isArray(threshold=options.threshold)?threshold:[void 0!==threshold?threshold:0]}}(options);for(let observer of observers.keys())if(hasEqualOptions(observer,parsedOptions))return observer;return null}(options)||new IntersectionObserver(intersectionCallback,options)},observeTarget:function(observer,target,handler){let targets=getObserverTargets(observer);targets.set(target,handler),observer.observe(target)},unobserveTarget:function(observer,target){let handlers=getObserverTargets(observer);handlers.delete(target),observer.unobserve(target)}}}(),{getObserver}=manager,{observeTarget}=manager,{unobserveTarget}=manager;class Observer extends react.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=getObserver(getOptions(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(nextProps){let nextOptions=getOptions(nextProps);hasEqualOptions(this.observer,nextOptions)||(this.unobserve(),this.observer=getObserver(nextOptions),this.shouldReobserve=!0),this.props.disabled&&!nextProps.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&nextProps.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=node=>{let element=node&&Object.prototype.hasOwnProperty.call(node,"getBoundingClientRect")?node:(0,react_dom.findDOMNode)(node);this.target&&this.target!==element&&(this.unobserve(),this.shouldReobserve=!0),this.target=element};observe(){this.props.disabled||observeTarget(this.observer,this.target,this.handleIntersect)}unobserve(){unobserveTarget(this.observer,this.target)}handleIntersect=entry=>{this.props.onIntersect(entry,this.props.value),this.props.once&&entry.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,react.cloneElement)(react.Children.only(this.props.children),{ref:this.handleTarget})}}let getOptions=props=>({root:props.root,rootMargin:props.rootMargin,threshold:props.threshold})},9296:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PlatformCdnLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),_lib_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2978);function PlatformCdnLink(param){let{href:_href,children:_children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:`${_lib_constants__WEBPACK_IMPORTED_MODULE_1__.z$}/docs/edge-network/overview`,rel:"noopener noreferrer",target:"_blank",...props,children:_lib_constants__WEBPACK_IMPORTED_MODULE_1__.Uy})}},46622:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PlatformLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),_lib_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2978);function PlatformLink(param){let{href,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:`${_lib_constants__WEBPACK_IMPORTED_MODULE_1__.z$}${href||""}?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website`,rel:"noopener noreferrer",target:"_blank",...props,children:children||(href?`${_lib_constants__WEBPACK_IMPORTED_MODULE_1__.z$}${href}`:_lib_constants__WEBPACK_IMPORTED_MODULE_1__.mj)})}},29269:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PlatformText}});var _lib_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2978);function PlatformText(){return _lib_constants__WEBPACK_IMPORTED_MODULE_0__.mj}},22998:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_image__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87472),_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(46622),_components_name_platform_cdn_link__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9296),_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(29269),_lib_constants__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2978);let meta={title:"Deploying Your Next.js App",courseId:"basics",lessonId:"deploying-nextjs-app",stepId:"platform-details",subtitle:`Next.js and ${_lib_constants__WEBPACK_IMPORTED_MODULE_8__.mj}`},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__.Z,{})," is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{}),", the following happens by default:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["Pages that use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/docs/basic-features/pages#static-generation-recommended"},children:"Static Generation"})," and assets (JS, CSS, images, fonts, etc) will automatically be served from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_cdn_link__WEBPACK_IMPORTED_MODULE_6__.Z,{}),", which is blazingly fast."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["Pages that use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/docs/basic-features/pages#server-side-rendering"},children:"Server-Side Rendering"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/docs/api-routes/introduction"},children:"API routes"})," will automatically become isolated ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__.Z,{href:"/docs/serverless-functions/introduction",children:"Serverless Functions"}),". This allows page rendering and API requests to scale infinitely."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{})," has many more features, such as:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Custom Domains:"})," Once deployed on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{}),", you can assign a custom domain to your Next.js app. Take a look at ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__.Z,{href:"/docs/concepts/projects/custom-domains",children:"our documentation"})," here."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Environment Variables:"})," You can also set environment variables on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{}),". Take a look at ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__.Z,{href:"/docs/build-step#environment-variables",children:"our documentation"})," here. You can then ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"/docs/basic-features/environment-variables#loading-environment-variables"},children:"use those environment variables"})," in your Next.js app."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Automatic HTTPS:"})," HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["You can learn more about the platform in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_name_platform_link__WEBPACK_IMPORTED_MODULE_5__.Z,{href:"/docs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{})," documentation"]}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"h3",components:components,children:"Preview Deployment for Every Push"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"blockquote",components:components,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,parentName:"blockquote",children:["The steps below are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"optional"}),` — you can try it or just read it through.`]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["After deploying to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{}),", try doing the following if you can:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["Create a new ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"branch"})," on your app."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:"Make some changes and push to GitHub."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:["Create a new ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"pull request"})," (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"a",components:components,parentName:"li",props:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request"},children:"GitHub help page"}),")."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["You should see a comment by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"p",children:"vercel"})," bot on the pull request page."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_image__WEBPACK_IMPORTED_MODULE_4__.Z,{shadow:!0,alt:"Preview Deployment URL",oversize:!1,src:"/static/images/learn/deploying-nextjs-app/vercel-bot.png",width:389,height:64}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["Try clicking on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"Preview"})," URL inside this comment. You should see the changes you just made."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["When you have a pull request open, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{})," automatically creates a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"preview deployment"})," for that branch on every push. The preview URL will always point to the latest preview deployment."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:"You can share this preview URL with your collaborators and get immediate feedback."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:["If your preview deployment looks good, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:["merge it to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"strong",children:"main"})]}),". When you do this, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{})," automatically creates a production deployment."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"h3",components:components,children:"Develop, Preview, Ship"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:[`We’ve just gone through the workflow we call `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"DPS"}),": ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"D"}),"evelop, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"P"}),"review, and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"p",children:"S"}),"hip."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"ul",components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Develop"}),`: We’ve written code in Next.js and used the Next.js development server running to take advantage of its hot reloading feature.`]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Preview"}),`: We’ve pushed changes to a branch on GitHub, and `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_name_platform_text__WEBPACK_IMPORTED_MODULE_7__.Z,{}),` created a preview deployment that’s available via a URL. We can share this preview URL with others for feedback. In addition to doing `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"em",components:components,parentName:"li",children:"code reviews"}),", you can do ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"em",components:components,parentName:"li",children:"deployment previews"}),"."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"li",components:components,parentName:"ul",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"strong",components:components,parentName:"li",children:"Ship"}),`: We’ve merged the pull request to `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"inlineCode",components:components,parentName:"li",children:"main"})," to ship to production."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:`We strongly recommend using this workflow when developing Next.js apps — it will help you iterate on your app faster.`})]})}}MDXContent.isMDXComponent=!0}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1324,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=28318)}),_N_E=__webpack_require__.O()}]);