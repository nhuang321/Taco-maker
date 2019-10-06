(this["webpackJsonptaco-maker"]=this["webpackJsonptaco-maker"]||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(16),o=n.n(s),i=(n(29),n(17)),l=n(18),c=n(22),m=n(19),d=n(10),u=n(23),h=n(4);n(8);var p=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(h.b,{to:"/",className:"order"},"Order"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/MyOrders"},"MyOrders"))))};var b=function(e){var t=e.options.map((function(t){return r.a.createElement("div",{className:"ingredientComponent"},r.a.createElement("input",{type:"radio",name:e.type,onChange:function(){return e.handleChange(t,e.selected,e.type)}}),"  ",t.name)}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Select your ",e.type),t)};var f=function(e){return r.a.createElement("div",{className:"Order"},r.a.createElement(h.b,{to:"/MyOrders"},r.a.createElement("button",{onClick:function(){return e.onClick(2)}},"Surprise me with a taco!")),r.a.createElement("h2",null,"Make your own taco"),r.a.createElement(b,{type:e.state.shells.type,options:e.state.shells.options,selected:e.state.selected,handleChange:e.handleChange}),r.a.createElement(b,{type:e.state.baseLayers.type,options:e.state.baseLayers.options,selected:e.state.selected,handleChange:e.handleChange}),r.a.createElement(b,{type:e.state.mixins.type,options:e.state.mixins.options,selected:e.state.selected,handleChange:e.handleChange}),r.a.createElement(b,{type:e.state.condiments.type,options:e.state.condiments.options,selected:e.state.selected,handleChange:e.handleChange}),r.a.createElement(b,{type:e.state.seasonings.type,options:e.state.seasonings.options,selected:e.state.selected,handleChange:e.handleChange}),r.a.createElement("div",{className:"bottomButton"},r.a.createElement(h.b,{to:"/MyOrders"},r.a.createElement("button",{onClick:function(){return e.onClick(1)}},"Make my taco! "))))};var g=function(e){var t,n,a={shell:"no",baseLayer:"no",mixin:"no",condiment:"no",seasoning:"no"},s=["shell","baseLayer","mixin","condiment","seasoning"];for(t=0;t<s.length;t++)0!=(n=e.ingredients.filter((function(e,n,a){return e.type==s[t]}))).length&&(a[s[t]]=n[0].ingredient.name);return r.a.createElement("div",null,r.a.createElement("h2",null,"Order #",e.orderNumber),r.a.createElement("p",null,"Delicious, freshly made taco with ",a.shell," shell, ",a.baseLayer," baseLayer, ",a.mixin," mixin, ",a.condiment," condiment, and ",a.seasoning," seasoning."),r.a.createElement("button",{className:"eatButton",onClick:function(){return e.onClick(3,e.orderNumber)}},"Eat this order"))};var y=function(e){if(0==e.made.length)return r.a.createElement("div",{className:"MyOrders"},r.a.createElement("h2",null,"No orders yet"),r.a.createElement(h.b,{to:"/"},r.a.createElement("button",null,"Order a taco")));var t=e.made.map((function(t){return r.a.createElement(g,{className:"Taco",ingredients:t.taco,orderNumber:t.orderNumber,onClick:e.onClick})}));return r.a.createElement("div",{className:"MyOrders"},t,r.a.createElement(h.b,{to:"/"},r.a.createElement("button",{className:"bottomButton"},"Order another taco")))},E=n(6),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={shells:{},baseLayers:{},mixins:{},condiments:{},seasonings:{options:[]},selected:[],made:[],orderNumber:0},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e,t,n){var a=[];(function(e,t){var n;for(n=0;n<t.length;n++)if(t[n].type==e)return!0;return!1})(n,t)&&(t=t.filter((function(e,t,a){return e.type!=n}))),(a=t).push({type:n,ingredient:e}),this.setState((function(e){return{selected:a}}))}},{key:"handleClick",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(1==e)this.setState((function(e){if(0!=e.selected.length){var n=e.made;return n.unshift({orderNumber:t.state.orderNumber+1,taco:e.selected}),{made:n,selected:[],orderNumber:e.orderNumber+1}}alert("We couldn't make a taco with no ingredients")}));else if(2==e){var a=[this.state.shells,this.state.baseLayers,this.state.mixins,this.state.condiments,this.state.seasonings],r=[];for(e=0;e<a.length;e++){var s=a[e].options,o=Math.floor(Math.random()*(0+s.length));r.unshift({type:a[e].type,ingredient:s[o]})}this.setState((function(e){var n=e.made;return n.unshift({orderNumber:t.state.orderNumber+1,taco:r}),{made:n,selected:[],orderNumber:e.orderNumber+1}}))}else 3==e&&this.setState((function(e){var t,a=e.made.filter((function(e,t,a){return e.orderNumber!=n}));return t=e.orderNumber,0==a.length&&(t=0),{made:a,selected:[],orderNumber:t}}))}},{key:"componentDidMount",value:function(){var e=this,t=fetch("https://ct-tacoapi.azurewebsites.net/shells"),n=fetch("https://ct-tacoapi.azurewebsites.net/baseLayers"),a=fetch("https://ct-tacoapi.azurewebsites.net/mixins"),r=fetch("https://ct-tacoapi.azurewebsites.net/condiments"),s=fetch("https://ct-tacoapi.azurewebsites.net/seasonings");Promise.all([t,n,a,r,s]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){e.setState({shells:{type:"shell",options:t[0]}}),e.setState({baseLayers:{type:"base layer",options:t[1]}}),e.setState({mixins:{type:"mixin",options:t[2]}}),e.setState({condiments:{type:"condiment",options:t[3]}}),e.setState({seasonings:{type:"seasoning",options:t[4]}})}))}},{key:"render",value:function(){var e=this;return 0==this.state.seasonings.options.length?r.a.createElement("div",{className:"Loading"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(p,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(f,Object.assign({},t,{state:e.state,handleChange:e.handleChange,onClick:e.handleClick}))}}),r.a.createElement(E.a,{path:"/MyOrders",render:function(t){return r.a.createElement(y,Object.assign({},t,{made:e.state.made,onClick:e.handleClick}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.0fb05f1b.chunk.js.map