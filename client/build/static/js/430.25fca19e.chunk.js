"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[430],{7430:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var t=o(4942),i=o(5671),a=o(3144),r=o(136),c=o(7277),s=o(2791),l=o(3897);o(444);l.Z.initializeApp({apiKey:"AIzaSyAUxdUdNhrl8BSz_4MxKa0d6FwiCfgMtUE",authDomain:"otp-demo-cc2a7.firebaseapp.com",projectId:"otp-demo-cc2a7",storageBucket:"otp-demo-cc2a7.appspot.com",messagingSenderId:"646152500375",appId:"1:646152500375:web:389ef29c749b662bd8e5d2"});var u=l.Z,f=o(184),h=function(e){(0,r.Z)(o,e);var n=(0,c.Z)(o);function o(){var e;(0,i.Z)(this,o);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).handleChange=function(n){var o=n.target,i=o.name,a=o.value;e.setState((0,t.Z)({},i,a))},e.configureCaptcha=function(){window.recaptchaVerifier=new u.auth.RecaptchaVerifier("sign-in-button",{size:"invisible",callback:function(n){e.onSignInSubmit(),console.log("Recaptcha Verified")},defaultCountry:"IN"})},e.onSignInSubmit=function(n){n.preventDefault(),e.configureCaptcha();var o="+91"+e.state.mobile;console.log(o);var t=window.recaptchaVerifier;u.auth().signInWithPhoneNumber(o,t).then((function(e){window.confirmationResult=e,console.log("OTP has been sent")})).catch((function(e){console.log("SMS not sent")}))},e.onSubmitOTP=function(n){n.preventDefault();var o=e.state.otp;console.log(o),window.confirmationResult.confirm(o).then((function(e){var n=e.user;console.log(JSON.stringify(n)),alert("User is verified"),window.location.href="/newpassword"})).catch((function(e){}))},e}return(0,a.Z)(o,[{key:"render",value:function(){return(0,f.jsx)("div",{className:"forgot-main-container",children:(0,f.jsx)("div",{className:"forgot-form-outer",children:(0,f.jsxs)("div",{className:"forgot-form-inner",children:[(0,f.jsx)("img",{className:"form-logo",src:"./logo.png",alt:"form-logo"}),(0,f.jsx)("h3",{children:"Please verify your mobile number"}),(0,f.jsxs)("form",{onSubmit:this.onSignInSubmit,children:[(0,f.jsx)("div",{id:"sign-in-button"}),(0,f.jsx)("input",{className:"forgot-input",type:"phone",name:"mobile",placeholder:"Mobile Number",required:!0,onChange:this.handleChange}),(0,f.jsx)("button",{className:"forgot-btn",type:"submit",children:"Send OTP"})]}),(0,f.jsxs)("form",{onSubmit:this.onSubmitOTP,children:[(0,f.jsx)("input",{className:"forgot-input",type:"number",name:"otp",placeholder:"OTP",required:!0,onChange:this.handleChange}),(0,f.jsx)("button",{className:"forgot-btn",type:"submit",children:"Submit OTP"})]})]})})})}}]),o}(s.Component),m=h}}]);
//# sourceMappingURL=430.25fca19e.chunk.js.map