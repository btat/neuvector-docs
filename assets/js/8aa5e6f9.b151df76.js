"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2114],{24996:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(74848),r=o(28453);const i={title:"Deployment Preparation",taxonomy:{category:"docs"},slug:"/basics/installation/native"},s=void 0,a={id:"basics/installation/native/native",title:"Deployment Preparation",description:"Understanding How to Deploy NeuVector",source:"@site/docs/01.basics/03.installation/01.native/01.native.md",sourceDirName:"01.basics/03.installation/01.native",slug:"/basics/installation/native",permalink:"/next/basics/installation/native",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/01.basics/03.installation/01.native/01.native.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deployment Preparation",taxonomy:{category:"docs"},slug:"/basics/installation/native"},sidebar:"tutorialSidebar",previous:{title:"Installation / Deployment",permalink:"/next/basics/installation"},next:{title:"2. Deploying NeuVector 5.x",permalink:"/next/deploying"}},l={},c=[{value:"Understanding How to Deploy NeuVector",id:"understanding-how-to-deploy-neuvector",level:3},{value:"Deploy using Kubernetes, OpenShift, Rancher, or other Kubernetes-based tools",id:"deploy-using-kubernetes-openshift-rancher-or-other-kubernetes-based-tools",level:4},{value:"Deploy using Docker Native",id:"deploy-using-docker-native",level:4},{value:"Backing Up Configuration Files",id:"backing-up-configuration-files",level:4},{value:"Volume Mapping",id:"volume-mapping",level:4},{value:"Ports and Port Mapping",id:"ports-and-port-mapping",level:4},{value:"Port Summary",id:"port-summary",level:5},{value:"Additional Ports",id:"additional-ports",level:5}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"understanding-how-to-deploy-neuvector",children:"Understanding How to Deploy NeuVector"}),"\n",(0,t.jsx)(n.p,{children:"Deploy the NeuVector containers using Kubernetes, OpenShift, Rancher, Docker, or other platforms. Each type of NeuVector container has a unique purpose and may require special performance or node selection requirements for optimum operation."}),"\n",(0,t.jsxs)(n.p,{children:["The NeuVector open source images are hosted on Docker Hub at ",(0,t.jsx)(n.code,{children:"/neuvector/{image name}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/deploying/production?target=_blank#best-practices-tips-qa-for-deploying-and-managing-neuvector",children:"Onboarding/Best Practices section"})," to download an on boarding guide."]}),"\n",(0,t.jsx)(n.h4,{id:"deploy-using-kubernetes-openshift-rancher-or-other-kubernetes-based-tools",children:"Deploy using Kubernetes, OpenShift, Rancher, or other Kubernetes-based tools"}),"\n",(0,t.jsxs)(n.p,{children:["To deploy NeuVector using Kubernetes, OpenShift, Rancher or other orchestration tools, see the preparation steps and sample files in the section ",(0,t.jsx)(n.a,{href:"/deploying/production#planning-deployments",children:"Deploying NeuVector"}),". This deploys manager, controller, scanner, and enforcer containers. For simple testing using the NeuVector Allinone container, see the section Special Use Cases with Allinone."]}),"\n",(0,t.jsxs)(n.p,{children:["NeuVector supports Helm-based deployment with a Helm chart at ",(0,t.jsx)(n.a,{href:"https://github.com/neuvector/neuvector-helm",children:"https://github.com/neuvector/neuvector-helm"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Automated deployments are supported using Helm, Red Hat/Community Operators, the rest API, or a Kubernetes ConfigMap. See the section ",(0,t.jsx)(n.a,{href:"/deploying/production/configmap#kubernetes-configmap",children:"Deploy Using ConfigMap"})," for more details on automating deployment."]}),"\n",(0,t.jsx)(n.h4,{id:"deploy-using-docker-native",children:"Deploy using Docker Native"}),"\n",(0,t.jsxs)(n.p,{children:["Before you ",(0,t.jsx)(n.a,{href:"/deploying/docker",children:"deploy NeuVector"})," with docker run or compose, you MUST set the CLUSTER_JOIN_ADDR to the appropriate IP address. Find the node IP address, node name (if using a name server, or node variable (if using orchestration tools) for the allinone (controller) to use for the \u201cnode IP\u201d in the docker-compose files for both allinone and enforcer.  For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- CLUSTER_JOIN_ADDR=192.168.33.10\n"})}),"\n",(0,t.jsx)(n.p,{children:"For Swarm-Based deployments, also add the following environment variable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- NV_PLATFORM_INFO=platform=Docker\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the section Deploying NeuVector -> ",(0,t.jsx)(n.a,{href:"/deploying/docker",children:"Docker Production Deployment"})," for instructions and examples."]}),"\n",(0,t.jsx)(n.h4,{id:"backing-up-configuration-files",children:"Backing Up Configuration Files"}),"\n",(0,t.jsx)(n.p,{children:"By default NeuVector stores various config files in  /var/neuvector/config/backup on the Controller or Allinone node."}),"\n",(0,t.jsxs)(n.p,{children:["This volume can be mapped to ",(0,t.jsx)(n.a,{href:"/deploying/production#backups-and-persistent-data",children:"persistent storage"})," to maintain configuration. Files in the folder may need to be deleted in order to start fresh."]}),"\n",(0,t.jsx)(n.h4,{id:"volume-mapping",children:"Volume Mapping"}),"\n",(0,t.jsx)(n.p,{children:"Make sure volumes are mapped properly. NeuVector requires these to operate (/var/neuvector is only required on controller/allinone). For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/neuvector:/var/neuvector\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup:/host/cgroup:ro\n"})}),"\n",(0,t.jsx)(n.p,{children:"Also, you may need to ensure that other tools are not blocking access to the docker.sock interface."}),"\n",(0,t.jsx)(n.h4,{id:"ports-and-port-mapping",children:"Ports and Port Mapping"}),"\n",(0,t.jsx)(n.p,{children:"Make sure the required ports are mapped properly and open on the host. The Manager or Allinone requires 8443 (if using the console). The Allinone and Controller requires 18300, 18301, 18400, 18401 and optionally 10443, 11443, 20443, 30443. The Enforcer requires 18301 and 18401."}),"\n",(0,t.jsx)(n.p,{children:"Note: If deploying docker native (including SWARM) make sure there is not any host firewall blocking access to required ports such as firewalld. If enabled, the docker0 interface must be added as a trusted zone for the allinone/controller hosts."}),"\n",(0,t.jsx)(n.h5,{id:"port-summary",children:"Port Summary"}),"\n",(0,t.jsx)(n.p,{children:"The following table lists communications from each NeuVector container. The Allinone container combines the Manager, Controller and Enforcer containers so requires the ports listed for those containers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ports",src:o(24071).A+"",width:"2150",height:"412"})}),"\n",(0,t.jsx)(n.p,{children:"The following table summarizes the listening ports for each NeuVector container."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Listening",src:o(60049).A+"",width:"1374",height:"454"})}),"\n",(0,t.jsx)(n.h5,{id:"additional-ports",children:"Additional Ports"}),"\n",(0,t.jsx)(n.p,{children:"In version 5.1, a new listener port has been added on 8181 in the controller for local controller communication only."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tcp        0      0 :::8181                 :::*                    LISTEN      8/opa\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},24071:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Communication_Matrix_From_To-12ca0c28139acbccfbcee645db5a9b0f.png"},60049:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Communication_Matrix_Listening_Ports-d103497515d940f052817595cc704d94.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);