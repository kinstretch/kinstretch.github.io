import{a,b as Cn,_ as _n}from"./tslib.es6.js";import{s as P,A as c,W as Un,R as p,r as Kn}from"./styled-components.browser.esm.js";import{d as u,r as o,h as D,k as S,n as g,w as Qn,j as C,b as A,v as j,o as B}from"./colors.esm.js";import{b as L,c as Wn,w as Rn,d as Vn,F as qn}from"./index.esm.js";var H={xs:4,sm:6,md:8,lg:10,xl:12},Sn=P.div(M||(M=a([`
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  background: `,`;
  border-right: `,`;
  border-radius: `,`;
`],[`
  position: absolute;
  top: -1px;
  left: -1px;
  height: calc(100% + 2px);
  background: `,`;
  border-right: `,`;
  border-radius: `,`;
`])),function(n){var e=n.theme;return u(e.content.color,.2)},function(n){var e=n.theme;return u(e.content.color,.5)},function(n){return"".concat(o(H[n.size])," 0 0 ").concat(o(H[n.size]))}),M,Gn=c(Q||(Q=a([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;

  > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`]))),Hn=P.span(q||(q=a([`
  `,`
`],[`
  `,`
`])),function(n){return(n.size==="xxl"||n.size==="xl")&&c(V||(V=a([`
      transform: translateY(-1px);
    `],[`
      transform: translateY(-1px);
    `])))}),N=P.button(G||(G=a([`
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`
`],[`
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`;
  `,`
`])),Gn,Jn,de,le,ne,te,re,Zn,Xn,ie,se,me,ue,be,ve),Pn={xxs:.125,xs:.25,sm:.5,md:.75,lg:1,xl:1.25,xxl:1.5};function Jn(n){var e=n.size,t=n.iconOnly,r=n.iconPosition,i=Pn[e],l={left:"auto ".concat((i+.75)/2,"rem auto 0"),right:"auto 0 auto ".concat((i+.75)/2,"rem"),featured:"auto 0.75rem"};return t?c(J||(J=a([`
        svg {
          width: `,`rem;
          height: `,`rem;
          display: inline-flex;
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `],[`
        svg {
          width: `,`rem;
          height: `,`rem;
          display: inline-flex;
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `])),i/1.25+.75,i/1.25+.75):c(X||(X=a([`
        position: relative;

        svg {
          width: `,`rem;
          min-width: `,`rem;
          height: 100%;
          min-height: 100%;
          display: inline-flex;
          margin: `,`;
          position: `,`;
          right: `,`;
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `],[`
        position: relative;

        svg {
          width: `,`rem;
          min-width: `,`rem;
          height: 100%;
          min-height: 100%;
          display: inline-flex;
          margin: `,`;
          position: `,`;
          right: `,`;
          overflow: visible;

          > * {
            fill: currentColor;
          }
        }
      `])),i/1.25+.75,i/1.25+.75,l[r],r==="action"&&"absolute",r==="action"&&"0.5rem")}function Xn(n){var e=n.$loading;return e&&c(Z||(Z=a([`
      cursor: wait !important;

      svg,
      `,", ",` {
        opacity: 0;
      }
    `],[`
      cursor: wait !important;

      svg,
      `,", ",` {
        opacity: 0;
      }
    `])),Sn,Hn)}function Zn(n){var e=n.theme;return{transition:e.a11y.motion?"none":"all 170ms ease-in-out, font-size 50ms ease-in-out, width 0ms linear, padding 130ms ease-in-out"}}function ne(n){var e=n.icon,t=n.iconOnly,r=n.iconPosition,i=n.size;return!t&&ee(e,r,Pn[i])}function ee(n,e,t){var r=o(3),i="".concat(t*4+2,"rem");switch(n&&e){case"left":return{padding:"0 "+t+"rem",minHeight:r,minWidth:i};case"right":return{padding:"0 "+t+"rem",minHeight:r,minWidth:i};case"featured":return{padding:"0 ".concat(t,"rem 0 ").concat(t+2.5,"rem"),minHeight:r,minWidth:"".concat(t*12,"rem")};case"action":return{padding:"0 2.5rem 0 0.5rem",minHeight:r,minWidth:i};default:return{padding:"0 ".concat(t,"rem"),minHeight:r,minWidth:i}}}function re(n){var e=n.floating,t=e===void 0?null:e;return t&&c(nn||(nn=a([`
      box-shadow: 0 `," "," 0 ",`;

      &:active {
        transform: translateY(0) scale(0.98);
      }

      &:hover:not(:active) {
        transform: translateY(-1px) scale(1.01);
        box-shadow: 0 `," "," 0 ",`;
      }
    `],[`
      box-shadow: 0 `," "," 0 ",`;

      &:active {
        transform: translateY(0) scale(0.98);
      }

      &:hover:not(:active) {
        transform: translateY(-1px) scale(1.01);
        box-shadow: 0 `," "," 0 ",`;
      }
    `])),o(3),o(6),u(D,.125),o(5),o(7),u(D,.175))}function te(n){var e=n.size,t=n.pill,r=n.circular;r&&(t=!0);var i=t?"2rem":o(H[e]);return{borderRadius:i}}function oe(n,e,t){var r,i,l,s;return n?typeof n=="string"?(r=n,i=C(.15,r),l=g(.15,r),s=S(r)):n.color&&(r=n.color,i=n.hover?n.hover:C(.15,r),l=n.active?n.active:g(.15,r),s=n.textColor?n.textColor:S(n.color)):(r=t.formats[e],i=C(.15,r),l=g(.15,r),s=null),{color:r,hoverColor:i,activeColor:l,textColor:s}}function ie(n){var e=n.active,t=n.color,r=n.format,i=n.theme,l=n.variant;if(!r.includes("upsell")){var s=oe(t,r,i),d=s.color,h=s.hoverColor,m=s.activeColor,_=s.textColor,b="1px",W=d,v=_||L(d),x=t?S(h):L(h),f=t?S(m):L(m);switch(l){case"outline":return c(en||(en=a([`
        border: `," solid ",`;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }
      `],[`
        border: `," solid ",`;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }
      `])),b,W,d,i.name==="light"?g(.1,d):C(.5,d),i.name==="light"?u(m,.2):u(C(.3,m),.3));case"dashed":return c(rn||(rn=a([`
        border: `," dashed ",`;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }
      `],[`
        border: `," dashed ",`;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }
      `])),b,W,d,g(.2,d),u(m,.2));case"minimal":var k=c(tn||(tn=a([`
        background: `,`;
        color: `,`;
      `],[`
        background: `,`;
        color: `,`;
      `])),m,f);return c(on||(on=a([`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }

        `,`

        `,`
      `],[`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }

        `,`

        `,`
      `])),b,d,x,d,"&:active { ".concat(k," }"),e&&k);case"hyperminimal":return c(an||(an=a([`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          border: `,` solid transparent;
          /* color: hoverColorDark */
          color: `,`;
        }
      `],[`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          border: `,` solid transparent;
          /* color: hoverColorDark */
          color: `,`;
        }
      `])),b,d,b,h);case"minimalTransparent":var w=c(cn||(cn=a([`
        border: `,` solid transparent;
        background: `,`;
      `],[`
        border: `,` solid transparent;
        background: `,`;
      `])),b,u(d,.1));return c(ln||(ln=a([`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          border: `,` solid transparent;
          background: `,`;
          color: `,`;
        }

        `,`

        `,`
      `],[`
        border: `,` solid transparent;
        background: transparent;
        color: `,`;

        &:hover {
          border: `,` solid transparent;
          background: `,`;
          color: `,`;
        }

        `,`

        `,`
      `])),b,d,b,u(d,.1),h,"&:active { ".concat(w," }"),e&&w);case"transparent":var y=c(dn||(dn=a([`
        background: `,`;
      `],[`
        background: `,`;
      `])),u(g(.2,m),.75));return c(un||(un=a([`
        background: `,`;
        color: `,`;

        &:active {
          background: `,`;
        }

        `,`

        `,`

        &:hover:not(:active) {
          background: `,`;
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */
        }
      `],[`
        background: `,`;
        color: `,`;

        &:active {
          background: `,`;
        }

        `,`

        `,`

        &:hover:not(:active) {
          background: `,`;
          /* if: grow */
          /* transform: scale(1.01); */
          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */
        }
      `])),u(d,.6),Qn,u(g(.2,m),.75),"&:active { ".concat(y," ").concat(c(sn||(sn=a([`
          transform: scale(0.98);
        `],[`
          transform: scale(0.98);
        `])))," }"),e&&y,u(d,.675));default:var z=c(mn||(mn=a([`
        background: `,`;
        color: `,`;
      `],[`
        background: `,`;
        color: `,`;
      `])),m,f);return c(vn||(vn=a([`
        border: `," solid ",`;
        background: `,`;
        color: `,`;

        `,`

        `,`

      &:hover:not(:active) {
          background: `,`;
          color: `,`;
        }
      `],[`
        border: `," solid ",`;
        background: `,`;
        color: `,`;

        `,`

        `,`

      &:hover:not(:active) {
          background: `,`;
          color: `,`;
        }
      `])),d,d,d,v,"&:active { ".concat(z," ").concat(c(bn||(bn=a([`
          transform: scale(0.98);
        `],[`
          transform: scale(0.98);
        `]))),"}"),e&&z,h,x)}}}var ae=function(n){var e=n.min,t=e===void 0?0:e,r=n.max,i=n.type,l=i===void 0?"only screen":i;return!r||t===r?"@media ".concat(l," and (min-width: ").concat(B(t),")"):"@media ".concat(l," and (min-width: ").concat(B(t),") and (max-width: ").concat(B(r),")")},U=function(n){var e=n.min,t=e===void 0?0:e,r=n.max;return c(fn||(fn=a([`
  `,` {
    width: 100%;
  }
