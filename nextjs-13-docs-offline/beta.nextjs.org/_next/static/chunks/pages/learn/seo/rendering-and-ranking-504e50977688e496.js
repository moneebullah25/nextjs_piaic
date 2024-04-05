(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{38072:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/seo/rendering-and-ranking",function(){return __webpack_require__(77554)}])},87472:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{n:function(){return Video}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52983),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14517),_intersection_observer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37800);function ImageContent(props){let{videoSrc,video,renderImage,src,alt}=props;return src?videoSrc||video?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:src}):renderImage?renderImage(props):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{alt:alt,src:src||null}):null}class Image extends react__WEBPACK_IMPORTED_MODULE_2__.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=entry=>{entry.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption,width,height,margin=40,video=!1,videoSrc,captionSpacing=null,renderImage,oversize=!0,float,lazy,shadow,style,...rest}=this.props,aspectRatio=`${String(height/width*100)}%`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.Z,{disabled:!lazy,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" "+((0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)({oversize:width>650&&oversize,float:float&&width<520})||""),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]])+" container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{paddingBottom:aspectRatio,...style},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageContent,{alt:rest.alt,height:height,renderImage:renderImage,video:video,videoSrc:videoSrc,width:width,...rest,src:this.state.src})}),caption?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figcaption",{style:captionSpacing?{marginTop:captionSpacing}:{},className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["95f21c269387503e",[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float]]]),children:caption}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"95f21c269387503e",dynamic:[margin,width?`width: ${width}px;`:"",shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",width,margin,margin,width,float,margin,float],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${margin}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${width?`width: ${width}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${shadow?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${width}px;margin:${margin}px 0 ${margin}px -webkit-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px -moz-calc(((${width}px - 650px) / 2) * -1);margin:${margin}px 0 ${margin}px calc(((${width}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${float};margin:${margin}px;margin-${float}:-150px}}`})]})})}}function Video(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:"",video:!0})}__webpack_exports__.Z=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image,{...props,alt:""})}},37800:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Observer}});var react=__webpack_require__(52983),react_dom=__webpack_require__(63730);function hasEqualOptions(observer,options){return equalPair(options.root,observer.root)&&equalPair(options.rootMargin,observer.rootMargin)&&equalPair(options.threshold,observer.thresholds)}function validateRootMargin(margin){if(!/^-?\d*\.?\d+(?:px|%)$/.test(margin))throw Error("rootMargin must be specified as a CSS margin property")}function equalPair(optionA,optionB){return Array.isArray(optionA)&&Array.isArray(optionB)&&optionA.length===optionB.length?optionA.every((element,idx)=>equalPair(optionA[idx],optionB[idx])):optionA===optionB}__webpack_require__(81324);let manager=function(){let observers=new Map;function getObserverTargets(observer){return observers.has(observer)?observers.get(observer):observers.set(observer,new Map).get(observer)}function intersectionCallback(entries,observer){for(let entry of entries){let handlers=getObserverTargets(observer),handler=handlers.get(entry.target);handler&&handler(entry)}}return{getObserver:function(options){return function(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},parsedOptions=function(){var threshold;let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:options.root||null,rootMargin:function(rootMargin){let margins=(rootMargin||"0px").trim().split(/\s+/);return margins.forEach(validateRootMargin),margins[1]=margins[1]||margins[0],margins[2]=margins[2]||margins[0],margins[3]=margins[3]||margins[1],margins.join(" ")}(options.rootMargin),threshold:Array.isArray(threshold=options.threshold)?threshold:[void 0!==threshold?threshold:0]}}(options);for(let observer of observers.keys())if(hasEqualOptions(observer,parsedOptions))return observer;return null}(options)||new IntersectionObserver(intersectionCallback,options)},observeTarget:function(observer,target,handler){let targets=getObserverTargets(observer);targets.set(target,handler),observer.observe(target)},unobserveTarget:function(observer,target){let handlers=getObserverTargets(observer);handlers.delete(target),observer.unobserve(target)}}}(),{getObserver}=manager,{observeTarget}=manager,{unobserveTarget}=manager;class Observer extends react.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=getObserver(getOptions(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(nextProps){let nextOptions=getOptions(nextProps);hasEqualOptions(this.observer,nextOptions)||(this.unobserve(),this.observer=getObserver(nextOptions),this.shouldReobserve=!0),this.props.disabled&&!nextProps.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&nextProps.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=node=>{let element=node&&Object.prototype.hasOwnProperty.call(node,"getBoundingClientRect")?node:(0,react_dom.findDOMNode)(node);this.target&&this.target!==element&&(this.unobserve(),this.shouldReobserve=!0),this.target=element};observe(){this.props.disabled||observeTarget(this.observer,this.target,this.handleIntersect)}unobserve(){unobserveTarget(this.observer,this.target)}handleIntersect=entry=>{this.props.onIntersect(entry,this.props.value),this.props.once&&entry.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,react.cloneElement)(react.Children.only(this.props.children),{ref:this.handleTarget})}}let getOptions=props=>({root:props.root,rootMargin:props.rootMargin,threshold:props.threshold})},60350:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H3:function(){return H3},H4:function(){return H4},H5:function(){return H5}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);function H3(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"jsx-f28bd670423c9152",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"f28bd670423c9152",children:"h3.jsx-f28bd670423c9152{font-weight:bold;font-size:18px}h3.jsx-f28bd670423c9152 code{margin-left:6px;margin-right:6px}"})]})}function H4(param){let{children,isCommand}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4",{className:"jsx-78840f56e29ac759 "+((isCommand?"command":"")||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"78840f56e29ac759",children:"h4.jsx-78840f56e29ac759{font-weight:bold;font-size:16px}.command.jsx-78840f56e29ac759{color:#bd10e0;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;font-size:.9em}h4.jsx-78840f56e29ac759 code{margin-left:6px;margin-right:6px}"})]})}function H5(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5",{className:"jsx-ed7f7d0730484ac7",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"ed7f7d0730484ac7",children:"h5.jsx-ed7f7d0730484ac7{font-weight:bold;font-size:15px}h5.jsx-ed7f7d0730484ac7 code{margin-left:6px;margin-right:6px}"})]})}},10251:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h$:function(){return InternalLink},mj:function(){return GenericLink}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14517),_components_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2530),_link_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44709),_link_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_link_module_css__WEBPACK_IMPORTED_MODULE_4__);function GenericLink(props){return!props.href.startsWith("/")||props.href.startsWith("/docs")||props.href.startsWith("/api")?props.href.includes("@")||props.href.startsWith("#")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AnchorLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalLink,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InternalLink,{...props})}function InternalLink(param){let{href,as="",children,error=!1,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_link__WEBPACK_IMPORTED_MODULE_2__.r,{as:as,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().link,{[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().error]:error,[_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().hoverUnderline]:underlineOnHover}),href:href,children:children})}function AnchorLink(param){let{href,onClick,children,underlineOnHover=!0}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,onClick:onClick,className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["9da93be90d00fb56",[underlineOnHover?"underline":"none"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"9da93be90d00fb56",dynamic:[underlineOnHover?"underline":"none"],children:`a.__jsx-style-dynamic-selector{text-decoration:none;color:#0070f3;font-size:inherit;cursor:pointer}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:${underlineOnHover?"underline":"none"};-moz-text-decoration:${underlineOnHover?"underline":"none"};text-decoration:${underlineOnHover?"underline":"none"}}`})]})}function ExternalLink(param){let{href,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{href:href,rel:"noopener noreferrer",target:"_blank",className:"jsx-3da361ed9bbc2b1",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"3da361ed9bbc2b1",children:"a.jsx-3da361ed9bbc2b1{text-decoration:none;color:#0070f3;font-size:inherit}a.jsx-3da361ed9bbc2b1:hover{text-decoration:underline}"})]})}},38658:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{LI:function(){return LI},OL:function(){return OL},UL:function(){return UL}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function UL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"jsx-571896de3ffb79ac",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"571896de3ffb79ac",children:'ul.jsx-571896de3ffb79ac{padding:0;list-style-type:none;margin-left:15px}ul.jsx-571896de3ffb79ac>li::before{content:"-";display:inline-block;color:#999;position:absolute;margin-left:-15px}'})]})}function OL(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol",{className:"jsx-fb2728ad24ced75e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"fb2728ad24ced75e",children:"ol.jsx-fb2728ad24ced75e{padding:0;margin-left:15px}"})]})}function LI(param){let{children,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["d489cf15d2c12258",[fontSize||"14px"]]]),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"d489cf15d2c12258",dynamic:[fontSize||"14px"],children:`li.__jsx-style-dynamic-selector{${fontSize||"14px"};line-height:24px;margin-bottom:10px}`})]})}UL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},OL.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},LI.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}},9476:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:function(){return P}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27546),styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69480),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);function P(param){let{className="",children,large,fontSize}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["250a25f4b2912b42",[fontSize||(large?"18px":"14px")]]])+" "+(className||""),children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"250a25f4b2912b42",dynamic:[fontSize||(large?"18px":"14px")],children:`p.__jsx-style-dynamic-selector{font-weight:400;font-size:${fontSize||(large?"18px":"14px")};line-height:24px}`})]})}function B(param){let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"jsx-4a4877b22e18241e",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default(),{id:"4a4877b22e18241e",children:"span.jsx-4a4877b22e18241e{font-weight:600}"})]})}P.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),fontSize:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),B.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node])},prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),prop_types__WEBPACK_IMPORTED_MODULE_2___default().node]),P.B=B},77554:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return MDXContent},meta:function(){return meta}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(97458),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52983),_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63635),_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50023),_components_text_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38658);__webpack_require__(60350);var _components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9476);__webpack_require__(87472),__webpack_require__(10251);let meta={title:"Rendering and Ranking",courseId:"seo",lessonId:"rendering-and-ranking"},layoutProps={meta};class MDXContent extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.layout=param=>{let{children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_learn_layout__WEBPACK_IMPORTED_MODULE_3__.Z,{meta:meta,children:children})}}render(){let{components,...props}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},layoutProps,props),components:components,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"JavaScript is an important part of the web development ecosystem. In the past, most programming languages were sending all content directly from the server."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"With technology like JavaScript, fetching information from the browser became more popular than ever. This, in turn, affected search engines and their ability to understand pages, as most bots were only parsing the initial HTML from the server and loading it to the browser."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"In this lesson, we'll talk about:"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_4__.UL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_text_list__WEBPACK_IMPORTED_MODULE_4__.LI,{fontSize:"16px",children:["Rendering strategies, such as Client-Side Rendering (CSR), Incremental Static Regeneration (ISR), Static Site Generation (SSG), and Server-Side Rendering (SSR)."," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_list__WEBPACK_IMPORTED_MODULE_4__.LI,{fontSize:"16px",children:"How URL structure can impact SEO ranking."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_list__WEBPACK_IMPORTED_MODULE_4__.LI,{fontSize:"16px",children:"Incorporating headings and internal links to optimize your search engine results page ranking."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__.XJ,{name:"p",components:components,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_text_paragraph__WEBPACK_IMPORTED_MODULE_6__.P,{fontSize:"16px",children:"Let's dive in!"})})]})}}MDXContent.isMDXComponent=!0},44709:function(module){module.exports={link:"link_link__8vjBa",error:"link_error__nW_2H",hoverUnderline:"link_hoverUnderline___vgMl"}}},function(__webpack_require__){__webpack_require__.O(0,[8149,2149,4221,6479,1324,1286,4847,23,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=38072)}),_N_E=__webpack_require__.O()}]);