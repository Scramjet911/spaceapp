(this.webpackJsonpspacehack=this.webpackJsonpspacehack||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"eventLog_wrapper__1dUNS","main-content":"eventLog_main-content__3S5nA",phases:"eventLog_phases__3MyRb",slidecontainer:"eventLog_slidecontainer__3jPEK",slider:"eventLog_slider__WG0Yv","main-bar":"eventLog_main-bar__3v_BG","move-bar":"eventLog_move-bar__2NTPc"}},,,,,function(e,t,a){e.exports={icon:"home_icon__299fj"}},,,,function(e,t,a){e.exports={phases:"sideNav_phases__2cMVQ","col-3":"sideNav_col-3__2-Pu1"}},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports={recent:"recentMission_recent__1dJbm","recent-text":"recentMission_recent-text__11NP8","recent-btn":"recentMission_recent-btn__XsS7r"}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),s=(a(16),a(2)),o=a(3),i=a(5),u=a(4),m=(a(17),a(1)),d=a.n(m),h=[["Atlas V541","Vega","PSLV"],["chemical propulsion","electrical propulsion"],["Liquid Hydrogen","Hydrazine"]],p=[["Suitable for heavy weight missions","Suitable for small payload missions","Reliable, suitable for medium payload missions"],["Chemical rockets have demonstrated fuel efficiencies up to 35 percent","Ion thrusters have demonstrated fuel efficiencies over 90 percent."],["High Impulse but difficult to store and Low Density ","Easier to store, Higher Density but Lower Impulse"]],E=[[500,200,300],[100,200],[200,100],[200,100]],b=["You have chosen Mars, that\u2019s 0.38 million km away, Get ready for this adventurous\n  heavy weight mission...\n  First you have to plan out the mission. Lets start with the lauch vehicle","Oh cool, chose one from the Atlas family! Now you need a propulsion system, yeaah one with a main engine and thrusters.","Chemical Propulsion, cool now time to choose a fuel to blast off!!","Fuel count"],f=[725e3,1e6,22e6],v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).sliderChange=function(e){console.log(l.sliderValue.current),l.sliderValue.current.innerHTML=(4*e.target.value).toLocaleString(),l.fuelValue.current.innerHTML=(e.target.value*f[1]/50).toLocaleString()},l.sliderValue=Object(n.createRef)(),l.fuelValue=Object(n.createRef)(),l}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row ".concat(d.a["main-content"])},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"<gandalf>")),l.a.createElement("td",null,b[this.props.subPhase]))))),l.a.createElement("table",{className:d.a.phases},l.a.createElement("tbody",null,3===this.props.subPhase&&l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:d.a.slidecontainer},l.a.createElement("input",{type:"range",min:"0",max:"100",onChange:function(t){return e.sliderChange(t)},className:d.a.slider}),l.a.createElement("p",null,"Cost: ",l.a.createElement("span",{ref:this.sliderValue},"200")),l.a.createElement("p",null,"Amount Of Fuel: ",l.a.createElement("span",{ref:this.fuelValue},f[1])),l.a.createElement("button",{className:d.a["slider-btn"],onClick:function(t){return e.props.onSelect(t,e.sliderValue.current.innerHTML)}},"Proceed")))),this.props.subPhase<3&&h[this.props.subPhase].map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("button",{onClick:function(t){return e.props.onSelect(t,a,E[e.props.subPhase][a])},disabled:e.props.isDisabled},t)),l.a.createElement("td",null,l.a.createElement("p",null,p[e.props.subPhase][a])),l.a.createElement("td",null,l.a.createElement("p",null,"Cost : "+E[e.props.subPhase][a])))})))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={currPhase:0,currSubPhase:0,phaseOneSelection:[-1,-1,-1,-1]},l.onSelect=function(e,t,a){e.target.style.backgroundColor="#C1FFBF",0===l.state.currPhase&&l.setState((function(e){return e.phaseOneSelection[l.state.currSubPhase]=t,{phaseOneSelection:e.phaseOneSelection}})),l.state.currSubPhase<3?l.setState((function(e){return{currSubPhase:e.currSubPhase+1}})):l.state.currPhase<2&&l.setState((function(e){return{currPhase:e.currPhase+1,currSubPhase:0}})),l.props.updateFund(a)},l.isDisabled=function(e){return l.state.currSubPhase!==e||""},l.containerEnd=Object(n.createRef)(),l}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.containerEnd.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<4;a++)t.push(this.state.currSubPhase>=a&&l.a.createElement("div",{key:a},l.a.createElement(v,{subPhase:a,onSelect:this.onSelect,isDisabled:this.isDisabled(a)})));return l.a.createElement("div",{className:d.a.wrapper},0===this.state.currPhase&&t,l.a.createElement("div",{ref:function(t){e.containerEnd=t}}))}}]),a}(n.Component);a(7);var N=a(6),y=a.n(N);function _(e){return l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,"Destinations"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("i",{className:y.a.icon},l.a.createElement("img",{className:"no-border",src:"./images/icons/moon-phase.png",alt:""}))),l.a.createElement("td",null,"Moon"),l.a.createElement("td",null,"0.38 million miles"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-block btn-primary-outline",onClick:function(){return e.openMoon()}},"Launch")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("i",{className:y.a.icon},l.a.createElement("img",{className:"no-border",src:"./images/icons/mars.png",alt:""}))),l.a.createElement("td",null,"Mars"),l.a.createElement("td",null,"63.4 million miles"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-block btn-primary-outline",onClick:function(){return e.openMars()}},"Launch")),l.a.createElement("td",null)),l.a.createElement("tr",null),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("i",{className:y.a.icon},l.a.createElement("img",{className:"no-border",src:"./images/icons/saturn.png",alt:""}))),l.a.createElement("td",null,"Saturn"),l.a.createElement("td",null,"1.45 billion miles"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-block btn-primary-outline"},"Launch")),l.a.createElement("td",null)),l.a.createElement("tr",null),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("i",{className:y.a.icon},l.a.createElement("img",{className:"no-border",src:"./images/icons/universe.png",alt:""}))),l.a.createElement("td",null,"Alpha Centauri"),l.a.createElement("td",null,"41.3 trillion miles"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-block btn-primary-outline"},"Launch")),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-block btn-secondary-outline"},"Premium"))))))}a(18);function S(){return l.a.createElement("div",{className:"col-3 col recent"},l.a.createElement("strong",{className:"recent-text"},"Recent"),l.a.createElement("button",{className:"btn-block btn-success recent-btn"},"Launched to Moon"),l.a.createElement("button",{className:"btn-block btn-primary recent-btn"},"Launched to Mars"),l.a.createElement("button",{className:"btn-block btn-primary recent-btn"},"Launched to Saturn"),l.a.createElement("button",{className:"btn-block btn-primary recent-btn"},"Launched to Alpha Centauri"))}var P=a(10),w=a.n(P);function k(e){e.props;return l.a.createElement("div",{className:"col-3 col"},l.a.createElement("img",{src:"./images/icons/gandalf.jpg",width:"200px",height:"200px",className:"float-left"}),l.a.createElement("table",{className:"table-hover ".concat(w.a.phases)},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Idle")),l.a.createElement("tr",null,l.a.createElement("td",null,"Planning Phase")),l.a.createElement("tr",null,l.a.createElement("td",null,"Trader")),l.a.createElement("tr",null,l.a.createElement("td",null,"Engineer")),l.a.createElement("tr",null,l.a.createElement("td",null,"Astronuat")),l.a.createElement("tr",null,l.a.createElement("td",null,"Explorer")),l.a.createElement("tr",null,l.a.createElement("td",null,"Hero")))))}a(19);var L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={phase:0,coins:3e3},e.openMoon=function(){e.setState({phase:1})},e.openMars=function(){e.setState({phase:2})},e.updateFund=function(t){e.setState((function(e){return{coins:e.coins-t}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("meta",{charSet:"UTF-8"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),l.a.createElement("div",{className:"row"},l.a.createElement(k,null),l.a.createElement("div",{className:"col-6 col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col"},l.a.createElement("h4",{className:"float-left"},"Gandalf"," ",l.a.createElement("span",{className:"badge warning"},"Fund: ",this.state.coins.toLocaleString()," coins")))),0===this.state.phase&&l.a.createElement(_,{openMoon:this.openMoon,openMars:this.openMars}),2===this.state.phase&&l.a.createElement(g,{updateFund:this.updateFund})),l.a.createElement(S,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.8e69bfab.chunk.js.map