`],[`
  `,` {
    width: 100%;
  }
`])),ae({min:t,max:r}))},ce=function(n){return U(n===!0?{}:n)};function le(n){var e=n.fluid;return e&&ce(e)}function de(n){var e=n.size;switch(e){case"xxl":return{fontSize:o(20),lineHeight:o(72-2),height:o(72),minWidth:o(72)};case"xl":return{fontSize:o(18),lineHeight:o(56-2),height:o(56),minWidth:o(56)};case"lg":return{fontSize:o(16),lineHeight:o(48-2),height:o(48),minWidth:o(48)};case"md":return{fontSize:o(14),lineHeight:o(40-2),height:o(40),minWidth:o(40)};case"sm":return{fontSize:o(14),lineHeight:o(32-2),height:o(32),minWidth:o(32)};case"xs":return{fontSize:o(12),lineHeight:o(24-2),height:o(24),minWidth:o(24)};case"xxs":return{fontSize:o(10),lineHeight:o(20-2),height:o(20),minWidth:o(20)}}}function se(n){var e=n.disabled;return c(hn||(hn=a([`
    &:disabled {
      `,`
    }
    `,`
  `],[`
    &:disabled {
      `,`
    }
    `,`
  `])),K,e&&K)}var K=c(pn||(pn=a([`
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`],[`
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
`])));function ue(n){var e=n.checked;return e&&c(gn||(gn=a([`
      border: 2px solid `,`;

      &:hover:not(:active) {
        border: 2px solid `,`;
      }
    `],[`
      border: 2px solid `,`;

      &:hover:not(:active) {
        border: 2px solid `,`;
      }
    `])),A(500),A(500))}function me(n){var e=n.variant,t=n.textShift,r=n.iconPosition;if(e.includes("minimal")){var i=r==="right"?"left":"right",l="padding-"+i;return t&&c(xn||(xn=a([`
      &:not(:hover):not(:focus):not(:focus-within) {
        `,`: 0;
      }
    `],[`
      &:not(:hover):not(:focus):not(:focus-within) {
        `,`: 0;
      }
    `])),l)}}function be(n){var e=n.format,t=n.theme;if(e==="upsell"){var r=Wn.color.upsell.sm,i=t.name==="dark"?"linear-gradient(to right,#00cc6b,#00cca7,#00b0e7)":"linear-gradient(to right,#00de59,#00d39e,#00aaf3)",l=t.name==="dark"?"linear-gradient(to right,#009c52,#00a385,#008cb8)":"linear-gradient(to right,#00af46,#00a47a,#0089c4)";return c(kn||(kn=a([`
    border: 1px solid transparent;
    background: `," padding-box, ",` border-box;
    color: #fff;

    &:active {
      background: `," padding-box, ",` border-box;
      transform: scale(0.98);
      color: #fff;
    }

    &:hover:not(:active) {
      background: `," padding-box, ",` border-box;
      border: 1px solid transparent;
      color: #fff;
    }
  `],[`
    border: 1px solid transparent;
    background: `," padding-box, ",` border-box;
    color: #fff;

    &:active {
      background: `," padding-box, ",` border-box;
      transform: scale(0.98);
      color: #fff;
    }

    &:hover:not(:active) {
      background: `," padding-box, ",` border-box;
      border: 1px solid transparent;
      color: #fff;
    }
  `])),r,r,r,l,i,i)}}function ve(n){var e=n.format;if(e==="upsell-new")return c(wn||(wn=a([`
    border: 1px solid transparent;
    background: `,`;
    color: `,`;

    &:active {
      background: `,`;
      transform: scale(0.98);
      color: `,`;
    }

    &:hover:not(:active) {
      background: `,`;
      border: 1px solid transparent;
      color: `,`;
    }
  `],[`
    border: 1px solid transparent;
    background: `,`;
    color: `,`;

    &:active {
      background: `,`;
      transform: scale(0.98);
      color: `,`;
    }

    &:hover:not(:active) {
      background: `,`;
      border: 1px solid transparent;
      color: `,`;
    }
  `])),Wn.color.upsell.New,j(0),j(600),j(0),j(500),j(0))}var Q,V,q,G,J,X,Z,nn,en,rn,tn,on,an,cn,ln,dn,sn,un,mn,bn,vn,fn,hn,pn,gn,xn,kn,wn,fe={xl:o(40),lg:o(26),md:o(24),sm:o(16),xs:o(12)},he=Un(yn||(yn=a([`
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg) }
`],[`
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg) }
`])));function pe(n){var e,t,r=n.theme,i=((t=(e=r==null?void 0:r.motion)===null||e===void 0?void 0:e.loaderCircular)===null||t===void 0?void 0:t.speed)||800;return c(zn||(zn=a([`
    animation: `," ",`ms linear infinite;
  `],[`
    animation: `," ",`ms linear infinite;
  `])),he,i)}var ge=P.div(On||(On=a([`
  `,`;
  `,`;
