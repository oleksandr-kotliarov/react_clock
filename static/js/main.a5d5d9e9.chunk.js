(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:new Date},e.timerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({currentTime:new Date}),console.log(e.state.currentTime.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.name,n=this.props.name;t!==n&&console.log("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currentTime;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.name}),"time is",Object(u.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(l.Component);function d(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={clockName:d(),hasClock:!0},e.timerId=0,e.setTimer=function(){return window.setInterval((function(){e.setState({clockName:d()})}),3300)},e.handleClickEvent=function(){e.setState({hasClock:!0})},e.handleContextEvent=function(){e.setState({hasClock:!1})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=this.setTimer(),document.addEventListener("contextmenu",this.handleContextEvent),document.addEventListener("click",this.handleClickEvent)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{name:t})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a5d5d9e9.chunk.js.map