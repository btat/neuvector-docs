"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7765],{49837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(74848),n=r(28453);const i={title:"Enterprise Multi-Cluster Management",taxonomy:{category:"docs"},slug:"/navigation/multicluster"},a=void 0,o={id:"navigation/multicluster/multicluster",title:"Enterprise Multi-Cluster Management",description:"Enterprise Console",source:"@site/versioned_docs/version-5.2/04.navigation/02.multicluster/02.multicluster.md",sourceDirName:"04.navigation/02.multicluster",slug:"/navigation/multicluster",permalink:"/5.2/navigation/multicluster",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/04.navigation/02.multicluster/02.multicluster.md",tags:[],version:"5.2",sidebarPosition:2,frontMatter:{title:"Enterprise Multi-Cluster Management",taxonomy:{category:"docs"},slug:"/navigation/multicluster"},sidebar:"tutorialSidebar",previous:{title:"Navigating the Console",permalink:"/5.2/navigation/navigation"},next:{title:"Improve Security Risk Score",permalink:"/5.2/navigation/improve_score"}},l={},c=[{value:"Enterprise Console",id:"enterprise-console",level:3},{value:"Configuring the Primary and Remote Clusters",id:"configuring-the-primary-and-remote-clusters",level:3},{value:"Federated Policy",id:"federated-policy",level:3},{value:"Federated Registries for Distributed Image Scanning Results",id:"federated-registries-for-distributed-image-scanning-results",level:3},{value:"Federating Results from CI/CD Scanners (Optional)",id:"federating-results-from-cicd-scanners-optional",level:4}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"enterprise-console",children:"Enterprise Console"}),"\n",(0,s.jsx)(t.p,{children:"The NeuVector console can be used to manage large enterprise multi-cluster and multi-cloud deployments. One cluster should be selected as the Primary cluster, and other Remote clusters will then be able to join the Primary. Once connected, the Primary cluster can push Federated rules down to each remote cluster, which display as Federated rules in the consoles of each remote cluster. Scanned Federated registries will also sync the scan results with remote clusters. Only local users & Rancher users who have admin permission can promote a cluster to become the primary cluster."}),"\n",(0,s.jsx)(t.p,{children:"In addition to Federated policy, multi-cluster management supports monitoring of each remote cluster in a summary page, as shown below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Summary",src:r(97772).A+"",width:"2406",height:"1320"})}),"\n",(0,s.jsx)(t.p,{children:"There MUST be network connectivity between the controllers in each cluster on the required ports. The controller is exposed external to its cluster by either a primary or remote service, as can be seen in the sample NeuVector deployment yaml file."}),"\n",(0,s.jsx)(t.h3,{id:"configuring-the-primary-and-remote-clusters",children:"Configuring the Primary and Remote Clusters"}),"\n",(0,s.jsxs)(t.p,{children:["Log into the console for the cluster which will be the Primary cluster. In the upper right drop down menu, select Multiple Clusters and then Promote to configure the Primary. Note: Only local users & Rancher users who have admin permission can promote a cluster to become the primary cluster. Currently, SSO/LDAP/OIDC users with admin role are not allowed to promote a cluster to primary.\n",(0,s.jsx)(t.img,{alt:"MasterConfig",src:r(12499).A+"",width:"2026",height:"528"})]}),"\n",(0,s.jsx)(t.p,{children:"Enter the public IP and port of the fed-master service. You can find this by running"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl get svc -n neuvector\n"})}),"\n",(0,s.jsx)(t.p,{children:"The output will look like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"NAME                                      TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                         AGE\nneuvector-service-controller-fed-master   LoadBalancer   10.27.249.147   35.238.131.23    11443:31878/TCP                 17d\nneuvector-service-controller-fed-worker   LoadBalancer   10.27.251.1     35.226.199.111   10443:32736/TCP                 17d\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the above example the primary controller host name/IP is 35.238.131.23 and the port is 11443. Note: Make sure this IP address and port are externally accessible (from the remote clusters). Note: The system clocks (time) must be the same for each primary and remote cluster in order to function properly."}),"\n",(0,s.jsx)(t.p,{children:"After logging back into the console, select Multiple Clusters again from the upper right menu, and click on the icon to generate a token needed to connect the remote clusters. Copy the token for use in the next step. The token is valid for about 1 hour, and if expired must be generated again to connect future remote clusters."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Token",src:r(78054).A+"",width:"2098",height:"382"})}),"\n",(0,s.jsx)(t.p,{children:"To join a remote cluster to the primary, login to the remote cluster console as an admin. Select Multiple Clusters from the upper right drop down, and click on Join. Enter the controller IP or host name for the remote cluster as well as the port. Again, you can retrieve this information from the remote cluster by doing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"kubectl get svc -n neuvector\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use the output for the fed-worker of the remote cluster to configure the IP address and port. Then enter the token copied from the primary. Note that after entering the token, the IP address and port for the primary will be automatically filled in, but this can be edited or manually entered."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"JoinRemote",src:r(74469).A+"",width:"2022",height:"994"})}),"\n",(0,s.jsx)(t.p,{children:"Log out of the remote cluster and log back into the primary. Or if already logged in, click refresh and the remote cluster will be listed in the Multiple Clusters menu."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"FedMaster",src:r(75753).A+"",width:"2060",height:"578"})}),"\n",(0,s.jsx)(t.p,{children:"You can click on the manage icon in the list, or use the pull down multi-cluster menu at the top to switch clusters at any time. Once you have switched to a remote cluster, all menu items on the left now apply to the remote cluster."}),"\n",(0,s.jsx)(t.h3,{id:"federated-policy",children:"Federated Policy"}),"\n",(0,s.jsx)(t.p,{children:"Please see the Policy -> Federated Policy section for instructions on how to create Federated rules that will be pushed to each cluster."}),"\n",(0,s.jsx)(t.h3,{id:"federated-registries-for-distributed-image-scanning-results",children:"Federated Registries for Distributed Image Scanning Results"}),"\n",(0,s.jsx)(t.p,{children:"The primary (master) cluster can scan a registry/repo designated as a federated registry. The scan results from these registries will be synchronized to all managed (remote) clusters. This enables display of scan results in the managed cluster console as well as use of the results in admission control rules of the managed cluster. Registries only need to be scanned once instead of by each cluster, reducing CPU/memory and network bandwidth usage."}),"\n",(0,s.jsx)(t.p,{children:"Federated registries can only be configured by a federated admin on the primary cluster in Assets -> Registries. After adding and scanning a federated repository, the scan results will be synchronized to all managed clusters. Admission control rules in each managed cluster which require image scanning (e.g. CVE, compliance based rules) will automatically use both federated scan results as well as any registry scans results locally configured."}),"\n",(0,s.jsx)(t.h4,{id:"federating-results-from-cicd-scanners-optional",children:"Federating Results from CI/CD Scanners (Optional)"}),"\n",(0,s.jsxs)(t.p,{children:["Federated registry scan results are always sync'd to managed clusters, as described above. The primary cluster can also receive scan results ",(0,s.jsx)(t.a,{href:"/scanning/scanners#standalone-scanner-for-local-scanning",children:"from stand alone scanner scans"})," or scanner plug-ins invoked from a build CI/CD pipeline. To enable build phase (CI/CD) repository scanning results to also sync to managed clusters, first enable it by editing the primary (master) cluster settings as shown below."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"master_settings",src:r(20685).A+"",width:"898",height:"272"}),"\n",(0,s.jsx)(t.img,{alt:"fed_sync",src:r(88802).A+"",width:"1266",height:"623"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75753:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/fed_master_list-678f7af724ace7be01fecb3c9fe976ee.png"},20685:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/fed_primary_config-18bfdd0f975c5c8b5658e83c110a43c5.png"},88802:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/fed_reg_sync-e5aa61e0eb53cc1b9c5500d636ebe632.png"},74469:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/join_remote-9cbd63dea204ff6b0ded0f2c251e97c8.png"},12499:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/master1-1dc895c03691448a64dc3c4fe9f98a35.png"},78054:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/master_token-a8ce53888b89e59391b9a62f19dd9c1c.png"},97772:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/multicluster_summary-f2ceeb933de0e8a1e57c57651d63cf00.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);