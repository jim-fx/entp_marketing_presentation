import{C as e,M as t}from"./vendor-52230665.js";const a=e(0);{if(window.location.hash){const s=parseInt(window.location.hash.replace("#",""));a.set(s)}a.subscribe(s=>{window.location.hash=s+""})}const o=e(0),i=e(""),d=()=>a.update(s=>Math.min(t(o)-1,s+1)),l=()=>a.update(s=>Math.max(0,s-1));export{o as a,i as b,d as n,l as p,a as s};