(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3905:function(e,t,i){Promise.resolve().then(i.bind(i,6370)),Promise.resolve().then(i.t.bind(i,5962,23)),Promise.resolve().then(i.bind(i,9809)),Promise.resolve().then(i.bind(i,1716)),Promise.resolve().then(i.bind(i,5185)),Promise.resolve().then(i.bind(i,6805)),Promise.resolve().then(i.bind(i,703)),Promise.resolve().then(i.bind(i,9239)),Promise.resolve().then(i.bind(i,4377)),Promise.resolve().then(i.bind(i,8269)),Promise.resolve().then(i.bind(i,1768)),Promise.resolve().then(i.bind(i,4534)),Promise.resolve().then(i.bind(i,805)),Promise.resolve().then(i.bind(i,7335)),Promise.resolve().then(i.bind(i,7537)),Promise.resolve().then(i.bind(i,4034)),Promise.resolve().then(i.bind(i,1970)),Promise.resolve().then(i.bind(i,245)),Promise.resolve().then(i.bind(i,8585)),Promise.resolve().then(i.bind(i,5704)),Promise.resolve().then(i.bind(i,5739)),Promise.resolve().then(i.bind(i,2641)),Promise.resolve().then(i.bind(i,4233)),Promise.resolve().then(i.bind(i,2279)),Promise.resolve().then(i.bind(i,1984)),Promise.resolve().then(i.bind(i,3601)),Promise.resolve().then(i.bind(i,4592)),Promise.resolve().then(i.bind(i,350)),Promise.resolve().then(i.bind(i,8972)),Promise.resolve().then(i.bind(i,9216)),Promise.resolve().then(i.bind(i,7531)),Promise.resolve().then(i.bind(i,5241)),Promise.resolve().then(i.bind(i,6784)),Promise.resolve().then(i.bind(i,8318)),Promise.resolve().then(i.bind(i,3325)),Promise.resolve().then(i.t.bind(i,7477,23)),Promise.resolve().then(i.bind(i,2076)),Promise.resolve().then(i.bind(i,9820))},9820:function(e,t,i){"use strict";i.r(t);var s=i(9268),r=i(6006),A=i(6394),a=i.n(A),n=i(8709);t.default=e=>{let{srcForDarkMode:t,src:i,alt:A,...l}=e,[d,o]=(0,r.useState)(!1),{theme:c}=(0,n.F)();return((0,r.useEffect)(()=>{o(!0)},[]),d)?(0,s.jsx)(a(),{src:"dark"===c&&t||i,alt:A,...l}):null}},9809:function(e,t,i){"use strict";i.r(t);var s=i(9268),r=i(6112),A=i(5294);t.default=()=>(0,s.jsx)("div",{className:"flex gap-1",children:r.fK.map((e,t)=>(0,s.jsx)(A.Z,{onClick:()=>window.open(e.url,"_blank"),children:(0,s.jsx)(e.icon,{})},t))})},3325:function(e,t,i){"use strict";i.r(t);var s=i(9268),r=i(9426),A=i(629),a=i(9820);t.default=e=>{let{url:t,logo:i,darkModeLogo:n,label:l}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)(A.Z,{noCustomization:!0,href:t,externalLink:!0,children:(0,s.jsx)(a.default,{src:i,srcForDarkMode:n,alt:l,className:"transition-transform duration-300 md:hover:scale-110"})}),(0,s.jsx)(r.Z,{variant:"body1",children:l})]})}},5294:function(e,t,i){"use strict";var s=i(9268),r=i(6006),A=i(8917),a=i(7192);let n=(0,A.j)("flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700",{variants:{size:{md:"[&_svg]:w-6 [&_svg]:h-6",lg:"[&_svg]:w-8 [&_svg]:h-8"}},defaultVariants:{size:"md"}}),l=r.forwardRef((e,t)=>{let{className:i,size:r,asChild:A=!1,showTooltip:l=!1,tooltipText:d="",children:o,...c}=e;return(0,s.jsxs)("button",{className:(0,a.z)("relative",n({size:r}),i),ref:t,...c,children:[o,l&&d.length>0&&(0,s.jsx)("span",{className:"absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm",children:d})]})});l.displayName="IconButton",t.Z=l},9426:function(e,t,i){"use strict";var s=i(9268),r=i(6006),A=i(8917),a=i(7192);let n=(0,A.j)("text-gray-600 text-normal",{variants:{variant:{h1:"text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900",h2:"text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900",h3:"text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900",subtitle:"text-lg md:text-xl",body1:"text-base md:text-lg",body2:"text-base",body3:"text-sm"}},defaultVariants:{variant:"body2"}}),l={h1:"h1",h2:"h2",h3:"h3",subtitle:"p",body1:"p",body2:"p",body3:"p"},d=r.forwardRef((e,t)=>{let{component:i,className:r="",variant:A,children:d,...o}=e,c=i||(A?l[A]:"p");return(0,s.jsx)(c,{className:(0,a.z)(n({variant:A}),r),ref:t,...o,children:d})});d.displayName="Typography",t.Z=d},629:function(e,t,i){"use strict";var s=i(9268),r=i(6006),A=i(5846),a=i.n(A),n=i(7192);let l=r.forwardRef((e,t)=>{let{noCustomization:i,children:r=null,className:A="",externalLink:l=!1,withUnderline:d=!1,...o}=e;return(0,s.jsx)(a(),{...o,target:l?"_blank":"_self",ref:t,className:(0,n.z)(null!=i?i:"text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600",d?"underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600":"",A),children:r})});l.displayName="Link",t.Z=l},6370:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var s=i(9268),r=i(6006),A=i(9489),a=i(7228),n=i(2261),l=i(9809),d=i(7192),o=i(9426);let c=r.forwardRef((e,t)=>{let{label:i,className:r,...A}=e;return(0,s.jsx)("div",{className:(0,d.z)("flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1",r),...A,children:(0,s.jsx)(o.Z,{variant:"body3",className:"font-medium",children:i})})});c.displayName="Tag";var u=i(5294);let h=r.forwardRef((e,t)=>{let{className:i,children:r,...A}=e;return(0,s.jsx)("section",{className:(0,d.z)("w-full bg-gray py-16 md:py-20 2xl:py-24",i),ref:t,...A,children:(0,s.jsx)("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8",children:r})})});h.displayName="Container";var g=i(364);let f="reachsagarshah@gmail.com",m="+91 8980500565";var b=()=>{let{width:e}=(0,g.Z)(),[t,i]=(0,r.useState)(!1),[b,x]=(0,r.useState)(null),v=async(e,t)=>{try{await (0,d.T)(e),i(!0),x(t);let s=setTimeout(()=>{i(!1),x(null),clearTimeout(s)},1500)}catch(e){i(!1),x(null),alert("Unable to copy!")}};return(0,s.jsxs)(h,{id:"contact",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,s.jsx)("div",{className:"self-center",children:(0,s.jsx)(c,{label:"Get in touch"})}),(0,s.jsx)(o.Z,{variant:"subtitle",className:"max-w-xl text-center",children:"What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect."})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-6 md:gap-12",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center md:gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 md:gap-5",children:[(0,s.jsx)(A.Z,{className:"h-6 w-6 md:h-8 md:w-8"}),(0,s.jsx)(o.Z,{variant:"h2",children:f}),(0,s.jsx)(u.Z,{size:e&&e<768?"md":"lg",onClick:()=>v(f,"email"),showTooltip:t&&"email"===b,tooltipText:"Copied!",children:(0,s.jsx)(a.Z,{})})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 md:gap-5",children:[(0,s.jsx)(n.Z,{className:"h-6 w-6 md:h-8 md:w-8"}),(0,s.jsx)(o.Z,{variant:"h2",children:m}),(0,s.jsx)(u.Z,{size:e&&e<768?"md":"lg",onClick:()=>v(m.replace(" ",""),"phone"),showTooltip:t&&"phone"===b,tooltipText:"Copied!",children:(0,s.jsx)(a.Z,{})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,s.jsx)(o.Z,{className:"text-center",children:"You may also find me on these platforms!"}),(0,s.jsx)(l.default,{})]})]})]})}},364:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var s=i(6006);function r(){let[e,t]=(0,s.useState)({width:null,height:null});return(0,s.useLayoutEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e}},6112:function(e,t,i){"use strict";i.d(t,{fK:function(){return W},qy:function(){return Q}});var s=i(5057),r=i(6808),A=i(7698),a=i(1768),n=i(4534),l=i(1970),d=i(7335),o=i(805),c=i(4034),u=i(245),h=i(7537),g=i(8585),f=i(4233),m=i(5739),b=i(5704),x=i(2641),v=i(1984),w=i(2279),p=i(3601),E=i(350),y=i(4592),j=i(8972),B=i(7531),z=i(9216),C=i(5241),O=i(6784),H=i(8318),P=i(8269),N=i(6805),k=i(703),D=i(9239),R=i(4377),I=i(5185);let Q=[{label:"About",href:"#about"},{label:"Work",href:"#work"},{label:"Testimonials",href:"#testimonials"},{label:"Contact",href:"#contact"}],W=[{icon:s.Z,url:"https://github.com/shahsagarm"},{icon:r.Z,url:"https://twitter.com/shahsagarm"},{icon:A.Z,url:"https://www.figma.com/@shahsagarm"}];a.default,n.default,l.default,d.default,o.default,c.default,u.default,h.default,g.default,f.default,m.default,b.default,x.default,v.default,w.default,p.default,E.default,y.default,j.default,B.default,z.default,C.default,O.default,H.default,N.default,P.default,k.default,D.default,R.default,I.default},7192:function(e,t,i){"use strict";i.d(t,{T:function(){return a},z:function(){return A}});var s=i(9791),r=i(293);let A=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.m)((0,s.W)(t))},a=async e=>"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)},5185:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/avatar-dummy.33f6208e.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4377:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/avatar-eugen.4ec7a6eb.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEXm4t+5sa7Sz80hEBbk39zo5eEsDxZMaXHa2dMmCxM8JSqSh4dcNj5BHic2FRvOyMNpXFhTREGNhoLg2tc4Dxvr6OVqSEOwjX7JxsKGYFf69vMsCBI6ISGklJa2pabAkYS4D8yZAAAAE3RSTlPx/fgusbS1AC7z+i/66i8v/v760hyeNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwFwQcCgCAMBLADKS1uLdv1/1+agIWsJWEI6rErBK6frZjugGTapwog1Vw0Ae4Z7zy/hClcMcZlAw8+BL/yD3AwA06CIQjQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9239:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/avatar-krisztian.3ebeecc9.png",height:64,width:65,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUEBAQ5ODiuo6IAAAB6eHkDAQEBAQGKi40QEBJMaXECAgICAgIoJyYVFBSIiIyCgYOKjZF8h4cDAwOegn8AAAAEBASRkJG3l5NERURwa2uPfXijf3lfMuG9AAAAFnRSTlP+8/3u+jKy+ywAqOP7+7L6tjHu/rfoL2JA6gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwFwQcCgCAMALFjU8CtBfT//zRBcmzLHYT80C/OQIGvQ6SyvL3hqGZ6TcNRxubVzkg2mtT6gOQ1pf2QH2EEArboFLwGAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},350:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-cypress-light.ddf60c8f.svg",height:64,width:64,blurWidth:0,blurHeight:0}},3601:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-cypress.1be72365.svg",height:64,width:65,blurWidth:0,blurHeight:0}},245:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-express-light.ed7459e2.svg",height:64,width:64,blurWidth:0,blurHeight:0}},4034:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-express.01843890.svg",height:64,width:65,blurWidth:0,blurHeight:0}},2279:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-figma.c0585b33.svg",height:64,width:44,blurWidth:0,blurHeight:0}},8972:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-git.c1bc6586.svg",height:64,width:64,blurWidth:0,blurHeight:0}},1768:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-javascript.d0f232c4.svg",height:64,width:64,blurWidth:0,blurHeight:0}},5704:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-mongodb.eaffdb2f.svg",height:64,width:31,blurWidth:0,blurHeight:0}},7537:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-nest.74d4954e.svg",height:64,width:67,blurWidth:0,blurHeight:0}},7335:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-nextjs.61256990.svg",height:64,width:65,blurWidth:0,blurHeight:0}},805:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-nodejs.97fe27e9.svg",height:64,width:57,blurWidth:0,blurHeight:0}},5739:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-postgresql.8a99f167.svg",height:64,width:64,blurWidth:0,blurHeight:0}},1970:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-react.54523870.svg",height:64,width:71,blurWidth:0,blurHeight:0}},2641:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-sass.42fab48f.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4233:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-socket-light.ae3ef621.svg",height:64,width:64,blurWidth:0,blurHeight:0}},8585:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-socket.87ff7472.svg",height:64,width:65,blurWidth:0,blurHeight:0}},4592:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-storybook.29be951a.svg",height:64,width:65,blurWidth:0,blurHeight:0}},1984:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-tailwindcss.6535540a.svg",height:64,width:106,blurWidth:0,blurHeight:0}},4534:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/icon-typescript.ac4f8a37.svg",height:64,width:65,blurWidth:0,blurHeight:0}},8318:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo-dotnpixel-light.a588b848.svg",height:32,width:90,blurWidth:0,blurHeight:0}},6784:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo-dotnpixel.16f54b55.svg",height:32,width:91,blurWidth:0,blurHeight:0}},5241:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo-greenapex-light.01a2fc5f.svg",height:41,width:181,blurWidth:0,blurHeight:0}},9216:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo-greenapex.738b7c12.svg",height:32,width:142,blurWidth:0,blurHeight:0}},7531:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/logo-upwork.10b4ab7a.svg",height:28,width:102,blurWidth:0,blurHeight:0}},8269:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/project-fiskil.413c7b8c.png",height:727,width:969,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUzJU/59v748/v///9/do707vgeEDjv5/adlatENGogEjqKgpkkFUCCeZEx27IUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nA3EyQHAQAwCsQHsvfuvN9FDyJI9jXq2u02SSAnrVlXdxRkPzjgAe/9/ExYAxRHu1TYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},703:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/project-pepehousing.3b93c1f9.png",height:1040,width:1387,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAOVBMVEX///9+m7Ckopzy8/PZ2NTIwbf6+vr4+Pfo6Obv7u6wqJu7zdCgqbjj6+zKycOOprWEgXp3dXLQ1NjK7B9eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nD3BxwEAIAgEsKMJ2HX/Yf2ZoBR3z0hI5EitEy7RrG5DqBrzYXyNFlHv9wEjSgE247kcZwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},6805:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/project-wingie.0b6bdb40.png",height:1141,width:1711,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAUVBMVEX///9qk59ya0LQybve7ubJ2OCotbiLmJ7CycmCfWymqq6WoKmvpJKOkpC1u8C1r56Oo7EfZ5FMeoyIflHW3NqnqqOmootIaHR0fG9xg46Ps8bV5qO5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBhwGAIBAAsUPKA4p0LPsPSkL9jS2rHyiLcfMN4EWcH0AOT/sioK8k580GJRQBjm7BNv8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},2076:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/sagar-full-pose.f7c1af42.jpg",height:2318,width:1833,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAIDAAAAAAAAAAAAAAACAAEDBBExBiFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIT/9oADAMBAAIRAxEAPwCNb4xYKMQhujMQvknMWHPm8t1pERMYZHR//9k=",blurWidth:6,blurHeight:8}},1716:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/sagar-headshot.05353563.jpg",height:1067,width:1067,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAfEAABBAEFAQAAAAAAAAAAAAABAAIDBBEFBhIhMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAIDAQAAAAAAAAAAAAAAAAACAQMRMf/aAAwDAQACEQMRAD8AlmE6BuFtu/ftiCUvY/keULDgFrAB5gd5+9+oiKta6uyDdP/Z",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[274,733,253,769,744],function(){return e(e.s=3905)}),_N_E=e.O()}]);