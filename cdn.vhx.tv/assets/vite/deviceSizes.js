import{A as i}from"./styled-components.browser.esm.js";const p={mobile:"(min-width: 1px) and (max-width: 639px)",phablet:"(min-width: 640px) and (max-width: 767px)",tablet:"screen and (max-width: 1024px)",desktop:"(min-device-width: 1025px) and (-webkit-min-device-pixel-ratio: 1)",hd_desktop:"screen and (min-width: 1440px)"},t={xs:320,xsm:375,xmd:480,sm:768,md:1024,lg:1280,hd:1440,xhd:1920},a=Object.keys(t).reduce((d,e)=>{const n=t[e];return d[e]=(m,...x)=>i`
    @media (min-width: ${n}px) {
      ${i(m,...x)};
    }
  `,d},{});export{p as d,a as m};
//# sourceMappingURL=deviceSizes.js.map
