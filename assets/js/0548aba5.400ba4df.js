"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4813],{8076:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(74848),n=s(28453);const o={title:"Microsoft AD",taxonomy:{category:"docs"},slug:"/integration/msad"},a=void 0,r={id:"integration/msad/msad",title:"Microsoft AD",description:"Configuring Active Directory",source:"@site/versioned_docs/version-5.3/08.integration/03.msad/03.msad.md",sourceDirName:"08.integration/03.msad",slug:"/integration/msad",permalink:"/integration/msad",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/08.integration/03.msad/03.msad.md",tags:[],version:"5.3",sidebarPosition:3,frontMatter:{title:"Microsoft AD",taxonomy:{category:"docs"},slug:"/integration/msad"},sidebar:"tutorialSidebar",previous:{title:"LDAP",permalink:"/integration/ldap"},next:{title:"SAML (Okta)",permalink:"/integration/saml"}},c={},d=[{value:"Configuring Active Directory",id:"configuring-active-directory",level:3},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function l(e){const t={a:"a",admonition:"admonition",h3:"h3",h4:"h4",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"configuring-active-directory",children:"Configuring Active Directory"}),"\n",(0,i.jsx)(t.p,{children:"This explains how NeuVector authenticates with Windows Active Directory.\nThe configuration page for Windows Active Directory server is shown below."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(98972).A+"",width:"975",height:"405"})}),"\n",(0,i.jsxs)(t.p,{children:["User name: This can be any user who has read permission on the Base DN object. The dn attribute should be used as shown below, or the windows logon name such as ",(0,i.jsx)(t.a,{href:"mailto:user@local.nvtest.com",children:"user@local.nvtest.com"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(83255).A+"",width:"644",height:"211"})}),"\n",(0,i.jsx)(t.p,{children:"Base DN: This is a root Windows Active Director object for user authentication. The minimum access permission requirement is read. As shown in the example above, the OU=IT,DC=local,DC=nvtest,DC=com object is only allowed for a user account which is defined in the User name field to allow a read."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(40238).A+"",width:"631",height:"697"})}),"\n",(0,i.jsx)(t.p,{children:"With the above User name and Base DN settings, NeuVector is able to bind with Windows Active Directory successfully. Click the TEST CONNECTION to check it."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(76353).A+"",width:"975",height:"317"})}),"\n",(0,i.jsx)(t.p,{children:"User name: It is required to use the sAMAccountName attribute ONLY to match. For example, in the screen below NeuVector is going to verify if the ituser(CN=ituser,OU=IT,DC=local,DC=nvtest,DC=com) user is able to login with NeuVector web console."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"NeuVector doesn't use the values of cn, displayName, dn, givenName, name or userPrincipalName attributes etc to verify the test user."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(8088).A+"",width:"630",height:"694"})}),"\n",(0,i.jsx)(t.p,{children:"The last part is role mapping for NeuVector for the web console login."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(82579).A+"",width:"975",height:"130"})}),"\n",(0,i.jsx)(t.p,{children:"In the example above, the defined group, _d_s_itgroup,  in the NeuVector role must have member and sAMAccountType attributes. The value of the sAMAccountType attribute MUST be 268435456 which is the Global Security group and the login username must be in the member lists."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ad_config",src:s(27370).A+"",width:"633",height:"697"})}),"\n",(0,i.jsx)(t.p,{children:"Group member attribute: This is a member attribute for Windows Active Directory by default and it is used for the role mapping purpose, as shown above.\nIf all the requirements are met above, the Windows Active Directory user should be able to login to the NeuVector web console successfully."}),"\n",(0,i.jsx)(t.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,i.jsxs)(t.p,{children:["Please see the ",(0,i.jsx)(t.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},98972:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad1-68e9e581de170f304099403fc9725326.png"},83255:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad2-29a823c0c9d376199be0f65522bc087f.png"},40238:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad3-71302f25251aa09f1d1685c914d49569.png"},76353:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad4-5693aab51a7c5e6d4f46764dccf168d1.png"},8088:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad5-6de16d328a0585555eeb76bfc134cb0e.png"},82579:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad6-595d5890e807c48c5aa3b742cf71b286.png"},27370:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/ad7-b4dc39485bbd886dec6400e7b601b0dd.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var i=s(96540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);