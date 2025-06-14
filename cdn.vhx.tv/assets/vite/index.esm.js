import{_ as c,b as K,a as b,c as I,f as Rt}from"./tslib.es6.js";import{r as C,M as zt,A as F,s as U,$ as Ft,R}from"./styled-components.browser.esm.js";import{g as m,s as h,b as k,y as ut,c as z,a as A,w as S,v as ft,d as f,h as u,r as $,k as G,l as Lt,e as St}from"./colors.esm.js";function mt(t,n,e,r){var a=t.name;a==null||a.replace("Component","");var o=function(l){var i=l.theme,d=K(l,["theme"]),y=C.useContext(zt);return i=i||y,t(c({theme:i},d))};return C.forwardRef(function(l,i){return o(c({forwardRef:i},l))})}var vt=function(t){var n=t.theme.name;return n==="dark"&&F(V||(V=b([`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `],[`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `])))},V,Et={COLOR:"light",SIZE:"desktop"};function s(t,n){if(n===void 0&&(n=500),t.type==="SIZE"){var e="desktop",r=t.modes[e];if(typeof r=="string")return r;if(typeof r=="function")return r(n)}if(t.type==="COLOR")return function(a){var o=a.theme,l;typeof o=="string"&&(l=o),typeof(o==null?void 0:o.name)=="string"&&(l=o.name);var i=Bt(t,l);if(typeof i=="string")return i;if(typeof i=="function")return i(n)}}function Bt(t,n){var e=t.modes[n],r=typeof e=="function"||typeof e=="string";return r||(console.warn("Invalid Theme: "+n),t.default&&(n=t.default),t.default||(n=Et[t.type]),e=t.modes[n]),e}function L(t,n){var e=n===void 0?{min:0,max:1e3}:n,r=e.min,a=r===void 0?0:r,o=e.max,l=o===void 0?1e3:o;return Math.min(Math.max(t,a),l)}var E=function(t){return s(Dt,t)},Dt={default:"light",type:"COLOR",modes:{dark:jt,light:At}};function jt(t){return m(L(900+t/10))}function At(t){return h(L((t+200)/4-175))}E.primary=E(500);E.secondary=E(1e3);var Mt=k(500),Tt=k(500),Nt={default:"light",type:"COLOR",modes:{dark:Mt,light:Tt}},It=s(Nt),Kt=m(50),Ut=m(700),_t={default:"light",type:"COLOR",modes:{dark:Kt,light:Ut}},Ht=s(_t),Wt=h(700),Yt=h(700),Zt={default:"light",type:"COLOR",modes:{dark:Wt,light:Yt}},qt=s(Zt),Pt={primary:It,secondary:Ht,tertiary:qt},Xt="conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",Gt="conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",Vt={default:"light",type:"COLOR",modes:{dark:Xt,light:Gt}},Jt=s(Vt),Qt="conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",tn="conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",nn={default:"light",type:"COLOR",modes:{dark:Qt,light:tn}},en=s(nn),rn={sm:Jt,xl:en},an="linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",on="linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",ln={default:"light",type:"COLOR",modes:{dark:an,light:on}},dn=s(ln),sn="linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",cn="linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",un={default:"light",type:"COLOR",modes:{dark:sn,light:cn}},fn=s(un),mn={sm:dn,xl:fn},vn={conic:rn,linear:mn},hn="#FF4D4D",pn="#FF4D4D",gn={default:"light",type:"COLOR",modes:{dark:hn,light:pn}},bn=s(gn),yn=ut(500),xn=ut(500),kn={default:"light",type:"COLOR",modes:{dark:yn,light:xn}},$n=s(kn),wn=z(500),On=z(500),Cn={default:"light",type:"COLOR",modes:{dark:wn,light:On}},Rn=s(Cn),zn=A(500),Fn=A(500),Ln={default:"light",type:"COLOR",modes:{dark:zn,light:Fn}},Sn=s(Ln),En={caution:$n,negative:Rn,positive:Sn},Bn=m(680),Dn=h(100),jn={default:"light",type:"COLOR",modes:{dark:Bn,light:Dn}},An=s(jn),w=function(t){return s(Mn,t)},Mn={default:"light",type:"COLOR",modes:{dark:Tn,light:Nn}};function Tn(t){return m(L(-1*(t/5-1e3)))}function Nn(t){return t>=300?S:h(L(-1*(t/2-150)))}w.primary=w(400);w.secondary=w(600);w.tertiary=w(800);function In(t,n){if(n===void 0&&(n=2),n===0)return Math.round(t);var e=Math.pow(10,n);return Math.round(t*e)/e}var B=function(t){return s(Kn,t)},Kn={default:"light",type:"COLOR",modes:{dark:Un,light:_n}};function Un(t){return m(L(t/2.5))}function _n(t){return h(L(In(t/-1.667+900,0)))}B.primary=B(0);B.secondary=B(600);var Hn="linear-gradient(to right,#00AA59,#00B191,#0098C8)",Wn="linear-gradient(to right,#00BE4C,#00B285,#0095D5)",Yn={default:"light",type:"COLOR",modes:{dark:Hn,light:Wn}},Zn=s(Yn),qn="linear-gradient(to right,#00AA59,#00B191,#0098C8)",Pn="linear-gradient(to right,#00B655,#00B285,#00A9D5)",Xn={default:"light",type:"COLOR",modes:{dark:qn,light:Pn}},Gn=s(Xn),Vn=ft(400),Jn=ft(400),Qn={default:"light",type:"COLOR",modes:{dark:Vn,light:Jn}},te=s(Qn),ne={New:te,sm:Zn,xl:Gn},ee={background:E,format:Pt,rainbow:vn,livestream:bn,status:En,stroke:An,surface:w,text:B,upsell:ne},re=function(t){return s(ae,t)},ae={default:"light",type:"COLOR",modes:{dark:oe,light:ie}};function oe(t){var n=.15+t/7500,e=.75+t/1e3;return F(J||(J=b([`
    border: `,"px solid rgba(255, 255, 255, ",`);
    box-shadow: `,", ",`;
  `],[`
    border: `,"px solid rgba(255, 255, 255, ",`);
    box-shadow: `,", ",`;
  `])),e,n,pt(t),ht(t))}function ie(t){var n=1+t/2e3;return F(Q||(Q=b([`
    border: `,"px solid ",`;
    box-shadow: `,", ",`;
  `],[`
    border: `,"px solid ",`;
    box-shadow: `,", ",`;
  `])),n,f(u,.025),pt(t),ht(t))}function ht(t){return gt({blur:10+t/500,spread:.5+t/2e3,opacity:t/1e5+t/7500})}function pt(t){return gt({offsetY:10,blur:6+t/500,spread:-5+t/2e3,opacity:t/2e4+t/9e3})}function gt(t){var n=t.offsetX,e=n===void 0?0:n,r=t.offsetY,a=r===void 0?0:r,o=t.blur,l=o===void 0?3:o,i=t.spread,d=i===void 0?1:i,y=t.color,O=y===void 0?u:y,x=t.opacity,M=x===void 0?.2:x;return`
  `.concat(e,`px
  `).concat(a,`px
  `).concat(l,`px
  `).concat(d,`px
  `).concat(f(O,M),`
`)}var J,Q,le=function(t){return"".concat(t*.25/50,"rem")},de=function(t){return le(t)},se=function(t){return s(ce,t)},ce={default:"desktop",type:"SIZE",modes:{desktop:ue}};function ue(t){t=t+100;var n=1.4,e=Math.pow(n,t/100),r=8.5+3*e/1.618,a=Math.round(r*1)/1,o=Math.max(a,10);return o}var fe={size:se},bt={color:ee,edge:re,space:de,typography:fe},yt=U.span(nt||(nt=b([`
  display: inline;
  font-size: `,`;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  border: 0;
  color: `,`;
  `,`;
`],[`
  display: inline;
  font-size: `,`;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  border: 0;
  color: `,`;
  `,`;
`])),function(t){return $(bt.typography.size(t.size))},xt,vt),tt=U.input(et||(et=b([`
  background: transparent;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  font-size: `,`;
  color: `,`;
  `,`;
`],[`
  background: transparent;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  font-size: `,`;
  color: `,`;
  `,`;
`])),function(t){return $(bt.typography.size(t.size))},xt,vt);function xt(t){var n=t.format,e=t.status,r=t.theme;return r.formats[e||n]}var nt,et;function me(t){if(t===void 0&&(t=null),!t)return[null];var n=!0,e=!0,r=rt({style:t,layout:n}),a=rt({style:t,display:e});return[r,a]}function rt(t){var n=t.style,e=t.layout,r=e===void 0?!1:e,a=t.display,o=a===void 0?!1:a,l={},i={};if(Object.keys(n).map(function(d){return ve.includes(d)?l[d]=n[d]:i[d]=n[d]}),r)return c({},l);if(o)return c({},i);console.warn("Style split type not provided!")}var ve=["alignSelf","bottom","display","flex","flexBasis","float","height","left","margin","marginBottom","marginLeft","marginRight","marginTop","maxHeight","maxWidth","minHeight","minWidth","position","right","top","width","flexGrow","flexShrink","gridArea","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","justifySelf","placeSelf"];function he(t){return t==null?void 0:t.getBoundingClientRect()}var Re={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},pe=U.div(dt||(dt=b([`
  `,`
`],[`
  `,`
`])),function(t){var n=t.parent,e=t.focused,r=t.variant,a=t.radius,o=a===void 0?6:a,l=t.distance,i=l===void 0?4:l,d=t.isKeyboardOnly,y=d===void 0?!1:d,O=r==="underline"&&F(ot||(ot=b([`
        border-radius: 0;
        border-top-color: rgba(0, 0, 0, 0) !important;
        border-left-color: rgba(0, 0, 0, 0) !important;
        border-right-color: rgba(0, 0, 0, 0) !important;
      `],[`
        border-radius: 0;
        border-top-color: rgba(0, 0, 0, 0) !important;
        border-left-color: rgba(0, 0, 0, 0) !important;
        border-right-color: rgba(0, 0, 0, 0) !important;
      `]))),x=y?":focus-visible":":focus";return F(lt||(lt=b([`
      z-index: 1;
      top: `,`;
      left: `,`;
      position: absolute;
      width: calc(100% + `,`);
      height: calc(100% + `,`);
      pointer-events: none;
      border-radius: `,`;
      border: `," solid ",`;
      opacity: 0;
      transition: 150ms ease-in-out;

      `,"",` > &,
      `,"",` ~ &,
      `,"",` ~ div > & {
        opacity: 1;
      }

      `,`

      `,`;
    `],[`
      z-index: 1;
      top: `,`;
      left: `,`;
      position: absolute;
      width: calc(100% + `,`);
      height: calc(100% + `,`);
      pointer-events: none;
      border-radius: `,`;
      border: `," solid ",`;
      opacity: 0;
      transition: 150ms ease-in-out;

      `,"",` > &,
      `,"",` ~ &,
      `,"",` ~ div > & {
        opacity: 1;
      }

      `,`

      `,`;
    `])),$(i*-1),$(i*-1),$(i*2),$(i*2),$(o),$(2),k(500),n,x,n,x,n,x,e&&F(it||(it=b([`
        opacity: 1;
      `],[`
        opacity: 1;
      `]))),O)}),at="'Helvetica Neue', Helvetica, Arial, sans-serif;";Ft(st||(st=b([`

  :root {
    color-scheme: `,`
  }

  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: `,`;
    min-height: 100%;
    color: `,`;
    background: `,`;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  input {
    font-family: `,`;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`],[`

  :root {
    color-scheme: `,`
  }

  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: `,`;
    min-height: 100%;
    color: `,`;
    background: `,`;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  input {
    font-family: `,`;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`])),function(t){var n=t.theme;return n.name},at,function(t){var n=t.theme;return n.content.color2},function(t){var n=t.theme;return n.content.background},at);var ot,it,lt,dt,st,ge=mt(be);function be(t){var n=t.children,e=t.className,r=t.element,a=r===void 0?"span":r,o=t.format,l=o===void 0?"soft":o,i=t.forwardRef,d=t.onBlur,y=t.onChange,O=t.onFocus,x=t.onKeyUp,M=t.placeholder,_=t.size,kt=t.style,H=K(t,["children","className","element","format","forwardRef","onBlur","onChange","onFocus","onKeyUp","placeholder","size","style"]),W=I(C.useReducer(ye,{text:n,width:0,focus:!1}),2),T=W[0],D=W[1],j=T.text,N=T.width,Y=T.focus,Z=C.useRef(null),g=C.useRef(null),q=I(me(kt),2),$t=q[0],P=q[1];C.useEffect(function(){var v=he(Z.current).width;N!==v&&D(["widthSet",v])},[j,N]);function X(v){var p;O&&O(v),D(["focusSet",!0]),(p=g==null?void 0:g.current)===null||p===void 0||p.focus()}function wt(v){var p;d&&d(v),D(["focusSet",!1]),(p=g==null?void 0:g.current)===null||p===void 0||p.blur()}function Ot(v){y&&y(v),D(["textSet",v.target.value])}function Ct(v){var p;x&&x(v),v.key==="Enter"&&((p=g==null?void 0:g.current)===null||p===void 0||p.blur())}return R.createElement("div",{style:c({position:"relative",display:"inline-block"},$t),className:e},R.createElement(yt,c({as:a,children:j.length>0?j:M,className:e,format:l,onClick:X,ref:Z,size:_},H,{style:c(c({},P),{opacity:Y?0:1,margin:0})})),R.createElement(tt,c({className:e,defaultValue:j,format:l,onBlur:wt,onChange:Ot,onFocus:X,onKeyUp:Ct,ref:ke(i,g),size:_,type:"text"},H,{style:c(c({},P),{width:N,opacity:Y?1:0,margin:0})})),R.createElement(pe,{parent:tt}))}function ye(t,n){var e=I(n,2),r=e[0],a=e[1];switch(r){case"textSet":return c(c({},t),{text:xe(a)});case"widthSet":return c(c({},t),{width:a});case"focusSet":return c(c({},t),{focus:a})}}var xe=function(t){return t.replace(/ /g," ")};function ke(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(e){var r,a;try{for(var o=Rt(t),l=o.next();!l.done;l=o.next()){var i=l.value;typeof i=="function"?i(e):i&&(i.current=e)}}catch(d){r={error:d}}finally{try{l&&!l.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}}}var ze=mt($e);function $e(t){var n=t.contentEditable,e=t.element,r=e===void 0?"span":e,a=t.format,o=a===void 0?"soft":a,l=t.size,i=l===void 0?300:l,d=K(t,["contentEditable","element","format","size"]);return n?R.createElement(ge,c({format:o,size:i},d)):R.createElement(yt,c({as:r,format:o,size:i},d))}var ct={textMultiplier:1,contrast:!1,motion:!1},Fe={light:{name:"light",a11y:ct,content:{background:S,color:u,color2:h(800),disabled:m(50),focus:k(500)},item:{bg:S,bg2:h(50),locked:m(50)},formats:{primary:k(500),secondary:m(50),alternative:"#3a5161",soft:h(800),basic:u,positive:A(500),negative:z(500)},inputs:{primary:k(500),small:z(400)},shadows:{small:"box-shadow: 0 0 0.334rem -0.05rem ".concat(f(u,.15),";"),0:"box-shadow: 0 0 0.334rem -0.05rem ".concat(f(u,.1),";"),200:"box-shadow: 0 0 0.445rem -0.0475rem ".concat(f(u,.15),";"),400:"box-shadow: 0 0 0.556rem -0.045rem ".concat(f(u,.2),";"),600:"box-shadow: 0 0 0.667rem -0.0425rem ".concat(f(u,.25),";"),800:"box-shadow: 0 0 0.778rem -0.04rem ".concat(f(u,.3),";"),1e3:"box-shadow: 0 0 0.889rem -0.0375rem ".concat(f(u,.35),";")}},dark:{name:"dark",a11y:ct,content:{background:m(910),color:S,color2:m(50),disabled:m(850),focus:k(400)},item:{bg:m(850),bg2:h(800),locked:m(800)},formats:{primary:k(500),secondary:m(700),alternative:h(700),soft:h(100),basic:S,positive:A(500),negative:z(500)},inputs:{primary:k(400),small:z(400)},shadows:{small:"box-shadow: 0 0 0.334rem -0.05rem ".concat(f(u,.15),";"),0:"box-shadow: 0 0 0.334rem -0.05rem ".concat(f(u,.1),";"),200:"box-shadow: 0 0 0.445rem -0.0475rem ".concat(f(u,.15),";"),400:"box-shadow: 0 0 0.556rem -0.045rem ".concat(f(u,.2),";"),600:"box-shadow: 0 0 0.667rem -0.0425rem ".concat(f(u,.25),";"),800:"box-shadow: 0 0 0.778rem -0.04rem ".concat(f(u,.3),";"),1e3:"box-shadow: 0 0 0.889rem -0.0375rem ".concat(f(u,.35),";")}}};function Le(t){return function(n){var e=n.theme;return e.a11y.contrast?G(Lt(.1,t)):G(St(.3,t))}}export{pe as F,ze as T,vt as a,Le as b,bt as c,Re as d,he as g,Fe as t,me as u,mt as w};
//# sourceMappingURL=index.esm.js.map
