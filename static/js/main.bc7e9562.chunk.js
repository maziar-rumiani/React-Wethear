(this["webpackJsonpweather-react-"]=this["webpackJsonpweather-react-"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n(2)),d=(n(10),n(0)),o=function(e){return e.trigger?Object(d.jsx)("div",{className:"popup",children:Object(d.jsxs)("div",{className:"popup-inner",children:[Object(d.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"Close"}),e.children]})}):""},u="ef67dc350e67704af20b2fd758d6883d",l="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("F"),s=Object(i.a)(r,2),h=s[0],j=s[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),p=m[0],O=m[1],f=Object(a.useState)(""),x=Object(i.a)(f,2),y=x[0],g=x[1],v=Object(a.useState)({}),N=Object(i.a)(v,2),w=N[0],F=N[1];return Object(d.jsx)("div",{className:"undefined"!=typeof w.main&&w.main.temp>20?"app warm":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search ...",onChange:function(e){return g(e.target.value)},value:y,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(y,"&units=metric&APPID=").concat(u)).then((function(e){return e.json()})).then((function(e){F(e),g("");try{c("undefined"!=e.main.temp?"Temperature: ".concat(Math.round(e.main.temp),"\xb0C"):"")}catch(t){O(!0)}}))}})}),"undefined"!=typeof w.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[w.name,",",w.sys.country]}),Object(d.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","Fabruary","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a," ").concat(c)}(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[n,Object(d.jsx)("button",{className:"degree",onClick:function(){var e=Math.round(w.main.temp),t=Math.round(1.8*e+32);"F"===h?(j("C"),c("Temperature: ".concat(t,"\xb0F"))):(j("F"),c("Temperature: ".concat(e,"\xb0C")))},children:h})]}),Object(d.jsxs)("div",{className:"temp",children:["Humidity: ",Math.round(w.main.humidity),"%"]}),Object(d.jsxs)("div",{className:"temp",children:["Wind: ",Math.round(w.wind.speed),"km/h"]}),Object(d.jsx)("div",{className:"weather",children:w.weather[0].description})]})]}):Object(d.jsx)(o,{trigger:p,setTrigger:O,children:"Invalid city name"})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.bc7e9562.chunk.js.map