`],[`
  `,`;
  `,`;
`])),pe,xe);function xe(n){var e,t,r=n.theme,i=n.format,l=r.formats[i],s=i==="adapative"?"currentColor":l;return((t=(e=r==null?void 0:r.motion)===null||e===void 0?void 0:e.loaderCircular)===null||t===void 0?void 0:t.shape)||c(jn||(jn=a([`
      border-width: `,`;
      border-style: solid;
      border-color: `,`;
      border-bottom-color: transparent !important;
      `,`;
    `],[`
      border-width: `,`;
      border-style: solid;
      border-color: `,`;
      border-bottom-color: transparent !important;
      `,`;
    `])),o(2),s,ke)}function ke(n){var e=n.size,t=fe[e];return{width:t,height:t,borderRadius:t}}var yn,zn,On,jn,we=Rn(ye);function ye(n){var e=n.format,t=e===void 0?"primary":e,r=n.size,i=r===void 0?"md":r,l=n.forwardRef,s=Cn(n,["format","size","forwardRef"]);return p.createElement("div",_n({},s),p.createElement(ge,{ref:l,format:t,size:i}))}function ze(n){return function(e){n.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Re=Rn(Oe);function Oe(n){var e=n.active,t=e===void 0?!1:e,r=n.checked,i=r===void 0?!1:r,l=n.children,s=n.color,d=n.element,h=d===void 0?"button":d,m=n.fluid,_=n.format,b=_===void 0?"primary":_,W=n.forwardRef,v=n.icon,x=n.iconPosition,f=x===void 0?"left":x,k=n.loading,w=n.pill,y=w===void 0?!1:w,z=n.size,O=z===void 0?"md":z,$=n.status,T=n.textShift,$n=T===void 0?!1:T,En=n.theme,Bn=n.type,Y=n.variant,Ln=Y===void 0?"solid":Y,F=n.onClick,Tn=Cn(n,["active","checked","children","color","element","fluid","format","forwardRef","icon","iconPosition","loading","pill","size","status","textShift","theme","type","variant","onClick"]),R=Kn.useRef(null),Yn=typeof l>"u"&&v,Fn=f==="left"&&v,In=f==="right"&&v,Dn=f==="featured"&&v,An=f==="action"&&v,Mn=y?50:H[O]+2,I=b;return $&&$!=="neutral"&&(I=$),p.createElement(N,_n({as:h,color:s,fluid:m,format:I,icon:!!v,iconOnly:Yn,iconPosition:f,$loading:k,pill:y,ref:ze([R,W]),size:O,textShift:$n,theme:En,type:Bn,checked:i,active:t,variant:Ln,onClick:function(Nn){var E;(E=R==null?void 0:R.current)===null||E===void 0||E.focus(),F&&F(Nn)}},Tn),Dn&&p.createElement(Sn,{size:O},v),Fn,l&&p.createElement(Hn,{size:O},l),In,An,k&&p.createElement(we,{size:O,format:"adaptive",style:Vn}),p.createElement(qn,{parent:N,radius:Mn,isKeyboardOnly:!0}))}export{Re as B,we as L};
//# sourceMappingURL=Button.esm.js.map
