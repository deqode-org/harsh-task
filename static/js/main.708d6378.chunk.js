(this["webpackJsonptest-task-react"]=this["webpackJsonptest-task-react"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),s=n.n(i),r=(n(27),n(20)),c=n(1),u=n(5),l=n(14),p=n(15),h=n(19),d=n(21),f=n(16),v=n(17);function g(e){return e>1e3&&(e=1e3),Math.floor(1e3*Math.random())%e===0}var m=function(e){var t=[];return g(2)&&t.push("pre"+e),g(2)&&t.push(e),g(2)&&t.push(e+"post"),g(2)&&t.push("pre"+e+"post"),new Promise((function(e,n){var a=200*Math.random();setTimeout((function(){g(10)?n():e(t)}),a)}))},O={UP:38,DOWN:40,ENTER:13},E=(n(29),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value},(function(){a.getWords()}))},a.getSuggestedOptions=function(e){m(e).then((function(e){a.setState(Object(u.a)({},a.state,{options:e}))}))},a.getWords=function(){var e=a.state.value;if(""!==e){if(" "===e.slice(-1))return void a.setState(Object(u.a)({},a.state,{options:[]}));var t=e.split(" ").filter((function(e){return""!==e})).pop();a.setState(Object(u.a)({},a.state,{searchedWord:t})),a.debouncedInputChange(t)}else a.setState(Object(u.a)({},a.state,{options:[]}))},a.selectOption=function(e){var t=a.state.value,n="".concat(e," "),o=t;if(""===t)o.append(n);else{var i=o.split(" ").slice(0,-1);i.push(n),o=i.join(" ")}a.setState({value:o,activeIndex:0},(function(){a.getWords()})),a.inputRef&&a.inputRef.current&&a.inputRef.current.focus()},a.highlightOption=function(e){return e.replace(new RegExp(a.state.searchedWord,"gi"),(function(e){return'<span class="highlight">'.concat(e,"</span>")}))},a.handleKeyPress=function(e){var t=a.state,n=t.activeIndex,o=t.options;if(e.keyCode===O.ENTER)o&&o.length&&o[n]&&a.selectOption(o[n]);else if(e.keyCode===O.UP){if(e.preventDefault(),0===n)return;a.setState({activeIndex:a.state.activeIndex-1})}else if(e.keyCode===O.DOWN){if(e.preventDefault(),n===o.length-1)return;a.setState({activeIndex:a.state.activeIndex+1})}},a.handleFocus=function(){a.setState({isFocused:!a.state.isFocused,showOptions:!0},(function(){a.getWords()}))},a.state={value:"",options:[],activeIndex:0,searchedWord:"",isFocused:!1,showOptions:!1},a.inputRef=o.a.createRef(),a.debouncedInputChange=Object(v.debounce)(a.getSuggestedOptions,500),a}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.showOptions,i=t.options,s=t.activeIndex;return o.a.createElement(f.a,{onOutsideClick:function(){e.setState({showOptions:!1})}},o.a.createElement("div",{id:"inputOptionWrapper",className:"inputOptionWrapper"},o.a.createElement("input",{className:"search",ref:this.inputRef,type:"text",onChange:this.handleChange,onKeyDown:this.handleKeyPress,onFocus:this.handleFocus,value:n}),!!a&&o.a.createElement("div",{className:"options"},i.map((function(t,n){return o.a.createElement("div",{key:t,className:n===s?"activeOption option":"option",onClick:function(){return e.selectOption(t)},dangerouslySetInnerHTML:{__html:e.highlightOption(t)}})})))))}}]),n}(a.Component)),w=function(){return o.a.createElement(E,null)},b=function(){return o.a.createElement(r.a,null,o.a.createElement(c.a,{path:"/",component:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.708d6378.chunk.js.map