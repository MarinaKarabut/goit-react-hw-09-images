(this["webpackJsonpgoit-react-hw-09-image-finder"]=this["webpackJsonpgoit-react-hw-09-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__IWGhM",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__3FP1h"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__1EBYW",modal:"Modal_modal__3OkE1"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__31quU"}},27:function(e,t,a){e.exports={button:"Button_button__1Y1WX"}},29:function(e,t,a){e.exports={wrapper:"Loader_wrapper__21e7K"}},30:function(e,t,a){e.exports={error:"ErrorMessage_error__1WEbR"}},31:function(e,t,a){e.exports={app:"App_app__1kX79"}},37:function(e,t,a){},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1VDBy",searchForm:"Searchbar_searchForm__1bw2f",searchFormButton:"Searchbar_searchFormButton__2tXNF",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__2FRyr",searchFormInput:"Searchbar_searchFormInput__Khc6Q"}},79:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(8),o=a.n(n),s=(a(37),a(12)),i=a.n(s),u=a(16),l=a(25),b=a(4),m=a(13),j=a.n(m),h=a(5),O=a(32),d=a(14),p=a.n(d),f=a(1);function g(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,c=e.onClick;return Object(f.jsx)("li",{className:p.a.imageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:r,className:p.a.imageGalleryItemImage,"data-source":a,onClick:function(){return c(a)}})})}var v=Object(r.memo)(g);g.defaultProps={tags:""};var _=a(26),x=a.n(_);function y(e){var t=e.images,a=e.onClick,r=t.map((function(e){var t=e.id,r=Object(O.a)(e,["id"]);return Object(f.jsx)(v,Object(h.a)(Object(h.a)({},r),{},{onClick:a}),t)}));return Object(f.jsx)("ul",{className:x.a.imageGallery,children:r})}var S=Object(r.memo)(y);y.defaultProps={images:[]};var w=a(10),I=function(e){var t=e.initialState,a=e.onSubmit,c=void 0===a?function(){}:a,n=Object(r.useState)(t),o=Object(b.a)(n,2),s=o[0],i=o[1];return[s,i,function(e){var t=e.target,a=t.name,r=t.value;i(Object(h.a)(Object(h.a)({},s),{},Object(w.a)({},a,r)))},function(e){e.preventDefault(),c(s),i(t)}]},k={query:""},F=a(6),N=a.n(F),C=function(e){var t=e.onSubmit,a=I({initialState:k,onSubmit:t}),r=Object(b.a)(a,4),c=r[0],n=r[2],o=r[3];return Object(f.jsx)("header",{className:N.a.searchbar,children:Object(f.jsxs)("form",{className:N.a.searchForm,onSubmit:o,children:[Object(f.jsx)("button",{type:"submit",className:N.a.searchFormButton,children:Object(f.jsx)("span",{className:N.a.searchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:N.a.searchFormInput,type:"text",name:"query",value:c.query,onChange:n,placeholder:"Search images and photos",autoComplete:"off"})]})})},G=Object(r.memo)(C),B=a(27),E=a.n(B);function L(e){var t=e.onClick,a=e.children;return Object(f.jsx)("button",{onClick:t,className:E.a.button,children:a})}var q=Object(r.memo)(L),R=a(28),M=a.n(R),P=(a(78),a(29)),T=a.n(P);var U=function(){return Object(f.jsx)("div",{className:T.a.wrapper,children:Object(f.jsx)(M.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:3e3})})},W=a(30),D=a.n(W);function X(e){var t=e.text;return Object(f.jsx)("p",{className:D.a.error,children:t})}var J=Object(r.memo)(X),K=a(15),Y=a.n(K),z=document.querySelector("#modal-root"),A=function(e){var t=e.children,a=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",(function(e){"Escape"===e.code&&a()})),window.removeEventListener("keydown",(function(e){e.currentTarget===e.target&&a()}))}),[]);return Object(n.createPortal)(Object(f.jsx)("div",{className:Y.a.overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(f.jsx)("div",{className:Y.a.modal,children:t})}),z)},H=Object(r.memo)(A);j.a.defaults.baseURL="https://pixabay.com";var Q=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(!0),o=Object(b.a)(n,2),s=o[0],m=o[1],h=Object(r.useState)(null),O=Object(b.a)(h,2),d=O[0],p=O[1],g=Object(r.useState)(1),v=Object(b.a)(g,2),_=v[0],x=v[1],y=Object(r.useState)(""),w=Object(b.a)(y,2),I=w[0],k=w[1],F=Object(r.useState)(!1),N=Object(b.a)(F,2),C=N[0],B=N[1],E=Object(r.useState)(""),L=Object(b.a)(E,2),R=L[0],M=L[1],P=Object(r.useRef)(),T=function(){return e=P,window.scrollTo({top:e.current.scrollHeight,behavior:"smooth"});var e};Object(r.useEffect)((function(){s&&function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/api/?q=".concat(I,"&page=").concat(_,"&key=20930495-600a23973a3be0872b747cdc1&image_type=photo&orientation=horizontal&per_page=12"),e.next=4,j.a.get(t);case 4:r=e.sent,n=r.data,m(!1),c([].concat(Object(u.a)(a),Object(u.a)(n.hits))),_>1&&T(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[I,_]);var W=function(e){B(!C),M(e)};return Object(f.jsxs)(f.Fragment,{children:[C&&Object(f.jsx)(H,{onClose:W,children:Object(f.jsx)("img",{src:R,alt:""})}),Object(f.jsx)(G,{onSubmit:function(e){var t=e.query;k(t),c([]),x(1),m(!0),p(null)}}),d&&Object(f.jsx)(J,{text:d}),Object(f.jsx)("div",{ref:P,children:Object(f.jsx)(S,{images:a,onClick:W})}),s&&Object(f.jsx)(U,{}),a.length>0&&!s&&Object(f.jsx)(q,{onClick:function(){x(_+1),m(!0)},children:"Load more"})]})},V=a(31),Z=a.n(V);var $=function(){return Object(f.jsx)("div",{className:Z.a.app,children:Object(f.jsx)(Q,{})})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)($,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b0f5df94.chunk.js.map