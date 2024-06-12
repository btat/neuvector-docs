"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5824],{92112:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(74848),i=s(28453);const o={title:"Microsoft AD",taxonomy:{category:"docs"},slug:"/integration/msad"},a=void 0,r={id:"integration/msad/msad",title:"Microsoft AD",description:"Configuring Active Directory",source:"@site/docs/08.integration/03.msad/03.msad.md",sourceDirName:"08.integration/03.msad",slug:"/integration/msad",permalink:"/next/integration/msad",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/08.integration/03.msad/03.msad.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Microsoft AD",taxonomy:{category:"docs"},slug:"/integration/msad"},sidebar:"tutorialSidebar",previous:{title:"LDAP",permalink:"/next/integration/ldap"},next:{title:"SAML (Okta)",permalink:"/next/integration/saml"}},c={},d=[{value:"Configuring Active Directory",id:"configuring-active-directory",level:3},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function l(e){const t={a:"a",admonition:"admonition",h3:"h3",h4:"h4",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"configuring-active-directory",children:"Configuring Active Directory"}),"\n",(0,n.jsx)(t.p,{children:"This explains how NeuVector authenticates with Windows Active Directory.\nThe configuration page for Windows Active Directory server is shown below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(21424).A+"",width:"975",height:"405"})}),"\n",(0,n.jsxs)(t.p,{children:["User name: This can be any user who has read permission on the Base DN object. The dn attribute should be used as shown below, or the windows logon name such as ",(0,n.jsx)(t.a,{href:"mailto:user@local.nvtest.com",children:"user@local.nvtest.com"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(91275).A+"",width:"644",height:"211"})}),"\n",(0,n.jsx)(t.p,{children:"Base DN: This is a root Windows Active Director object for user authentication. The minimum access permission requirement is read. As shown in the example above, the OU=IT,DC=local,DC=nvtest,DC=com object is only allowed for a user account which is defined in the User name field to allow a read."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(70146).A+"",width:"631",height:"697"})}),"\n",(0,n.jsx)(t.p,{children:"With the above User name and Base DN settings, NeuVector is able to bind with Windows Active Directory successfully. Click the TEST CONNECTION to check it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(66493).A+"",width:"975",height:"317"})}),"\n",(0,n.jsx)(t.p,{children:"User name: It is required to use the sAMAccountName attribute ONLY to match. For example, in the screen below NeuVector is going to verify if the ituser(CN=ituser,OU=IT,DC=local,DC=nvtest,DC=com) user is able to login with NeuVector web console."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"NeuVector doesn't use the values of cn, displayName, dn, givenName, name or userPrincipalName attributes etc to verify the test user."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(45364).A+"",width:"630",height:"694"})}),"\n",(0,n.jsx)(t.p,{children:"The last part is role mapping for NeuVector for the web console login."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(64271).A+"",width:"975",height:"130"})}),"\n",(0,n.jsx)(t.p,{children:"In the example above, the defined group, _d_s_itgroup,  in the NeuVector role must have member and sAMAccountType attributes. The value of the sAMAccountType attribute MUST be 268435456 which is the Global Security group and the login username must be in the member lists."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ad_config",src:s(25254).A+"",width:"633",height:"697"})}),"\n",(0,n.jsx)(t.p,{children:"Group member attribute: This is a member attribute for Windows Active Directory by default and it is used for the role mapping purpose, as shown above.\nIf all the requirements are met above, the Windows Active Directory user should be able to login to the NeuVector web console successfully."}),"\n",(0,n.jsx)(t.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,n.jsxs)(t.p,{children:["Please see the ",(0,n.jsx)(t.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21424:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad1-68e9e581de170f304099403fc9725326.png"},91275:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad2-29a823c0c9d376199be0f65522bc087f.png"},70146:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad3-71302f25251aa09f1d1685c914d49569.png"},66493:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad4-5693aab51a7c5e6d4f46764dccf168d1.png"},45364:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad5-6de16d328a0585555eeb76bfc134cb0e.png"},64271:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad6-595d5890e807c48c5aa3b742cf71b286.png"},25254:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ad7-b4dc39485bbd886dec6400e7b601b0dd.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);