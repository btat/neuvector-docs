"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1502],{62145:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(74848),i=r(28453);const s={title:"System Requirements",taxonomy:{category:"docs"},slug:"/basics/requirements"},o=void 0,d={id:"basics/requirements/requirements",title:"System Requirements",description:"System Requirements",source:"@site/versioned_docs/version-5.2/01.basics/02.requirements/02.requirements.md",sourceDirName:"01.basics/02.requirements",slug:"/basics/requirements",permalink:"/5.2/basics/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/01.basics/02.requirements/02.requirements.md",tags:[],version:"5.2",sidebarPosition:2,frontMatter:{title:"System Requirements",taxonomy:{category:"docs"},slug:"/basics/requirements"},sidebar:"tutorialSidebar",previous:{title:"5.x Overview",permalink:"/5.2/basics/overview"},next:{title:"Installation / Deployment",permalink:"/5.2/basics/installation"}},a={},l=[{value:"System Requirements",id:"system-requirements",level:4},{value:"Supported Platforms",id:"supported-platforms",level:4},{value:"Not Supported",id:"not-supported",level:4},{value:"Minikube",id:"minikube",level:5},{value:"Performance and Scaling",id:"performance-and-scaling",level:4},{value:"Throughput",id:"throughput",level:5},{value:"Latency",id:"latency",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h4,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"# of Instances"}),(0,t.jsx)(n.th,{children:"Recommended vCPU"}),(0,t.jsx)(n.th,{children:"Minimum Memory"}),(0,t.jsx)(n.th,{children:"Notes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Controller"}),(0,t.jsxs)(n.td,{children:["min. 1",(0,t.jsx)("br",{}),"3 for HA (odd # only)"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1GB"}),(0,t.jsx)(n.td,{children:"vCPU core may be shared"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Enforcer"}),(0,t.jsx)(n.td,{children:"1 per node/VM"}),(0,t.jsx)(n.td,{children:"1+"}),(0,t.jsx)(n.td,{children:"1GB"}),(0,t.jsx)(n.td,{children:"One or more dedicated vCPU for higher network throughput in Protect mode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Scanner"}),(0,t.jsxs)(n.td,{children:["min. 1",(0,t.jsx)("br",{}),"2+ for HA/Performance"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1GB"}),(0,t.jsxs)(n.td,{children:["CPU core may be shared for standard workloads.",(0,t.jsx)("br",{}),"Dedicate 1 or more CPU for high volume (10k+) image scanning.",(0,t.jsx)("br",{}),"Registry image scanning is performed by the scanner and managed by the controller and the image is pulled by the scanner and expanded in memory.",(0,t.jsx)("br",{}),"The minimum memory recommendation assumes images to be scanned are not larger than .5GB.",(0,t.jsx)("br",{}),"When scanning images larger than 1GB, scanner memory should be calculated by taking the largest image size and adding .5GB.",(0,t.jsx)("br",{}),"Example - largest image size = 1.3GB, the scanner container memory should be 1.8GB"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Manager"}),(0,t.jsxs)(n.td,{children:["min 1",(0,t.jsx)("br",{}),"2+ for HA"]}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1GB"}),(0,t.jsx)(n.td,{children:"vCPU may be shared"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For configuration backup/HA, a RWX PVC of 1Gi or more. See ",(0,t.jsx)(n.a,{href:"/deploying/production#backups-and-persistent-data",children:"Backups and Persistent Data section"})," for more details."]}),"\n",(0,t.jsx)(n.li,{children:"Recommended browser: Chrome for better performance"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Officially supported linux distributions, SUSE Linux, Ubuntu, CentOS/Red Hat (Including all RHEL version e.g. 6/7/8), Debian, Rancher OS, CoreOS, AWS 'Bottlerocket'(see Note below) and Photon."}),"\n",(0,t.jsx)(n.li,{children:"CoreOS is supported (November 2023) for CVE scanning through RHEL mapping table provided by RedHat. Once an official feed is published by RedHat for CoreOS it will be supported."}),"\n",(0,t.jsx)(n.li,{children:"Officially supported Kubernetes and Docker compliant container management systems. The following platforms are tested with every release of NeuVector: Kubernetes 1.19+, SUSE Rancher (RKE, RKE2, K3s etc), RedHat OpenShift 4.6+ (3.x to 4.12 supported prior to NeuVector 5.2.x), Google GKE, Amazon EKS, Microsoft Azure AKS, IBM IKS, native docker, docker swarm. The following Kubernetes and docker compliant platforms are supported and have been verified to work with NeuVector: VMware Photon and Tanzu, SUSE CaaS, Oracle OKE, Mirantis Kubernetes Engine, Nutanix Kubernetes Engine, docker UCP/DataCenter, docker Cloud."}),"\n",(0,t.jsx)(n.li,{children:"Docker run-time version: 1.9.0 and up; Docker API version: 1.21, CE and EE."}),"\n",(0,t.jsx)(n.li,{children:"Containerd and CRI-O run-times (requires changes to volume paths in sample yamls). See changes required for Containerd in the Kubernetes deployment section and CRI-O in the OpenShift deployment section."}),"\n",(0,t.jsx)(n.li,{children:"NeuVector is compatible with most commercially supported CNI's. Officially tested and supported are openshift ovs (subnet/multitenant), calico, flannel, cilium, antrea and public clouds (gke, aks, iks, eks)."}),"\n",(0,t.jsx)(n.li,{children:"Console: Chrome or Firefox browser recommended. IE 11 not supported due to performance issues."}),"\n",(0,t.jsx)(n.li,{children:"Minikube is supported for simple initial evaluation but not for full proof of concept. See below for changes required for the Allinone yaml to run on Minikube."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"AWS Bottlerocket Note: Must change path of the containerd socket specific to Bottleneck. Please see Kubernetes deployment section for details."}),"\n",(0,t.jsx)(n.h4,{id:"not-supported",children:"Not Supported"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GKE Autopilot."}),"\n",(0,t.jsx)(n.li,{children:"AWS ECS is no longer supported. (NOTE: No functionality has been actively removed for operating NeuVector on ECS deployments. However, testing on ECS is no longer being perfromed by SUSE. While protecting ECS workloads with Neuvector likely will operate as expected, issues will not be investigated.)"}),"\n",(0,t.jsx)(n.li,{children:"Docker on Mac"}),"\n",(0,t.jsx)(n.li,{children:"Docker on Windows"}),"\n",(0,t.jsx)(n.li,{children:"ARM architectire is not currently supported, but being worked on for future releases."}),"\n",(0,t.jsx)(n.li,{children:"Rkt (container linux) from CoreOS"}),"\n",(0,t.jsx)(n.li,{children:"AppArmor on K3S / SLES environments. Certain configurations may conflict with NeuVector and cause scanner errors; AppArmor should be disabled when deploying NeuVector."}),"\n",(0,t.jsx)(n.li,{children:"IPv6 is not supported"}),"\n",(0,t.jsx)(n.li,{children:"VMWare Integrated Containers (VIC) except in nested mode"}),"\n",(0,t.jsx)(n.li,{children:"CloudFoundry"}),"\n",(0,t.jsx)(n.li,{children:"Console: IE 11 not supported due to performance issues."}),"\n",(0,t.jsxs)(n.li,{children:["Nested container host in a container tools used for simple testing. For example, deployment of a Kubernetes cluster using 'kind' ",(0,t.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/configuration/",children:"https://kind.sigs.k8s.io/docs/user/configuration/"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note 1: PKS is field tested and requires enabling privileged containers to the plan/tile, and changing the yaml hostPath as follows for Allinone, Controller, Enforcer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"            hostPath:\n            path: /var/vcap/sys/run/docker/docker.sock\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"NeuVector supports running on linux-based VMs on Mac/Windows using Vagrant, VirtualBox, VMware or other virtualized environments."})}),"\n",(0,t.jsx)(n.h5,{id:"minikube",children:"Minikube"}),"\n",(0,t.jsx)(n.p,{children:"Please make the following changes to the Allinone deployment yaml."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1 <<-- required for k8s 1.19\nkind: DaemonSet\nmetadata:\n name: neuvector-allinone-pod\n namespace: neuvector\nspec:\n selector: <-- Added\n matchLabels: <-- Added\n app: neuvector-allinone-pod <-- Added\n minReadySeconds: 60\n...\n nodeSelector: <-- DELETE THIS LINE \n nvallinone: "true" <-- DELETE THIS LINE \napiVersion: apps/v1 <<-- required for k8s 1.19\nkind: DaemonSet\nmetadata:\n name: neuvector-enforcer-pod\n namespace: neuvector\nspec:\n selector: <-- Added\n matchLabels: <-- Added\n app: neuvector-enforcer-pod <-- Added\n'})}),"\n",(0,t.jsx)(n.h4,{id:"performance-and-scaling",children:"Performance and Scaling"}),"\n",(0,t.jsx)(n.p,{children:"As always, performance planning for NeuVector containers will depend on several factors, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(Controller & Scanner) Number and size of images in registry to be scanned (by Scanner) initially"}),"\n",(0,t.jsx)(n.li,{children:"(Enforcer) Services mode (Discover, Monitor, Protect), where Protect mode runs as an inline firewall"}),"\n",(0,t.jsx)(n.li,{children:"(Enforcer) Type of network connections for workloads in Protect mode"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In Monitor mode (network filtering similar to a mirror/tap), there is no performance impact and the Enforcer handles traffic at line speed, generating alerts as needed. In Protect mode (inline firewall), the Enforcer requires CPU and memory to filter connections with deep packet inspection and hold them to determine whether they should be blocked/dropped. Generally, with 1GB of memory and a shared CPU, the Enforcer should be able to handle most environments while in Protect mode."}),"\n",(0,t.jsx)(n.p,{children:"For throughput or latency sensitive environments, additional memory and/or a dedicated CPU core can be allocated to the NeuVector Enforcer container."}),"\n",(0,t.jsx)(n.p,{children:"For performance tuning of the Controller and Scanner for registry scanning, see System Requirements above."}),"\n",(0,t.jsxs)(n.p,{children:["For additional advice on performance and sizing, see the ",(0,t.jsx)(n.a,{href:"/deploying/production?target=_blank#best-practices-tips-qa-for-deploying-and-managing-neuvector",children:"Onboarding/Best Practices section"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"throughput",children:"Throughput"}),"\n",(0,t.jsx)(n.p,{children:"As the chart below shows, basic throughput benchmark tests showed a maximum throughput of 1.3 Gbps PER NODE on a small public cloud instance with 4 CPU cores. For example, a 10 node cluster would then be able to handle a maximum of 13 Gbps of throughput for the entire cluster for services in Protect mode."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Throughput",src:r(83725).A+"",width:"930",height:"826"})}),"\n",(0,t.jsx)(n.p,{children:"This throughput would be projected to scale up as dedicated a CPU is assigned to the Enforcer, or the CPU speed changes, and/or additional memory is allocated. Again, the scaling will be dependent on the type of network/application traffic of the workloads."}),"\n",(0,t.jsx)(n.h5,{id:"latency",children:"Latency"}),"\n",(0,t.jsx)(n.p,{children:"Latency is another performance metric which depends on the type of network connections. Similar to throughput, latency is not affected in Monitor mode, only for services in Protect (inline firewall) mode. Small packets or simple/fast services will generate a higher latency by NeuVector as a percentage, while larger packets or services requiring complex processing will show a lower percentage of added latency by the NeuVector enforcer."}),"\n",(0,t.jsx)(n.p,{children:"The table below shows the average latency of 2-10% benchmarked using the Redis benchmark tool. The Redis Benchmark uses fairly small packets, so the the latency with larger packets would expected to be lower."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Test"}),(0,t.jsx)(n.th,{children:"Monitor"}),(0,t.jsx)(n.th,{children:"Protect"}),(0,t.jsx)(n.th,{children:"Latency"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PING_INLINE"}),(0,t.jsx)(n.td,{children:"34,904"}),(0,t.jsx)(n.td,{children:"31,603"}),(0,t.jsx)(n.td,{children:"9.46%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SET"}),(0,t.jsx)(n.td,{children:"38,618"}),(0,t.jsx)(n.td,{children:"36,157"}),(0,t.jsx)(n.td,{children:"6.37%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"36,055"}),(0,t.jsx)(n.td,{children:"35,184"}),(0,t.jsx)(n.td,{children:"2.42%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LPUSH"}),(0,t.jsx)(n.td,{children:"39,853"}),(0,t.jsx)(n.td,{children:"35,994"}),(0,t.jsx)(n.td,{children:"9.68%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RPUSH"}),(0,t.jsx)(n.td,{children:"37,685"}),(0,t.jsx)(n.td,{children:"36,010"}),(0,t.jsx)(n.td,{children:"4.45%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LPUSH (LRANGE Benchmark)"}),(0,t.jsx)(n.td,{children:"37,399"}),(0,t.jsx)(n.td,{children:"35,220"}),(0,t.jsx)(n.td,{children:"5.83%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LRANGE_100"}),(0,t.jsx)(n.td,{children:"25,539"}),(0,t.jsx)(n.td,{children:"23,906"}),(0,t.jsx)(n.td,{children:"6.39%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LRANGE_300"}),(0,t.jsx)(n.td,{children:"13,082"}),(0,t.jsx)(n.td,{children:"12,277"}),(0,t.jsx)(n.td,{children:"6.15%"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The benchmark above shows average TPS of Protect mode versus Monitor mode, and the latency added for Protect mode for several tests in the benchmark. The main way to lower the actual latency (microseconds) in Protect mode is to run on a system with a faster CPU. You can find more details on this open source Redis benchmark tool at ",(0,t.jsx)(n.a,{href:"https://redis.io/topics/benchmarks",children:"https://redis.io/topics/benchmarks"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},83725:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/throughput-d5cda1665e8d530589d6ca5a9ba0558e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);