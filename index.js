import{S as p,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const u="https://pixabay.com/api/",d="28802663-ddb0f5d28ea31cc45b363b962";function f(a){const s=new URLSearchParams({key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${u}?${s.toString()}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`Error ${e.status}`);return e.json()}).then(e=>e)}let c;function m(a,s){const o=a.map(e=>`<li class="gallery-element">
      <a href="${e.largeImageURL}" class="photo-card">
        <div class="image-wrapper">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            loading="lazy"
          />
        </div>
        <div class="info">
          <p class="info-item">
            <b>Likes</b> <span class="photo_span">${e.likes} </span>
          </p>
          <p class="info-item">
            <b>Views</b> <span class="photo_span">${e.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b> <span class="photo_span">${e.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b> <span class="photo_span">${e.downloads}</span>
          </p>
        </div>
      </a>
    </li>
        `).join("");s.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new p(".gallery a",{captionData:"alt",captionDelay:250})}function h(a){a.innerHTML=""}const n={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function y(){n.loader.classList.remove("is-hidden")}function g(){n.loader.classList.add("is-hidden")}n.searchForm.addEventListener("submit",a=>{a.preventDefault();const s=a.currentTarget.elements.search.value.trim();if(!s){l.info({title:"No query",message:"Please enter your query",position:"topRight"});return}h(n.gallery),y(),f(s).then(o=>{if(o.hits.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits,n.gallery)}).catch(o=>{l.error({title:"Error",message:`${o.message}`,position:"topRight"})}).finally(()=>g()),n.searchForm.reset()});
//# sourceMappingURL=index.js.map
