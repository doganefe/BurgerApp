(this.webpackJsonpburgerapp=this.webpackJsonpburgerapp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__3Wgp9",BreadTop:"BurgerIngredients_BreadTop__1nE2z",Seeds1:"BurgerIngredients_Seeds1__27Ipr",Seeds2:"BurgerIngredients_Seeds2__2clzn",Meat:"BurgerIngredients_Meat__3NhMH",Cheese:"BurgerIngredients_Cheese__1IWbR",Salad:"BurgerIngredients_Salad__1RKbE",Bacon:"BurgerIngredients_Bacon__3chnC"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2Qpwu",Label:"BuildControl_Label__1lp8y",Less:"BuildControl_Less__2juaP",More:"BuildControl_More__WfWzT"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem___oSFU"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__DrZLI",OrderButton:"BuildControls_OrderButton__394jf",enable:"BuildControls_enable__2js71"}},function(e,t,a){e.exports={Button:"Button_Button__2ACf6",Success:"Button_Success__w_nHr",Danger:"Button_Danger__OnU6j"}},,,function(e,t,a){e.exports={content:"Layout_content__n0ZOV"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1LssX",Logo:"Toolbar_Logo__2ebLH",DesktopOnly:"Toolbar_DesktopOnly__YTpDK"}},function(e,t,a){e.exports=a.p+"static/media/original.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__2dMEQ"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3VEwd"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1xlWr",Open:"SideDrawer_Open__aoIvo",Close:"SideDrawer_Close__1GUgW"}},,,function(e,t,a){e.exports={Burger:"Burger_Burger__2fC-_"}},function(e,t,a){e.exports={Modal:"Modal_Modal__Xfef3"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3L2a4"}},,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),c=(a(28),a(29),a(9)),o=a.n(c),s=a(10),u=a.n(s),d=a(11),m=a.n(d),b=a(12),_=a.n(b),g=function(e){return r.a.createElement("div",{className:_.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:m.a,alt:"myBurger"}))},p=a(13),E=a.n(p),h=a(4),f=a.n(h),v=function(e){return r.a.createElement("div",{className:f.a.NavigationItem},r.a.createElement("li",null,r.a.createElement("a",{href:e.link,className:e.active?f.a.active:null},e.children)))},B=function(){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(v,{link:"/",active:!0},"Burger Builder"),r.a.createElement(v,{link:"/"},"Checkout"))},k=function(e){return r.a.createElement("header",{className:u.a.Toolbar},r.a.createElement("div",null,"MENU"),r.a.createElement(g,{height:"80%"}),r.a.createElement("nav",null,r.a.createElement(B,null)))},N=a(14),I=a.n(N),y=function(){return r.a.createElement("div",{className:I.a.SideDrawer},r.a.createElement(g,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(B,null)))};var C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement("main",{className:o.a.content},e.children))},S=a(3),w=a(15),O=a(16),x=a(22),D=a(20),L=a(21),M=a(1),j=a.n(M),P=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:j.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:j.a.BreadTop},r.a.createElement("div",{className:j.a.Seeds1}),r.a.createElement("div",{className:j.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:j.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:j.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:j.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:j.a.Salad});break;default:t=null}return t},H=a(17),T=a.n(H),V=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(L.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(P,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:T.a.Burger},r.a.createElement(P,{type:"bread-top"}),t,r.a.createElement(P,{type:"bread-bottom"}))},W=a(5),F=a.n(W),A=a(2),U=a.n(A),Y=function(e){return r.a.createElement("div",{className:U.a.BuildControl},r.a.createElement("p",{className:U.a.Label},e.label),r.a.createElement("button",{className:U.a.Less,onClick:e.removeHandler,disabled:e.disabled},"Less"),r.a.createElement("button",{className:U.a.More,onClick:e.addHandler},"More"))},z=[{label:"meat",type:"meat"},{label:"bacon",type:"bacon"},{label:"salad",type:"salad"},{label:"cheese",type:"cheese"}],J=function(e){return r.a.createElement("div",{className:F.a.BuildControls},r.a.createElement("span",null," total price : ",r.a.createElement("b",null,e.totalPrice.toFixed(1))," "),z.map((function(t){return r.a.createElement(Y,{key:t.label,label:t.label,addHandler:function(){return e.addIngredient(t.type)},removeHandler:function(){return e.removeIngredient(t.type)},disabled:e.isDisabled[t.type]})})),r.a.createElement("button",{className:F.a.OrderButton,disabled:!e.purchasable,onClick:e.ModalIsVisible},"Order Now"))},K=a(18),Q=a.n(K),R=a(19),X=a.n(R),Z=function(e){return e.show?r.a.createElement("div",{onClick:e.clicked,className:X.a.Backdrop},"noli"):null},G=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{show:e.show,clicked:e.backDropClicked}),r.a.createElement("div",{className:Q.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},$=a(6),q=a.n($),ee=function(e){return r.a.createElement("button",{className:[q.a.Button,q.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},te=function(e){var t=e.totalPrice.toFixed(1),a=Object.keys(e.ingredients).map((function(t,a){return r.a.createElement("li",{key:t+a},t," : ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"OrderSummary"),r.a.createElement("p",null,"Delicious burger with following ingredients"),r.a.createElement("ul",null,a),r.a.createElement("p",null,"Total price is : ",r.a.createElement("b",null,t)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(ee,{btnType:"Danger",clicked:e.clickCanceled},"Cancel"),r.a.createElement(ee,{btnType:"Success",clicked:e.clickSubmitted},"Submit"))},ae={salad:.5,bacon:.7,cheese:.4,meat:1.3},ne=function(e){Object(x.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:2.9,purchasable:!1,modalIsVisible:!1},e.updatePurchaseState=function(t){var a=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t}),0);e.setState({purchasable:a>0},(function(){return console.log("purchasable state degeri : "+e.state.purchasable)}))},e.addIngredientHandler=function(t){var a=Object(S.a)({},e.state.ingredients);a[t]++;var n=e.state.totalPrice+ae[t];e.setState({ingredients:a,totalPrice:n}),e.updatePurchaseState(a)},e.removeIngredientHandler=function(t){if(!(e.state.ingredients[t]<=0)){var a=Object(S.a)({},e.state.ingredients);a[t]--;var n=e.state.totalPrice-ae[t];e.setState({ingredients:a,totalPrice:n}),e.updatePurchaseState(a)}},e.visibleHandler=function(){e.setState({modalIsVisible:!e.state.modalIsVisible},(function(){return console.log(e.state.modalIsVisible)}))},e.clickSubmitted=function(){alert("You continued")},e}return Object(O.a)(a,[{key:"render",value:function(){var e=Object(S.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement("div",null,r.a.createElement(G,{show:this.state.modalIsVisible,backDropClicked:this.visibleHandler},r.a.createElement(te,{ingredients:this.state.ingredients,clickCanceled:this.visibleHandler,clickSubmitted:this.clickSubmitted,totalPrice:this.state.totalPrice})),r.a.createElement(V,{ingredients:this.state.ingredients}),r.a.createElement(J,{addIngredient:this.addIngredientHandler,removeIngredient:this.removeIngredientHandler,isDisabled:e,totalPrice:this.state.totalPrice,purchasable:this.state.purchasable,ModalIsVisible:this.visibleHandler}))}}]),a}(n.Component);var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null,r.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.4beac589.chunk.js.map