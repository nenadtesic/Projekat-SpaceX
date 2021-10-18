(this.webpackJsonpspace_x=this.webpackJsonpspace_x||[]).push([[0],{71:function(n,e,t){"use strict";t.r(e);var c,i,a,o,r,s,l,u,d,b,j,p,x=t(0),h=t.n(x),g=t(33),f=t.n(g),O=t(5),m=t(9),v=t(2),k=t(3),y=t(4),w=y.b.div(c||(c=Object(k.a)(["\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n\n    #launchName {\n        color: white;\n        font-size: 40px;\n    }\n\n    #votesId {\n        color: white;\n        font-size: 56px;\n    }\n\n    img {\n        height: 400px;\n        margin: 20px;\n    }\n"]))),C=t(1),S=function(n){var e=n.launch,t=n.votes;return Object(C.jsxs)(w,{children:[Object(C.jsxs)("p",{id:"launchName",children:["Most liked Launch: ",e.name]}),Object(C.jsx)("img",{src:e.links.patch.small,alt:""}),Object(C.jsxs)("p",{id:"votesId",children:["Votes: ",Object(C.jsx)("span",{children:t})]})]})},N=function(n){var e=n.loggedIn,t=n.votes,c=n.launches,i=null===t||void 0===t?void 0:t.reduce((function(n,e){return n.count>e.count?n:e}),0),a=null===c||void 0===c?void 0:c.find((function(n){return n.id===i.id}));return e?Object(C.jsx)(S,{launch:a,votes:i.count}):Object(C.jsx)(v.a,{to:"/login"})},z=t(10),E=t.n(z),I="https://api.spacexdata.com",D="v4",L="rockets",R=function(){return E.a.get("".concat(I,"/").concat(D,"/").concat("launches"))},U=function(){return E.a.get("https://my-spacex-project.herokuapp.com/users")},V=function(n){var e=n.rocket;return Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:e.flickr_images,alt:e.name})})},B=y.b.div(i||(i=Object(k.a)(["\nbox-sizing: border-box;\n\n> div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n    > div {\n        display: flex;\n        justify-content: center;\n        aligh-items: center;\n    }\n    p {\n        text-align: center;\n        color: white;\n        font-size: 30px;\n    }\n}\n\n"]))),P=function(){var n=Object(x.useState)([]),e=Object(O.a)(n,2),t=e[0],c=e[1];return Object(x.useEffect)((function(){E.a.get("".concat(I,"/").concat(D,"/").concat(L)).then((function(n){c(n.data),console.log(n.data)}))}),[]),Object(C.jsx)(B,{children:t.map((function(n){return Object(C.jsx)(V,{rocket:n},n.id)}))})},A=t(39),M=t(38),X=t(17),_=function(n){var e=n.launch,t=n.votes,c=n.updateVotes,i=n.loggedIn,a=Object(x.useState)(null),o=Object(O.a)(a,2),r=(o[0],o[1]);return Object(C.jsxs)("div",{onClick:function(){var n;(n=e.rocket,E.a.get("".concat(I,"/").concat(D,"/").concat(L,"/").concat(n))).then((function(n){r(n.data)}))},children:[Object(C.jsx)("p",{id:"launchName",children:e.name}),Object(C.jsx)("img",{src:e.links.patch.small,alt:""}),Object(C.jsxs)("p",{id:"votesId",children:["Votes: ",Object(C.jsx)("span",{children:t})]}),i&&Object(C.jsx)("button",{id:"btnGreen",onClick:function(){return c(e.id,1)},children:Object(C.jsx)(X.b,{})}),i&&Object(C.jsx)("button",{id:"btnRed",onClick:function(){return c(e.id,-1)},children:Object(C.jsx)(X.a,{})})]})},G=y.b.div(a||(a=Object(k.a)(["\npadding: 15px;\nmargin: 40px 0;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: repeat(4, 1fr);\ngrid-template-rows: repeat(2, 1fr);\ngrid-column-gap: 20px;\ngrid-row-gap: 20px;\n\n> div {\n    width: 300px;\n    margin-bottom: 50px;\n}\n\n#votesId {\n    background-color: white;\n    font-size: 30px;\n\n    >span{\n        color: green;\n    }\n}\n\nbutton {\n    width: 50%;\n}\n\n#launchName{\n    font-size: 25px;\n    color: white;\n}\n\n#btnGreen {\n    color: green;\n    font-size: 20px;\n    padding: 5px;\n}\n\n#btnRed {\n    color: red;\n    font-size: 20px;\n    padding: 5px;\n}\n"]))),J=function(n){var e=n.launches,t=n.setLaunches,c=n.votes,i=n.setVotes,a=n.loggedIn,o=function(n,e){var t=c.findIndex((function(e){return e.id===n})),a=Object(M.a)(c);a[t]=Object(A.a)({},a[t]),a[t].count+=e,i(a)};return Object(x.useEffect)((function(){R().then((function(n){t(n.data),0===(null===c||void 0===c?void 0:c.length)&&i(n.data.map((function(n){return{id:n.id,count:0}})))}))}),[]),Object(C.jsx)(G,{children:e.map((function(n){var e;return Object(C.jsx)(_,{launch:n,votes:null===c||void 0===c||null===(e=c.find((function(e){return e.id===n.id})))||void 0===e?void 0:e.count,updateVotes:o,loggedIn:a},n.id)}))})},Y=y.b.div(o||(o=Object(k.a)(["\n    position: absolute;\n    top: 30%;\n    right: 50%;\n    transform: translateX(50%);\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\ninput[type=text], input[type=email], input[type=password] {\n    text-align: center;\n    width: 400px;\n    height: 60px;\n    border-radius: 10px;\n    background: #E5DCC3;\n    padding: 20px;\n    color: #000;\n    font-size: 25px;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n\n}\n\ninput[type=submit] {\n    position: relative;\n    right: 10px;\n    margin: 10px;\n    width: 400px;\n    height: 60px;\n    border-radius: 10px;\n    background: #E5DCC3;\n    color: #000;\n    font-size: 25px;\n    position: relative;\n    top: 50%;\n    cursor: pointer;\n    \n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010686;\n    }\n}\n\n"]))),F=function(n){var e=n.setUser,t=Object(x.useState)(""),c=Object(O.a)(t,2),i=c[0],a=c[1],o=Object(x.useState)(""),r=Object(O.a)(o,2),s=r[0],l=r[1],u=Object(x.useState)(""),d=Object(O.a)(u,2),b=d[0],j=d[1],p=Object(v.g)();return Object(C.jsx)(Y,{children:Object(C.jsxs)("form",{onSubmit:function(n){n.preventDefault(),i.length<4&&!function(n){return n.length>=4&&n.split("").some((function(n){return n>="A"&&n<="Z"||n>="a"&&n<="z"}))&&n.split("").some((function(n){return!isNaN(Number(n))}))}(s)?console.log("Neispravno, mora makar 4 karaktera,nije validna sifra..."):U().then((function(n){n.data.some((function(n){return n.username===i||n.email===b}))||function(n,e,t){return E.a.post("https://my-spacex-project.herokuapp.com/users",{username:n,email:e,password:t})}(i,b,s).then((function(n){e(n.data),p.push("/launches")}))}))},children:[Object(C.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(n){a(n.target.value)}}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"email",placeholder:"Email...",onChange:function(n){j(n.target.value)}}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(n){l(n.target.value)}}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"submit",value:"Register"})]})})},H=y.b.div(r||(r=Object(k.a)(["\n    position: absolute;\n    top: 30%;\n    right: 50%;\n    transform: translateX(50%);\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    \n> div {\n    color: red;\n}\n\n#notReg {\n    background-color: white;\n    padding: 5px 25px;\n    border-radius: 5px;\n}\n\ninput[type=text], input[type=password] {\n    text-align: center;\n    width: 400px;\n    height: 60px;\n    border-radius: 10px;\n    background: #E5DCC3;\n    padding: 20px;\n    color: #000;\n    font-size: 25px;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n\ninput[type=submit] {\n    position: relative;\n    right: 10px;\n    margin: 10px;\n    width: 400px;\n    height: 60px;\n    border-radius: 10px;\n    background: #E5DCC3;\n    color: #000;\n    font-size: 25px;\n    position: relative;\n    top: 50%;\n    cursor: pointer;\n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010686;\n    }\n}\n"]))),K=function(n){var e=n.setUser,t=Object(x.useState)(""),c=Object(O.a)(t,2),i=c[0],a=c[1],o=Object(x.useState)(""),r=Object(O.a)(o,2),s=r[0],l=r[1],u=Object(v.g)();return Object(C.jsxs)(H,{children:[Object(C.jsxs)("form",{onSubmit:function(n){n.preventDefault(),U().then((function(n){var t=n.data.find((function(n){return(n.username===i||n.email===i)&&n.password===s}));t?(e(t),u.push("/launches")):console.log("Neispravni podaci")}))},children:[Object(C.jsx)("input",{type:"text",placeholder:"Username/Email...",onChange:function(n){a(n.target.value)}})," ",Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(n){l(n.target.value)}}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"submit",value:"Login"})]}),Object(C.jsx)("div",{id:"notReg",children:Object(C.jsx)(m.b,{to:"/register",children:"Not registred?"})})]})},T=y.b.nav(s||(s=Object(k.a)(["\n    background: black;\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n    z-index: 10;\n"]))),Z=Object(y.b)(m.c)(l||(l=Object(k.a)(["\n    \n    color: white;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 20px;\n    height: 100%;\n    cursor: pointer;\n\n    &.active {\n        color: yellow;\n    }\n"]))),q=y.b.div(u||(u=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: -24px;\n"]))),Q=y.b.nav(d||(d=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 24px;\n    \n"]))),W=Object(y.b)(m.c)(b||(b=Object(k.a)(["\n    border-radius: 4px;\n    background: #E5DCC3;\n    padding: 10px 22px;\n    color: #000;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &.active {\n        background: #fff;\n    }\n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010686;\n    }\n"]))),$=y.b.div(j||(j=Object(k.a)(["\n    text-align: center;\n    margin: 10px;\n    \n    #btnBack, #btnNext, #btnNum  {\n        padding: 5px;\n    }\n\n    #btnNum {\n        width: 30px\n    }\n"]))),nn=function(n){var e=n.launches,t=n.displayed,c=n.setOnPage,i=null===e||void 0===e?void 0:e.length,a=Math.ceil(i/t),o=Object(x.useState)([]),r=Object(O.a)(o,2),s=r[0],l=r[1],u=Object(x.useState)(1),d=Object(O.a)(u,2),b=d[0],j=d[1],p=function(n){j(n);var i=t*(n-1),a=i+Number(t);c(e.slice(i,a))};return Object(x.useEffect)((function(){if(!s.length){for(var n=[],e=1;e<=a;e++)n.push(e);l(n)}}),[s,e]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)($,{children:[Object(C.jsx)("button",{id:"btnBack",disabled:b<=1,onClick:function(){p(b-1)},children:"BACK"}),s.map((function(n){return Object(C.jsx)("button",{id:"btnNum",onClick:function(){p(n)},style:n===b?{color:"red"}:{},children:n},n)})),Object(C.jsx)("button",{id:"btnNext",disabled:b>=s.length,onClick:function(){p(b+1)},children:"NEXT"})]})})},en=Object(y.a)(p||(p=Object(k.a)(['\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif, Arial, Helvetica;\n}\n\nbody {\n    background-image: url("/images/space3.jfif");\n}\n'])));var tn=function(){var n=Object(x.useState)(null),e=Object(O.a)(n,2),t=e[0],c=e[1],i=Object(x.useState)([]),a=Object(O.a)(i,2),o=a[0],r=a[1],s=Object(x.useState)([]),l=Object(O.a)(s,2),u=l[0],d=l[1],b=Object(x.useState)([]),j=Object(O.a)(b,2),p=j[0],h=j[1];return Object(x.useEffect)((function(){R().then((function(n){d(n.data),h(n.data)}))}),[]),Object(x.useEffect)((function(){h(u.slice(0,8))}),[u,t]),Object(C.jsxs)(m.a,{children:[Object(C.jsx)(en,{}),Object(C.jsxs)(T,{children:[Object(C.jsxs)(Z,{to:"/",children:[Object(C.jsx)("img",{src:"/front-spacex/images/rocket2.png",alt:"logo",style:{height:"100%"}})," "]}),Object(C.jsxs)(q,{children:[Object(C.jsx)(Z,{to:"/rockets",activeStyle:!0,children:"Rockets"}),Object(C.jsx)(Z,{to:"/launches",activeStyle:!0,children:"Launches"})]}),Object(C.jsxs)(Q,{children:[!t&&Object(C.jsx)(W,{to:"/register",children:"Register"}),!t&&Object(C.jsx)(W,{to:"/login",children:"Login"}),t&&Object(C.jsx)(W,{to:"/launches",onClick:function(){return c(void 0)},children:"Logout"})]})]}),Object(C.jsxs)(v.d,{children:[Object(C.jsx)(v.b,{exact:!0,path:"/",children:Object(C.jsx)(N,{loggedIn:t,votes:o,launches:u})}),Object(C.jsx)(v.b,{exact:!0,path:"/rockets",children:Object(C.jsx)(P,{})}),Object(C.jsxs)(v.b,{exact:!0,path:"/launches",children:[Object(C.jsx)(nn,{launches:u,displayed:8,setOnPage:h}),Object(C.jsx)(J,{launches:p,setLaunches:d,votes:o,setVotes:r,loggedIn:t})]}),Object(C.jsx)(v.b,{exact:!0,path:"/register",children:Object(C.jsx)(F,{setUser:c})}),Object(C.jsx)(v.b,{exact:!0,path:"/login",children:Object(C.jsx)(K,{setUser:c})})]})]})};f.a.render(Object(C.jsx)(h.a.StrictMode,{children:Object(C.jsx)(tn,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.13c0c74f.chunk.js.map