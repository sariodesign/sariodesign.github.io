import{j as p,n as y,o as e,c as s,F as h,r as b,l as m,w as d,d as f,t as v,e as u,a as t,b as a,B as C,_ as $,C as k}from"./entry.BiojIHcJ.js";import{a as g,_ as B}from"./client-only.AfK7J-F6.js";const x=""+globalThis.__publicAssetsURL("img/header-logo.png"),L={class:"navigation"},N=p({__name:"Navigation",setup(c){const i=y([{label:"What is WiiCabs",path:"/about"},{label:"Travel with us",path:"/travel"},{label:"Drive with us",path:"/drive"},{label:"WiiCabs for business",path:"/business"}]);return(r,_)=>{const o=u;return e(),s("nav",L,[(e(!0),s(h,null,b(i.value,n=>(e(),m(o,{to:n.path,key:n.label,exactActiveClass:"navigation__link--active",class:"navigation__link"},{default:d(()=>[f(v(n.label),1)]),_:2},1032,["to"]))),128))])}}}),W={class:"header"},w={class:"header__content container"},F=t("img",{width:"150",height:"45",src:x,alt:"WiiCabs logo"},null,-1),P={class:"header__navigation"},T={class:"header__cta"},V=p({__name:"Header",setup(c){return(i,r)=>{const _=u,o=g;return e(),s("header",W,[t("div",w,[t("div",null,[a(_,{"aria-label":"homepage",to:"/"},{default:d(()=>[F]),_:1})]),t("div",P,[a(N)]),t("div",T,[a(o,{type:"primary",text:"Prenota una corsa"})])])])}}}),A={class:"footer"},S={class:"container footer__content"},z=t("div",{class:"footer__logo"},[t("img",{width:"150",height:"45",src:x,alt:"WiiCabs footer logo"})],-1),D={class:"footer__nav"},G={class:"footer__actions"},H=t("div",{class:"container footer__bottom"},[t("a",{href:"#","aria-label":"privacy policy"},"Privacy Policy"),t("a",{href:"#","aria-label":"term and condition"},"Term & Condition")],-1),j=p({__name:"Footer",setup(c){const i=C([{label:"Cos'è WiiCabs",path:"/about"},{label:"Viaggia con noi",path:"/travel"},{label:"Guida con noi",path:"/drive"},{label:"WiiCabs for business",path:"/business"}]);return(r,_)=>{const o=u,n=g;return e(),s("footer",A,[t("div",S,[z,t("nav",D,[(e(!0),s(h,null,b(i,l=>(e(),m(o,{key:l.label,to:l.path,"aria-label":l.label},{default:d(()=>[f(v(l.label),1)]),_:2},1032,["to","aria-label"]))),128))]),t("div",G,[a(n,{type:"primary",size:"big",text:"App Store"}),a(n,{type:"primary",size:"big",text:"Google Play"})])]),H])}}}),E={};function O(c,i){const r=V,_=j,o=B;return e(),s("div",null,[a(r),k(c.$slots,"default"),a(o,null,{default:d(()=>[a(_)]),_:1})])}const q=$(E,[["render",O]]);export{q as default};