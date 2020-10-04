(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{102:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),c=n.n(o),i=n(48),s=n(78),u=n(79),l=n(90),d=n(88),m=n(3),p=(n(102),function(){return r.a.createElement("div",{className:"full-screen"},r.a.createElement("p",null,"Loading..........."))}),f=n(89),b=n(35),g=n(52),h=n(65),E=n(76),v=n(71),y=n(95),O=n.n(y),j=h.a().shape({email:h.c().email("Invalid email").required("Required"),password:h.c().required("This field is required")}),k=Object(b.b)((function(e){return console.log(e),{error:e.error}}),(function(e){return{onSuccess:function(t){e(Object(v.d)(t))},invalidateState:function(){e(Object(v.a)())}}}))((function(e){var t=Object(a.useState)({}),n=Object(f.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){e.invalidateState()}),[e.location]);return r.a.createElement("div",{className:"main"},r.a.createElement("section",{className:"sign-in"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"signin-content"},r.a.createElement("div",{className:"signin-image"},r.a.createElement("img",{src:O.a,className:"img-responsive",alt:"sing up"})),r.a.createElement("div",{className:"signin-form"},r.a.createElement("h2",{className:"form-title"},"Sign in"),r.a.createElement(g.c,{initialValues:{email:"",password:""},validationSchema:j,onSubmit:function(t){var n;n=t,Object(E.c)(n).then((function(t){sessionStorage.setItem("token",t.data.token),e.onSuccess(t.data.user),e.history.push("/dashboard")})).catch((function(e){console.log(e),e.response&&c(e.response.data)}))}},(function(e){var t=e.errors,n=e.touched;return r.a.createElement(g.b,null,o&&r.a.createElement("div",{className:"error-block"},o.msg),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},r.a.createElement("i",{className:"zmdi zmdi-account material-icons-name"})),r.a.createElement(g.a,{id:"email",name:"email",placeholder:"Your Email",type:"email"}),n.email&&t.email&&r.a.createElement("div",{className:"error"},t.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},r.a.createElement("i",{className:"zmdi zmdi-lock"})),r.a.createElement(g.a,{id:"password",name:"password",type:"password",placeholder:"password"}),n.password&&t.password&&r.a.createElement("div",{className:"error"},t.password)),r.a.createElement("div",{className:"form-group form-button"},r.a.createElement("input",{type:"submit",name:"signin",id:"signin",className:"form-submit",value:"Log in"})))})),r.a.createElement("div",{className:"signup-image-link"},r.a.createElement("span",null,"Not a member yet? "),r.a.createElement(i.b,{to:"/register"},"Create an account")))))))})),w=Object(b.b)((function(e){return{isLogged:e.isLoggedIn}}),null)((function(e){return Object(a.useEffect)((function(){e.isLogged||"/register"===e.location.pathname||e.history.push("/login")}),[e.location]),r.a.createElement("div",null)})),N=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,131))})),S=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,132))})),I=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,133))})),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement(m.a,{path:"/register",component:I}),r.a.createElement(m.a,{path:"/login",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(m.a,{path:"/",component:w}),r.a.createElement(m.a,{path:"/search",component:N}),r.a.createElement(m.a,{path:"/dashboard",component:S})))}}]),n}(r.a.Component),L=n(57),A=n(96),T=n(7),B=n(9),z={user:{},error:{},isLoggedIn:!!sessionStorage.getItem("token"),books:[],read:[],wantToRead:[],currentlyReading:[],searchedBooks:[]},_=function(e){return{currentlyReading:e.filter((function(e){return"currentlyReading"===e.state})),wantToRead:e.filter((function(e){return"wantToRead"===e.state})),read:e.filter((function(e){return"read"===e.state}))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.e:return Object(T.a)(Object(T.a)({},e),{},{user:Object(T.a)({},t.payload),isLoggedIn:!0});case B.c:return Object(T.a)(Object(T.a)({},e),{},{error:t.payload});case B.b:var n=t.payload.data.books,a=_(n),r=a.currentlyReading,o=a.wantToRead,c=a.read;return Object(T.a)(Object(T.a)({},e),{},{books:n,currentlyReading:r,wantToRead:o,read:c});case B.d:if(!t.payload||0===t.payload.length)return Object(T.a)(Object(T.a)({},e),{},{searchedBooks:[]});var i=t.payload.map((function(t){var n={title:t.volumeInfo.title,authors:t.volumeInfo.authors,imageLinks:t.volumeInfo.imageLinks||{},previewLink:t.volumeInfo.previewLink,description:t.volumeInfo.description};n.imageLinks.thumbnail=n.imageLinks.thumbnail?n.imageLinks.thumbnail.replace("http:","https:"):null;var a=e.books.find((function(e){return e.title===n.title&&n.authors[0]===e.authors[0]}));return n.state=a?a.state:"none",n}));return Object(T.a)(Object(T.a)({},e),{},{searchedBooks:i});case B.g:var s=e.searchedBooks.map((function(e){return e.title===t.payload.title&&e.authors[0]===t.payload.authors[0]&&(e.state=t.payload.state),e}));return t.isNew?Object(T.a)(Object(T.a)({},e),{},{searchedBooks:s,books:[].concat(Object(A.a)(e.books),[Object(T.a)({},t.payload)])}):Object(T.a)(Object(T.a)({},e),{},{searchedBooks:s});case B.f:var u=e.books.map((function(e){return e._id===t.payload._id&&(e.state=t.payload.state),e})),l=_(u);return Object(T.a)(Object(T.a)({},e),{},{books:u},l);case B.a:return sessionStorage.removeItem("token"),z;default:return e}},D=Object(L.b)(q);n(128);c.a.render(r.a.createElement(b.a,{store:D},r.a.createElement(i.a,null,r.a.createElement(R,null))),document.getElementById("root"))},71:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n(9),r=function(e){return{type:a.e,payload:e}},o=function(e){return{type:a.b,payload:e}},c=function(){return{type:a.a}},i=function(e){return{type:a.d,payload:e}},s=function(e,t){return{type:a.g,payload:e,isNew:t}},u=function(e){return{type:a.f,payload:e}}},76:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(34),r=n.n(a),o="https://books.googleapis.com/books/v1/volumes?key=".concat("AIzaSyDApYUKam1UBh-wStpwinGLUz9qvIjWJbA","&maxResults=20&q="),c="https://myread-apps.herokuapp.com/",i=function(){return{Accept:"application/json",Authorization:sessionStorage.getItem("token")}},s={Accept:"application/json"},u=function(e){return r.a.get("".concat(o).concat(e),{APIheader:s}).then((function(e){return e.data.items}))},l=function(e){return r.a.post(c+"user/register",e,{APIheader:s}).then((function(e){return e.json()}))},d=function(e){return r.a.post(c+"user/login",e,{APIheader:s})},m=function(e){var t=i();return r.a.post(c+"book",e,{headers:t})},p=function(e){var t=i();return r.a.put(c+"book",e,{headers:t})},f=function(){var e=i();return r.a.get(c+"books",{headers:e})}},9:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return c}));var a="SET_USER",r="SET_ERROR",o="SET_BOOK",c="INVALIDATE",i="SET_SEARCHED",s="UPDATE_BOOK",u="UPDATE_SEARCHED_BOOK"},95:function(e,t,n){e.exports=n.p+"static/media/login.956392f1.jpg"},97:function(e,t,n){e.exports=n(129)}},[[97,1,2]]]);
//# sourceMappingURL=main.e0dd1bd9.chunk.js.map