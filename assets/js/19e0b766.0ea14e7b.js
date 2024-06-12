"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7967],{28855:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const t={title:"Users and Roles",taxonomy:{category:"docs"},slug:"/configuration/users"},a=void 0,o={id:"configuration/users/users",title:"Users and Roles",description:"Configuring Users and Custom Roles",source:"@site/versioned_docs/version-5.3/03.configuration/02.users/02.users.md",sourceDirName:"03.configuration/02.users",slug:"/configuration/users",permalink:"/configuration/users",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/03.configuration/02.users/02.users.md",tags:[],version:"5.3",sidebarPosition:2,frontMatter:{title:"Users and Roles",taxonomy:{category:"docs"},slug:"/configuration/users"},sidebar:"tutorialSidebar",previous:{title:"Chrome Certificate Upload - MacOS",permalink:"/configuration/console/chrome"},next:{title:"Custom Login, Header and Footer",permalink:"/configuration/customui"}},l={},c=[{value:"Configuring Users and Custom Roles",id:"configuring-users-and-custom-roles",level:3},{value:"Users",id:"users",level:4},{value:"Namespace Restricted Users",id:"namespace-restricted-users",level:4},{value:"Roles",id:"roles",level:4},{value:"RBAC Permissions",id:"rbac-permissions",level:4},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4},{value:"Multi-Cluster FedAdmin and Admin Roles for Primary and Remote Management",id:"multi-cluster-fedadmin-and-admin-roles-for-primary-and-remote-management",level:4}];function d(e){const s={a:"a",admonition:"admonition",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"configuring-users-and-custom-roles",children:"Configuring Users and Custom Roles"}),"\n",(0,r.jsxs)(s.p,{children:["The Settings -> Users and Roles menu enables management of users as well as roles. Each user is assigned to a predefined or custom role. Users can be mapped to roles through group integration with LDAP/AD or other SSO system integrations. See the ",(0,r.jsx)(s.a,{href:"/integration/integration#directorysso-integration",children:"Enterprise Integration"})," section for detailed instructions for each type or directory or SSO integration."]}),"\n",(0,r.jsx)(s.h4,{id:"users",children:"Users"}),"\n",(0,r.jsx)(s.p,{children:"Users can be configured directly in NeuVector or integrated through directories/SSO. To create a new user in NeuVector go to Settings -> Users & Roles and add the user. Select the role of the user from the predefined roles, or see below to create a custom role."}),"\n",(0,r.jsx)(s.p,{children:"The default password requirement is minimum 8 characters length, 1 uppercase letter, 1 lowercase letter, 1 numeric character. These and other requirements can be changed by an admin in Settings -> Users under Authentication and Security Policies."}),"\n",(0,r.jsx)(s.h4,{id:"namespace-restricted-users",children:"Namespace Restricted Users"}),"\n",(0,r.jsx)(s.p,{children:"Users can be restricted to certain namespaces. First select the global role (use 'none' if no global role is desired), then click on the Advanced Settings."}),"\n",(0,r.jsx)(s.p,{children:"Select a role name from the list of roles, then enter the namespace(s) which the user allowed. For example, below is a global reader (view only) role, but for namespace 'demo' the user has admin permissions and for the namespace 'staging' the user has CI/Ops permissions. If a custom role was previously configured that can also be selected."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"namespace_user",src:n(39389).A+"",width:"2246",height:"1260"})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"If a user has previously logged in through an enterprise integration, their Identify Provider (e.g. OpenID Connect) will be listed. A user can be promoted to a Federated admin if multi-cluster management is in use by selecting the user and editing."})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"When a namespace restricted user configures a registry in Assets in NeuVector, only users with access to that namespace can see/scan that registry. Global users will be able to see/manage that registry, but not any users with restricted namespaces / role."})}),"\n",(0,r.jsx)(s.h4,{id:"roles",children:"Roles"}),"\n",(0,r.jsx)(s.p,{children:"Preconfigured roles include Admin, Reader, and CI/Ops. To create a new custom role, select  the Roles tab in Settings -> Users & Roles. Name the role and add the appropriate read or write permission to it."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"roles",src:n(33959).A+"",width:"2354",height:"878"})}),"\n",(0,r.jsx)(s.h4,{id:"rbac-permissions",children:"RBAC Permissions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Admission Control. Manage admission control rules."}),"\n",(0,r.jsx)(s.li,{children:"Audit Events. View Notification -> Risk reports logs."}),"\n",(0,r.jsx)(s.li,{children:"Authentication. Enable directory and SSO (oidc/saml/ldap) configuration."}),"\n",(0,r.jsx)(s.li,{children:"Authorization. Create new users and custom roles."}),"\n",(0,r.jsx)(s.li,{children:"CI Scan. Allows scanning on images through REST API. Useful for configuring a build-phase plug-in scanner user."}),"\n",(0,r.jsx)(s.li,{children:"Compliance. Create custom compliance scripts and review Compliance check results."}),"\n",(0,r.jsx)(s.li,{children:"Event. Access Notifications -> Events logs."}),"\n",(0,r.jsx)(s.li,{children:"Registry Scan. Configure registry scanning and view results."}),"\n",(0,r.jsx)(s.li,{children:"Runtime Policy. Manage Policy menus for Policy Mode (Discover, Monitor, Protect), Network Rules, Process Rules, File Access Rules, DLP, Packet capture, Response Rules."}),"\n",(0,r.jsx)(s.li,{children:"Runtime Scan. Trigger and view run-time vulnerability scanning of containers/nodes/platform."}),"\n",(0,r.jsx)(s.li,{children:"Security Event. Access Notifications -> Security Events logs."}),"\n",(0,r.jsx)(s.li,{children:"System Config. Allow configuration of Settings -> Configuration."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,r.jsx)(s.p,{children:"Groups can be mapped to preset or custom roles in NeuVector. In addition, a role can be restricted to one or more namespaces."}),"\n",(0,r.jsx)(s.p,{children:"In the LDAP/AD, SAML, or OIDC configuration in Settings, the last section of the configuration screen maps Groups to Roles and Namespaces. First select a default role, if any, for mapping."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"DefaultRole",src:n(88692).A+"",width:"563",height:"301"})}),"\n",(0,r.jsx)(s.p,{children:"To map a group to a role and namespace, click Add to create a new mapping. Select a global role or none. If admin or FedAdmin is selected, this gives write access to all namespaces. If a different role is selected, it can be further restricted by selecting the desired namespace(s)."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"AddMapping",src:n(84558).A+"",width:"1240",height:"637"})}),"\n",(0,r.jsx)(s.p,{children:"The following example provides some possible mappings. Demo_admin can read/view all namespaces but has admin rights to the demo and demo2 namespaces. System_admin only has admin rights to the kube-system namespace.  And fed_admins has the preset fedAdmin role which gives write access to all resources across multiple clusters."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"MappingExamples",src:n(63310).A+"",width:"705",height:"321"})}),"\n",(0,r.jsx)(s.admonition,{title:"important",type:"warning",children:(0,r.jsx)(s.p,{children:"If the user is in multiple groups, the role will be 'first matched' in the order listed and group's role assigned. Please adjust the order of configuration for proper behavior by dragging and dropping the mappings to the appropriate order in the list."})}),"\n",(0,r.jsx)(s.h4,{id:"multi-cluster-fedadmin-and-admin-roles-for-primary-and-remote-management",children:"Multi-Cluster FedAdmin and Admin Roles for Primary and Remote Management"}),"\n",(0,r.jsxs)(s.p,{children:["When a cluster is ",(0,r.jsx)(s.a,{href:"/navigation/multicluster",children:"promoted"})," to be a Primary cluster, the admin becomes a FedAdmin automatically. The FedAdmin can perform operations on the primary such as generate a federation token for connecting a remote cluster as well as creating federated security rules such as network, process, file, and admission control rules."]}),"\n",(0,r.jsx)(s.p,{children:"Multi-cluster management roles are as follows:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"On any cluster, a local admin or a Rancher SSO admin can promote the cluster to become a primary."}),"\n",(0,r.jsx)(s.li,{children:"Ldap/SSO/SAML/OIDC users with admin roles are not able to promote a cluster to primary."}),"\n",(0,r.jsx)(s.li,{children:"Only the FedAdmin can generate the token required to join a remote cluster to the primary."}),"\n",(0,r.jsx)(s.li,{children:"Any admin, including ldap/sso/saml/oidc users can join a remote cluster to the primary if they have the token."}),"\n",(0,r.jsx)(s.li,{children:"Only the FedAdmin can create a new user as a FedAdmin (or FedReader) or assign the FedAdmin (or FedReader) role to an existing user (including ldap/sso/saml/oidc users)."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},63310:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/group_role_map_examples-39ce7974d6c7360ec8cb659334505ab8.png"},84558:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/group_role_map_namespace-e3596c012468e606f80a9aecfbf4228b.png"},88692:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/groups_default_role-5a5243f7225f83274304b2c9b283e3b7.png"},39389:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/namespace_user_4-adadf8c302b00c58c3962a98d43a7bb2.png"},33959:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/roles_4-bfeff57f9a31b3c1ee3f4c90a2dc84a2.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var r=n(96540);const i={},t=r.createContext(i);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);