(this["webpackJsonpstarter-restaurant-reservation-front-end"]=this["webpackJsonpstarter-restaurant-reservation-front-end"]||[]).push([[0],{37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(18),s=r.n(c),i=r(5),o=r(7),b=r(0);var l=function(){return Object(b.jsx)("nav",{className:"navbar navbar-dark align-items-start p-0",children:Object(b.jsxs)("div",{className:"container-fluid d-flex flex-column p-0",children:[Object(b.jsx)(o.b,{className:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0",to:"/",children:Object(b.jsx)("div",{className:"sidebar-brand-text mx-3",children:Object(b.jsx)("span",{children:"Periodic Tables"})})}),Object(b.jsx)("hr",{className:"sidebar-divider my-0"}),Object(b.jsxs)("ul",{className:"nav navbar-nav text-light",id:"accordionSidebar",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",to:"/dashboard",children:[Object(b.jsx)("span",{className:"oi oi-dashboard"}),"\xa0Dashboard"]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",to:"/search",children:[Object(b.jsx)("span",{className:"oi oi-magnifying-glass"}),"\xa0Search"]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",to:"/reservations/new",children:[Object(b.jsx)("span",{className:"oi oi-plus"}),"\xa0New Reservation"]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",to:"/tables/new",children:[Object(b.jsx)("span",{className:"oi oi-layers"}),"\xa0New Table"]})})]}),Object(b.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(b.jsx)("button",{className:"btn rounded-circle border-0",id:"sidebarToggle",type:"button"})})]})})},u=r(3),j=r(2),d=r.n(j),h=r(4),m=/\d\d\d\d-\d\d-\d\d/;function p(e){return"".concat(e.getFullYear().toString(10),"-").concat((e.getMonth()+1).toString(10).padStart(2,"0"),"-").concat(e.getDate().toString(10).padStart(2,"0"))}function O(){return p(new Date)}function x(e){var t=e.split("-"),r=Object(u.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()-1),p(s)}function v(e){var t=e.split("-"),r=Object(u.a)(t,3),n=r[0],a=r[1],c=r[2],s=new Date(n,a-=1,c);return s.setMonth(s.getMonth()),s.setDate(s.getDate()+1),p(s)}function f(e){return e.reservation_date=e.reservation_date.match(m)[0],e}function y(e){return Array.isArray(e)?e.map(f):f(e)}var N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL||"http://localhost:5001",g=new Headers;function _(e,t,r){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(d.a.mark((function e(t,r,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,r);case 3:if(204!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,a.json();case 8:if(!(c=e.sent).error){e.next=11;break}return e.abrupt("return",Promise.reject({message:c.error}));case 11:return e.abrupt("return",c.data);case 14:if(e.prev=14,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=19;break}throw console.error(e.t0.stack),e.t0;case 19:return e.abrupt("return",Promise.resolve(n));case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function S(e,t){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(N,"/reservations")),Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return n.searchParams.append(r,a.toString())})),e.next=4,_(n,{headers:g,signal:r},[]).then(y).then(y);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(N,"/reservations")),a={method:"POST",headers:g,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("".concat(N,"/tables")),a={method:"POST",headers:g,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL("".concat(N,"/tables")),e.next=3,_(r,{headers:g,signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,r){return L.apply(this,arguments)}function L(){return(L=Object(h.a)(d.a.mark((function e(t,r,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("".concat(N,"/tables/").concat(t,"/seat")),c={method:"PUT",headers:g,body:JSON.stringify({data:{reservation_id:r}}),signal:n},e.next=4,_(a,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,r){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(d.a.mark((function e(t,r,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URL("".concat(N,"/tables/").concat(t,"/seat")),c={method:"DELETE",headers:g,body:JSON.stringify({data:t}),signal:n},e.next=4,_(a,c,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return U.apply(this,arguments)}function U(){return(U=Object(h.a)(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(N,"/reservations/").concat(t),e.next=3,_(n,{headers:g,signal:r},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return J.apply(this,arguments)}function J(){return(J=Object(h.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(N,"/reservations/").concat(t.reservation_id),a={method:"PUT",headers:g,body:JSON.stringify({data:t}),signal:r},e.next=4,_(n,a,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(h.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(N,"/reservations/").concat(t,"/status"),a={method:"PUT",headers:g,body:JSON.stringify({data:{status:"cancelled"}}),signal:r},e.next=4,_(n,a,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.append("Content-Type","application/json");var I=function(e){var t=e.error;return t&&Object(b.jsxs)("div",{className:"alert alert-danger m-2",children:["Error: ",t.message]})};var K=function(e){var t=e.reservation_id,r=Object(n.useState)(!1),a=Object(u.a)(r,2),c=a[0],s=a[1],i=function(){var e=Object(h.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s(!1),n=new AbortController,!window.confirm("Do you want to cancel this reservation? This cannot be undone.")){e.next=13;break}return e.prev=4,e.next=7,B(t,n.signal);case 7:window.location.reload(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),"AbortError"!==e.t0.name&&s(e.t0);case 13:return e.abrupt("return",(function(){n.abort()}));case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(I,{error:c}),Object(b.jsx)("button",{type:"button",onClick:i,className:"btn btn-danger mx-3","data-reservation-id-cancel":t,children:"Cancel"})]})};var W=function(e){var t=e.reservations;return t.length>0?Object(b.jsx)("ol",{className:"list-group list-group-numbered",children:t.map((function(e){var t=e.people,r=e.first_name,n=e.last_name,a=e.reservation_id,c=e.mobile_number,s=e.status;return Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[Object(b.jsxs)("div",{className:"ms-2 me-auto",children:[Object(b.jsxs)("div",{className:"fw-bold",children:[r," ",n]}),Object(b.jsxs)("span",{children:["Number of people: ",t]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Mobile Number: ",c]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Reservaion Number: ",a]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{"data-reservation-id-status":a,children:["Reservaion status: ",s]})]}),"booked"===s?Object(b.jsx)("a",{href:"/reservations/".concat(a,"/seat"),className:"btn btn-primary mx-3",children:"Seat"}):Object(b.jsx)("div",{}),Object(b.jsx)("a",{href:"/reservations/".concat(a,"/edit"),className:"btn btn-primary mx-3",children:"Edit"}),Object(b.jsx)(K,{reservation_id:a})]},a)}))}):Object(b.jsx)("h5",{children:"No reservations for the requested date"})};var z=function(e){var t=e.table,r=Object(n.useState)(!1),a=Object(u.a)(r,2),c=a[0],s=a[1],o=Object(i.g)(),l=function(){var e=Object(h.a)(d.a.mark((function e(r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s(!1),n=new AbortController,!window.confirm("Is this table ready to seat new guests? This cannot be undone.")){e.next=14;break}return e.prev=4,e.next=7,P(t.table_id,t.reservation_id,n.signal);case 7:o.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),"AbortError"!==e.t0.name&&s(e.t0);case 13:return e.abrupt("return",(function(){n.abort()}));case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{"data-table-id-status":t.table_id,children:"Occupied"}),Object(b.jsx)(I,{error:c}),Object(b.jsx)("button",{type:"button","data-table-id-finish":t.table_id,className:"btn btn-primary",onClick:l,children:"Finish"})]})};var V=function(e){var t=e.tables;return t.length>0?Object(b.jsx)("div",{className:"row",children:t.map((function(e){return Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.table_name}),Object(b.jsxs)("p",{className:"card-text",children:["Table Size: ",e.capacity,Object(b.jsx)("br",{}),e.reservation_id?Object(b.jsx)(z,{table:e}):Object(b.jsx)("h6",{"data-table-id-status":e.table_id,children:"Free"})]})]})})},e.table_id)}))}):null};var G=function(){return new URLSearchParams(Object(i.h)().search)};var Q=function(e){var t=e.date,r=Object(n.useState)([]),a=Object(u.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)(null),l=Object(u.a)(o,2),j=l[0],d=l[1],h=Object(i.g)(),m=Object(n.useState)(t),p=Object(u.a)(m,2),f=p[0],y=p[1],N=Object(i.j)(),g=G(),_=Object(n.useState)([]),w=Object(u.a)(_,2),k=w[0],C=w[1];function E(){var e=new AbortController;return d(null),S({date:f},e.signal).then(s).catch(d),function(){return e.abort()}}return Object(n.useEffect)(E,[f]),Object(n.useEffect)((function(){var e=new AbortController;return d(null),A(e.signal).then(C).catch(d),function(){return e.abort()}}),[]),Object(n.useEffect)((function(){!function(){var e=g.get("date");y(e||O())}()}),[g,N]),Object(n.useEffect)(E,[f]),Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"Dashboard"}),Object(b.jsx)("div",{className:"d-md-flex mb-3",children:Object(b.jsx)("h4",{className:"mb-0",children:"Reservations for date"})}),Object(b.jsx)(I,{error:j}),Object(b.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-center",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary mx-2 my-2",onClick:function(){h.push("/dashboard?date=".concat(x(t))),y(x(t))},children:"Previous"}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary mx-2 my-2",onClick:function(){h.push("/dashboard?date=".concat(O())),y(O())},children:"Today"}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary mx-2 my-2",onClick:function(){h.push("/dashboard?date=".concat(v(t))),y(v(t))},children:"Next"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(W,{reservations:c}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"d-md-flex mb-3",children:Object(b.jsx)("h4",{className:"mb-0",children:"Tables"})}),Object(b.jsx)(V,{tables:k})]})};var X=function(){return Object(b.jsx)("div",{className:"NotFound",children:Object(b.jsx)("h1",{children:"Not Found"})})},Z=r(12),$=r(8),ee=r(21),te=r.n(ee);var re=function(e){var t=e.submitHandle,r=e.changeHandle,n=e.form,a=e.cancelLink,c=te()(n.reservation_date).format("yyyy-MM-DD");return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"first_name",className:"form-label",children:"First Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"first_name",className:"form-control",type:"text",placeholder:"First Name",name:"first_name",onChange:r,value:n.first_name,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"last_name",className:"form-label",children:"Last Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"last_name",className:"form-control",type:"text",placeholder:"Last Name",name:"last_name",onChange:r,value:n.last_name,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"mobile_number",className:"form-label",children:"Mobile Number"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"mobile_number",className:"form-control",type:"tel",placeholder:"(---) --- ----",name:"mobile_number",onChange:r,value:n.mobile_number,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"reservation_date",className:"form-label",children:"Reservation Date"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"reservation_date",className:"form-control",type:"date",pattern:"\\d{4}-\\d{2}-\\d{2}",placeholder:"YYYY-MM-DD",name:"reservation_date",onChange:r,value:c,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"reservation_time",className:"form-label",children:"Reservation Time"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"reservation_time",className:"form-control",type:"time",pattern:"[0-9]{2}:[0-9]{2}",placeholder:"HH:MM",name:"reservation_time",onChange:r,value:n.reservation_time,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"people",className:"form-label",children:"Number of people"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"people",className:"form-control",type:"number",min:1,placeholder:1,name:"people",onChange:r,value:n.people,required:!0})]}),Object(b.jsx)("button",{type:"button",onClick:a,className:"btn btn-secondary",children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary m-3",children:"Submit"})]})};var ne=function(){var e=Object(i.g)(),t=Object(n.useState)({first_name:"",last_name:"",mobile_number:"",reservation_date:"",reservation_time:"",people:""}),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],m=function(){var t=Object(h.a)(d.a.mark((function t(r){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),j(!1),n=new AbortController,a.people=Number(a.people),t.prev=4,t.next=7,C(a,n.signal);case 7:c=t.sent,e.push("/dashboard?date=".concat(c.reservation_date)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),"AbortError"!==t.t0.name&&j(t.t0);case 14:return t.abrupt("return",(function(){n.abort()}));case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"New Reservation"}),Object(b.jsx)(I,{error:l}),Object(b.jsx)(re,{submitHandle:m,changeHandle:function(e){var t=e.target;c(Object($.a)(Object($.a)({},a),{},Object(Z.a)({},t.name,t.value)))},form:a,cancelLink:function(){return e.push("/dashboard")}})]})};var ae=function(e){var t=e.submitHandle,r=e.changeHandle,n=e.form,a=e.cancelLink;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"table_name",class:"form-label",children:"Table Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"table_name",class:"form-control",type:"text",placeholder:"Table Name",name:"table_name",onChange:r,value:n.table_name,required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"capacity",class:"form-label",children:"Table Capacity"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"capacity",class:"form-control",type:"number",min:1,placeholder:1,name:"capacity",onChange:r,value:n.capacity,required:!0})]}),Object(b.jsx)("button",{onClick:a,className:"btn btn-secondary",children:"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary m-3",children:"Submit"})]})};var ce=function(){var e=Object(i.g)(),t=Object(n.useState)({table_name:"",capacity:""}),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],m=function(){var t=Object(h.a)(d.a.mark((function t(r){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),j(!1),n=new AbortController,a.capacity=Number(a.capacity),t.prev=4,t.next=7,D(a,n.signal);case 7:e.push("/dashboard"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),"AbortError"!==t.t0.name&&j(t.t0);case 13:return t.abrupt("return",(function(){n.abort()}));case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"New Table"}),Object(b.jsx)(I,{error:l}),Object(b.jsx)(ae,{submitHandle:m,changeHandle:function(e){var t=e.target;c(Object($.a)(Object($.a)({},a),{},Object(Z.a)({},t.name,t.value)))},form:a,cancelLink:function(){return e.goBack()}})]})};var se=function(){var e=Object(i.i)().reservation_id,t=Object(n.useState)([]),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],m=Object(n.useState)({table_id:""}),p=Object(u.a)(m,2),O=p[0],x=p[1],v=Object(i.g)();Object(n.useEffect)((function(){var e=new AbortController;return j(null),A(e.signal).then(c).catch(j),function(){return e.abort()}}),[e]);var f=function(){var t=Object(h.a)(d.a.mark((function t(r){var n,a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),j(!1),n=Number(O.table_id),a=Number(e),c=new AbortController,t.prev=5,t.next=8,F(n,a,c.signal);case 8:v.push("/dashboard"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),"AbortError"!==t.t0.name&&j(t.t0);case 14:return t.abrupt("return",(function(){c.abort()}));case 15:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Seat Reservaion Number ",e]}),Object(b.jsx)(I,{error:l}),Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsxs)("label",{htmlFor:"table_id",children:[" ","Choose a table:",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"table_id",name:"table_id",onChange:function(e){var t=e.target;x(Object($.a)(Object($.a)({},O),{},Object(Z.a)({},t.name,t.value)))},value:O.table_id,children:[Object(b.jsx)("option",{value:"",children:"-- Select an Option --"}),a.map((function(e){return Object(b.jsxs)("option",{value:e.table_id,children:[e.table_name," - ",e.capacity]},e.table_id)}))]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary m-3",children:"Submit"}),Object(b.jsx)("button",{type:"button",onClick:function(){return v.goBack()},className:"btn btn-secondary m-3",children:"Cancel"})]})]})};var ie=function(){var e=Object(n.useState)({mobile_number:""}),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)([]),j=Object(u.a)(l,2),m=j[0],p=j[1],O=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o(!1),n=new AbortController,e.prev=3,e.next=6,S(r,n.signal);case 6:c=e.sent,p(c),a({mobile_number:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),"AbortError"!==e.t0.name&&o(e.t0);case 14:return e.abrupt("return",(function(){n.abort()}));case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{children:"Search Reservations"}),Object(b.jsx)(I,{error:i}),Object(b.jsx)("section",{children:Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"mobile_number",class:"form-label",children:"Mobile Number:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"mobile_number",class:"form-control",type:"text",placeholder:"Enter a customer's phone number",name:"mobile_number",onChange:function(e){var t=e.target;a(Object($.a)(Object($.a)({},r),{},Object(Z.a)({},t.name,t.value)))},value:r.mobile_number,required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary m-3",children:"Find"})]})}),Object(b.jsx)("hr",{}),m.length>0?Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{children:"Search Results"}),Object(b.jsx)(W,{reservations:m})]}):"No reservations found"]})};var oe=function(){var e=Object(i.i)().reservation_id,t=Object(n.useState)({}),r=Object(u.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],m=Object(i.g)();Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:r=t.sent,c(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var p=function(){var e=Object(h.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!1),r=new AbortController,a.people=Number(a.people),e.prev=4,e.next=7,q(a,r.signal);case 7:n=e.sent,m.push("/dashboard?date=".concat(n.reservation_date)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),"AbortError"!==e.t0.name&&j(e.t0);case 14:return e.abrupt("return",(function(){r.abort()}));case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Edit Reservation"}),Object(b.jsx)(I,{error:l}),Object(b.jsx)(re,{submitHandle:p,changeHandle:function(e){var t=e.target;c(Object($.a)(Object($.a)({},a),{},Object(Z.a)({},t.name,t.value)))},form:a,cancelLink:function(){return m.goBack()}})]})};var be=function(){return Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",children:Object(b.jsx)(i.a,{to:"/dashboard"})}),Object(b.jsx)(i.b,{exact:!0,path:"/reservations",children:Object(b.jsx)(i.a,{to:"/dashboard"})}),Object(b.jsx)(i.b,{path:"/dashboard",children:Object(b.jsx)(Q,{date:O()})}),Object(b.jsx)(i.b,{exact:!0,path:"/reservations/new",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/reservations/:reservation_id/seat",children:Object(b.jsx)(se,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/reservations/:reservation_id/edit",children:Object(b.jsx)(oe,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/tables/new",children:Object(b.jsx)(ce,{})}),Object(b.jsx)(i.b,{exact:!0,path:"/search",children:Object(b.jsx)(ie,{})}),Object(b.jsx)(i.b,{children:Object(b.jsx)(X,{})})]})};r(37);var le=function(){return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row h-100",children:[Object(b.jsx)("div",{className:"col-md-2 side-bar",children:Object(b.jsx)(l,{})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(be,{})})]})})};var ue=function(){return Object(b.jsx)(i.d,{children:Object(b.jsx)(i.b,{path:"/",children:Object(b.jsx)(le,{})})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(ue,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.27359d09.chunk.js.map