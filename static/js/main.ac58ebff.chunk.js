(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),m=(n(12),n(0)),u=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={currentTime:new Date},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({currentTime:new Date}),console.log(t.state.currentTime.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name,n=this.props.name;e!==n&&console.log("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentTime;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(l.Component);function d(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={clockName:d(),hasClock:!0},t.timerId=0,t.setTimer=function(){return window.setInterval((function(){t.setState({clockName:d()})}),3300)},t.clickEvent=function(){t.setState({hasClock:!0}),t.timerId=t.setTimer()},t.contextEvent=function(){t.setState({hasClock:!1}),window.clearInterval(t.timerId)},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerId=this.setTimer(),document.addEventListener("contextmenu",this.contextEvent),document.addEventListener("click",this.clickEvent)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(u,{name:e})]})}}]),n}(l.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ac58ebff.chunk.js.map