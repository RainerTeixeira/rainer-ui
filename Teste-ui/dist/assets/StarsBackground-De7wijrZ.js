import{H as h,r as a,j as t}from"./index-BMkPSnki.js";function v(){const{resolvedTheme:o}=h(),[n,s]=a.useState(!1),[r,i]=a.useState([]);return a.useEffect(()=>{s(!0)},[]),a.useEffect(()=>{if(!n)return;const d=Array.from({length:150},(x,l)=>{const c=Math.random()*100,m=Math.random()*100,f=Math.random()*2+.5,u=Math.random()*3,p=.6+Math.random()*.4;return{id:l,left:c,top:m,size:f,delay:u,opacity:p}});i(d)},[n]),!n||o!=="dark"?null:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 pointer-events-none overflow-hidden",style:{zIndex:0},"aria-hidden":"true",children:t.jsx("div",{className:"absolute inset-0",children:r.map(e=>t.jsx("div",{className:"absolute rounded-full",style:{left:`${e.left}%`,top:`${e.top}%`,width:`${e.size}px`,height:`${e.size}px`,opacity:e.opacity,backgroundColor:"var(--effect-star-color)",boxShadow:`0 0 ${e.size*2}px var(--effect-star-color)`,animation:"starTwinkle 3s ease-in-out infinite",animationDelay:`${e.delay}s`}},e.id))})}),t.jsx("style",{children:`
        /* Animação de brilho das estrelas */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `})]})}export{v as StarsBackground};
//# sourceMappingURL=StarsBackground-De7wijrZ.js.map
