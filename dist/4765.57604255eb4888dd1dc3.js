"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[4765],{43434:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(87357),r=n(18276),l=n(68584);const i=(0,o.ph)((({title:e="Change your profile picture",disabled:t,isForForum:n,currentAvatarBlobUrl:i,onChange:s})=>{const[c,d]=(0,o.J0)(),[u,m]=(0,o.J0)(i);(0,o.vJ)((()=>{m(i)}),[i]);const A=(0,o.hb)((e=>{d(void 0),s(e),u&&u!==i&&URL.revokeObjectURL(u),m(URL.createObjectURL(e))}),[u,i,s]),h=(0,o.hb)((()=>{d(void 0)}),[]),v=(0,a.A)(u&&"filled",t&&"disabled",n&&"rounded-square");return o.Ay.createElement("div",{className:"AvatarEditable"},o.Ay.createElement("label",{className:v,role:"button",tabIndex:0,title:e},o.Ay.createElement("input",{type:"file",onChange:function(e){const t=e.target;t?.files?.[0]&&(d(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),o.Ay.createElement(r.A,{name:"camera-add"}),u&&o.Ay.createElement("img",{src:u,draggable:!1,alt:"Avatar"})),o.Ay.createElement(l.A,{file:c,onClose:h,onChange:A}))}))},24713:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(87357),r=n(68292),l=n(26607);const i=(0,o.ph)((({text:e,className:t,isAlternateColor:n})=>o.Ay.createElement(l.A,{className:(0,a.A)("Y3ZoW17O",n?"Lq67O2D2":"DWjOG2Ze",t),isOpen:Boolean(e)},e&&o.Ay.createElement(r.A,{text:e}))))},77561:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(17712),r=n(19806);const l=(0,o.ph)((({id:e,options:t,selected:n=[],disabled:l,nestedCheckbox:i,loadingOptions:s,isRound:c,onChange:d})=>{const[u,m]=(0,o.J0)(n||[]),A=(0,a.A)(((e,t)=>{const{value:n,checked:o}=e.currentTarget;let a;o?(a=[...u,n],t&&n&&a.push(t.value),t&&n===t.value&&t.nestedOptions?.forEach((e=>{a.includes(e.value)||a.push(e.value)}))):(a=u.filter((e=>e!==n)),t&&n===t.value?t.nestedOptions?.forEach((e=>{a=a.filter((t=>t!==e.value))})):t&&((t.nestedOptions?.map((e=>e.value))||[]).some((e=>a.includes(e)))||(a=a.filter((e=>e!==t.value))))),m(a),d(a)})),h=(0,a.A)((e=>{const t=e?.filter((e=>u.includes(e.value))).length;return t>0?t:void 0}));return o.Ay.createElement("div",{id:e,className:"radio-group"},t.map((e=>o.Ay.createElement(r.A,{label:e.label,subLabel:e.subLabel,value:e.value,checked:-1!==n.indexOf(e.value),disabled:e.disabled||l,isLoading:s?-1!==s.indexOf(e.value):void 0,onChange:A,nestedCheckbox:i,nestedCheckboxCount:h(e.nestedOptions??[]),nestedOptionList:e,values:u,isRound:c}))))}))},94189:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(84051),a=n(87357),r=n(10328),l=n(59030),i=n(64493),s=n(8410);const c=(0,o.ph)((({isOpen:e,title:t,header:n,text:c,textParts:d,confirmLabel:u="Confirm",confirmIsDestructive:m,isConfirmDisabled:A,isOnlyConfirm:h,areButtonsInColumn:v,className:y,children:g,confirmHandler:p,onClose:f,onCloseAnimationEnd:b})=>{const E=(0,l.A)(),C=(0,o.li)(null),N=(0,o.hb)((e=>{-1===e&&p()}),[p]),w=(0,r.A)(C,e,N,".Button");return o.Ay.createElement(s.A,{className:(0,a.A)("confirm",y),title:t||E("Telegram"),header:n,isOpen:e,onClose:f,onCloseAnimationEnd:b},c&&c.split("\\n").map((e=>o.Ay.createElement("p",null,e))),d||g,o.Ay.createElement("div",{className:v?"dialog-buttons-column":"dialog-buttons mt-2",ref:C,onKeyDown:w},o.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:p,color:m?"danger":"primary",disabled:A},u),!h&&o.Ay.createElement(i.A,{className:"confirm-dialog-button",isText:!0,onClick:f},E("Cancel"))))}))},68584:(e,t,n)=>{n.d(t,{A:()=>v});var o=n(84051),a=n(31481),r=n(87679),l=n(59030),i=n(18276),s=n(64493),c=n(52745),d=n(8410);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,A,h;const v=(0,o.ph)((({file:e,onChange:t,onClose:v})=>{const[y,g]=(0,o.J0)(!1);(0,o.vJ)((()=>{e&&(y?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:o}=t;h=new m(t,{enableZoom:!0,boundary:{width:n,height:o},viewport:{width:n-16,height:o-16,type:"circle"}});const a=await(0,r.zE)(e);await h.bind({url:a})}catch(e){a.Oig&&console.error(e)}}(e):async function(){return A||(A=Promise.all([n.e(4903),n.e(7643)]).then(n.bind(n,27643)),m=(await A).default),A}().then((()=>g(!0))))}),[e,y]);const p=(0,l.A)(),f=(0,o.hb)((async()=>{if(!h)return;const e=await h.result(u),n="string"==typeof e?e:(0,r.ti)(e,"avatar.jpg");t(n)}),[t]);return o.Ay.createElement(d.A,{isOpen:Boolean(e),onClose:v,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},y?o.Ay.createElement("div",{id:"avatar-crop"}):o.Ay.createElement(c.A,null),o.Ay.createElement(s.A,{className:"confirm-button",round:!0,color:"primary",onClick:f,ariaLabel:p("CropImage")},o.Ay.createElement(i.A,{name:"check"})))}))},80401:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(84051),a=n(87357),r=n(95807),l=n(59030),i=n(18276);const s={x:0,y:0},c=(0,o.ph)((({children:e,id:t,onDrag:n,onDragEnd:c,style:u,knobStyle:m,isDisabled:A})=>{const h=(0,l.A)(),v=(0,o.li)(null),[y,g]=(0,o.J0)({isDragging:!1,origin:s,translation:s}),p=e=>{e.stopPropagation(),e.preventDefault();const{x:t,y:n}=d(e);g({...y,isDragging:!0,origin:{x:t,y:n},width:v.current?.offsetWidth,height:v.current?.offsetHeight})},f=(0,o.hb)((e=>{const{x:o,y:a}=d(e),r={x:o-y.origin.x,y:a-y.origin.y};g((e=>({...e,translation:r}))),n(r,t)}),[t,n,y.origin.x,y.origin.y]),b=(0,o.hb)((()=>{g((e=>({...e,isDragging:!1,width:void 0,height:void 0}))),c()}),[c]);(0,o.vJ)((()=>{y.isDragging&&A&&g((e=>({...e,isDragging:!1,width:void 0,height:void 0})))}),[A,y.isDragging]),(0,o.vJ)((()=>(y.isDragging?(window.addEventListener("touchmove",f),window.addEventListener("mousemove",f),window.addEventListener("touchend",b),window.addEventListener("touchcancel",b),window.addEventListener("mouseup",b)):(window.removeEventListener("touchmove",f),window.removeEventListener("mousemove",f),window.removeEventListener("touchend",b),window.removeEventListener("touchcancel",b),window.removeEventListener("mouseup",b),g((e=>({...e,translation:s})))),()=>{y.isDragging&&(window.removeEventListener("touchmove",f),window.removeEventListener("mousemove",f),window.removeEventListener("touchend",b),window.removeEventListener("touchcancel",b),window.removeEventListener("mouseup",b))})),[f,b,y.isDragging]);const E=(0,a.A)("kWQHzIMD",y.isDragging&&"k0c5WDAy"),C=(0,o.Kr)((()=>(0,r.A)(y.isDragging&&`transform: translate(${y.translation.x}px, ${y.translation.y}px)`,y.width?`width: ${y.width}px`:void 0,y.height?`height: ${y.height}px`:void 0,u)),[u,y.height,y.isDragging,y.translation.x,y.translation.y,y.width]);return o.Ay.createElement("div",{style:C,className:E,ref:v},e,!A&&o.Ay.createElement("div",{"aria-label":h("i18n_dragToSort"),tabIndex:0,role:"button",className:(0,a.A)("UpzQzcvs","div-button","draggable-knob"),onMouseDown:p,onTouchStart:p,style:m},o.Ay.createElement(i.A,{name:"sort"})))}));function d(e){let t,n;return"touches"in e?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),{x:t,y:n}}},12933:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(87357),r=n(59030),l=n(64493);const i=({isShown:e,className:t,color:n="primary",ariaLabel:i,disabled:s,onClick:c,children:d})=>{const u=(0,r.A)(),m=(0,a.A)("FloatingActionButton",e&&"revealed",t);return o.Ay.createElement(l.A,{className:m,color:n,round:!0,disabled:s,onClick:e&&!s?c:void 0,ariaLabel:i,tabIndex:-1,isRtl:u.isRtl},d)}},46222:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(84051),a=n(89925),r=n(66644),l=n(95807),i=n(9718),s=n(37836),c=n(82393),d=n(17712);const u=({ref:e,style:t,className:n,items:u,itemSelector:m=".ListItem",preloadBackwards:A=20,sensitiveArea:h=800,withAbsolutePositioning:v,maxHeight:y,noScrollRestore:g=!1,noScrollRestoreOnTop:p=!1,noFastList:f,cacheBuster:b,beforeChildren:E,children:C,scrollContainerClosest:N,onLoadMore:w,onScroll:k,onWheel:x,onClick:L,onKeyDown:T,onDragOver:S,onDragLeave:R})=>{let D=(0,o.li)(null);e&&(D=e);const I=(0,o.li)({}),[M,B]=(0,o.Kr)((()=>w?[(0,s.sg)(((e=!1)=>{w({direction:a.TN.Backwards,noScroll:e})}),1e3,!0,!1),(0,s.sg)((()=>{w({direction:a.TN.Forwards})}),1e3,!0,!1)]:[]),[w,u]);(0,o.vJ)((()=>{const e=N?D.current.closest(N):D.current;if(!M||!e)return;if(A>0&&(!u||u.length<A))return void M(!0);const{scrollHeight:t,clientHeight:n}=e;n&&t<n&&M()}),[u,M,A,N]),(0,o.Nf)((()=>{const e=N?D.current.closest(N):D.current,t=D.current;(0,r.gm)((()=>{const n=I.current;let o;if(n.listItemElements=t.querySelectorAll(m),n.currentAnchor&&Array.from(n.listItemElements).includes(n.currentAnchor)){const{scrollTop:t}=e,a=n.currentAnchor.getBoundingClientRect().top;o=t+(a-n.currentAnchorTop)}else{const e=n.listItemElements[0];e&&(n.currentAnchor=e,n.currentAnchorTop=e.getBoundingClientRect().top)}if(v||g)return;const{scrollTop:a}=e;return p&&0===a?void 0:()=>{(0,i.A)(e,o),n.isScrollTopJustUpdated=!0}}))}),[u,m,g,p,b,v,N]);const O=(0,d.A)((e=>{if(B&&M){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=I.current,o=I.current.listItemElements;if(e)return void(I.current.isScrollTopJustUpdated=!1);const a=o.length,r=N?D.current.closest(N):D.current,{scrollTop:l,scrollHeight:i,offsetHeight:s}=r,c=l<=(a?o[0].offsetTop:0)+h,d=(a?o[a-1].offsetTop+o[a-1].offsetHeight:i)-(l+s)<=h;let u=!1;if(c){const e=o[0];if(e){const o=e.getBoundingClientRect().top,a=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&a>n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=o,u=!0,B())}}if(d){const e=o[a-1];if(e){const o=e.getBoundingClientRect().top,a=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&a<n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=o,u=!0,M())}}if(!u)if(t?.offsetParent)I.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=o[0];e&&(I.current.currentAnchor=e,I.current.currentAnchorTop=e.getBoundingClientRect().top)}}k&&k(e)}));return(0,o.Nf)((()=>{const e=N?D.current.closest(N):D.current;if(!e)return;const t=e=>O(e);return e.addEventListener("scroll",t),()=>{e.removeEventListener("scroll",t)}}),[O,N]),o.Ay.createElement("div",{ref:D,className:n,onWheel:x,teactFastList:!f&&!v,onKeyDown:T,onDragOver:S,onDragLeave:R,onClick:L,style:t},E,v&&u?.length?o.Ay.createElement("div",{teactFastList:!f,style:(0,l.A)("position: relative",c.Ni&&`height: ${y}px`)},C):C)}},22720:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(84051),a=n(66644),r=n(87357),l=n(82393),i=n(4961),s=n(10722),c=n(11217),d=n(37661),u=n(17712),m=n(59030),A=n(18276),h=n(64493),v=n(71429),y=n(24433),g=n(60859),p=n(42452);const f=({ref:e,buttonRef:t,icon:n,iconClassName:f,leftElement:b,buttonClassName:E,menuBubbleClassName:C,secondaryIcon:N,secondaryIconClassName:w,rightElement:k,className:x,style:L,children:T,disabled:S,allowDisabledClick:R,ripple:D,narrow:I,inactive:M,focus:B,destructive:O,multiline:K,isStatic:F,allowSelection:J,withColorTransition:P,contextActions:z,withPortalForMenu:_,href:q,onMouseDown:H,onClick:$,onContextMenu:j,clickArg:W,onSecondaryIconClick:U,onDragEnter:Q,nonInteractive:Y})=>{let V=(0,o.li)(null);e&&(V=e);const[X,Z,G]=(0,d.A)(),{isContextMenuOpen:ee,contextMenuAnchor:te,handleBeforeContextMenu:ne,handleContextMenu:oe,handleContextMenuClose:ae,handleContextMenuHide:re}=(0,s.A)(V,!z),le=(0,u.A)((()=>V.current)),ie=(0,u.A)((()=>V.current.closest(".custom-scroll"))),se=(0,u.A)((()=>(_?document.querySelector("#portals"):V.current).querySelector(".ListItem-context-menu .bubble"))),ce=(0,u.A)((()=>({withPortal:_}))),de=(0,u.A)((e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.button!==l.w3.Main||e.preventDefault()})),ue=(0,u.A)((e=>{if((!S||R)&&$){if(q){if((e.ctrlKey||e.metaKey||e.shiftKey)&&e.button===l.w3.Main||e.button===l.w3.Auxiliary)return;e.preventDefault()}$(e,W),l.TF&&!D&&(Z(),(0,a.YS)(G))}})),{handleClick:me,handleMouseDown:Ae}=(0,c.Q)((e=>{S&&!R||0!==e.button||!U&&!z||(e.stopPropagation(),U?U(e):oe(e))})),he=(0,u.A)((e=>{M||l.TF||(!z||e.button!==l.w3.Secondary&&$||ne(e),e.button===l.w3.Main&&($?ue(e):oe(e)))})),ve=(0,m.A)(),ye=(0,r.A)("ListItem",x,J&&"allow-selection",D&&"has-ripple",I&&"narrow",S&&"disabled",R&&"click-allowed",M&&"inactive",te&&"has-menu-open",B&&"focus",O&&"destructive",K&&"multiline",F&&"is-static",P&&"with-color-transition"),ge=q?"a":"div";return o.Ay.createElement("div",{ref:V,className:ye,dir:ve.isRtl?"rtl":void 0,style:L,onMouseDown:H,onDragEnter:Q},o.Ay.createElement(ge,{className:(0,r.A)("ListItem-button",X&&"active",E),role:F?void 0:"button",href:q,ref:t,tabIndex:F?void 0:0,onClick:!M&&l.TF?ue:de,onMouseDown:he,onContextMenu:j||(!M&&z?oe:void 0)},!S&&!M&&D&&o.Ay.createElement(p.A,null),b,n&&o.Ay.createElement(A.A,{name:n,className:(0,r.A)("ListItem-main-icon",f)}),K&&o.Ay.createElement("div",{className:"multiline-item"},T),!K&&T,N&&o.Ay.createElement(h.A,{nonInteractive:Y,className:(0,r.A)("secondary-icon",w),round:!0,color:"translucent",size:"smaller",onClick:me,onMouseDown:Ae},o.Ay.createElement(A.A,{name:N})),k),z&&void 0!==te&&o.Ay.createElement(v.A,{isOpen:ee,anchor:te,getTriggerElement:le,getRootElement:ie,getMenuElement:se,getLayout:ce,className:"ListItem-context-menu with-menu-transitions",autoClose:!0,onClose:ae,onCloseAnimationEnd:re,withPortal:_,bubbleClassName:C},z.map((e=>"isSeparator"in e?o.Ay.createElement(g.A,{key:e.key||"separator"}):o.Ay.createElement(y.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},o.Ay.createElement("span",{className:"list-item-ellipsis"},(0,i.A)(e.title)))))))}},60859:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357);const r={root:"h039vb1K",thin:"NGKaFgra",thick:"_BdnjPEa"},l=({className:e,size:t="thin"})=>o.Ay.createElement("div",{className:(0,a.A)(r.root,r[t],e)})},331:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(43527);function r(e){const t=[];return function e(n){n.nodeType===Node.TEXT_NODE?t.push(n):n.childNodes.forEach(e)}(e),t}const l=(e,t)=>{const n=r(e);let o=0,a=null,l=0;for(const e of n){const n=e.textContent?.length||0;if(o+n>=t){a=e,l=t-o;break}o+=n}if(a){const e=document.createRange();e.setStart(a,l),e.collapse(!0);const t=window.getSelection();t?.removeAllRanges(),t?.addRange(e)}},i=(0,o.ph)((({ref:e,id:t,html:n,placeholder:i,isActive:s=!0,className:c,tabIndex:d=0,contentEditable:u=!0,onUpdate:m,onClick:A,onKeyDown:h,onMouseDown:v,onContextMenu:y,onTouchCancel:g,onFocus:p,onBlur:f})=>{const[b,E]=(0,o.J0)({history:[{content:n,position:{offset:n.length,selection:0,content:n,lineNumber:n.split("\n").length-1},timestamp:Date.now()}],currentIndex:0,lastPosition:null,isComposing:!1}),C=(0,o.li)(Date.now()),N=(0,o.li)(!1),w=(0,o.hb)((e=>{const t=window.getSelection();if(!t||0===t.rangeCount)return{offset:0,selection:0,content:e.textContent||"",lineNumber:0};const n=t.getRangeAt(0),o=document.createRange();o.selectNodeContents(e),o.setEnd(n.startContainer,n.startOffset);const a=o.toString(),r=a.split("\n");return{offset:a.length,selection:n.collapsed?0:n.toString().length,content:e.innerHTML,lineNumber:r.length-1}}),[]),k=(0,o.hb)((e=>{!function(e){const t=e.querySelector("#caret-marker"),n=window.getSelection();if(n){n.removeAllRanges();let o=document.createRange();if(t){let e=t.parentNode;if(t.previousSibling&&t.previousSibling.nodeType===Node.ELEMENT_NODE){const n=document.createTextNode(" ");e.insertBefore(n,t),o.setStartAfter(n)}else o.setStartAfter(t);o.collapse(!0),e.removeChild(t),n.addRange(o)}else o=function(e){const t=document.createRange(),n=r(e);if(n.length){const e=n[n.length-1],o=e.textContent?e.textContent.length:0;t.setStart(e,o)}else t.selectNodeContents(e),t.collapse(!1);return t}(e),n.addRange(o)}}(e)}),[]),x=(0,o.hb)((e=>{if(b.isComposing||N.current)return;const t=e.currentTarget;if(t.innerText.length<=1)return void m(t.innerHTML);!function(e){const t=window.getSelection();if(!t||0===t.rangeCount)return null;const n=t.getRangeAt(0),o=document.createElement("span");o.id="caret-marker",o.style.opacity="0",o.style.position="absolute",o.style.pointerEvents="none",n.collapse(!0),n.insertNode(o)}();const n=t.innerHTML,o=Date.now(),r=w(t);N.current=!0,m((0,a.Dd)(n));const l=o-C.current;E((e=>{const t=l>=500?[...e.history.slice(0,e.currentIndex+1),{content:n,position:r,timestamp:o}].slice(-100):e.history;return{...e,history:t,currentIndex:l>=500?t.length-1:e.currentIndex,lastPosition:r}})),l>=500&&(C.current=o),requestAnimationFrame((()=>{t&&k(t),N.current=!1}))}),[b.isComposing,w,m,k]),L=(0,o.hb)((t=>{if("z"===t.key&&(t.ctrlKey||t.metaKey))if(t.preventDefault(),t.shiftKey){if(b.currentIndex<b.history.length-1){const t=b.currentIndex+1,n=b.history[t];e?.current&&(e.current.innerHTML=n.content,l(e.current,n.position.offset),m(n.content)),E((e=>({...e,currentIndex:t,lastPosition:n.position})))}}else if(b.currentIndex>0){const t=b.currentIndex-1,n=b.history[t];e?.current&&(e.current.innerHTML=n.content,l(e.current,n.position.offset),m(n.content)),E((e=>({...e,currentIndex:t,lastPosition:n.position})))}h?.(t)}),[b,e,m,h]),T=(0,o.hb)((()=>{E((e=>({...e,isComposing:!0})))}),[]),S=(0,o.hb)((()=>{E((e=>({...e,isComposing:!1})))}),[]);return o.Ay.createElement("div",{ref:e,id:t,className:c,contentEditable:u,role:"textbox",dir:"auto",tabIndex:d,"aria-label":i,onClick:A,onKeyDown:L,onMouseDown:v,onContextMenu:y,onTouchCancel:g,onFocus:p,onBlur:f,onInput:x,onCompositionStart:T,onCompositionEnd:S})}))},8410:(e,t,n)=>{n.d(t,{A:()=>p,U:()=>g});var o=n(84051),a=n(87357),r=n(52674),l=n(14680),i=n(91034),s=n(29441),c=n(26072),d=n(17712),u=n(37859),m=n(59030),A=n(21511),h=n(18276),v=n(64493),y=n(3325);const g=200,p=(0,i.A)((({dialogRef:e,title:t,className:n,contentClassName:i,headerClassName:p,isOpen:f,isSlim:b,header:E,hasCloseButton:C,hasAbsoluteCloseButton:N,absoluteCloseButtonColor:w="translucent",noBackdrop:k,noBackdropClose:x,children:L,style:T,dialogStyle:S,isLowStackPriority:R,dialogContent:D,onClose:I,onCloseAnimationEnd:M,onEnter:B})=>{const{ref:O,shouldRender:K}=(0,A.A)({isOpen:f,onCloseAnimationEnd:M,withShouldRender:!0}),F=C||N;(0,o.vJ)((()=>{if(f)return(0,l.FD)(),l.wb}),[f]);const J=(0,d.A)((e=>!!B&&(e.preventDefault(),B(),!0)));(0,o.vJ)((()=>f?(0,r.A)({onEsc:I,onEnter:J}):void 0),[f,I,J]),(0,o.vJ)((()=>f&&O.current?(0,s.A)(O.current):void 0),[f,O]),(0,c.A)({isActive:f,onBack:I}),(0,u.A)((([e])=>(document.body.classList.toggle("has-open-dialog",Boolean(f)),(f||!f&&void 0!==e)&&(0,o.VK)(g),()=>{document.body.classList.remove("has-open-dialog")})),[f]);const P=(0,m.A)();if(!K)return;const z=(0,a.A)("Modal",n,k&&"transparent-backdrop",b&&"slim",R&&"low-priority");return o.Ay.createElement(y.A,null,o.Ay.createElement("div",{ref:O,className:z,tabIndex:-1,role:"dialog"},o.Ay.createElement("div",{className:"modal-container"},o.Ay.createElement("div",{className:"modal-backdrop",onClick:x?void 0:I}),o.Ay.createElement("div",{className:"modal-dialog",ref:e,style:S},function(){if(E)return E;if(!t&&!F)return;const e=o.Ay.createElement(v.A,{className:(0,a.A)(N&&"modal-absolute-close-button"),round:!0,color:w,size:"smaller",ariaLabel:P("Close"),onClick:I},o.Ay.createElement(h.A,{name:"close"}));return N?e:o.Ay.createElement("div",{className:(0,a.A)("modal-header",p)},F&&e,o.Ay.createElement("div",{className:"modal-title"},t))}(),D,o.Ay.createElement("div",{className:(0,a.A)("modal-content custom-scroll",i),style:T},L)))))}))},17208:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(84051),a=n(13439),r=n(83649),l=n(31481),i=n(87357),s=n(11778),c=n(76023),d=n(4961),u=n(39351),m=n(17712),A=n(50680),h=n(87412),v=n(18276),y=n(64493),g=n(3325),p=n(17663),f=n(32625),b=n(59030),E=n(68292);const C={root:"eldglPwL",svg:"xhUfxjkV",circle:"hsaty2zA"},N=(0,o.ph)((({duration:e,className:t,onEnd:n})=>{const[a,r]=(0,o.J0)(e),l=(0,b.A)();return(0,f.A)((()=>r((e=>e-1))),a>0?1e3:void 0),(0,o.vJ)((()=>{a<=0&&n?.()}),[a,n]),(0,o.vJ)((()=>{r(e)}),[e]),o.Ay.createElement("div",{className:(0,i.A)(C.root,t)},o.Ay.createElement("svg",{className:C.svg,width:"32px",height:"32px"},o.Ay.createElement("circle",{cx:"16",cy:"16",r:14,transform:"rotate(-90, 16, 16)",pathLength:"100","stroke-dasharray":"100","stroke-dashoffset":100-(a-1)/e*100,className:C.circle})),o.Ay.createElement(E.A,{className:C.text,text:(0,p.dq)(l,1e3*a)}))})),w=3e3,k=1.75*c.$,x=({notification:e})=>{const t=(0,a.ko)(),n=(0,u.A)(),{localId:c,message:p,action:f,actionText:b,cacheBreaker:E,className:C,disableClickDismiss:x,dismissAction:L,duration:T=w,icon:S,customEmojiIconId:R,shouldShowTimer:D,title:I,containerSelector:M}=e,[B,O]=(0,o.J0)(!0),K=(0,o.li)(null),{transitionClassNames:F}=(0,A.A)(B),J=(0,m.A)((()=>{t.dismissNotification({localId:c})})),P=(0,m.A)((e=>{!e&&x||(O(!1),setTimeout(J,150+l.xB5),L&&t[L.action](L.payload))})),z=(0,m.A)((()=>{f&&(Array.isArray(f)?f.forEach((e=>t[e.action](e.payload))):t[f.action](f.payload)),P()}));(0,o.vJ)((()=>B?(0,s.A)(P):void 0),[B,P]),(0,o.vJ)((()=>(K.current=window.setTimeout((()=>P(!0)),T),()=>{K.current&&(clearTimeout(K.current),K.current=void 0)})),[T,E]);const _=(0,m.A)((()=>{x||K.current&&(clearTimeout(K.current),K.current=void 0)})),q=(0,m.A)((()=>{x||(K.current&&clearTimeout(K.current),K.current=window.setTimeout(P,T))})),H=(0,o.Kr)((()=>{if(I)return(0,r.Yw)(I)?n.with(I):(0,d.A)(I,["simple_markdown","emoji","br","links"])}),[n,I]),$=(0,o.Kr)((()=>(0,r.Yw)(p)?n.with(p):"string"==typeof p?(0,d.A)(p,["simple_markdown","emoji","br","links"]):p),[n,p]),j=(0,o.Kr)((()=>{if(b)return(0,r.Yw)(b)?n.with(b):b}),[n,b]);return o.Ay.createElement(g.A,{className:"Notification-container",containerSelector:M},o.Ay.createElement("div",{className:(0,i.A)("Notification",F,C),onClick:z,onMouseEnter:_,onMouseLeave:q},R?o.Ay.createElement(h.A,{className:"notification-emoji-icon",forceAlways:!0,size:k,documentId:R}):o.Ay.createElement(v.A,{name:S||"info-filled",className:"notification-icon"}),o.Ay.createElement("div",{className:"content"},H&&o.Ay.createElement("div",{className:"notification-title"},H),$),f&&j&&o.Ay.createElement(y.A,{color:"translucent-white",onClick:z,className:"notification-button"},j),D&&o.Ay.createElement(N,{className:"notification-timer",key:E,duration:Math.ceil(T/1e3)})))}},35913:(e,t,n)=>{n.d(t,{A:()=>A});var o=n(84051),a=n(66644),r=n(19822),l=n(87357),i=n(86974),s=n(41257),c=n(38691),d=n(18276);const u={s:42,m:48,l:54,xl:52},m=.05,A=(0,o.ph)((({progress:e=0,size:t="l",square:n,transparent:A,noCross:h,rotationOffset:v,withColor:y,onClick:g})=>{const p=(0,o.li)(null),f=u[t],b=(0,s.i)(e),E=(0,c.A)(),C=(0,i.A)(p,!y);(0,o.vJ)((()=>{let e,n,o=!0,l=m;(0,r.i0)((()=>{if(!p.current)return!1;b.current!==n&&(l=Math.min(Math.max(m,n||0),1),e=Date.now(),n=b.current);const a=Math.min(Math.max(m,b.current),1),i=Math.min(1,(Date.now()-e)/600),s=r.qM.easeOutQuad(i),c=l+(a-l)*s;return function(e,t,n,o,a,r,l=!1,i){const s=t/2,c=(t-n)/2-2*r,d=i??Date.now()%2e3/2e3,u=2*Math.PI*d,m=u+2*Math.PI*a,A=e.getContext("2d");l&&(e.width=t,e.height=t,A.lineCap="round",A.strokeStyle=o,A.lineWidth=n),A.clearRect(0,0,t,t),A.beginPath(),A.arc(s,s,c,u,m),A.stroke()}(p.current,f*E,("xl"===t?3:2)*E,C??"white",c,E,o,v),o=!1,c<1}),a.RK)}),[b,t,f,E,v,C]);const N=(0,l.A)(`ProgressSpinner size-${t}`,A&&"transparent",n&&"square",h&&"no-cross");return o.Ay.createElement("div",{className:N,onClick:g},!h&&o.Ay.createElement(d.A,{name:"close"}),o.Ay.createElement("canvas",{ref:p,className:"ProgressSpinner_canvas",style:`width: ${f}; height: ${f}px;`}))}))},24956:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(87357),r=n(59030),l=n(57474);const i=(0,o.ph)((({id:e,label:t,subLabel:n,subLabelClassName:i,value:s,name:c,checked:d,disabled:u,hidden:m,isLoading:A,className:h,onlyInput:v,withIcon:y,isLink:g,onChange:p,onSubLabelClick:f})=>{const b=(0,r.A)(),E=(0,a.A)("Radio",h,u&&"disabled",m&&"hidden-widget",y&&"with-icon",A&&"loading",v&&"onlyInput",Boolean(n)&&"withSubLabel");return o.Ay.createElement("label",{className:E,dir:b.isRtl?"rtl":void 0},o.Ay.createElement("input",{type:"radio",name:c,value:s,id:e,checked:d,onChange:p,disabled:u||m}),o.Ay.createElement("div",{className:"Radio-main"},o.Ay.createElement("span",{className:"label",dir:b.isRtl?"auto":void 0},t),n&&o.Ay.createElement("span",{className:(0,a.A)(i,"subLabel",g?"subLabelLink":void 0),dir:b.isRtl?"auto":void 0,onClick:g?f:void 0},n)),A&&o.Ay.createElement(l.A,null))}))},1087:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(17712),r=n(24956);const l=(0,o.ph)((({id:e,name:t,options:n,selected:l,disabled:i,loadingOption:s,onChange:c,onClickAction:d,subLabelClassName:u,isLink:m,withIcon:A,subLabel:h})=>{const v=(0,o.hb)((e=>{const{value:t}=e.currentTarget;c(t,e)}),[c]),y=(0,a.A)((e=>()=>{d?.(e)}));return o.Ay.createElement("div",{id:e,className:"radio-group"},n.map((e=>o.Ay.createElement(r.A,{name:t,label:e.label,subLabel:h||e.subLabel,subLabelClassName:u,value:e.value,checked:e.value===l,hidden:e.hidden,disabled:i,withIcon:A,isLoading:s?s===e.value:void 0,className:e.className,onChange:v,onSubLabelClick:y(e.value),isLink:m}))))}))},82497:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357),r=n(59030);const l=(0,o.ph)((({options:e,min:t=0,max:n=(e?e.length-1:100),step:l=1,label:i,value:s,disabled:c,bold:d,className:u,renderValue:m,onChange:A,isCenteredLayout:h})=>{const v=(0,r.A)(),y=(0,o.hb)((e=>{A(Number(e.currentTarget.value))}),[A]),g=(0,a.A)(u,"RangeSlider",c&&"disabled",d&&"bold"),p=(0,o.Kr)((()=>e?s/(e.length-1)*100:(s-t)/((n-t)/l)*100),[e,s,n,t,l]);return o.Ay.createElement("div",{className:g},h?o.Ay.createElement("div",{className:"slider-top-row",dir:v.isRtl?"rtl":void 0},!e&&o.Ay.createElement(o.Ay.Fragment,null,o.Ay.createElement("span",{className:"value-min",dir:"auto"},t),o.Ay.createElement("span",{className:"label",dir:"auto"},m?m(s):s),o.Ay.createElement("span",{className:"value-max",dir:"auto"},n))):i?o.Ay.createElement("div",{className:"slider-top-row",dir:v.isRtl?"rtl":void 0},o.Ay.createElement("span",{className:"label",dir:"auto"},i),!e&&o.Ay.createElement("span",{className:"value",dir:"auto"},m?m(s):s)):void 0,o.Ay.createElement("div",{className:"slider-main"},o.Ay.createElement("div",{className:"slider-fill-track",style:`width: ${p}%`}),o.Ay.createElement("input",{min:t,max:n,value:s,step:l,type:"range",className:"RangeSlider__input",onChange:y}),e&&o.Ay.createElement("div",{className:"slider-options"},e.map(((e,t)=>o.Ay.createElement("div",{className:(0,a.A)("slider-option",t===s&&"active"),onClick:()=>A(t)},e))))))}))},11124:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(84051),a=n(87357);const r=(0,o.ph)((({marks:e,onChange:t,rangeCount:n})=>{const r=(0,o.li)(null),l=(0,o.Kr)((()=>(e.indexOf(n)/(e.length-1)*100).toFixed(2)),[e,n]),i=(0,o.Kr)((()=>e.indexOf(n)),[e,n]),s=(0,o.Kr)((()=>e.indexOf(n).toString()),[e,n]);return(0,o.Nf)((()=>{r.current.style.setProperty("--fill-percentage",`${l}%`)}),[l]),o.Ay.createElement("div",{className:"s8NMMSES"},o.Ay.createElement("form",null,o.Ay.createElement("div",{className:"i_wrxmyh"},o.Ay.createElement("div",{className:"O7SI4r_Y"},e.map(((e,t)=>{const n=t<=i;return o.Ay.createElement("div",{key:e,className:(0,a.A)("b6UDc3zh",n?"VELPJsJ0":"K8NtimIi")})}))),o.Ay.createElement("div",{className:"bVlnaLCI"},e.map((e=>o.Ay.createElement("div",{key:e,className:(0,a.A)("AFFaq4eZ",n===e&&"cuogxYPG")},e)))),o.Ay.createElement("input",{ref:r,type:"range",className:"H_rMZrqn",min:"0",max:e.length-1,value:s,onChange:n=>{const o=parseInt(n.target.value,10),a=e[o];t(a)},step:"1"}))))}))},66469:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(84051),a=n(82393),r=n(17712),l=n(64493);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}let s,c=!0;const d=({onActivate:e,...t})=>{const n=(0,o.li)(!1),d=(0,r.A)((t=>{if(n.current=!0,c)return c=!1,void e(t);s&&(clearTimeout(s),s=void 0),s=window.setTimeout((()=>{n.current&&e(t)}),200)})),u=(0,r.A)((()=>{n.current=!1})),m=(0,r.A)((t=>{n.current=!0,e(t)}));return o.Ay.createElement(l.A,i({},t,{onMouseEnter:a.TF?void 0:d,onMouseLeave:a.TF?void 0:u,onClick:a.TF?m:e}))}},36393:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(84051),a=n(87357),r=n(37661),l=n(79174),i=n(39351),s=n(17712),c=n(59030),d=n(18276),u=n(64493),m=n(52745),A=n(41036);const h=(0,o.ph)((({ref:e,children:t,resultsItemSelector:n,value:h,inputId:v,className:y,focused:g,isLoading:p=!1,spinnerColor:f,spinnerBackgroundColor:b,placeholder:E,disabled:C,autoComplete:N,canClose:w,autoFocusSearch:k,hasUpButton:x,hasDownButton:L,teactExperimentControlled:T,withBackIcon:S,onChange:R,onStartBackspace:D,onReset:I,onFocus:M,onBlur:B,onClick:O,onUpClick:K,onDownClick:F,onSpinnerClick:J})=>{let P=(0,o.li)(null);e&&(P=e);const[z,_,q]=(0,r.A)(g);(0,l.A)(P,k,q),(0,o.vJ)((()=>{P.current&&(g?P.current.focus():P.current.blur())}),[g,E]);const H=(0,c.A)(),$=(0,i.A)();function j(){_(),M?.()}const W=(0,s.A)((e=>{if(n){if("ArrowDown"===e.key||"Enter"===e.key){const e=document.querySelector(n);e&&e.focus()}"Backspace"===e.key&&0===e.currentTarget.selectionStart&&0===e.currentTarget.selectionEnd&&D?.()}}));return o.Ay.createElement("div",{className:(0,a.A)("SearchInput",y,z&&"has-focus"),onClick:O,dir:H.isRtl?"rtl":void 0},o.Ay.createElement(A.Ay,{name:"fade",shouldCleanup:!0,activeKey:Number(!p&&!S),className:"icon-container-left",slideClassName:"icon-container-slide"},p&&!S?o.Ay.createElement(m.A,{color:f,backgroundColor:b,onClick:J}):S?o.Ay.createElement(d.A,{name:"arrow-left",className:"back-icon",onClick:I}):o.Ay.createElement(d.A,{name:"search",className:"search-icon"})),o.Ay.createElement("div",null,t),o.Ay.createElement("input",{ref:P,id:v,type:"text",dir:"auto",placeholder:E||H("Search"),className:"form-control",value:h,disabled:C,autoComplete:N,onChange:function(e){const{currentTarget:t}=e;R(t.value),z||j()},onFocus:j,onBlur:function(){q(),B?.()},onKeyDown:W,teactExperimentControlled:T}),x&&o.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:K,disabled:!K,ariaLabel:$("AriaSearchOlderResult")},o.Ay.createElement(d.A,{name:"up"})),L&&o.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:F,disabled:!F,ariaLabel:$("AriaSearchNewerResult")},o.Ay.createElement(d.A,{name:"down"})),o.Ay.createElement(A.Ay,{name:"fade",shouldCleanup:!0,activeKey:Number(p),className:"icon-container-right",slideClassName:"icon-container-slide"},S&&p?o.Ay.createElement(m.A,{color:f,backgroundColor:b,onClick:J}):(h||w)&&I&&o.Ay.createElement(u.A,{round:!0,size:"tiny",color:"translucent",onClick:I},o.Ay.createElement(d.A,{name:"close"}))))}))},63173:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(84051),a=n(87357);const r=(0,o.ph)((e=>{const{id:t,value:n,label:r,hasArrow:l,error:i,ref:s,tabIndex:c,onChange:d,children:u}=e,m=i||r,A=(0,a.A)("input-group",n&&"touched",i&&"error",m&&"with-label",l&&"with-arrow","input-group");return o.Ay.createElement("div",{className:A},o.Ay.createElement("select",{className:"form-control",id:t,value:n||"",onChange:d,tabIndex:c,ref:s},u),m&&t&&o.Ay.createElement("label",{htmlFor:t},m))}))},91356:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(52844),r=n(68584);const l=(0,o.ph)((({onChange:e,inputRef:t})=>{const[n,l]=(0,o.J0)(),i=(0,o.hb)((t=>{l(void 0),e(t)}),[e]),s=(0,o.hb)((()=>{l(void 0)}),[]),c=(0,o.hb)((()=>{(0,a.p)("image/png, image/jpeg",(e=>{const t=e.target;t?.files?.[0]&&l(t.files[0])}),!0)}),[]);return o.Ay.createElement(o.Ay.Fragment,null,o.Ay.createElement("input",{ref:t,className:"axfkbhWJ",onClick:c}),o.Ay.createElement(r.A,{file:n,onClose:s,onChange:i}))}))},32581:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357),r=n(59030);const l=function({children:e,className:t}){const n=(0,r.A)();return o.Ay.createElement("div",{dir:n.isRtl?"rtl":void 0,className:(0,a.A)("LxlpQKLr",t)},e)}},55573:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(84051),a=n(59030),r=n(18276),l=n(64493);const i=({count:e,itemName:t,itemPluralName:n,isLoading:i,onClick:s})=>{const c=(0,a.A)();return o.Ay.createElement(l.A,{className:"ShowMoreButton",color:"translucent",size:"smaller",isText:!0,isLoading:i,isRtl:c.isRtl,onClick:s},o.Ay.createElement(r.A,{name:"down"}),"Show ",e," more ",e>1?n||`${t}s`:t)}},26607:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(73767),r=n(21511);const l=({isOpen:e,isHidden:t,isCustom:n,id:l,className:i,onClick:s,children:c,noCloseTransition:d,shouldAnimateFirstRender:u,style:m,ref:A})=>{const h=(0,a.A)(e),v=(0,a.A)(c),y=(0,o.li)(),g=void 0===h,{ref:p,shouldRender:f}=(0,r.A)({isOpen:e&&!t,ref:A,noMountTransition:g&&!u,className:!n&&void 0,noCloseTransition:d,withShouldRender:!0});return h&&!e&&(y.current=v),(f||t)&&o.Ay.createElement("div",{id:l,ref:p,className:i,onClick:s,style:m},e?c:y.current)}},63152:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(84051),a=n(87357);const r=(0,o.ph)((({id:e,name:t,value:n,label:r,checked:l=!1,disabled:i,inactive:s,noAnimation:c,onChange:d,onCheck:u})=>{const m=(0,o.hb)((e=>{d&&d(e),u&&u(e.currentTarget.checked)}),[d,u]),A=(0,a.A)("Switcher",i&&"disabled",s&&"inactive",c&&"no-animation");return o.Ay.createElement("label",{className:A,title:r},o.Ay.createElement("input",{type:"checkbox",id:e,name:t,value:n,checked:l,disabled:i,onChange:m}),o.Ay.createElement("span",{className:"widget"}))}))},34132:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(84051),a=n(66644),r=n(87357),l=n(41402),i=n(82393),s=n(4961),c=n(10722),d=n(11217),u=n(17712),m=n(18276),A=n(18408),h=n(71429),v=n(24433),y=n(60859);const g="Tab--active",p=({className:e,title:t,isActive:n,isBlocked:p,badgeCount:f,isBadgeActive:b,previousActiveTab:E,onClick:C,clickArg:N,contextActions:w,contextRootElementSelector:k,emoticon:x,isFolderTap:L=!1})=>{const T=(0,o.li)(null);(0,o.Nf)((()=>{n&&void 0===E&&T.current&&T.current.classList.add(g)}),[n,E]),(0,o.vJ)((()=>{if(!n||void 0===E)return;const e=T.current,t=e.parentElement.children[E];if(!t)return void(n&&!e.classList.contains(g)&&(0,a.RK)((()=>{e.classList.add(g)})));const o=e.querySelector(".platform"),r=t.querySelector(".platform"),i=r.parentElement.offsetLeft-o.parentElement.offsetLeft,s=r.clientWidth/o.clientWidth;(0,a.RK)((()=>{r.classList.remove("animate"),o.classList.remove("animate"),o.style.transform=`translate3d(${i}px, 0, 0) scale3d(${s}, 1, 1)`,(0,a.gm)((()=>((0,l.A)(o),()=>{o.classList.add("animate"),o.style.transform="none",t.classList.remove(g),e.classList.add(g)})))}))}),[n,E]);const{contextMenuAnchor:S,handleContextMenu:R,handleBeforeContextMenu:D,handleContextMenuClose:I,handleContextMenuHide:M,isContextMenuOpen:B}=(0,c.A)(T,!w),{handleClick:O,handleMouseDown:K}=(0,d.Q)((e=>{!w||e.button!==i.w3.Secondary&&C||D(e),"mousedown"===e.type&&e.button!==i.w3.Main||C?.(N)})),F=(0,u.A)((()=>T.current)),J=(0,u.A)((()=>k?T.current.closest(k):document.body)),P=(0,u.A)((()=>document.querySelector("#portals").querySelector(".Tab-context-menu .bubble"))),z=(0,u.A)((()=>({withPortal:!0}))),[_]=t;return o.Ay.createElement("div",{className:(0,r.A)("Tab",C&&"Tab--interactive",e),onClick:O,onMouseDown:K,onContextMenu:R,ref:T},o.Ay.createElement("span",{className:"Tab_inner"},o.Ay.createElement("span",{className:"Tab_content"}," ",L&&o.Ay.createElement("div",{className:"Tab_icon "+("All"===_?"icon-chats":(0,A.Qx)(x)?`icon-${(0,A.Qx)(x)}`:x?"emoji":"folder")},null===(0,A.Qx)(x)&&x),o.Ay.createElement("span",{className:"Tab_text"},(0,s.A)(t))),Boolean(f)&&o.Ay.createElement("span",{className:(0,r.A)("badge",b&&"Tab__badge--active")},f),p&&o.Ay.createElement(m.A,{name:"lock-badge",className:"blocked"}),o.Ay.createElement("i",{className:"platform"})),w&&void 0!==S&&o.Ay.createElement(h.A,{isOpen:B,anchor:S,getTriggerElement:F,getRootElement:J,getMenuElement:P,getLayout:z,className:"Tab-context-menu",autoClose:!0,onClose:I,onCloseAnimationEnd:M,withPortal:!0},w.map((e=>"isSeparator"in e?o.Ay.createElement(y.A,{key:e.key||"separator"}):o.Ay.createElement(v.A,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},e.title)))))}},24680:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(84051),a=n(57446),r=n(87357),l=n(82393),i=n(36838),s=n(59030),c=n(73767),d=n(34132);const u=l.pz?450:l.Ni?400:300,m=(0,o.ph)((({tabs:e,activeTab:t,onSwitchTab:n,contextRootElementSelector:l,className:m,tabClassName:A,isFolderTap:h=!1})=>{const v=(0,o.li)(null),y=(0,c.A)(t);(0,i.A)(v,void 0,!0),(0,o.vJ)((()=>{const e=v.current,{scrollWidth:n,offsetWidth:o,scrollLeft:r}=e;if(n<=o)return;const l=e.childNodes[t];if(!l)return;const{offsetLeft:i,offsetWidth:s}=l,c=i-o/2+s/2;Math.abs(c-r)<16||(0,a.A)(e,c,u)}),[t]);const g=(0,s.A)();return o.Ay.createElement("div",{className:(0,r.A)("TabList","no-scrollbar",m),ref:v,dir:g.isRtl?"rtl":void 0},e.map(((e,a)=>o.Ay.createElement(d.A,{key:e.id,title:e.title,isActive:a===t,isBlocked:e.isBlocked,badgeCount:e.badgeCount,isBadgeActive:e.isBadgeActive,previousActiveTab:y,onClick:n,clickArg:a,contextActions:e.contextActions,contextRootElementSelector:l,className:A,emoticon:e.emoticon,isFolderTap:h}))))}))},94079:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(84051),a=n(66644),r=n(87357),l=n(17712),i=n(59030);const s=(0,o.ph)((({ref:e,id:t,className:n,value:s,label:c,error:d,success:u,disabled:m,readOnly:A,placeholder:h,autoComplete:v,inputMode:y,maxLength:g,maxLengthIndicator:p,tabIndex:f,onChange:b,onInput:E,onKeyPress:C,onKeyDown:N,onBlur:w,onPaste:k,noReplaceNewlines:x})=>{let L=(0,o.li)(null);e&&(L=e);const T=(0,i.A)(),S=d||u||c,R=(0,r.A)("input-group",s&&"touched",d?"error":u&&"success",m&&"disabled",A&&"disabled",S&&"with-label",n),D=(0,l.A)((e=>{(0,a.RK)((()=>{e.style.height="0",(0,a.gm)((()=>{const t=e.scrollHeight;return()=>{e.style.height=`${t}px`}}))}))}));(0,o.Nf)((()=>{const e=L.current;e&&D(e)}),[]);const I=(0,o.hb)((e=>{const t=e.currentTarget;if(!x){const e=t.selectionEnd;t.value=t.value.replace(/\n/g," "),t.selectionEnd=e}D(t),b?.(e)}),[x,b]);return o.Ay.createElement("div",{className:R,dir:T.isRtl?"rtl":void 0},o.Ay.createElement("textarea",{ref:L,className:"form-control",id:t,dir:"auto",value:s||"",tabIndex:f,placeholder:h,maxLength:g,autoComplete:v,inputMode:y,disabled:m,readOnly:A,onChange:I,onInput:E,onKeyPress:C,onKeyDown:N,onBlur:w,onPaste:k,"aria-label":S}),S&&o.Ay.createElement("label",{htmlFor:t},S),p&&o.Ay.createElement("div",{className:"max-length-indicator"},p))}))},61361:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(84051),a=n(17663),r=n(80140),l=n(32625),i=n(30857),s=n(59030);const c=(0,o.ph)((({langKey:e,endsAt:t,onEnd:n})=>{const c=(0,s.A)(),d=(0,i.A)(),u=(0,r.Fm)(),m=u<t;if((0,l.A)(d,m?500:void 0),(0,o.vJ)((()=>{m||n?.()}),[m,n]),!m)return;const A=t-u,h=(0,a.QO)(A);return o.Ay.createElement("span",null,c(e,h))}))},629:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357);const r={root:"eGD1rubd",widget:"EXXsQxeq",min:"C4vXj96y",mid:"nRNm3LRD",max:"LdztzMx0",filler:"kudEBJOk"},l=(0,o.ph)((function({value:e}){return o.Ay.createElement("div",{className:(0,a.A)(r.root,"Toggle"),"aria-hidden":!0},o.Ay.createElement("i",{className:(0,a.A)(r.filler,r[e])}),o.Ay.createElement("i",{className:(0,a.A)(r.widget,r[e])}))}))},283:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357);const r="AtWkrIxV",l=(0,o.ph)((()=>o.Ay.createElement("div",{className:"Oob7moh7"},o.Ay.createElement("div",{className:(0,a.A)("ao0o6F_1",r)}),o.Ay.createElement("div",{className:"e94nYlC4"},o.Ay.createElement("div",{className:(0,a.A)("ANs9RCJu",r)}),o.Ay.createElement("div",{className:(0,a.A)("RSn3O5Rx",r)})))))},55158:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(84051),a=n(87357),r=n(95807);const l=({variant:e="rectangular",animation:t="wave",width:n,height:l,forceAspectRatio:i,inline:s,className:c})=>{const d=(0,a.A)("Skeleton",e,t,c,s&&"inline"),u=n&&l?`aspect-ratio: ${n}/${l}`:void 0,m=(0,r.A)(i&&u,Boolean(n)&&`width: ${n}px`,!i&&Boolean(l)&&`height: ${l}px`);return o.Ay.createElement("div",{className:d,style:m},s&&" ")}}}]);
//# sourceMappingURL=4765.57604255eb4888dd1dc3.js.map