(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1338:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(3),s=n.n(a),i=n(12),l=n(1),b=n(2),j=n(41),u=n(71),d=n(85),x=n(66),p=n(111),O=n(799),h=n(364),f=n(13),m=n(235),v=n(878),g=n(362),w=n(772),S=n(814),k=n(843),y=n(7),B=n(4),C=n(748),I=n(35),A=n(769),D=n(773),L=n(0),V=Object(B.e)(b.l)(c||(c=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),E=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(L.jsxs)(b.s,{mb:"16px",children:[Object(L.jsx)(b.v,{children:Object(L.jsx)(b.U,{as:"h3",scale:"md",children:n("Details")})}),Object(L.jsxs)(b.t,{children:[Object(L.jsxs)(b.S,{alignItems:"center",mb:"8px",children:[Object(L.jsx)(b.ac,{color:"textSubtle",children:n("Identifier")}),Object(L.jsx)(b.eb,{href:"".concat(D.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(L.jsxs)(b.S,{alignItems:"center",mb:"8px",children:[Object(L.jsx)(b.ac,{color:"textSubtle",children:n("Creator")}),Object(L.jsx)(b.eb,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(L.jsxs)(b.S,{alignItems:"center",mb:"16px",children:[Object(L.jsx)(b.ac,{color:"textSubtle",children:n("Snapshot")}),Object(L.jsx)(b.eb,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(L.jsxs)(V,{p:"16px",children:[Object(L.jsx)(S.a,{proposalState:t.state,mb:"8px"}),Object(L.jsxs)(b.S,{alignItems:"center",children:[Object(L.jsx)(b.ac,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(L.jsx)(b.ac,{ml:"8px",children:Object(C.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(L.jsxs)(b.S,{alignItems:"center",children:[Object(L.jsx)(b.ac,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(L.jsx)(b.ac,{ml:"8px",children:Object(C.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},P=n(800),T=n.n(P),N=Object(B.e)(b.ac)(r||(r=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),z=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(O.e)(),a=Object(j.c)().account,s=Object(w.f)(n);return Object(L.jsxs)(b.s,{children:[Object(L.jsx)(b.v,{children:Object(L.jsx)(b.U,{as:"h3",scale:"md",children:c("Current Results")})}),Object(L.jsxs)(b.t,{children:[o===p.d.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),i=s.eq(0)?0:o.div(s).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(L.jsxs)(b.l,{mt:t>0?"24px":"0px",children:[Object(L.jsxs)(b.S,{alignItems:"center",mb:"8px",children:[Object(L.jsx)(N,{mb:"4px",title:e,children:e}),l&&Object(L.jsxs)(b.Yb,{variant:"success",outline:!0,ml:"8px",children:[Object(L.jsx)(b.A,{mr:"4px"})," ",c("Voted")]})]}),Object(L.jsx)(b.l,{mb:"4px",children:Object(L.jsx)(b.Hb,{primaryStep:i,scale:"sm"})}),Object(L.jsxs)(b.S,{alignItems:"center",justifyContent:"space-between",children:[Object(L.jsx)(b.ac,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(L.jsxs)(b.ac,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.d.LOADING&&T()(t.length).map((function(e,t){return Object(L.jsx)(b.l,{mt:t>0?"24px":"0px",children:Object(L.jsx)(b.Mb,{height:"36px",mb:"4px"})},e)}))]})]})},F=n(6),M=n(10),H=n(49),X=n(90),U=n(100),Y=n(19),J=n(186),G=n(20),W=n(92);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var q,Q,R,_,K,Z,$,ee,te=n(821),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,i=Object(f.b)().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(te.a,{children:[Object(L.jsx)(b.ac,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Voting For")}),Object(L.jsx)(N,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(L.jsx)(b.ac,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Your Voting Power")}),r?Object(L.jsx)(b.Mb,{height:"64px",mb:"24px"}):Object(L.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(L.jsx)(b.ac,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(L.jsx)(b.X,{scale:"sm",variant:"text",children:Object(L.jsx)(b.E,{width:"24px"})})]}),Object(L.jsx)(b.ac,{as:"p",color:"textSubtle",fontSize:"14px",children:i("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(L.jsx)(b.o,{isLoading:c,endIcon:c?Object(L.jsx)(b.h,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:i("Confirm Vote")}),Object(L.jsx)(b.o,{variant:"secondary",width:"100%",onClick:s,children:i("Cancel")})]})},ce=n(844),re=n(845),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(M.a)(d,2),O=x[0],h=x[1],m=Object(l.useState)(!0),v=Object(M.a)(m,2),g=v[0],S=v[1],k=Object(l.useState)(!1),y=Object(M.a)(k,2),B=y[0],C=y[1],I=Object(j.c)().account,A=Object(f.b)().t,D=Object(X.a)().toastError,V=Object(G.a)().library,E=Object(W.a)().theme,P=Object(re.a)(a,g),T=P.isLoading,N=P.total,z=P.cakeBalance,H=P.dexTokenVaultBalance,U=P.cakePoolBalance,q=P.poolsBalance,Q=P.cakeBnbLpBalance,R=P.verificationHash,_=O===o.MAIN,K=_?null:function(){return h(o.MAIN)},Z=(t={},Object(Y.a)(t,o.MAIN,A("Confirm Vote")),Object(Y.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){S(!1),u()},ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),t=JSON.stringify(Object(F.a)(Object(F.a)({},Object(w.e)()),{},{type:p.c.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:N.toString(),verificationHash:R}}})),e.next=5,Object(J.c)(V,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return C(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),C(!1),D(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsx)(b.rb,{title:Z[O],onBack:K,onDismiss:u,hideCloseButton:!_,headerBackground:E.colors.gradients.cardHeader,children:Object(L.jsxs)(b.l,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(L.jsx)(ne,{vote:r,isLoading:T,isPending:B,total:N,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(L.jsx)(ce.a,{total:N,cakeBalance:z,dexTokenVaultBalance:H,cakePoolBalance:U,poolsBalance:q,cakeBnbLpBalance:Q})]})})},ae=["proposal"],se=B.e.label(q||(q=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),ie=B.e.div(Q||(Q=Object(y.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(H.a)(e,ae),c=Object(l.useState)(null),r=Object(M.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(X.a)().toastSuccess,p=Object(x.b)(),O=Object(j.c)().account,m=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(b.zc)(Object(L.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(M.a)(v,1)[0];return Object(L.jsxs)(b.s,Object(F.a)(Object(F.a)({},n),{},{children:[Object(L.jsx)(b.v,{children:Object(L.jsx)(b.U,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(L.jsxs)(b.t,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(L.jsxs)(se,{isChecked:n,isDisabled:!O,children:[Object(L.jsx)("div",{style:{flexShrink:0},children:Object(L.jsx)(b.Jb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(L.jsx)(ie,{children:Object(L.jsx)(b.ac,{as:"span",title:e,children:e})})]},e)})),O?Object(L.jsx)(b.o,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(L.jsx)(U.a,{})]})]}))},be=n(253),je=n.n(be),ue=Object(B.e)(b.S)(R||(R=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(B.e)(b.Mb)(_||(_=Object(y.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(L.jsx)(b.l,{children:T()(10).map((function(e){return Object(L.jsxs)(ue,{children:[Object(L.jsx)(b.Mb,{height:"21px",mr:"32px",width:"100px"}),Object(L.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(L.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(14),Oe=n.n(pe),he=Object(B.e)(b.l).attrs({alignItems:"center"})(K||(K=Object(y.a)(["\n  grid-area: address;\n"]))),fe=Object(B.e)(b.l)(Z||(Z=Object(y.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(B.e)(b.l)($||($=Object(y.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(B.e)(b.T)(ee||(ee=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas: 'address choice vote';\n  grid-template-columns: minmax(110px, 200px) 1fr 1fr;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new Oe.a(n.metadata.votingPower).toFormat(3):"--";return Object(L.jsxs)(ve,{children:[Object(L.jsx)(he,{children:Object(L.jsxs)(b.S,{alignItems:"center",children:[Object(L.jsx)(b.eb,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(L.jsxs)(b.Yb,{variant:"success",outline:!0,ml:"8px",children:[Object(L.jsx)(b.A,{mr:"4px"})," ",r("Voted")]})]})}),Object(L.jsx)(fe,{children:Object(L.jsx)(N,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(L.jsx)(me,{children:Object(L.jsxs)(b.S,{alignItems:"center",justifyContent:"end",children:[Object(L.jsx)(b.ac,{title:n.metadata.votingPower,children:a}),o&&Object(L.jsx)(b.eb,{href:"".concat(D.b,"/").concat(n.id)})]})})]})},we=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},Se=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(M.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,s=Object(j.c)().account,i=je()(t,[we,"created"],["desc","desc"]),u=r?i:i.slice(0,20),d=Object(O.e)()===p.d.IDLE;return Object(L.jsxs)(b.s,{children:[Object(L.jsx)(b.v,{children:Object(L.jsxs)(b.S,{alignItems:"center",justifyContent:"space-between",children:[Object(L.jsx)(b.U,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(L.jsx)(b.h,{spin:!0,width:"22px"})]})}),!d&&Object(L.jsx)(xe,{}),d&&u.length>0&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(ve,{children:[Object(L.jsx)(he,{children:Object(L.jsx)(b.ac,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Voter")})}),Object(L.jsx)(fe,{children:Object(L.jsx)(b.ac,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Decision")})}),Object(L.jsx)(me,{children:Object(L.jsx)(b.ac,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Vote Weight")})})]}),u.map((function(e){var t=s&&e.voter.toLowerCase()===s.toLowerCase();return Object(L.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(L.jsx)(b.S,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(L.jsx)(b.o,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(L.jsx)(b.F,{color:"primary",width:"21px"}):Object(L.jsx)(b.C,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(L.jsx)(b.S,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(L.jsx)(b.U,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(j.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),y=Object(O.b)(),B=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),C=null!==t&&void 0!==t?t:{},I=C.id,A=void 0===I?null:I,D=C.snapshot,V=void 0===D?null:D,P=a===p.d.LOADING||y===p.d.LOADING;return Object(l.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(l.useEffect)((function(){A&&V&&function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:A,block:Number(V)}));case 2:r(Object(h.e)({proposalId:A,snapshot:V}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,V,r]),t?Object(L.jsxs)(m.a,{py:"40px",children:[Object(L.jsx)(b.l,{mb:"40px",children:Object(L.jsx)(b.o,{as:d.a,to:"/voting",variant:"text",startIcon:Object(L.jsx)(b.b,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(L.jsxs)(k.a,{children:[Object(L.jsxs)(b.l,{children:[Object(L.jsxs)(b.l,{mb:"32px",children:[Object(L.jsxs)(b.S,{alignItems:"center",mb:"8px",children:[Object(L.jsx)(S.a,{proposalState:t.state}),Object(L.jsx)(S.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(L.jsx)(b.U,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(L.jsx)(b.l,{children:Object(L.jsx)(v.a,{children:t.body})})]}),!P&&!B&&t.state===p.a.ACTIVE&&Object(L.jsx)(le,{proposal:t,mb:"16px"}),Object(L.jsx)(Se,{votes:o})]}),Object(L.jsxs)(b.l,{children:[Object(L.jsx)(E,{proposal:t}),Object(L.jsx)(z,{choices:t.choices,votes:o})]})]})]}):Object(L.jsx)(g.a,{})}},769:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},772:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return S})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return y}));var c=n(19),r=n(38),o=n(6),a=n(3),s=n.n(a),i=n(12),l=n(14),b=n.n(l),j=n(21),u=n(119),d=n(29),x=n(111),p=n(91),O=n(773),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.b.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.b.CORE:return e.filter((function(e){return h(e)}));case x.b.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:43114,strategies:[{name:"AVAX DEX",params:{symbol:"ADEX",address:Object(j.f)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},w=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.d,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.e,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),k=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},773:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},799:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(32),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},814:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(6),r=n(49),o=(n(1),n(184)),a=n(111),s=n(0),i=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.a.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.a.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},821:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(6),o=n(7),a=(n(1),n(2)),s=n(4),i=n(0),l=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(a.l,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},843:function(e,t,n){"use strict";var c,r=n(7),o=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},844:function(e,t,n){"use strict";n(1);var c=n(2),r=n(13),o=n(821),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.dexTokenVaultBalance,i=e.cakePoolBalance,l=e.poolsBalance,b=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.ac,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of ADEX you held at the block detailed below. ADEX held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.ac,{color:"secondary",children:j("Your Voting Power")}),Object(a.jsx)(c.ac,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.ac,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(a.jsxs)(c.S,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ac,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(a.jsx)(c.ac,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.S,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ac,{color:"textSubtle",fontSize:"16px",children:j("Manual ADEX Pool")}),Object(a.jsx)(c.ac,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.S,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ac,{color:"textSubtle",fontSize:"16px",children:j("Auto ADEX Pool")}),Object(a.jsx)(c.ac,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.S,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ac,{color:"textSubtle",fontSize:"16px",children:j("Other ADEX Pools")}),Object(a.jsx)(c.ac,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.S,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.ac,{color:"textSubtle",fontSize:"16px",children:j("ADEX AVAX LP")}),Object(a.jsx)(c.ac,{textAlign:"right",children:b.toFormat(3)})]})]})}},845:function(e,t,n){"use strict";var c=n(3),r=n.n(c),o=n(6),a=n(12),s=n(10),i=n(1),l=n(41),b=n(29),j=n(181),u=n(21),d=n(91),x=n(14),p=n.n(x),O=n(772),h={verificationHash:null,cakeBalance:b.d,dexTokenVaultBalance:b.d,cakePoolBalance:b.d,poolsBalance:b.d,cakeBnbLpBalance:b.d,total:b.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,b=Object(i.useState)(h),x=Object(s.a)(b,2),f=x[0],m=x[1],v=Object(i.useState)(!!c),g=Object(s.a)(v,2),w=g[0],S=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,s,i,l,b,x,h,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(S(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(j.b)(a);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,i,a);case 14:l=n.sent,b=l.cakeBalance,x=l.cakeBnbLpBalance,h=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.dexTokenVaultBalance,w=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(b),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),dexTokenVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,S(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,S]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},878:function(e,t,n){"use strict";var c,r,o,a=n(6),s=(n(1),n(882)),i=n.n(s),l=n(918),b=n.n(l),j=n(7),u=n(2),d=n(4),x=n(0),p=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.U,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)(u.ac,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(i.a,Object(a.a)({remarkPlugins:[b.a],components:f},e))}}}]);
//# sourceMappingURL=7.a1d1092b.chunk.js.map