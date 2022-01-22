(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[19],{1328:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var c,o,i=n(10),a=n(7),r=n(1),j=n(8),l=n(2),d=n(4),s=n(13),b=n(106),O=n(34),x=n(56),u=n(363),p=n(25),h=n(427),g=n(128),f=n(20),v=n(52),y=n(96),m=n(846),T=n(159),I=n(212),k=n(187),E=n(241),N=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(d.e)(l.o)(c||(c=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function C(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(r.useState)(o.TOKEN1),a=Object(i.a)(c,2),d=a[0],C=a[1],A=Object(r.useState)(j.d),w=Object(i.a)(A,2),K=w[0],q=w[1],B=Object(r.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],J=Object(g.b)(null!==K&&void 0!==K?K:void 0,null!==X&&void 0!==X?X:void 0),M=Object(i.a)(J,2),P=M[0],z=M[1],F=Object(v.f)();Object(r.useEffect)((function(){z&&F(z)}),[z,F]);var G=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&z&&j.e.equal(z.reserve0.raw,j.e.BigInt(0))&&j.e.equal(z.reserve1.raw,j.e.BigInt(0))),R=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===z||void 0===z?void 0:z.liquidityToken),V=Boolean(R&&j.e.greaterThan(R.raw,j.e.BigInt(0))),W=Object(r.useCallback)((function(e){d===o.TOKEN0?q(e):D(e)}),[d]),Y=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(l.ac,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),_=Object(l.zc)(Object(N.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?X:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(_,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.C,{}),onClick:function(){H(),C(o.TOKEN0)},children:K?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:K}),Object(N.jsx)(l.ac,{ml:"8px",children:K.symbol})]}):Object(N.jsx)(l.ac,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.C,{}),onClick:function(){H(),C(o.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(l.ac,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(l.ac,{as:p.d,children:n("Select a Token")})}),V&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.ac,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.ac,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&X?P===g.a.EXISTS?V&&z?Object(N.jsx)(u.a,{pair:z}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.ac,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(l.ac,{textAlign:"center",children:n("Add Liquidity")})})]})}):G?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.ac,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.ac,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.ac,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:Y]})]})})}},846:function(e,t,n){"use strict";var c,o=n(7),i=n(85),a=n(4),r=Object(a.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=r}}]);
//# sourceMappingURL=19.e7501d38.chunk.js.map