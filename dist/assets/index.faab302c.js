var h=Object.defineProperty;var p=(r,t,s)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var d=(r,t,s)=>(p(r,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();class w{constructor(t){d(this,"watchProgress",t=>{const{settings:s,images:c}=this,e=c.length;let o=0;if(this.nbImagesProcessed===e){this.nbImagesProcessed=0;return}this.nbImagesProcessed++,o=this.nbImagesProcessed/e*100,this.callback(s.onProgress,t,o)});d(this,"loadImg",async t=>{const{settings:s,watchProgress:c}=this,e=t.hasAttribute("data-background-src"),o=t.getAttribute(e?"data-background-src":"src"),n={element:t,src:o,loaded:!0};try{await new Promise((a,i)=>{const l=new Image;l.onload=()=>a(),l.onerror=()=>i(),l.src=o}),e?t.style.backgroundImage=`url(${o})`:t.setAttribute("src",o)}catch{n.loaded=!1}return c(n,s),n});d(this,"init",async()=>{const{settings:t,images:s,callback:c,loadImg:e}=this;try{const o=await Promise.all(s.map(e));c(t.done,o)}catch(o){c(t.always,o)}});const s={selector:"img",onProgress:null,always:null,done:null};this.settings={...s,...t},this.images=[...document.querySelectorAll(this.settings.selector)],this.nbImagesProcessed=0}callback(t,s,c){if(t!==null)try{t(s,c)}catch(e){console.error(e)}}}const y=async r=>{try{return await Promise.all(r.map(fetch))}catch(t){console.error(...t)}};function v(r=0,t=2e3,s="easeOutSine"){const c=window.scrollY,e=Math.max(.1,Math.min(Math.abs(c-r)/t,.8)),o={easeOutSine:i=>Math.sin(i*(Math.PI/2)),easeInOutSine:i=>-.5*(Math.cos(Math.PI*i)-1),easeInOutQuint:i=>(i/=.5)<1?.5*Math.pow(i,5):.5*(Math.pow(i-2,5)+2)};let n=0;function a(){let i,l;n+=1/60,i=n/e,l=o[s](i),i<1?(window.requestAnimationFrame(a),window.scrollTo(0,c+(r-c)*l)):window.scrollTo(0,r)}a()}/*! js-cookie v3.0.1 | MIT */function u(r){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var c in s)r[c]=s[c]}return r}var I={read:function(r){return r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(r){return encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function g(r,t){function s(e,o,n){if(!(typeof document>"u")){n=u({},t,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var i in n)!n[i]||(a+="; "+i,n[i]!==!0&&(a+="="+n[i].split(";")[0]));return document.cookie=e+"="+r.write(o,e)+a}}function c(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var o=document.cookie?document.cookie.split("; "):[],n={},a=0;a<o.length;a++){var i=o[a].split("="),l=i.slice(1).join("=");try{var f=decodeURIComponent(i[0]);if(n[f]=r.read(l,f),e===f)break}catch{}}return e?n[e]:n}}return Object.create({set:s,get:c,remove:function(e,o){s(e,"",u({},o,{expires:-1}))},withAttributes:function(e){return g(this.converter,u({},this.attributes,e))},withConverter:function(e){return g(u({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}var m=g(I,{path:"/"});(async()=>{const r=m.get("fontsLoaded"),t=document.querySelector(".intro"),s=document.querySelector(".portfolio"),c=document.querySelector(".open-portfolio"),e=document.querySelector(".contact"),o=document.querySelector(".open-contact"),n=document.querySelector(".close-contact"),a=new w({selector:".preload",onProgress:l=>l.element.classList.add("loaded")}),i=["jaapokki-regular.eot","jaapokki-regular.ttf","jaapokki-regular.woff","jaapokki-regular.woff2","kontanter.eot","kontanter.ttf","kontanter.woff","kontanter.woff2"].map(l=>`/fonts/${l}`);c==null||c.addEventListener("click",()=>v(s==null?void 0:s.offsetTop,800,"easeInOutSine")),o==null||o.addEventListener("click",()=>e==null?void 0:e.classList.add("contact--show")),n==null||n.addEventListener("click",()=>e==null?void 0:e.classList.remove("contact--show")),a.init(),r?t==null||t.classList.add("loaded"):(await y(i),t==null||t.classList.add("loaded"),m.set("fontsLoaded","true"))})();
