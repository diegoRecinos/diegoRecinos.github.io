(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9171:function(e,t,i){Promise.resolve().then(i.t.bind(i,3772,23)),Promise.resolve().then(i.bind(i,3362)),Promise.resolve().then(i.bind(i,1810)),Promise.resolve().then(i.bind(i,1768)),Promise.resolve().then(i.bind(i,1970)),Promise.resolve().then(i.bind(i,805)),Promise.resolve().then(i.bind(i,7335)),Promise.resolve().then(i.bind(i,4034)),Promise.resolve().then(i.bind(i,4534)),Promise.resolve().then(i.bind(i,7537)),Promise.resolve().then(i.bind(i,245)),Promise.resolve().then(i.bind(i,4233)),Promise.resolve().then(i.bind(i,8585)),Promise.resolve().then(i.bind(i,5739)),Promise.resolve().then(i.bind(i,5704)),Promise.resolve().then(i.bind(i,1984)),Promise.resolve().then(i.bind(i,2641)),Promise.resolve().then(i.bind(i,2279)),Promise.resolve().then(i.bind(i,3601)),Promise.resolve().then(i.bind(i,4592)),Promise.resolve().then(i.bind(i,350)),Promise.resolve().then(i.bind(i,8972)),Promise.resolve().then(i.bind(i,7531)),Promise.resolve().then(i.bind(i,9216)),Promise.resolve().then(i.bind(i,5241)),Promise.resolve().then(i.bind(i,6784)),Promise.resolve().then(i.bind(i,8269)),Promise.resolve().then(i.bind(i,8318)),Promise.resolve().then(i.bind(i,6805)),Promise.resolve().then(i.bind(i,703)),Promise.resolve().then(i.bind(i,5185)),Promise.resolve().then(i.bind(i,9239)),Promise.resolve().then(i.bind(i,4377)),Promise.resolve().then(i.t.bind(i,7477,23)),Promise.resolve().then(i.t.bind(i,4648,23))},5294:function(e,t,i){"use strict";var r=i(9268),s=i(6006),n=i(8917),a=i(7192);let l=(0,n.j)("flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700",{variants:{size:{md:"[&_svg]:w-6 [&_svg]:h-6",lg:"[&_svg]:w-8 [&_svg]:h-8"}},defaultVariants:{size:"md"}}),d=s.forwardRef((e,t)=>{let{className:i,size:s,asChild:n=!1,showTooltip:d=!1,tooltipText:c="",children:o,...u}=e;return(0,r.jsxs)("button",{className:(0,a.z)("relative",l({size:s}),i),ref:t,...u,children:[o,d&&c.length>0&&(0,r.jsx)("span",{className:"absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm",children:c})]})});d.displayName="IconButton",t.Z=d},9426:function(e,t,i){"use strict";var r=i(9268),s=i(6006),n=i(8917),a=i(7192);let l=(0,n.j)("text-gray-600 text-normal",{variants:{variant:{h1:"text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900",h2:"text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900",h3:"text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900",subtitle:"text-lg md:text-xl",body1:"text-base md:text-lg",body2:"text-base",body3:"text-sm"}},defaultVariants:{variant:"body2"}}),d={h1:"h1",h2:"h2",h3:"h3",subtitle:"p",body1:"p",body2:"p",body3:"p"},c=s.forwardRef((e,t)=>{let{component:i,className:s="",variant:n,children:c,...o}=e,u=i||(n?d[n]:"p");return(0,r.jsx)(u,{className:(0,a.z)(l({variant:n}),s),ref:t,...o,children:c})});c.displayName="Typography",t.Z=c},3362:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return H}});var r=i(9268),s=i(6006),n=i(6136),a=i(8178),l=i(8769),d=i(8917),c=i(7192);let o=l.fC,u=l.xz,h=l.x8,A=e=>{let{className:t,...i}=e;return(0,r.jsx)(l.h_,{className:(0,c.z)(t),...i})};A.displayName=l.h_.displayName;let g=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,r.jsx)(l.aV,{className:(0,c.z)("fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm",i),...s,ref:t})});g.displayName=l.aV.displayName;let f=(0,d.j)("fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100",{variants:{side:{right:"inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close"}},defaultVariants:{side:"right"}}),b=s.forwardRef((e,t)=>{let{side:i="right",className:s,children:n,...a}=e;return(0,r.jsxs)(A,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(l.VY,{ref:t,className:(0,c.z)(f({side:i}),s),...a,children:n})]})});b.displayName=l.VY.displayName;var m=i(6112),x=i(364),v=i(629),w=i(7107),p=i(6191),y=i(8709),j=i(5294),E=()=>{let[e,t]=(0,s.useState)(!1),{theme:i,setTheme:n}=(0,y.F)();return((0,s.useEffect)(()=>{t(!0)},[]),e)?(0,r.jsx)(j.Z,{onClick:()=>{n("dark"===i?"light":"dark")},children:"dark"===i?(0,r.jsx)(w.Z,{}):(0,r.jsx)(p.Z,{})}):(0,r.jsx)(j.Z,{children:(0,r.jsx)(w.Z,{})})},C=i(1095);let N=s.forwardRef((e,t)=>{let{className:i,asChild:s=!1,...n}=e,a=s?C.g7:"button";return(0,r.jsx)(a,{className:(0,c.z)("inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800",i),ref:t,...n})});N.displayName="Button";var k=()=>(0,r.jsx)(N,{onClick:()=>null==window?void 0:window.open("/files/sagar-cv-2023.pdf","_blank"),children:"Download CV"}),P=i(9426);let _=()=>(0,r.jsx)(P.Z,{variant:"h3",className:"font-bold",children:"<SS />"});var H=()=>{let e=function(e){let[t,i]=(0,s.useState)(!1),r=(0,s.useCallback)(()=>{i((window.scrollY||window.pageYOffset)>e)},[e]);return(0,s.useEffect)(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[r]),t}(40),[t,i]=(0,s.useState)(!1),l=(0,x.Z)();return(0,s.useEffect)(()=>{(null==l?void 0:l.width)&&(null==l?void 0:l.width)>767&&t&&i(!1)},[l,t]),(0,r.jsx)("header",{className:(0,c.z)("sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100",e?"bg-gray/50 backdrop-blur-xl md:border-gray-100":""),children:(0,r.jsxs)("div",{className:"mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8",children:[(0,r.jsx)(v.Z,{href:"/",noCustomization:!0,children:(0,r.jsx)(_,{})}),(0,r.jsxs)("div",{className:"hidden items-center gap-6 md:flex",children:[(0,r.jsx)("ul",{className:"flex list-none items-center gap-6",children:m.qy.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(v.Z,{href:e.href,children:e.label})},t))}),(0,r.jsx)("div",{className:"h-6 w-0.5 bg-gray-100"}),(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)(E,{}),(0,r.jsx)(k,{})]})]}),(0,r.jsxs)(o,{open:t,onOpenChange:i,children:[(0,r.jsx)(u,{asChild:!0,className:"flex md:hidden",children:(0,r.jsx)(j.Z,{children:(0,r.jsx)(n.Z,{})})}),(0,r.jsxs)(b,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-100 p-4",children:[(0,r.jsx)(_,{}),(0,r.jsx)(h,{asChild:!0,children:(0,r.jsx)(j.Z,{children:(0,r.jsx)(a.Z,{})})})]}),(0,r.jsx)("div",{className:"border-b border-gray-100 p-4",children:(0,r.jsx)("ul",{className:"flex list-none flex-col gap-4",children:m.qy.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(v.Z,{href:e.href,onClick:()=>{let e=setTimeout(()=>{i(!1),clearTimeout(e)},500)},children:e.label})},t))})}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 p-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(P.Z,{children:"Switch Theme"}),(0,r.jsx)(E,{})]}),(0,r.jsx)(k,{})]})]})]})]})})}},629:function(e,t,i){"use strict";var r=i(9268),s=i(6006),n=i(5846),a=i.n(n),l=i(7192);let d=s.forwardRef((e,t)=>{let{noCustomization:i,children:s=null,className:n="",externalLink:d=!1,withUnderline:c=!1,...o}=e;return(0,r.jsx)(a(),{...o,target:d?"_blank":"_self",ref:t,className:(0,l.z)(null!=i?i:"text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600",c?"underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600":"",n),children:s})});d.displayName="Link",t.Z=d},364:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var r=i(6006);function s(){let[e,t]=(0,r.useState)({width:null,height:null});return(0,r.useLayoutEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},6112:function(e,t,i){"use strict";i.d(t,{fK:function(){return L},qy:function(){return Z}});var r=i(5057),s=i(6808),n=i(7698),a=i(1768),l=i(4534),d=i(1970),c=i(7335),o=i(805),u=i(4034),h=i(245),A=i(7537),g=i(8585),f=i(4233),b=i(5739),m=i(5704),x=i(2641),v=i(1984),w=i(2279),p=i(3601),y=i(350),j=i(4592),E=i(8972),C=i(7531),N=i(9216),k=i(5241),P=i(6784),_=i(8318),H=i(8269),W=i(6805),B=i(703),R=i(9239),z=i(4377),S=i(5185);let Z=[{label:"About",href:"#about"},{label:"Work",href:"#work"},{label:"Testimonials",href:"#testimonials"},{label:"Contact",href:"#contact"}],L=[{icon:r.Z,url:"https://github.com/shahsagarm"},{icon:s.Z,url:"https://twitter.com/shahsagarm"},{icon:n.Z,url:"https://www.figma.com/@shahsagarm"}];a.default,l.default,d.default,c.default,o.default,u.default,h.default,A.default,g.default,f.default,b.default,m.default,x.default,v.default,w.default,p.default,y.default,j.default,E.default,C.default,N.default,k.default,P.default,_.default,W.default,H.default,B.default,R.default,z.default,S.default},1810:function(e,t,i){"use strict";i.r(t),i.d(t,{Providers:function(){return n}});var r=i(9268),s=i(8709);function n(e){let{children:t}=e;return(0,r.jsx)(s.f,{attribute:"class",children:t})}},7192:function(e,t,i){"use strict";i.d(t,{T:function(){return a},z:function(){return n}});var r=i(9791),s=i(293);let n=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,s.m)((0,r.W)(t))},a=async e=>"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)},4648:function(){},5185:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/avatar-dummy.33f6208e.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4377:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/avatar-eugen.4ec7a6eb.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEXm4t+5sa7Sz80hEBbk39zo5eEsDxZMaXHa2dMmCxM8JSqSh4dcNj5BHic2FRvOyMNpXFhTREGNhoLg2tc4Dxvr6OVqSEOwjX7JxsKGYFf69vMsCBI6ISGklJa2pabAkYS4D8yZAAAAE3RSTlPx/fgusbS1AC7z+i/66i8v/v760hyeNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwFwQcCgCAMBLADKS1uLdv1/1+agIWsJWEI6rErBK6frZjugGTapwog1Vw0Ae4Z7zy/hClcMcZlAw8+BL/yD3AwA06CIQjQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9239:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/avatar-krisztian.3ebeecc9.png",height:64,width:65,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUEBAQ5ODiuo6IAAAB6eHkDAQEBAQGKi40QEBJMaXECAgICAgIoJyYVFBSIiIyCgYOKjZF8h4cDAwOegn8AAAAEBASRkJG3l5NERURwa2uPfXijf3lfMuG9AAAAFnRSTlP+8/3u+jKy+ywAqOP7+7L6tjHu/rfoL2JA6gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwFwQcCgCAMALFjU8CtBfT//zRBcmzLHYT80C/OQIGvQ6SyvL3hqGZ6TcNRxubVzkg2mtT6gOQ1pf2QH2EEArboFLwGAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},350:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-cypress-light.ddf60c8f.svg",height:64,width:64,blurWidth:0,blurHeight:0}},3601:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-cypress.1be72365.svg",height:64,width:65,blurWidth:0,blurHeight:0}},245:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-express-light.ed7459e2.svg",height:64,width:64,blurWidth:0,blurHeight:0}},4034:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-express.01843890.svg",height:64,width:65,blurWidth:0,blurHeight:0}},2279:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-figma.c0585b33.svg",height:64,width:44,blurWidth:0,blurHeight:0}},8972:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-git.c1bc6586.svg",height:64,width:64,blurWidth:0,blurHeight:0}},1768:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-javascript.d0f232c4.svg",height:64,width:64,blurWidth:0,blurHeight:0}},5704:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-mongodb.eaffdb2f.svg",height:64,width:31,blurWidth:0,blurHeight:0}},7537:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-nest.74d4954e.svg",height:64,width:67,blurWidth:0,blurHeight:0}},7335:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-nextjs.61256990.svg",height:64,width:65,blurWidth:0,blurHeight:0}},805:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-nodejs.97fe27e9.svg",height:64,width:57,blurWidth:0,blurHeight:0}},5739:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-postgresql.8a99f167.svg",height:64,width:64,blurWidth:0,blurHeight:0}},1970:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-react.54523870.svg",height:64,width:71,blurWidth:0,blurHeight:0}},2641:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-sass.42fab48f.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4233:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-socket-light.ae3ef621.svg",height:64,width:64,blurWidth:0,blurHeight:0}},8585:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-socket.87ff7472.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4592:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-storybook.29be951a.svg",height:64,width:65,blurWidth:0,blurHeight:0}},1984:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-tailwindcss.6535540a.svg",height:64,width:106,blurWidth:0,blurHeight:0}},4534:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/icon-typescript.ac4f8a37.svg",height:64,width:65,blurWidth:0,blurHeight:0}},8318:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/logo-dotnpixel-light.a588b848.svg",height:32,width:90,blurWidth:0,blurHeight:0}},6784:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/logo-dotnpixel.16f54b55.svg",height:32,width:91,blurWidth:0,blurHeight:0}},5241:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/logo-greenapex-light.01a2fc5f.svg",height:41,width:181,blurWidth:0,blurHeight:0}},9216:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/logo-greenapex.738b7c12.svg",height:32,width:142,blurWidth:0,blurHeight:0}},7531:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/logo-upwork.10b4ab7a.svg",height:28,width:102,blurWidth:0,blurHeight:0}},8269:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/project-fiskil.413c7b8c.png",height:727,width:969,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUzJU/59v748/v///9/do707vgeEDjv5/adlatENGogEjqKgpkkFUCCeZEx27IUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nA3EyQHAQAwCsQHsvfuvN9FDyJI9jXq2u02SSAnrVlXdxRkPzjgAe/9/ExYAxRHu1TYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},703:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/project-pepehousing.3b93c1f9.png",height:1040,width:1387,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAOVBMVEX///9+m7Ckopzy8/PZ2NTIwbf6+vr4+Pfo6Obv7u6wqJu7zdCgqbjj6+zKycOOprWEgXp3dXLQ1NjK7B9eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nD3BxwEAIAgEsKMJ2HX/Yf2ZoBR3z0hI5EitEy7RrG5DqBrzYXyNFlHv9wEjSgE247kcZwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},6805:function(e,t,i){"use strict";i.r(t),t.default={src:".//_next/static/media/project-wingie.0b6bdb40.png",height:1141,width:1711,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEX///9qk59ya0LQybve7ubJ2OCotbiLmJ7CycmCfWymqq6WoKmvpJKOkpC1u8C1r56Oo7EfZ5FMeoyIflHW3NqnqqOmootIaHR0fG9xg46Ps8bV5qO5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBhwGAIBAAsUPKA4p0LPsPSkL9jS2rHyiLcfMN4EWcH0AOT/sioK8k580GJRQBjm7BNv8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[274,832,253,769,744],function(){return e(e.s=9171)}),_N_E=e.O()}]);