(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(2),r=t.n(c),o=(t(14),t(6)),i=t(3),l=t(4),m=t(7),u=t(5),g=t(8),p=(t(16),function(e){return n.a.createElement("div",{className:"image-div"},n.a.createElement("img",{src:"images/".concat(e.image),alt:"",onClick:e.onClick,"data-image":e.image}))}),h=(t(18),function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("header",{className:"topbar"},n.a.createElement("h3",{className:"topbar-title"},"MHW Memory Game"),"none"===e.lastGuess?n.a.createElement("p",{className:"topbar-guess"},"Click an image to begin"):n.a.createElement("p",{className:"topbar-guess"},"You guessed ",e.lastGuess?"correctly":"incorrectly","!"),n.a.createElement("div",{className:"topbar-scores"},n.a.createElement("span",{className:"topbar-scores-score"},"Score: ",e.score),"|",n.a.createElement("span",{className:"topbar-scores-hiscore"},"High Score: ",e.hiscore))),n.a.createElement("div",{className:"instructions"},n.a.createElement("h1",{className:"instructions-title"},"Monster Hunter World Memory Game"),n.a.createElement("h4",{className:"instructions-text"},"Click on an image to earn points, but don't click on any more than once!")))}),d=(t(20),function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={images:["anja.jpg","bazel.jpg","deviljho.jpg","kirin.jpg","kulu.jpg","kushala.png","legiana.jpg","nerg.jpg","odogaron.jpg","paolumu.jpg","rathalos.jpg","rathian.jpg","teostra.jpg","tobi.jpg","vaal.png","xeno.jpg"],clicked:[],score:0,hiscore:0,lastGuess:"none"},t.scrambleImages=function(){for(var e=t.state.images,a=e.length-1;a>0;a--){var s=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[s],e[s]=n}t.setState({images:e})},t.progressGame=function(e){-1===t.state.clicked.indexOf(e)?t.setState({clicked:Object(o.a)(t.state.clicked).concat([e]),score:t.state.score+1,lastGuess:!0},function(){t.state.score>t.state.hiscore&&t.setState({hiscore:t.state.score})}):t.setState({clicked:[],score:0,lastGuess:!1})},t.handleImageClick=function(e){t.scrambleImages(),t.progressGame(e.target.dataset.image.split(".")[0])},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.scrambleImages()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(h,{score:this.state.score,hiscore:this.state.hiscore,lastGuess:this.state.lastGuess}),n.a.createElement("div",{className:"image-container"},this.state.images.map(function(a,t){return n.a.createElement(p,{key:t,onClick:e.handleImageClick,image:a})})),n.a.createElement("footer",{className:"footer"},"\xa92018 Andrew Murphy"))}}]),a}(s.Component));r.a.render(n.a.createElement(d,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.a77845b2.chunk.js.map