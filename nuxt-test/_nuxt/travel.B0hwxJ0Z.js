import{_ as ge,a as be}from"./ContentBlock.vue.CIJIaXBy.js";import{_ as ye,a as he}from"./FooterCardBlock.vue.Dt5IQmfY.js";import{_ as ke}from"./client-only.AfK7J-F6.js";import{j as ve,g as fe,k as Be,u as Ce,o as Se,l as xe,w as Ie,b as r,m as s}from"./entry.BiojIHcJ.js";const Je=ve({__name:"travel",setup(Te){var i,c,n,p,u,d,_,m,g,b,y,h,k,v,f,B,C,S,x,I,T,P,W,$,w,G,J,j,z,A,H,D,F,M,N,O,V,q,E,K,L,Q,R;const U=fe(),{data:a}=Be("[travel]",()=>U.client.getSingle("travel"));Ce({title:"Travel",meta:[{hid:"description",name:"description",content:"Travel WiiCabs"}]});const X=((c=(i=a.value)==null?void 0:i.data.slices[0])==null?void 0:c.slice_type)==="hero_block"?((u=(p=(n=a.value)==null?void 0:n.data.slices[0])==null?void 0:p.primary)==null?void 0:u.title)??"":"",Y=((_=(d=a.value)==null?void 0:d.data.slices[0])==null?void 0:_.slice_type)==="hero_block"?((b=(g=(m=a.value)==null?void 0:m.data.slices[0])==null?void 0:g.primary)==null?void 0:b.subtitle)??"":"",Z=((h=(y=a.value)==null?void 0:y.data.slices[0])==null?void 0:h.slice_type)==="hero_block"?((f=(v=(k=a.value)==null?void 0:k.data.slices[0])==null?void 0:v.primary)==null?void 0:f.background)??!1:!1,ee=((C=(B=a.value)==null?void 0:B.data.slices[0])==null?void 0:C.slice_type)==="hero_block"?((I=(x=(S=a.value)==null?void 0:S.data.slices[0])==null?void 0:x.primary)==null?void 0:I.background_webp.url)??"":"",ae=((P=(T=a.value)==null?void 0:T.data.slices[0])==null?void 0:P.slice_type)==="hero_block"?((w=($=(W=a.value)==null?void 0:W.data.slices[0])==null?void 0:$.primary)==null?void 0:w.background_jpeg.url)??"":"",l=(G=a.value)==null?void 0:G.data.slices[1],te=((j=(J=a.value)==null?void 0:J.data.slices[1])==null?void 0:j.slice_type)==="step_guide"?((H=(A=(z=a.value)==null?void 0:z.data.slices[1])==null?void 0:A.primary)==null?void 0:H.title)??"":"",se=((F=(D=a.value)==null?void 0:D.data.slices[1])==null?void 0:F.slice_type)==="step_guide"?((O=(N=(M=a.value)==null?void 0:M.data.slices[1])==null?void 0:N.primary)==null?void 0:O.intro)??"":"",re=l==null?void 0:l.items.map(t=>({step:t.step,name:t.name,description:t.description})),e=(V=a.value)==null?void 0:V.data.slices[2],o=(e==null?void 0:e.slice_type)==="content"?((q=e==null?void 0:e.primary)==null?void 0:q.title)??"":"",le=(e==null?void 0:e.slice_type)==="content"?((E=e==null?void 0:e.items)==null?void 0:E.map(t=>t.paragraph!==null?t.paragraph:""))??[]:[],oe=(e==null?void 0:e.slice_type)==="content"?((K=e==null?void 0:e.primary)==null?void 0:K.media_png.url)??"":"",ie=(e==null?void 0:e.slice_type)==="content"?((L=e==null?void 0:e.primary)==null?void 0:L.branded)??!0:!1,ce=e==null?void 0:e.items,ne=(R=(Q=a.value)==null?void 0:Q.data.slices[3])==null?void 0:R.items.map(t=>({image:t.image.url,title:t.title,paragraph:t.paragraph,button:{type:t.type,size:t.size,text:t.text,href:t.href}}));return(t,Pe)=>{const pe=ge,ue=ye,de=be,_e=he,me=ke;return Se(),xe(me,null,{default:Ie(()=>[r(pe,{title:s(X),subtitle:s(Y),heading:!0,background:s(Z),backgroundWebp:s(ee),backgroundJpeg:s(ae)},null,8,["title","subtitle","background","backgroundWebp","backgroundJpeg"]),r(ue,{title:s(te),intro:s(se),steps:s(re)??[]},null,8,["title","intro","steps"]),r(de,{label:s(o),title:s(o),paragraph:s(le)??[],media_png:s(oe),branded:s(ie),actions:s(ce)},null,8,["label","title","paragraph","media_png","branded","actions"]),r(_e,{footerCards:s(ne)??[]},null,8,["footerCards"])]),_:1})}}});export{Je as default};
