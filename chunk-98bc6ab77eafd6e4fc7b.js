"use strict";(self.webpackChunkmrkt_web_client_app=self.webpackChunkmrkt_web_client_app||[]).push([[251],{83251:function(e,t,n){n.r(t);var a=n(41609),o=n.n(a),r=n(67294),i=n(45697),s=n.n(i),c=n(96974),l=n(14819),g=n(20099),y=n(1701),m=n(677),p=n(779),u=n(11790),C=n(45082),d=n(49464),b=n(99699),h=n(72721),E=n(76858),T=n(6159),w=n(1276),Z=n(76271),S=n(20277),f=n(93730),k=n(14812),O=n(19891),I=n(55769),P=n(24206);const x="i1.adis.ws";function A(e){let{pageId:t}=e;const{solutionId:n}=(0,c.UO)(),{pathname:a,search:i}=(0,c.TH)(),{data:s,loading:A,isAuthorized:_}=(0,l.iF)(`${t}/key/${n}`),q=(0,g.Z)(),[v,D]=(0,r.useState)(null),[$,B]=(0,r.useState)(!1),[K,R]=(0,r.useState)(!1),[V,j]=(0,r.useState)([]),[z,F]=(0,r.useState)(""),[G,L]=(0,r.useState)(!1),{setPersonalEmails:M}=(0,r.useContext)(I.Z);(0,r.useEffect)((()=>{if(B(!1),s?.solution){const{imageItems:e}=s?.solution?.content;let t=(0,m.go)(e);t&&(t={...t.image,title:t.title},(0,y.f5)([t],(()=>{}),x).then((e=>{o()(e)?B(!1):(B(!0),D(e))})))}M(s?.content?.personalEmails?.emails)}),[s]),(0,r.useEffect)((()=>{const e=new URLSearchParams(i);$&&"true"===e.get("showDemo")?(R(!0),(0,O.o)()):(R(!1),(0,O.j)())}),[v]);const N=s?.solution?.content,H=s?.content?.tabsOrder,U=s?.content?.rightPanelOrder,W=s?.content?.mobileRightPanelOrder,J=N?.name?`${N?.name} | EPAM SolutionsHub`:null,Q={title:N?.meta&&N.meta.title||J,description:N?.meta?N.meta.description:""},X={title:Q.title||"",description:Q.description||"",image:N?.imageItems?.length>0?(0,h._o)(N.imageItems[0]?.image,"?maxW=400&qlt=80&fmt=jpg&bg=rgb(255,255,255)"):(0,k.o)(),url:window.location.href,type:"website"};let Y=!1;return A?r.createElement(d.Z,{className:"solutionPageContainer",isLoaderContainer:!0},r.createElement(p.Z,{meta:o()(Q)?{title:""}:Q,seoKeywords:_?"":s?.solution?.content?.seoKeywords,og:X}),r.createElement(u.Z,{categories:s?.content?.categoryContainer?.categories,internalCategories:s?.content?.internalCategoryContainer?.categories,mode:_?"internal":"external",types:s?.content?.categoryContainer?.types,assetTypes:s?.content?.internalCategoryContainer?.types,licenceTypes:s?.content?.categoryContainer?.licenceTypes}),r.createElement(w.Z,null),r.createElement(C.Z,{categoryContainer:s?.content?.categoryContainer?.categories,internalCategoryContainer:s?.content?.internalCategoryContainer?.categories,mode:_?"internal":"external",types:s?.content?.categoryContainer?.types,assetTypes:s?.content?.internalCategoryContainer?.types,licenceTypes:s?.content?.categoryContainer?.licenceTypes})):(N?.name?.includes("GENTL")&&(Y=!0),$&&(N.watchMyDemo=`${window.location.origin}${a}?showDemo=true`),r.createElement(d.Z,{className:"solutionPageContainer"},r.createElement(T.Z,{solution:N},r.createElement(p.Z,{meta:o()(Q)?{title:""}:Q,og:X,seoKeywords:_?"":s?.solution?.content?.seoKeywords}),r.createElement(u.Z,{categories:s?.content?.categoryContainer?.categories,internalCategories:s?.content?.internalCategoryContainer?.categories,mode:_?"internal":"external",globalVariables:s?.content?.globalVariables,types:s?.content?.categoryContainer?.types,assetTypes:s?.content?.internalCategoryContainer?.types,pathname:a,licenceTypes:s?.content?.categoryContainer?.licenceTypes}),$&&K&&v&&r.createElement(f.Z,{type:"external"},r.createElement(S.Z,{currentIndex:0,items:v,isOpen:K,onClose:()=>{R(!1),(0,O.j)()}})),r.createElement(Z.Z,{solution:N,isVideo:$,setShowDemo:R,isAuthorized:_,arrayTabs:V,setActiveTab:F,activeTab:z,breakpoint:q,setIntersectionStop:L}),r.createElement(P.Z,null),r.createElement(E.Z,{solution:N,isMask:Y,categories:s?.content?.categoryContainer?.categories,isVideo:$,setShowDemo:R,isAuthorized:_,tabsOrder:H,arrayTabs:V,setArrayTabs:j,setActiveTab:F,activeTab:z,breakpoint:q,requestSolutionBanner:s?.content?.requestSolutionBanner,rightPanelOrder:U,intersectionStop:G,setIntersectionStop:L,isFaqOpened:s?.content?.isFaqOpened,mobileRightPanelOrder:W,pathname:a,actionBanner:s?.content?.actionBanner}),r.createElement(C.Z,{categoryContainer:s?.content?.categoryContainer?.categories,internalCategoryContainer:s?.content?.internalCategoryContainer?.categories,mode:_?"internal":"external",types:s?.content?.categoryContainer?.types,assetTypes:s?.content?.internalCategoryContainer?.types,licenceTypes:s?.content?.categoryContainer?.licenceTypes})),r.createElement(b.Z,{userGuide:s?.content?.userGuide})))}A.propTypes={pageId:s().string.isRequired},t.default=A}}]);