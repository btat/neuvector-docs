"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1696],{62950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=s(74848),i=s(28453);const a={title:"OpenID Connect (OIDC) for ADFS",taxonomy:{category:"docs"},slug:"/integration/oidc_adfs"},d=void 0,c={id:"integration/oidc_adfs/oidc_adfs",title:"OpenID Connect (OIDC) for ADFS",description:"Integrating with OpenID Connect (OIDC) for ADFS",source:"@site/docs/08.integration/08.oidc_adfs/08.oidc_adfs.md",sourceDirName:"08.integration/08.oidc_adfs",slug:"/integration/oidc_adfs",permalink:"/next/integration/oidc_adfs",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/08.integration/08.oidc_adfs/08.oidc_adfs.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"OpenID Connect (OIDC) for ADFS",taxonomy:{category:"docs"},slug:"/integration/oidc_adfs"},sidebar:"tutorialSidebar",previous:{title:"OpenID Connect Azure/Okta",permalink:"/next/integration/openid"},next:{title:"IBM Security Advisor",permalink:"/next/integration/ibmsa"}},r={},o=[{value:"Integrating with OpenID Connect (OIDC) for ADFS",id:"integrating-with-openid-connect-oidc-for-adfs",level:3},{value:"NeuVector Setup",id:"neuvector-setup",level:4}];function l(e){const n={h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"integrating-with-openid-connect-oidc-for-adfs",children:"Integrating with OpenID Connect (OIDC) for ADFS"}),"\n",(0,t.jsx)(n.p,{children:'From AD FS Management, click on "Application Groups" and then click on "Add Application Group..."'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(8710).A+"",width:"1164",height:"201"})}),"\n",(0,t.jsx)(n.p,{children:'Enter a name, select "Server application accessing a web API" and then click Next'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(38146).A+"",width:"758",height:"612"})}),"\n",(0,t.jsx)(n.p,{children:"Enter Redirect URI from NeuVector Settings > OpenID Connect Setting page and then click Next"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(59275).A+"",width:"758",height:"618"})}),"\n",(0,t.jsx)(n.p,{children:'Enable "Generate a shared secret" checkbox and then click Next'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(13364).A+"",width:"762",height:"622"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the Identifier created in previous step and then click Next"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(34493).A+"",width:"756",height:"612"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(93254).A+"",width:"758",height:"618"})}),"\n",(0,t.jsx)(n.p,{children:"Enable allatclaims, email, openid and profile scopes and then click Next"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(32271).A+"",width:"756",height:"614"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(64792).A+"",width:"756",height:"614"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(49409).A+"",width:"760",height:"620"})}),"\n",(0,t.jsx)(n.p,{children:"Double click on an application group you just created previously"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(51645).A+"",width:"764",height:"852"})}),"\n",(0,t.jsx)(n.p,{children:"Double click on Web API and then click Issuance Transform Rules tab"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(30516).A+"",width:"760",height:"850"})}),"\n",(0,t.jsx)(n.p,{children:'Click Add Rule... and select "Send LDAP Attributes as Claims" and then click Next'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(52975).A+"",width:"762",height:"620"})}),"\n",(0,t.jsx)(n.p,{children:"Enter a Claim rule name, choose Active Directory as the Attribute store and provide the mapping of LDAP attributes to outgoing claim types as below"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Token-Groups \u2013 Unqualified Names -> groups"}),"\n",(0,t.jsx)(n.li,{children:"User-Principal-Name -> preferred_username"}),"\n",(0,t.jsx)(n.li,{children:"E-Mail-Address -> email"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(67878).A+"",width:"762",height:"620"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(72857).A+"",width:"760",height:"846"})}),"\n",(0,t.jsx)(n.h4,{id:"neuvector-setup",children:"NeuVector Setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Identity Provider Issuer: https://<adfs-fqdn>/adfs"}),"\n",(0,t.jsx)(n.li,{children:'Client ID: It is a "Client Identifier" showing in "Server application" dialog in "Add Application Group Wizard"'}),"\n",(0,t.jsx)(n.li,{children:'Client Secret: It is a Secret showing in "Configure Application Credentials" dialog in "Add Application Group Wizard"'}),"\n",(0,t.jsx)(n.li,{children:"Group Claim: groups"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(40752).A+"",width:"1161",height:"461"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(22507).A+"",width:"758",height:"896"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfs",src:s(58850).A+"",width:"756",height:"824"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8710:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs1-7989550c776e65a7b35c13059bbe3d00.png"},51645:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs10-4a2af3697f9f7fd7603fdcffb5f929d8.png"},30516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs11-88d91b8de2af77b3fbc80caad3e9f7e1.png"},52975:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs12-247e36df8d097a822f965e9e8b0a48ee.png"},67878:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs13-a4fea85ad168d78e84f2f0f26bfd5a2b.png"},72857:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs14-cffad141658f98f74260e83a25bd5b18.png"},40752:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs15-a134584d614d358dc544860ec2b44324.png"},22507:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs16-a2cb24aae37c8bff896fbe32b74d280e.png"},58850:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs17-456bd46e68c504e13c107001fed08f87.png"},38146:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs2-11311a7b15cd458773a29b7d9b9cec70.png"},59275:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs3-a9c494ef6a03f54f3fa4b758624ad705.png"},13364:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs4-19b8fc943df043e7f4c9ac888f62426d.png"},34493:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs5-cb5d878e0022cfe597f922bf3975db49.png"},93254:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs6-086d68ad38b034da381c9e90953d5a59.png"},32271:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs7-64b3fb80da56f70f0732db131dd35417.png"},64792:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs8-20f302207b3da782b636e812f10baf9a.png"},49409:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adfs9-8d9bb93680ee4c0a9e279dea1acc5e8c.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);