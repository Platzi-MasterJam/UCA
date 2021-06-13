(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1381:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var r=s(5893),n=s(7294);var o=function(){return(0,r.jsx)("header",{className:"header",children:(0,r.jsx)("p",{className:"header__logo",children:"UCA"})})};var l=function(e){var a=e.handleClick,s=(0,n.useRef)(null);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"search-bar-container",children:[(0,r.jsx)("label",{htmlFor:"search-bar",children:(0,r.jsx)("input",{ref:s,placeholder:"Ingresa el nombre de tu ciudad...",type:"text","aria-label":"Ingresa el nombre de tu ciudad",id:"search-bar",className:"search-bar"})}),(0,r.jsx)("button",{onClick:function(){return a(s)},className:"search-bar-button",type:"button",children:"Buscar"})]})})};var i=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("table",{className:"table-row",children:[(0,r.jsxs)("tr",{className:"row",children:[(0,r.jsx)("th",{className:"td-center",children:"Calida del aire"}),(0,r.jsx)("th",{className:"td-center",children:"Implicaciones a la sal\xfad"}),(0,r.jsx)("th",{className:"last-td td-center",children:"Precauciones"})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#01C6F5"},className:"row row-data",children:[(0,r.jsx)("td",{children:"Buena"}),(0,r.jsx)("td",{children:"No se anticipan impactos a la salud cuando la calidad del aire se encuentra en este intervalo."}),(0,r.jsx)("td",{className:"last-td",children:"Ninguna"})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#0CF528"},className:"row",children:[(0,r.jsx)("td",{children:"Moderada"}),(0,r.jsx)("td",{children:"Las personas extra ordinariamente sensitivas deben considerar limitaci\xf3n de los esfuerzos f\xedsicos excesivos y prolongados al aire libre."}),(0,r.jsx)("td",{className:"last-td",children:"Los ni\xf1os y adultos activos, y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre."})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#F5F300"},className:"row",children:[(0,r.jsx)("td",{children:"Da\xf1ina para grupos sensibles"}),(0,r.jsx)("td",{children:"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos f\xedsicos excesivos y prolongados al aire libre."}),(0,r.jsx)("td",{className:"last-td",children:"Los ni\xf1os y adultos activos, y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre."})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#F5A500"},className:"row",children:[(0,r.jsx)("td",{children:"Da\xf1ina para la sal\xfad"}),(0,r.jsx)("td",{children:"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar los esfuerzos excesivos prolongados al aire libre; las dem\xe1s personas, especialmente los ni\xf1os, deben limitar los esfuerzos f\xedsicos excesivos y prolongados al aire libre."}),(0,r.jsx)("td",{className:"last-td",children:"Los ni\xf1os y adultos activos, y las personas con enfermedades respiratorias, como asma, deben evitar el esfuerzo prolongado al aire libre; todos los dem\xe1s, especialmente los ni\xf1os, deben limitar el esfuerzo prolongado al aire libre"})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#f56200"},className:"row",children:[(0,r.jsx)("td",{children:"Muy da\xf1ina para la sal\xfad"}),(0,r.jsx)("td",{children:"Los ni\xf1os y adultos activos, y personas con enfermedades respiratorias tales como el asma, deben evitar todos los esfuerzos excesivos al aire libre; las dem\xe1s personas, especialmente los ni\xf1os, deben limitar los esfuerzos f\xedsicos excesivos al aire libre."}),(0,r.jsx)("td",{className:"last-td",children:"Los ni\xf1os y adultos activos, y las personas con enfermedades respiratorias, como asma, deben evitar todo esfuerzo al aire libre; todos los dem\xe1s, especialmente los ni\xf1os, deben limitar el esfuerzo al aire libre."})]}),(0,r.jsxs)("tr",{style:{backgroundColor:"#F50C2D"},className:"row",children:[(0,r.jsx)("td",{children:"Arriegado"}),(0,r.jsx)("td",{children:"NO SALGAS"}),(0,r.jsx)("td",{className:"last-td",children:"NO SALGAS"})]})]})})};var t=function(){return(0,r.jsx)("div",{className:"loading-spinner"})};function d(e){var a="",s="",r=e.data.aqi;switch(!0){case r>=0&&r<=50:a="Buena",s="rgb(1, 198, 245)";break;case r>=51&&r<=100:a="Moderada",s="rgb(12, 245, 40)";break;case r>=101&&r<=150:a="Da\xf1ina para grupos sensibles",s="rgb(245, 243, 0)";break;case r>=151&&r<=200:a="Da\xf1ina para la sal\xfad",s="rgb(245, 165, 0)";break;case r>=201&&r<=250:a="Muy da\xf1ina para la sal\xfad",s="rgb(245, 98, 0)";break;default:a="Arriesgado",s="rgb(245, 12, 45)"}return{data:r,adjetive:a,color:s}}function c(e){var a=e.data,s=e.cityName;return console.log(a.color),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{style:{backgroundColor:a.color},className:"air-card",children:[(0,r.jsx)("p",{children:s}),(0,r.jsx)("h2",{children:a.adjetive}),(0,r.jsx)("h4",{children:a.data})]})})}var u=function(e){var a=e.data,s=e.cityName;return(0,r.jsxs)(r.Fragment,{children:["error"===a.status&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h2",{style:{color:"red",textAlign:"center"},children:"Error: A\xfan no tenemos tu ciudad o quiz\xe1 est\xe1 mal escrita"})}),"ok"===a.status&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c,{data:d(a),cityName:s})})]})};var m=function(){var e=(0,n.useState)("nothing"),a=e[0],s=e[1],d=(0,n.useState)(""),c=d[0],m=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("main",{className:"main",children:[(0,r.jsx)("h1",{className:"main__title",children:"Descubre la calidad de aire en tu ciudad"}),(0,r.jsx)(l,{handleClick:function(e){s("loading"),fetch("http://localhost:4000/pollution/".concat(e.current.value.replace(/\s/g,"").toLowerCase())).then((function(e){return e.json()})).then((function(a){s(a),m(e.current.value)})).catch((function(e){console.log(e),s("Error")}))}}),"nothing"===a&&(0,r.jsx)(r.Fragment,{}),"loading"===a&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t,{})}),"string"!==typeof a&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{cityName:c,data:a})}),(0,r.jsx)("div",{style:{maxWidth:"100%",margin:"0 auto"},children:(0,r.jsx)(i,{})})]})]})}},3685:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1381)}])}},function(e){e.O(0,[774,888,179],(function(){return a=3685,e(e.s=a);var a}));var a=e.O();_N_E=a}]);