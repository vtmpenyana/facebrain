(this.webpackJsonpfacebrain=this.webpackJsonpfacebrain||[]).push([[0],{265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(71),s=a.n(i),o=(a(80),a(14)),c=a(15),l=a(17),m=a(16),u=(a(81),a(72)),d=a.n(u),g=(a(82),function(e){var t=e.isSignedIn,a=e.routeChange,n="";return t&&(n="Sign Out"),r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"Tilt shadow-1 tc",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner"}," ",r.a.createElement("img",{alt:"logo",src:d.a})," ")),r.a.createElement("div",{className:"nav underline pointer f3 dim fw5 pa3"},r.a.createElement("p",{onClick:function(){return a("signin")}},n)))}),p=function(e){return r.a.createElement("div",{className:"rank f2"},r.a.createElement("div",{className:"tc center"},r.a.createElement("p",null,"".concat(e.name,", you are ranked"))),r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"mt0"},"#".concat(e.count))),r.a.createElement("p",{className:"tc f4"}," paste a link to an image with a face, this app will detect face in images you provide "))},h=(a(83),function(e){var t=e.onInputChange,a=e.onImageSubmit;return r.a.createElement("div",{className:"linkInput w-70 pa3 center"},r.a.createElement("input",{onChange:t,className:"w-60 pa2",type:"text",placeholder:"paste url here"}),r.a.createElement("button",{onClick:a,className:"pointer w-10-ns w-20-m w-20-l f4 white grow bg-light-purple"},"Detect"))}),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signinEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signinPassword:e.target.value})},n.onSignin=function(){fetch("https://secure-hamlet-53424.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signinEmail,password:n.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.routeChange("home")):n.setState({formError:"bg-washed-red"})})).catch((function(e){console.log("Something went wrong")}))},n.state={signinPassword:"",signinEmail:"",formError:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.routeChange;return r.a.createElement("div",{className:"center flex justify-center items-center pa3"},r.a.createElement("article",{className:"br2 shadow-2 ba dark-gray b--black-10 w-100 w-60-m w-30-l mw10"},r.a.createElement("main",{className:"pa4 center black-80"},r.a.createElement("div",{className:"tc"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onInput:this.onEmailChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onInput:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("register")},className:"f6 pointer link dim black db"},"Register"))))))}}]),a}(r.a.Component),f=(a(84),function(e){var t=e.urlImage,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"abs mt2"},r.a.createElement("img",{id:"linkImage",alt:"",src:t}),r.a.createElement("div",{className:"bounding-box",style:{top:a.top,left:a.left,right:a.right,bottom:a.bottom}})))}),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({registerName:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onRegister=function(){fetch("https://secure-hamlet-53424.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.registerEmail,name:n.state.registerName,password:n.state.registerPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.routeChange("home"))}))},n.state={registerEmail:"",registerName:"",registerPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"center flex justify-center items-center pa3"},r.a.createElement("article",{className:"br2 shadow-2 ba dark-gray b--black-10 w-100 w-60-m w-30-l mw10"},r.a.createElement("main",{className:"pa4 center black-80"},r.a.createElement("div",{className:"tc"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{onInput:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"name",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onInput:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onInput:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e.props.routeChange("signin")},className:"f6 pointer link dim black db"},"Already Have an Account? ",r.a.createElement("br",null)," Sign In"))))))}}]),a}(r.a.Component),w=a(73),v=a.n(w),A=a(74),N=new(a.n(A).a.App)({apiKey:"fdf8d94335e84e229b8e2fefea5d5cbb"}),k={particles:{line_linked:{shadow:{enable:!0,color:"#3CA9D1"}},number:{value:50},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},C=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,email:t.email,joined:t.joined,count:t.count,name:t.name}})},e.onInputChange=function(t){e.setState({linkInput:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.querySelector("#linkImage"),n=Number(a.width),r=Number(a.height);return{top:t.top_row*r,left:t.left_col*n,right:n-t.right_col*n,bottom:r-t.bottom_row*r}},e.drawBox=function(t){e.setState({box:t})},e.routeChange=function(t){e.setState({route:t}),"home"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1})},e.onImageSubmit=function(){e.setState({urlImage:e.state.linkInput}),N.models.predict("a403429f2ddf4b49b307e318f00e528b",e.state.linkInput).then((function(t){e.drawBox(e.calculateFaceLocation(t)),t&&fetch("https://secure-hamlet-53424.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){t&&e.setState({user:Object.assign(e.state.user,{count:t})})}))})).catch((function(e){return console.log(e)}))},e.state={linkInput:"",urlImage:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",email:"",joined:"",count:"",name:""}},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{className:"particles",params:k}),r.a.createElement(g,{routeChange:this.routeChange,isSignedIn:this.state.isSignedIn}),"signin"===this.state.route?r.a.createElement(b,{loadUser:this.loadUser,routeChange:this.routeChange}):r.a.createElement("div",null,"register"===this.state.route?r.a.createElement(E,{loadUser:this.loadUser,routeChange:this.routeChange}):r.a.createElement("div",null,r.a.createElement(p,{count:this.state.user.count,name:this.state.user.name}),r.a.createElement(h,{onImageSubmit:this.onImageSubmit,onInputChange:this.onInputChange}),r.a.createElement(f,{box:this.state.box,urlImage:this.state.urlImage}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(264);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t){e.exports="data:image/png;base64,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"},75:function(e,t,a){e.exports=a(265)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.f891e378.chunk.js.map