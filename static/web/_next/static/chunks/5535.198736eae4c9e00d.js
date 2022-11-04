(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5535],{54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var a=n(87462),r=n(4942),i=n(18073),s=n(94184),o=n.n(s),c=n(74902),l=n(15671),d=n(43144),u=n(60136),p=n(33643),h=n(71002),v=n(67294),m=n(96774),f=n.n(m),A=n(50344),y=n(62874),g=n(97685),x=v.forwardRef(function(e,t){var n,a=e.prefixCls,i=e.forceRender,s=e.className,c=e.style,l=e.children,d=e.isActive,u=e.role,p=v.useState(d||i),h=(0,g.Z)(p,2),m=h[0],f=h[1];return(v.useEffect(function(){(i||d)&&f(!0)},[i,d]),m)?v.createElement("div",{ref:t,className:o()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),s),style:c,role:u},v.createElement("div",{className:"".concat(a,"-content-box")},l)):null});x.displayName="PanelContent";var b=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"==typeof n&&n(a)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,r=t.prefixCls,i=t.collapsible;if(!n)return null;var s="function"==typeof a?a(e.props):v.createElement("i",{className:"arrow"});return s&&v.createElement("div",{className:"".concat(r,"-expand-icon"),onClick:"header"===i?e.onItemClick:null},s)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,r=t.collapsible;return v.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===r?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!f()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,i=n.className,s=n.id,c=n.style,l=n.prefixCls,d=n.headerClass,u=n.children,p=n.isActive,h=n.destroyInactivePanel,m=n.accordion,f=n.forceRender,A=n.openMotion,g=n.extra,b=n.collapsible,C="disabled"===b,Z="header"===b,N=o()((e={},(0,r.Z)(e,"".concat(l,"-item"),!0),(0,r.Z)(e,"".concat(l,"-item-active"),p),(0,r.Z)(e,"".concat(l,"-item-disabled"),C),e),i),w={className:o()("".concat(l,"-header"),(t={},(0,r.Z)(t,d,d),(0,r.Z)(t,"".concat(l,"-header-collapsible-only"),Z),t)),"aria-expanded":p,"aria-disabled":C,onKeyPress:this.handleKeyPress};return Z||(w.onClick=this.onItemClick,w.role=m?"tab":"button",w.tabIndex=C?-1:0),v.createElement("div",{className:N,style:c,id:s},v.createElement("div",w,this.renderIcon(),this.renderTitle(),null!=g&&"boolean"!=typeof g&&v.createElement("div",{className:"".concat(l,"-extra")},g)),v.createElement(y.Z,(0,a.Z)({visible:p,leavedClassName:"".concat(l,"-content-hidden")},A,{forceRender:f,removeOnLeave:h}),function(e,t){var n=e.className,a=e.style;return v.createElement(x,{ref:t,prefixCls:l,className:n,style:a,isActive:p,forceRender:f,role:m?"tabpanel":null},u)}))}}]),n}(v.Component);function C(e){var t=e;if(!Array.isArray(t)){var n=(0,h.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}b.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var Z=function(e){(0,u.Z)(n,e);var t=(0,p.Z)(n);function n(e){(0,l.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,c.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,i=r.prefixCls,s=r.openMotion,o=r.accordion,c=r.destroyInactivePanel,l=r.expandIcon,d=r.collapsible,u=e.key||String(t),p=e.props,h=p.header,m=p.headerClass,f=p.destroyInactivePanel,A=p.collapsible,y=!1;y=o?n[0]===u:n.indexOf(u)>-1;var g=null!=A?A:d,x={key:u,panelKey:u,header:h,headerClass:m,isActive:y,prefixCls:i,destroyInactivePanel:null!=f?f:c,openMotion:s,accordion:o,children:e.props.children,onItemClick:"disabled"===g?null:a.onClickItem,expandIcon:l,collapsible:g};return"string"==typeof e.type?e:(Object.keys(x).forEach(function(e){void 0===x[e]&&delete x[e]}),v.cloneElement(e,x))},a.getItems=function(){var e=a.props.children;return(0,A.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),a.state={activeKey:C(i)},a}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!f()(this.props,e)||!f()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,i=t.style,s=t.accordion,c=o()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return v.createElement("div",{className:c,style:i,role:s?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),t}}]),n}(v.Component);Z.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},Z.Panel=b,Z.Panel;var N=n(98423),w=n(53124),E=n(33603),j=n(96159),I=function(e){var t=v.useContext(w.E_).getPrefixCls,n=e.prefixCls,i=e.className,s=e.showArrow,c=t("collapse",n),l=o()((0,r.Z)({},"".concat(c,"-no-arrow"),!(void 0===s||s)),void 0===i?"":i);return v.createElement(Z.Panel,(0,a.Z)({},e,{prefixCls:c,className:l}))},k=function(e){var t,n,s=v.useContext(w.E_),c=s.getPrefixCls,l=s.direction,d=e.prefixCls,u=e.className,p=e.bordered,h=e.ghost,m=e.expandIconPosition,f=void 0===m?"start":m,y=c("collapse",d),g=v.useMemo(function(){return"left"===f?"start":"right"===f?"end":f},[f]),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):v.createElement(i.Z,{rotate:t.isActive?90:void 0});return(0,j.Tm)(a,function(){return{className:o()(a.props.className,"".concat(y,"-arrow"))}})},b=o()("".concat(y,"-icon-position-").concat(g),(n={},(0,r.Z)(n,"".concat(y,"-borderless"),!(void 0===p||p)),(0,r.Z)(n,"".concat(y,"-rtl"),"rtl"===l),(0,r.Z)(n,"".concat(y,"-ghost"),!!h),n),void 0===u?"":u),C=(0,a.Z)((0,a.Z)({},E.ZP),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")});return v.createElement(Z,(0,a.Z)({openMotion:C},e,{expandIcon:x,prefixCls:y,className:b}),(t=e.children,(0,A.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),i=e.props,s=i.disabled,o=i.collapsible,c=(0,a.Z)((0,a.Z)({},(0,N.Z)(e.props,["disabled"])),{key:r,collapsible:null!=o?o:s?"disabled":void 0});return(0,j.Tm)(e,c)}return e})))};k.Panel=I;var O=k},11382:function(e,t,n){"use strict";var a=n(87462),r=n(4942),i=n(97685),s=n(94184),o=n.n(s),c=n(23279),l=n.n(c),d=n(98423),u=n(67294),p=n(53124),h=n(96159),v=n(93355),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,v.b)("small","default","large");var f=null,A=function(e){var t=e.spinPrefixCls,n=e.spinning,s=void 0===n||n,c=e.delay,v=e.className,A=e.size,y=void 0===A?"default":A,g=e.tip,x=e.wrapperClassName,b=e.style,C=e.children,Z=m(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),N=u.useState(function(){return s&&(!s||!c||!!isNaN(Number(c)))}),w=(0,i.Z)(N,2),E=w[0],j=w[1];u.useEffect(function(){var e=l()(function(){j(s)},c);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[c,s]);var I=function(n){var i,s,c,l=n.direction,p=o()(t,(c={},(0,r.Z)(c,"".concat(t,"-sm"),"small"===y),(0,r.Z)(c,"".concat(t,"-lg"),"large"===y),(0,r.Z)(c,"".concat(t,"-spinning"),E),(0,r.Z)(c,"".concat(t,"-show-text"),!!g),(0,r.Z)(c,"".concat(t,"-rtl"),"rtl"===l),c),v),m=(0,d.Z)(Z,["indicator","prefixCls"]),A=u.createElement("div",(0,a.Z)({},m,{style:b,className:p,"aria-live":"polite","aria-busy":E}),(i=e.indicator,s="".concat(t,"-dot"),null===i?null:(0,h.l$)(i)?(0,h.Tm)(i,{className:o()(i.props.className,s)}):(0,h.l$)(f)?(0,h.Tm)(f,{className:o()(f.props.className,s)}):u.createElement("span",{className:o()(s,"".concat(t,"-dot-spin"))},u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}),u.createElement("i",{className:"".concat(t,"-dot-item")}))),g?u.createElement("div",{className:"".concat(t,"-text")},g):null);if(void 0!==C){var N=o()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),E));return u.createElement("div",(0,a.Z)({},m,{className:o()("".concat(t,"-nested-loading"),x)}),E&&u.createElement("div",{key:"loading"},A),u.createElement("div",{className:N,key:"container"},C))}return A};return u.createElement(p.C,null,I)},y=function(e){var t=e.prefixCls,n=(0,u.useContext(p.E_).getPrefixCls)("spin",t),r=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return u.createElement(A,(0,a.Z)({},r))};y.setDefaultIndicator=function(e){f=e},t.Z=y},65535:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return j}});var a=n(85893),r=n(84381),i=n(4480),s=n(54907),o=n(84485),c=n(11382),l=n(26713),d=n(14670),u=n(69677),p=n(67294),h=n(37174);let{Panel:v}=s.Z,{Link:m}=o.Z,f=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,p.useState)(null),[f,A]=(0,p.useState)(!1),[y,g]=(0,p.useState)(!1),[x,b]=(0,p.useState)(""),C=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Use your own domain to authenticate ",(0,a.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),Z=i;Z&&Z.includes("url does not support indieauth")&&(Z="The provided URL is either invalid or does not support IndieAuth.");let N=e=>{if(!(0,h.Z)(e)||!e.includes(".")){g(!1);return}g(!0)},w=e=>{let t=e.nativeEvent.data;if(":"===t)return;b(e.target.value);let n="https://".concat(e.target.value);N(n)},E=async()=>{if(y){A(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(r),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(x)})}),t=await e.json();if(t.message){o(t.message),A(!1);return}if(!t.redirect){o("Auth provider did not return a redirect URL."),A(!1);return}if(t.redirect){let{redirect:n}=t;window.location=n}}catch(a){o(a.message)}A(!1)}};return(0,a.jsx)(c.Z,{spinning:f,children:(0,a.jsxs)(l.Z,{direction:"vertical",children:[C,Z&&(0,a.jsx)(d.Z,{message:"Error",description:Z,type:"error",showIcon:!0}),(0,a.jsx)("div",{children:"Your domain"}),(0,a.jsx)(u.Z.Search,{addonBefore:"https://",onInput:w,type:"url",value:x,placeholder:"yoursite.com",status:!y&&x.length>0?"error":void 0,onSearch:E}),(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsxs)(v,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,a.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,a.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,a.jsx)(m,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var A=n(71577),y=n(50501),g=n.n(y);let{Panel:x}=s.Z,b=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,p.useState)(null),[h,v]=(0,p.useState)(!1),[m,f]=(0,p.useState)(!1),[y,b]=(0,p.useState)(""),[C,Z]=(0,p.useState)(""),[N,w]=(0,p.useState)(!1),E=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,a.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),j=i;j&&j.includes("url does not support indieauth")&&(j="The provided URL is either invalid or does not support IndieAuth.");let I=e=>{f(function(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e))},k=e=>{b(e.target.value),I(e.target.value)},O=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),a=await n.json();a.message&&(o(a.message),v(!1))},S=async()=>{v(!0);try{await O("/api/auth/fediverse/verify?accessToken=".concat(r),{code:C}),window.location.href="/"}catch(e){console.error(e),o(e)}v(!1)},P=async()=>{if(!m)return;v(!0),o(null);let e=y.replace(/^@+/,"");try{await O("/api/auth/fediverse?accessToken=".concat(r),{account:e}),w(!0)}catch(t){console.error(t),o(t)}v(!1)},T=(0,a.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,a.jsxs)("div",{className:g().codeInputContainer,children:[(0,a.jsx)(u.Z,{value:C,onChange:e=>Z(e.target.value),className:g().codeInput,placeholder:"123456",maxLength:6}),(0,a.jsx)(A.Z,{type:"primary",onClick:S,disabled:C.length<6,className:g().submitButton,children:"Verify Code"})]})]}),U=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:"Your Fediverse Account"}),(0,a.jsx)(u.Z.Search,{addonBefore:"@",onInput:k,value:y,placeholder:"youraccount@yourserver.com",status:!m&&y.length>0?"error":void 0,onSearch:P})]});return(0,a.jsx)(c.Z,{spinning:h,children:(0,a.jsxs)(l.Z,{direction:"vertical",children:[E,j&&(0,a.jsx)(d.Z,{message:"Error",description:j,type:"error",showIcon:!0}),N?T:U,(0,a.jsx)(s.Z,{ghost:!0,children:(0,a.jsx)(x,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,a.jsx)("p",{children:"xxxxxx"})},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var C={src:"/_next/static/media/fediverse-black.0b51c805.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVMaXEbGxsREREQEBAPDw8NDQ0FBQUQEBAQEBAUFBQNDQ0REREVFRUQEBAODg4UFBQUFBQHBwcNDQ1DUQGwAAAAE3RSTlMAC2QvWeDEnZQbSn15tW2ri/pAr8wTOgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAD1JREFUeJwdy0cOgDAMAMGNS2yHFPj/Z0GcRwMwegNaWbgB3WfmZSArZd7eqR0qEYM6GT/pc/bygqal8v0XMgEBhHcrytIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},Z={src:"/_next/static/media/indieauth.38c52a3d.png",height:512,width:406,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAJFBMVEU4ODg4ODg5OTk5OTk5OTk4ODg5OTk4ODg5OTk5OTk5OTk4ODiRUFfYAAAAC3RSTlMCFOuovTv1zI8wabTrOYwAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAAsSURBVHicBcGFAQAwDMCg1Gb5/98BHG1gd2UQGeQwVvl4ujyUEzbbi8nyhn4bVgEfoFU38wAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},N=n(54639),w=n.n(N),E=n(77466);let j=()=>{let e=(0,i.sJ)(E.L4),t=(0,i.sJ)(E.FI),n=(0,i.sJ)(E.db);if(!n)return null;let{displayName:s}=n,o=(0,a.jsxs)("span",{className:w().tabContent,children:[(0,a.jsx)("img",{className:w().icon,src:Z.src,alt:"IndieAuth"}),"IndieAuth"]}),c=(0,a.jsx)(f,{authenticated:e,displayName:s,accessToken:t}),l=(0,a.jsxs)("span",{className:w().tabContent,children:[(0,a.jsx)("img",{className:w().icon,src:C.src,alt:"Fediverse auth"}),"FediAuth"]}),d=(0,a.jsx)(b,{authenticated:e,displayName:s,accessToken:t});return(0,a.jsx)("div",{children:(0,a.jsx)(r.Z,{defaultActiveKey:"1",items:[{label:o,key:"1",children:c},{label:l,key:"2",children:d}],type:"card",size:"small",renderTabBar:null})})}},54639:function(e){e.exports={tabContent:"AuthModal_tabContent__KgMU3",icon:"AuthModal_icon__kpEuV"}},50501:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__M_dAD",codeInput:"FediAuthModal_codeInput__dIE6u",submitButton:"FediAuthModal_submitButton__iuF9R"}}}]);