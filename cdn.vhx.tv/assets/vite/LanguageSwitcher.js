import{s as n,j as a}from"./styled-components.browser.esm.js";import{P as o}from"./index.js";import{g as i,e as p,o as r,q as d,p as c}from"./intl.helpers.js";import{d as g}from"./deviceSizes.js";import{I as m}from"./provider.js";import{F as u}from"./message.js";const h=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    color: #bebebe;
  }
  @media ${g.mobile} {
    display: block;

    label {
      margin-top: 1rem;
    }
  }
`,x=n.select`
  margin-left: 8px;
  border-radius: 3px;
  height: 30px;
  width: 100px;
  padding: 0 5px;
`,l=t=>{const e=i();return a.jsx(m,{locale:e,messages:p(e),textComponent:"span",children:a.jsxs(h,{"data-testid":"language-switcher",children:[a.jsx(u,{id:"site.language",defaultMessage:"Language",children:s=>a.jsxs("label",{htmlFor:"language-switcher",children:[s,":"]})}),a.jsx(x,{id:"language-switcher",defaultValue:e.toLowerCase().slice(0,2),onChange:w,children:f(t)})]})})},f=t=>{const e=t.supportedLocales;return e.indexOf(r)===-1&&e.push(r),e.sort().map(s=>a.jsx("option",{value:s,children:L(s)},s))},L=t=>{let e=d(t);return e.split("")[0].toUpperCase()+e.slice(1,e.length)},w=t=>{const e=t.target.value;c(e),window.location.pathname=window.location.pathname};l.propTypes={supportedLocales:o.arrayOf(o.string).isRequired};l.defaultProps={supportedLocales:[]};export{l as L};
//# sourceMappingURL=LanguageSwitcher.js.map
