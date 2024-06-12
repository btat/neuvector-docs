"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2717],{3679:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(74848),t=o(28453);const a={title:"Rancher Deployment",taxonomy:{category:"docs"},slug:"/deploying/rancher"},s=void 0,i={id:"deploying/rancher/rancher",title:"Rancher Deployment",description:"Deploy and Manage NeuVector through Rancher Extensions or Apps & Marketplace",source:"@site/docs/02.deploying/03.rancher/03.rancher.md",sourceDirName:"02.deploying/03.rancher",slug:"/deploying/rancher",permalink:"/next/deploying/rancher",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/02.deploying/03.rancher/03.rancher.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rancher Deployment",taxonomy:{category:"docs"},slug:"/deploying/rancher"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/next/deploying/kubernetes"},next:{title:"RedHat OpenShift",permalink:"/next/deploying/openshift"}},l={},c=[{value:"Deploy and Manage NeuVector through Rancher Extensions or Apps &amp; Marketplace",id:"deploy-and-manage-neuvector-through-rancher-extensions-or-apps--marketplace",level:3},{value:"NeuVector UI Extension for Rancher",id:"neuvector-ui-extension-for-rancher",level:4},{value:"Deploy NeuVector",id:"deploy-neuvector",level:4},{value:"Manage NeuVector",id:"manage-neuvector",level:4},{value:"Disabling NeuVector/Rancher SSO",id:"disabling-neuvectorrancher-sso",level:4},{value:"Rancher Legacy Deployments",id:"rancher-legacy-deployments",level:4},{value:"Deploy Without Privileged Mode",id:"deploy-without-privileged-mode",level:3},{value:"Using Node Labels for Manager and Controller Nodes",id:"using-node-labels-for-manager-and-controller-nodes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"deploy-and-manage-neuvector-through-rancher-extensions-or-apps--marketplace",children:"Deploy and Manage NeuVector through Rancher Extensions or Apps & Marketplace"}),"\n",(0,r.jsx)(n.p,{children:"NeuVector is able to be deployed easily either through Rancher Extensions for Prime customers, or Rancher Apps and Marketplace. The default (Helm-based) NeuVector deployment will deploy NeuVector containers into the cattle-neuvector-system namespace."}),"\n",(0,r.jsx)(n.p,{children:"Note: Only NeuVector deployments through Rancher Extensions (NeuVector) of Rancher version 2.7.0+, or Apps & Marketplace of Rancher version 2.6.5+ can be managed directly (single sign on to NeuVector console) through Rancher. If adding clusters to Rancher with NeuVector already deployed, or where NeuVector has been deployed directly onto the cluster, these clusters will not be enabled for SSO integration."}),"\n",(0,r.jsx)(n.h4,{id:"neuvector-ui-extension-for-rancher",children:"NeuVector UI Extension for Rancher"}),"\n",(0,r.jsx)(n.p,{children:"Rancher Prime customers are able to easily deploy NeuVector and the NeuVector UI Extension for Rancher. This will enable Prime users to monitor and manage certain NeuVector functions and events directly through the Rancher UI. For community users, please see the Deploy NeuVector section below to deploy from Rancher Apps and Marketplace."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The first step is to enable the Rancher Extensions capability globally if it is not already enabled.\n",(0,r.jsx)(n.img,{alt:"extensions",src:o(16104).A+"",width:"616",height:"391"}),"\n",(0,r.jsx)(n.img,{alt:"enable",src:o(87804).A+"",width:"624",height:"404"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install the NeuVector-UI-Ext from the Available list\n",(0,r.jsx)(n.img,{alt:"install",src:o(37806).A+"",width:"624",height:"398"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Reload the extension once installation is completed\n",(0,r.jsx)(n.img,{alt:"reload",src:o(91489).A+"",width:"624",height:"400"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On your selected cluster, install the NeuVector application from the NeuVector tab if the NeuVector app is not already installed. This should take you to the App installation steps. For more details on this installation process, see the Deploy NeuVector section below.\n",(0,r.jsx)(n.img,{alt:"install_nv",src:o(63219).A+"",width:"624",height:"404"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The NeuVector dashboard should now be shown from the NeuVector menu for that cluster. From this dashboard, a summary of the security health of the cluster can be monitored. There are interactive elements in the dashboard, such as invoking a wizard to Improve Your (Security Risk) Score, including being able to turn on automated scanning for vulnerabilities if it is not enabled.\n",(0,r.jsx)(n.img,{alt:"dashboard",src:o(40783).A+"",width:"624",height:"456"}),"\nIn addition, the links in the upper right of the dashboard provide convenient single sign on (SSO) links to the full NeuVector console for more detailed analysis and configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To uninstall the extension, go back to the Extensions page\n",(0,r.jsx)(n.img,{alt:"ininstall",src:o(69302).A+"",width:"624",height:"392"}),"\nNote: Uninstalling the NeuVector UI extension will NOT uninstall the NeuVector app from each cluster. The NeuVector menu will revert to providing an SSO link into the NeuVector console."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"deploy-neuvector",children:"Deploy NeuVector"}),"\n",(0,r.jsx)(n.p,{children:"First, find the NeuVector chart in Rancher charts, select it and review the instructions and various configuration values. (Optional) Create a project to deploy into if desired, e.g. NeuVector. Note: If you see more than one NeuVector chart, don't select the one that is for upgrading legacy NeuVector 4.x Helm chart deployments."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"rancher_chart",src:o(31329).A+"",width:"1299",height:"411"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy the NeuVector chart, first configuring appropriate values for a Rancher deployment, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Container run-time, e.g. docker for RKE and containerd for RKE2, or select the K3s value if using K3s."}),"\n",(0,r.jsx)(n.li,{children:"Manager service type: change to LoadBalancer if available on public cloud deployments. If access is only desired through Rancher, any allowed value will work here. See the Important note below about changing the default admin password in NeuVector."}),"\n",(0,r.jsx)(n.li,{children:"Indicate if this cluster will be either a multi-cluster federated Primary, or remote (or select both if either option is desired)."}),"\n",(0,r.jsx)(n.li,{children:"Persistent volume for configuration backups"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"nv_values",src:o(94752).A+"",width:"1574",height:"946"})}),"\n",(0,r.jsx)(n.p,{children:"Click 'Install' after you have reviewed and updated any chart values."}),"\n",(0,r.jsx)(n.p,{children:"After successful NeuVector deployment, you will see a summary of the deployments, daemon sets, and cron job for NeuVector. You will also be able to see the services deployed in the Services Discovery menu on the left."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"deployed",src:o(66782).A+"",width:"1234",height:"552"})}),"\n",(0,r.jsx)(n.h4,{id:"manage-neuvector",children:"Manage NeuVector"}),"\n",(0,r.jsx)(n.p,{children:"You will now see a NeuVector menu item in the left, and selecting that will show a NeuVector tile/button, which when clicked will take you to the NeuVector console, in a new tab."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"nv_console",src:o(60402).A+"",width:"762",height:"324"})}),"\n",(0,r.jsx)(n.p,{children:"When this Single Sign On (SSO) access method is used for the first time, a corresponding user in the NeuVector cluster is created for the Rancher user login. The same user name of the Rancher logged in user will be created in NeuVector, with a role of either admin or fedAdmin, and Identity provider as Rancher."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"users",src:o(27247).A+"",width:"986",height:"424"})}),"\n",(0,r.jsx)(n.p,{children:"Note in the above screen shot, two Rancher users admin and gkosaka have been automatically created for SSO. If another user is create manually in NeuVector, the Identity provider would be listed as NeuVector, as shown below. This local user can login directly to the NeuVector console without going through Rancher."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"local",src:o(3334).A+"",width:"752",height:"46"})}),"\n",(0,r.jsx)(n.admonition,{title:"important",type:"warning",children:(0,r.jsxs)(n.p,{children:["It is recommended to login directly to the NeuVector console as admin/admin to manually change the admin password to a strong password. This will only change the NeuVector identity provider admin user password (you may see another admin user whose identify provider is Rancher). Alternatively, include a ",(0,r.jsx)(n.a,{href:"/deploying/production/configmap#protect-sensitive-data-using-a-secret",children:"ConfigMap as a secret"})," in the initial deployment from Rancher (see chart values for ConfigMap settings) to set the default admin password to a strong password."]})}),"\n",(0,r.jsx)(n.h4,{id:"disabling-neuvectorrancher-sso",children:"Disabling NeuVector/Rancher SSO"}),"\n",(0,r.jsx)(n.p,{children:"To disable the ability to login to NeuVector from Rancher Manager, go to Settings -> Configuration."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"rancher_sso",src:o(96764).A+"",width:"1047",height:"418"})}),"\n",(0,r.jsx)(n.h4,{id:"rancher-legacy-deployments",children:"Rancher Legacy Deployments"}),"\n",(0,r.jsx)(n.p,{children:"The sample file will deploy one manager and 3 controllers. It will deploy an enforcer on every node. See the bottom section for specifying dedicated manager or controller nodes using node labels. Note: It is not recommended to deploy (scale) more than one manager behind a load balancer due to potential session state issues."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Deployment on Rancher 2.x/Kubernetes should follow the Kubernetes reference section and/or Helm based deployment."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy the catalog docker-compose-dist.yml, controllers will be deployed on the labelled nodes, enforcers will be deployed on the rest of nodes. (The sample file can be modified so that enforcers are only deployed to the specified nodes.)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pick one of controllers for the manager to connect to. Modify the manager's catalog file docker-compose-manager.yml, set CTRL_SERVER_IP to the controller's IP, then deploy the manager catalog."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here are the sample compose files. If you wish to only deploy one or two of the components just use that section of the file."}),"\n",(0,r.jsx)(n.p,{children:"Rancher Manager/Controller/Enforcer Compose Sample File:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"manager:\n   scale: 1\n   image: neuvector/manager\n   restart: always\n   environment:\n     - CTRL_SERVER_IP=controller\n   ports:\n     - 8443:8443\ncontroller:\n   scale: 3\n   image: neuvector/controller\n   restart: always\n   privileged: true\n   environment:\n     - CLUSTER_JOIN_ADDR=controller\n   volumes:\n     - /var/run/docker.sock:/var/run/docker.sock\n     - /proc:/host/proc:ro\n     - /sys/fs/cgroup:/host/cgroup:ro\n     - /var/neuvector:/var/neuvector\nenforcer:\n   image: neuvector/enforcer\n   pid: host\n   restart: always\n   privileged: true\n   environment:\n     - CLUSTER_JOIN_ADDR=controller\n   volumes:\n     - /lib/modules:/lib/modules\n     - /var/run/docker.sock:/var/run/docker.sock\n     - /proc:/host/proc:ro    \n     - /sys/fs/cgroup/:/host/cgroup/:ro\n   labels:\n     io.rancher.scheduler.global: true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-without-privileged-mode",children:"Deploy Without Privileged Mode"}),"\n",(0,r.jsx)(n.p,{children:"On some systems, deployment without using privileged mode is supported. These systems must support the ability to add capabilities using the cap_add setting and to set the apparmor profile."}),"\n",(0,r.jsx)(n.p,{children:"See the sections on deployment with Docker-Compose, Docker UCP/Datacenter for sample compose files."}),"\n",(0,r.jsx)(n.p,{children:"Here is a sample Rancher compose file for deployment without privileged mode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"manager:\n   scale: 1\n   image: neuvector/manager\n   restart: always\n   environment:\n     - CTRL_SERVER_IP=controller\n   ports:\n     - 8443:8443\ncontroller:\n   scale: 3\n   image: neuvector/controller\n   pid: host\n   restart: always\n   cap_add:\n     - SYS_ADMIN\n     - NET_ADMIN\n     - SYS_PTRACE\n   security_opt:\n     - apparmor=unconfined\n     - seccomp=unconfined\n     - label=disable\n   environment:\n     - CLUSTER_JOIN_ADDR=controller\n   volumes:\n     - /var/run/docker.sock:/var/run/docker.sock\n     - /proc:/host/proc:ro\n     - /sys/fs/cgroup:/host/cgroup:ro\n     - /var/neuvector:/var/neuvector\nenforcer:\n   image: neuvector/enforcer\n   pid: host\n   restart: always\n   cap_add:\n     - SYS_ADMIN\n     - NET_ADMIN\n     - SYS_PTRACE\n     - IPC_LOCK\n   security_opt:\n     - apparmor=unconfined\n     - seccomp=unconfined\n     - label=disable\n   environment:\n     - CLUSTER_JOIN_ADDR=controller\n   volumes:\n     - /lib/modules:/lib/modules\n     - /var/run/docker.sock:/var/run/docker.sock\n     - /proc:/host/proc:ro    \n     - /sys/fs/cgroup/:/host/cgroup/:ro\n   labels:\n     io.rancher.scheduler.global: true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"using-node-labels-for-manager-and-controller-nodes",children:"Using Node Labels for Manager and Controller Nodes"}),"\n",(0,r.jsx)(n.p,{children:'To control which nodes the Manager and Controller are deployed on, label each node. Pick the nodes where the controllers are to be deployed. Label them with "nvcontroller=true". (With the current sample file, no more than one controller can run on the same node.).'}),"\n",(0,r.jsx)(n.p,{children:"For the manager node, label it \u201cnvmanager=true\u201d."}),"\n",(0,r.jsx)(n.p,{children:"Add labels in the yaml file. For example for the manager:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'   labels:\n     io.rancher.scheduler.global: true\n     io.rancher.scheduler.affinity:host_label: "nvmanager=true"\n'})}),"\n",(0,r.jsx)(n.p,{children:"For the controller:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'   labels:\n     io.rancher.scheduler.global: true\n     io.rancher.scheduler.affinity:host_label: "nvcontroller=true"\n'})}),"\n",(0,r.jsx)(n.p,{children:"For the enforcer, to prevent it from running on a controller node (if desired):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  labels:\n     io.rancher.scheduler.global: true\n     io.rancher.scheduler.affinity:host_label_ne: "nvcontroller=true"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3334:(e,n,o)=>{o.d(n,{A:()=>r});const r="data:image/png;base64,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"},60402:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/nv_access-db546a7a7071c8b3a6e52a11ac87790f.png"},27247:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/nv_admin-b8387d828974157ada7fc091874d47ce.png"},66782:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/nv_deployed-777888599a1de207c7677295649705a9.png"},31329:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/rancher_chart-bc9a422920f0adc66c42136ab1bbb57b.png"},94752:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/rancher_chart_values-09289b9bc526b5d15f3c4729a6ecd3fb.png"},96764:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/rancher_sso-5b8e5bced3f8dfdb0185f1593c019913.png"},16104:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui0_extensions-db422a23470c2067d2de3b63c9805207.png"},87804:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui1_enable-f0810e567ff2791340adca9d50d3d3a2.png"},37806:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui2_installext-beab395d8f806bf6d3b0c294530447c9.png"},91489:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui3reload-f16b019883e0e12faa941c4d0f678a2a.png"},63219:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui5installnv-eefd6b66d83bfdb6700db508ef822e09.png"},40783:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui6dashboard-00a2b337e2535d2bf4ce010c734e9840.png"},69302:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/ui7uninstall-ac506408705b8b0fb622290157263265.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);