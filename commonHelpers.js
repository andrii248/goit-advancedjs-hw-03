import{a as l,S as m,i as d}from"./assets/vendor-67ad3d10.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();l.defaults.headers.common["x-api-key"]="live_bO23hWJCGT0waNKtzCwMgl8Tys68lTcbKfmgL42B6ai6pWei5Kw9eSwZI0tDgVzX";async function h(){return await l.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data)}async function p(t){return await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(o=>o.data)}const s={select:document.querySelector("select.breed-select"),catInfo:document.querySelector("div.cat-info"),loader:document.querySelector("p.loader")};function u(){s.loader.classList.remove("hidden"),console.log("Show")}function f(){s.loader.classList.add("hidden"),console.log("Hide")}function g(){s.select.classList.remove("hidden")}function y(){s.catInfo.classList.remove("hidden")}function w(){s.catInfo.classList.add("hidden")}const a={select:document.querySelector("select.breed-select"),catInfo:document.querySelector("div.cat-info"),loader:document.querySelector("p.loader")},S=new m({select:a.select,settings:{placeholderText:"Search breeds"}});async function L(){u();try{await h().then(t=>{a.select.insertAdjacentHTML("afterbegin",v(t))}),a.select.addEventListener("change",b)}catch{d.error({color:"red",title:"Error",message:"😮 Oops! Something went wrong! Try reloading the page!"})}finally{f(),g()}}L();function v(t){const o=t.map(({id:c,name:n})=>({text:n,value:c}));S.setData([{placeholder:!0,text:""},...o])}async function b(){const t=a.select.value;u(),w();try{const o=await p(t);a.catInfo.innerHTML=I(o)}catch{d.error({color:"red",title:"Error",message:"😮 Oops! Something went wrong! Please, try searching again!"})}finally{f(),y()}}function I(t){const{name:o,description:c,temperament:n}=t[0].breeds[0];return`
      <img class="cat-img" src="${t[0].url}" alt="${o}"/>
      <div class="cat-breed-data">
        <h2>${o}</h2>
        <p>${c}</p>
        <h3>Temperament: </h3>
        <p>${n}</p>
      </div>`}
//# sourceMappingURL=commonHelpers.js.map