(this.webpackJsonpgitmarkonics=this.webpackJsonpgitmarkonics||[]).push([[0],{170:function(e,t,a){},171:function(e,t,a){},269:function(e,t,a){},273:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(101),c=a.n(r),o=(a(170),a(171),a(104)),i=a.n(o),m=a(152),s=a(153),u=a(154),d=a(163),E=a(162),g=a(36),h=(a(268),a(269),a(160)),p=a(296),f=a(292),b=a(307),v=a(305),C=a(297),_=a(88),k=a(87),S=a.n(k),w=a(303),y=a(295),N=function(e){return l.a.createElement(f.a,{flex:"1",bg:"white",border:"1px",borderColor:"gray.10",p:5},l.a.createElement(w.e,null,l.a.createElement(w.b,null,l.a.createElement(w.a,null,"Output"),l.a.createElement(w.a,null,"Preview")),l.a.createElement(w.d,null,l.a.createElement(w.c,null,l.a.createElement(y.a,null,e.file)),l.a.createElement(w.c,null,l.a.createElement("div",{dangerouslySetInnerHTML:function(){var t=S()("_Nothing_ to show ");return e.file?(t=S()(e.file),console.log(e.file),console.log()):t=S()("_Nothing_ to show "),{__html:t}}()})))))},x=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={editorState:g.EditorState.createEmpty(),file:""},n.onChange=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({editorState:t});case 2:return e.next=4,Object(h.a)(n.state.editorState.getCurrentContent());case 4:a=e.sent,n.setState({file:n.replacer(a)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(u.a)(a,[{key:"replacer",value:function(e){return e=(e=e.replace(/<p>/g,"").replace(/<\/p>/g,"</br>").replace(/<br>/g,"").replace(/<strong>/g,"**").replace(/<\/strong>/g,"**").replace(/&nbsp;/g," ")).replace(/<em>/g,"_").replace(/<\/em>/g,"_")}},{key:"_onBoldClick",value:function(){this.onChange(g.RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))}},{key:"_onItalicClick",value:function(){this.onChange(g.RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))}},{key:"_onUnderlineClick",value:function(){this.onChange(g.RichUtils.toggleInlineStyle(this.state.editorState,"UNDERLINE"))}},{key:"onDownload",value:function(){var e=document.createElement("a");e.href="data:attachment/text,"+encodeURI(this.file),e.target="_blank",e.download="README.md",e.click()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{color:"black"},l.a.createElement(f.a,{flex:"1",bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2},l.a.createElement(b.b,{direction:"row",spacing:1,align:"center"},l.a.createElement(v.a,{onClick:this._onBoldClick.bind(this)},l.a.createElement(C.a,{as:_.a})),l.a.createElement(v.a,{onClick:this._onItalicClick.bind(this)}," ",l.a.createElement(C.a,{as:_.c})),l.a.createElement(v.a,{onClick:this.onDownload.bind(this)},l.a.createElement(C.a,{as:_.b})," \xa0Download")),l.a.createElement(f.a,{className:"editors-panel"},l.a.createElement(g.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,placeholder:"Lets Start Documenting ..."}))),l.a.createElement(N,{file:this.state.file})))}}]),a}(n.Component),I=(a(273),a(156)),L=a(298),R=a(82),O=a.p+"static/media/GitMarkonics_white.36ad85f7.png";var D=function(){return l.a.createElement(f.a,{className:"nav_header",p:1},l.a.createElement(p.a,{direction:"row "},l.a.createElement("img",{src:O,alt:"heading",width:"80px"}),l.a.createElement(L.a,null),l.a.createElement(b.b,{direction:"row",spacing:2},l.a.createElement(R.b,{to:"/login"},l.a.createElement(v.a,{leftIcon:l.a.createElement(I.a,null),colorScheme:"pink",variant:"solid"},"Login")),l.a.createElement(v.a,{colorScheme:"white",variant:"outline"},"Register"))))},F=a(13),U=(a(279),a(299)),B=a(300),j=a(301),A=a(306),z=a(302),T=a(83);var P=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__container"},l.a.createElement("div",{className:"login__containerTop"},l.a.createElement("div",{className:"login__img"}),l.a.createElement("p",null,"Add a crisp to your bulky documents !!"),l.a.createElement("h4",null,"Welcome to the website")),l.a.createElement("div",{className:"login__containerBottom"},l.a.createElement(b.c,{className:"input__container",w:"65%",m:"auto"},l.a.createElement(U.a,{fontSize:"1.2rem",color:"blue.500",fontWeight:"semibold",py:3},"USER LOGIN"),l.a.createElement(B.a,{w:"95%",borderRadius:"full",bgColor:"gray.200"},l.a.createElement(j.a,{margin:"0 20px",pointerEvents:"none",children:l.a.createElement(T.a,{color:"#C6C6E8",fontSize:"2.1rem"})}),l.a.createElement(A.a,{borderRadius:"full",type:"tel",placeholder:"Username",paddingLeft:"60px"})),l.a.createElement(B.a,{className:"login__input",w:"95%",borderRadius:"full",bgColor:"gray.200"},l.a.createElement(j.a,{margin:"0 20px",pointerEvents:"none",children:l.a.createElement(T.b,{color:"#C6C6E8",fontSize:"2.1rem"})}),l.a.createElement(A.a,{type:"tel",borderRadius:"full",placeholder:"Password",paddingLeft:"60px"})),l.a.createElement(b.a,{className:"login__btn",alignSelf:"flex-end"},l.a.createElement(v.a,{colorScheme:"pink",px:"6",size:"sm",fontWeight:"bold",className:"loginBtn"},"LOGIN"),l.a.createElement(z.a,{fontSize:"sm",textDecoration:"underline",color:"blue"},"Forgot password?"))))))};var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(R.a,null,l.a.createElement(F.c,null,l.a.createElement(F.a,{path:"/login"},l.a.createElement(P,null)),l.a.createElement(F.a,{path:"/"},l.a.createElement(D,null),l.a.createElement(x,null)))))},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,308)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))},W=a(304);c.a.render(l.a.createElement(W.a,null,l.a.createElement(G,null)),document.getElementById("root")),M()}},[[280,1,2]]]);
//# sourceMappingURL=main.4b87718b.chunk.js.map