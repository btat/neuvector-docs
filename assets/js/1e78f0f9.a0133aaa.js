"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6317],{31548:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=s(74848),t=s(28453);const n={title:"Sigstore Cosign Signature Verifiers",taxonomy:{category:"docs"},slug:"/policy/admission/sigstore"},o=void 0,a={id:"policy/admission/sigstore/sigstore",title:"Sigstore Cosign Signature Verifiers",description:"Configuring Sigstore/Cosign Verifiers for Requiring Image Signing",source:"@site/docs/05.policy/03.admission/01.sigstore/01.sigstore.md",sourceDirName:"05.policy/03.admission/01.sigstore",slug:"/policy/admission/sigstore",permalink:"/next/policy/admission/sigstore",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/05.policy/03.admission/01.sigstore/01.sigstore.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sigstore Cosign Signature Verifiers",taxonomy:{category:"docs"},slug:"/policy/admission/sigstore"},sidebar:"tutorialSidebar",previous:{title:"Admission Controls",permalink:"/next/policy/admission"},next:{title:"Configuration Assessment for Kubernetes Resources",permalink:"/next/policy/admission/assessment"}},g={},d=[{value:"Configuring Sigstore/Cosign Verifiers for Requiring Image Signing",id:"configuring-sigstorecosign-verifiers-for-requiring-image-signing",level:3}];function c(e){const i={a:"a",code:"code",h3:"h3",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h3,{id:"configuring-sigstorecosign-verifiers-for-requiring-image-signing",children:"Configuring Sigstore/Cosign Verifiers for Requiring Image Signing"}),"\n",(0,r.jsx)(i.p,{children:"NeuVector enables a user to perform signature verification logic by integrating image signatures generated by Sigstore's cosign tool."}),"\n",(0,r.jsx)(i.p,{children:"The following is an example of an admission control configuration that requires a deployment's image be signed by an appropriate key or identity."}),"\n",(0,r.jsx)(i.p,{children:"First, configure a root of trust. This can either be a public or private root of trust, depending on the Sigstore deployment used to generate signatures. If you have deployed your own instances of Sigstore's services, select the private root of trust option."}),"\n",(0,r.jsx)(i.p,{children:"A public root of trust does not need any additional configuration outside of giving it an easily referenced name."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(30464).A+"",width:"4174",height:"1776"})}),"\n",(0,r.jsx)(i.p,{children:"A private root of trust requires the the keys and/or certificates from your privately deployed instances of Sigstore's services."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(11467).A+"",width:"4160",height:"1802"})}),"\n",(0,r.jsxs)(i.p,{children:["Next, for a given root of trust, configure each of the verifiers that you would like to use during admission control. There are two types of verifiers: keypair and keyless. A keypair verifier would be used when trying to verify an image signed by a user-defined private key. A keyless verifier would be used when verifying a signature generated by Sigstore's keyless pattern. More information about the Sigstore signing methods can be seen ",(0,r.jsx)(i.a,{href:"https://docs.sigstore.dev/cosign/overview/",children:"here"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"To configure a keypair verifier, provide a name, and a public key corresponding to a target private key."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(78544).A+"",width:"4226",height:"1696"})}),"\n",(0,r.jsx)(i.p,{children:"To configure a keyless verifier, provide the OIDC issuer and identity used during signing."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(13154).A+"",width:"4182",height:"1508"})}),"\n",(0,r.jsx)(i.p,{children:"Note that after root-of-trust and verifier configuration, an image must be scanned in order to determine which verifiers the given image's signatures satisfy."}),"\n",(0,r.jsx)(i.p,{children:"The configured verifiers that an image satisfies can be viewed in the upper right section of a given image's scan results in Assets->Registries. If an image is not signed by a verifier, it will not appear in its scan results."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(80630).A+"",width:"3904",height:"1552"})}),"\n",(0,r.jsxs)(i.p,{children:["To reference a particular root of trust and verifier in an admission control rule, join the two names with a forward slash like so: ",(0,r.jsx)(i.code,{children:"my-root-of-trust/my-verifier"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(99272).A+"",width:"3514",height:"1136"})}),"\n",(0,r.jsx)(i.p,{children:"To require an image be signed in an admission control rule, set the True/False value for the Image Signed criteria."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"sigstore",src:s(3330).A+"",width:"3524",height:"1008"})})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},30464:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/1configure-public-root-of-trust-374f452fb723e5b9a001e0c175c12677.png"},11467:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/2configure-private-root-of-trust-e286db816f1aed565020850545e00b14.png"},78544:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/3add-keypair-verifier-for-public-root-of-trust-728ba38577ee6e24613ddd429c8b4b5c.png"},13154:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/4add-keyless-verifier-for-public-root-of-trust-2ef61a907a4dd9214eea4283ee5e8771.png"},99272:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/5new_admission_rule_signature-0c4b381312ce0de4a69b7d529b138849.png"},80630:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/6new_show_verifiers.scanresults-9eac31d7c4b6dc9657bb9f87a97707dd.png"},3330:(e,i,s)=>{s.d(i,{A:()=>r});const r=s.p+"assets/images/7image_signed-fa5527d6170af2c9a6c0fda0a83398e8.png"},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var r=s(96540);const t={},n=r.createContext(t);function o(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);