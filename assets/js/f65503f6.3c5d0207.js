"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6810],{58093:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var t=r(74848),o=r(28453);const c={title:"Kubernetes",taxonomy:{category:"docs"},slug:"/deploying/kubernetes"},a=void 0,s={id:"deploying/kubernetes/kubernetes",title:"Kubernetes",description:"Deploy Using Kubernetes",source:"@site/versioned_docs/version-5.3/02.deploying/02.kubernetes/02.kubernetes.md",sourceDirName:"02.deploying/02.kubernetes",slug:"/deploying/kubernetes",permalink:"/deploying/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/02.deploying/02.kubernetes/02.kubernetes.md",tags:[],version:"5.3",sidebarPosition:2,frontMatter:{title:"Kubernetes",taxonomy:{category:"docs"},slug:"/deploying/kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Replacing Internal Certificates",permalink:"/deploying/production/internal"},next:{title:"Rancher Deployment",permalink:"/deploying/rancher"}},l={},i=[{value:"Deploy Using Kubernetes",id:"deploy-using-kubernetes",level:3},{value:"NeuVector Images on Docker Hub",id:"neuvector-images-on-docker-hub",level:4},{value:"Deploy NeuVector",id:"deploy-neuvector",level:3},{value:"Using Node Labels for Manager and Controller Nodes",id:"using-node-labels-for-manager-and-controller-nodes",level:3},{value:"Rolling Updates",id:"rolling-updates",level:3},{value:"Sample Kubernetes Rolling Update",id:"sample-kubernetes-rolling-update",level:4},{value:"Expose REST API in Kubernetes",id:"expose-rest-api-in-kubernetes",level:3},{value:"Kubernetes Deployment in Non-Privileged Mode",id:"kubernetes-deployment-in-non-privileged-mode",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{TabItem:r,Tabs:c}=n;return r||p("TabItem",!0),c||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"deploy-using-kubernetes",children:"Deploy Using Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"You can use Kubernetes to deploy separate manager, controller and enforcer containers and make sure that all new nodes have an enforcer deployed. NeuVector requires and supports Kubernetes network plugins such as flannel, weave, or calico."}),"\n",(0,t.jsx)(n.p,{children:"The sample file will deploy one manager and 3 controllers. It will deploy an enforcer on every node as a daemonset. By default, the sample below will deploy to the Master node as well."}),"\n",(0,t.jsxs)(n.p,{children:["See the bottom section for specifying dedicated manager or controller nodes using node labels. Note: It is not recommended to deploy (scale) more than one manager behind a load balancer due to potential session state issues. If you plan to use a PersistentVolume claim to store the backup of NeuVector config files, please see the general Backup/Persistent Data section in the ",(0,t.jsx)(n.a,{href:"production#backups-and-persistent-data",children:"Deploying NeuVector"})," overview."]}),"\n",(0,t.jsx)(n.p,{children:"If your deployment supports an integrated load balancer, change type NodePort to LoadBalancer for the console in the yaml file below."}),"\n",(0,t.jsxs)(n.p,{children:["NeuVector supports Helm-based deployment with a Helm chart at ",(0,t.jsx)(n.a,{href:"https://github.com/neuvector/neuvector-helm",children:"https://github.com/neuvector/neuvector-helm"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"There is a separate section for OpenShift instructions, and Docker EE on Kubernetes has some special steps described in the Docker section."}),"\n",(0,t.jsx)(n.h4,{id:"neuvector-images-on-docker-hub",children:"NeuVector Images on Docker Hub"}),"\n",(0,t.jsx)(n.p,{children:"The images are on the NeuVector Docker Hub registry. Use the appropriate version tag for the manager, controller, enforcer, and leave the version as 'latest' for scanner and updater. For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"neuvector/manager:5.3.2"}),"\n",(0,t.jsx)(n.li,{children:"neuvector/controller:5.3.2"}),"\n",(0,t.jsx)(n.li,{children:"neuvector/enforcer:5.3.2"}),"\n",(0,t.jsxs)(n.li,{children:["neuvector/scanner",":latest"]}),"\n",(0,t.jsxs)(n.li,{children:["neuvector/updater",":latest"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Please be sure to update the image references in appropriate yaml files."}),"\n",(0,t.jsx)(n.p,{children:"If deploying with the current NeuVector Helm chart (v1.8.9+), the following changes should be made to values.yml:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Update the registry to docker.io"}),"\n",(0,t.jsx)(n.li,{children:"Update image names/tags to the current version on Docker hub, as shown above"}),"\n",(0,t.jsx)(n.li,{children:"Leave the imagePullSecrets empty"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"If deploying from the Rancher Manager 2.6.5+ NeuVector chart, images are pulled automatically from the Rancher Registry mirrored image repo, and deploys into the cattle-neuvector-system namespace."})]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-neuvector",children:"Deploy NeuVector"}),"\n",(0,t.jsxs)("ol",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.p,{children:"Create the NeuVector namespace and the required service accounts:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create namespace neuvector\nkubectl create sa controller -n neuvector\nkubectl create sa enforcer -n neuvector\nkubectl create sa basic -n neuvector\nkubectl create sa updater -n neuvector\nkubectl create sa scanner -n neuvector\nkubectl create sa registry-adapter -n neuvector\n"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)("strong",{children:"Optional"}),") Create the NeuVector Pod Security Admission (PSA) or Pod Security Policy (PSP)."]}),(0,t.jsxs)(n.p,{children:["If you have enabled Pod Security Admission (aka Pod Security Standards) in Kubernetes 1.25+, or Pod Security Policies (prior to 1.25) in your Kubernetes cluster, add the following for NeuVector (for example, nv_psp.yaml). Note1: PSP is deprecated in Kubernetes 1.21 and will be totally removed in 1.25. Note2: The Manager and Scanner pods run without a uid. If your PSP has a rule ",(0,t.jsx)(n.code,{children:"Run As User: Rule: MustRunAsNonRoot"})," then add the following into the sample yaml below (with appropriate value for ###):"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"securityContext:\n    runAsUser: ###\n"})}),(0,t.jsx)(n.p,{children:"For PSA in Kubernetes 1.25+, label the NeuVector namespace with privileged profile for deploying on a PSA enabled cluster."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl label  namespace neuvector "pod-security.kubernetes.io/enforce=privileged"\n'})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.p,{children:"Create the custom resources (CRD) for NeuVector security rules. For Kubernetes 1.19+:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/crd-k8s-1.19.yaml\nkubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/waf-crd-k8s-1.19.yaml\nkubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/dlp-crd-k8s-1.19.yaml\nkubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/com-crd-k8s-1.19.yaml\nkubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/vul-crd-k8s-1.19.yaml\nkubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/admission-crd-k8s-1.19.yaml\n"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.p,{children:"Add read permission to access the kubernetes API."}),(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"The standard NeuVector 5.2+ deployment uses least-privileged service accounts instead of the default. See below if upgrading from a version prior to 5.3."})}),(0,t.jsxs)(n.admonition,{title:"attention",type:"warning",children:[(0,t.jsx)(n.p,{children:"If you are upgrading to 5.3.0+, run the following commands based on your current version:"}),(0,t.jsxs)(c,{groupId:"versions",children:[(0,t.jsx)(r,{value:"Version 5.2.0",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl delete clusterrole neuvector-binding-nvsecurityrules neuvector-binding-nvadmissioncontrolsecurityrules neuvector-binding-nvdlpsecurityrules neuvector-binding-nvwafsecurityrules\n"})})}),(0,t.jsx)(r,{value:"Versions prior to 5.2.0",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl delete clusterrolebinding neuvector-binding-app neuvector-binding-rbac neuvector-binding-admission neuvector-binding-customresourcedefinition neuvector-binding-nvsecurityrules neuvector-binding-view neuvector-binding-nvwafsecurityrules neuvector-binding-nvadmissioncontrolsecurityrules neuvector-binding-nvdlpsecurityrules\nkubectl delete rolebinding neuvector-admin -n neuvector\n"})})})]})]}),(0,t.jsx)(n.p,{children:'Apply the read permissions via the following "create clusterrole" commands:'}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create clusterrole neuvector-binding-app --verb=get,list,watch,update --resource=nodes,pods,services,namespaces\nkubectl create clusterrole neuvector-binding-rbac --verb=get,list,watch --resource=rolebindings.rbac.authorization.k8s.io,roles.rbac.authorization.k8s.io,clusterrolebindings.rbac.authorization.k8s.io,clusterroles.rbac.authorization.k8s.io\nkubectl create clusterrolebinding neuvector-binding-app --clusterrole=neuvector-binding-app --serviceaccount=neuvector:controller\nkubectl create clusterrolebinding neuvector-binding-rbac --clusterrole=neuvector-binding-rbac --serviceaccount=neuvector:controller\nkubectl create clusterrole neuvector-binding-admission --verb=get,list,watch,create,update,delete --resource=validatingwebhookconfigurations,mutatingwebhookconfigurations\nkubectl create clusterrolebinding neuvector-binding-admission --clusterrole=neuvector-binding-admission --serviceaccount=neuvector:controller\nkubectl create clusterrole neuvector-binding-customresourcedefinition --verb=watch,create,get,update --resource=customresourcedefinitions\nkubectl create clusterrolebinding neuvector-binding-customresourcedefinition --clusterrole=neuvector-binding-customresourcedefinition --serviceaccount=neuvector:controller\nkubectl create clusterrole neuvector-binding-nvsecurityrules --verb=get,list,delete --resource=nvsecurityrules,nvclustersecurityrules\nkubectl create clusterrole neuvector-binding-nvadmissioncontrolsecurityrules --verb=get,list,delete --resource=nvadmissioncontrolsecurityrules\nkubectl create clusterrole neuvector-binding-nvdlpsecurityrules --verb=get,list,delete --resource=nvdlpsecurityrules\nkubectl create clusterrole neuvector-binding-nvwafsecurityrules --verb=get,list,delete --resource=nvwafsecurityrules\nkubectl create clusterrolebinding neuvector-binding-nvsecurityrules --clusterrole=neuvector-binding-nvsecurityrules --serviceaccount=neuvector:controller\nkubectl create clusterrolebinding neuvector-binding-view --clusterrole=view --serviceaccount=neuvector:controller\nkubectl create clusterrolebinding neuvector-binding-nvwafsecurityrules --clusterrole=neuvector-binding-nvwafsecurityrules --serviceaccount=neuvector:controller\nkubectl create clusterrolebinding neuvector-binding-nvadmissioncontrolsecurityrules --clusterrole=neuvector-binding-nvadmissioncontrolsecurityrules --serviceaccount=neuvector:controller\nkubectl create clusterrolebinding neuvector-binding-nvdlpsecurityrules --clusterrole=neuvector-binding-nvdlpsecurityrules --serviceaccount=neuvector:controller\nkubectl create role neuvector-binding-scanner --verb=get,patch,update,watch --resource=deployments -n neuvector\nkubectl create rolebinding neuvector-binding-scanner --role=neuvector-binding-scanner --serviceaccount=neuvector:updater --serviceaccount=neuvector:controller -n neuvector\nkubectl create role neuvector-binding-secret --verb=get --resource=secrets -n neuvector\nkubectl create rolebinding neuvector-binding-secret --role=neuvector-binding-secret --serviceaccount=neuvector:controller -n neuvector\nkubectl create clusterrole neuvector-binding-nvcomplianceprofiles --verb=get,list,delete --resource=nvcomplianceprofiles\nkubectl create clusterrolebinding neuvector-binding-nvcomplianceprofiles --clusterrole=neuvector-binding-nvcomplianceprofiles --serviceaccount=neuvector:controller\nkubectl create clusterrole neuvector-binding-nvvulnerabilityprofiles --verb=get,list,delete --resource=nvvulnerabilityprofiles\nkubectl create clusterrolebinding neuvector-binding-nvvulnerabilityprofiles --clusterrole=neuvector-binding-nvvulnerabilityprofiles --serviceaccount=neuvector:controller\n"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.p,{children:"Run the following commands to check if the neuvector/controller and neuvector/updater service accounts are added successfully."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get ClusterRoleBinding neuvector-binding-app neuvector-binding-rbac neuvector-binding-admission neuvector-binding-customresourcedefinition neuvector-binding-nvsecurityrules neuvector-binding-view neuvector-binding-nvwafsecurityrules neuvector-binding-nvadmissioncontrolsecurityrules neuvector-binding-nvdlpsecurityrules -o wide\n"})}),(0,t.jsx)(n.p,{children:"Sample output:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"NAME                                                ROLE                                                            AGE   USERS   GROUPS   SERVICEACCOUNTS\nneuvector-binding-app                               ClusterRole/neuvector-binding-app                               56d                    neuvector/controller\nneuvector-binding-rbac                              ClusterRole/neuvector-binding-rbac                              34d                    neuvector/controller\nneuvector-binding-admission                         ClusterRole/neuvector-binding-admission                         72d                    neuvector/controller\nneuvector-binding-customresourcedefinition          ClusterRole/neuvector-binding-customresourcedefinition          72d                    neuvector/controller\nneuvector-binding-nvsecurityrules                   ClusterRole/neuvector-binding-nvsecurityrules                   72d                    neuvector/controller\nneuvector-binding-view                              ClusterRole/view                                                72d                    neuvector/controller\nneuvector-binding-nvwafsecurityrules                ClusterRole/neuvector-binding-nvwafsecurityrules                72d                    neuvector/controller\nneuvector-binding-nvadmissioncontrolsecurityrules   ClusterRole/neuvector-binding-nvadmissioncontrolsecurityrules   72d                    neuvector/controller\nneuvector-binding-nvdlpsecurityrules                ClusterRole/neuvector-binding-nvdlpsecurityrules                72d                    neuvector/controller</code>\n"})}),(0,t.jsx)(n.p,{children:"And this command:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get RoleBinding neuvector-binding-scanner -n neuvector -o wide\n"})}),(0,t.jsx)(n.p,{children:"Sample output:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"NAME                        ROLE                             AGE   USERS   GROUPS   SERVICEACCOUNTS\nneuvector-binding-scanner   Role/neuvector-binding-scanner   70d                    neuvector/updater, neuvector/controller\n"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)(n.p,{children:["(",(0,t.jsx)("strong",{children:"Optional"}),") Create the Federation Master and/or Remote Multi-Cluster Management Services. If you plan to use the multi-cluster management functions in NeuVector, one cluster must have the Federation Master service deployed, and each remote cluster must have the Federation Worker service. For flexibility, you may choose to deploy both Master and Worker services on each cluster so any cluster can be a master or remote."]}),(0,t.jsx)(n.p,{children:"Federated Cluster Management"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-service-controller-fed-master\n  namespace: neuvector\nspec:\n  ports:\n  - port: 11443\n    name: fed\n    protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-controller-pod\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-service-controller-fed-worker\n  namespace: neuvector\nspec:\n  ports:\n  - port: 10443\n    name: fed\n    protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-controller-pod\n"})}),(0,t.jsx)(n.p,{children:"Then create the appropriate service(s):"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create -f nv_master_worker.yaml\n"})})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.p,{children:"Create the primary NeuVector services and pods using the preset version commands or modify the sample yaml below. The preset version invoke a LoadBalancer for the NeuVector Console. If using the sample yaml file below replace the image names and <version> tags for the manager, controller and enforcer image references in the yaml file. Also make any other modifications required for your deployment environment (such as LoadBalancer/NodePort/Ingress for manager access etc)."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/neuvector/manifests/main/kubernetes/5.3.0/neuvector-k8s.yaml\n"})}),(0,t.jsx)(n.p,{children:"Or, if modifying any of the above yaml or samples from below:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create -f neuvector.yaml\n"})}),(0,t.jsxs)(n.p,{children:["That's it! You should be able to connect to the NeuVector console and login with admin",":admin",", e.g. https://<public-ip>:8443"]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"The nodeport service specified in the neuvector.yaml file will open a random port on all kubernetes nodes for the NeuVector management web console port. Alternatively, you can use a LoadBalancer or Ingress, using a public IP and default port 8443. For nodeport, be sure to open access through firewalls for that port, if needed. If you want to see which port is open on the host nodes, please do the following commands:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get svc -n neuvector\n"})}),(0,t.jsx)(n.p,{children:"And you will see something like:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"NAME                          CLUSTER-IP      EXTERNAL-IP   PORT(S)                                          AGE\nneuvector-service-webui     10.100.195.99     <nodes>       8443:30257/TCP                                   15m\n"})})]}),"\n",(0,t.jsx)("strong",{children:"PKS Change"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"PKS is field tested and requires enabling privileged containers to the plan/tile, and changing the yaml hostPath as follows for Allinone, Controller, Enforcer:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"      hostPath:\n            path: /var/vcap/sys/run/docker/docker.sock\n"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Master Node Taints and Tolerations"})}),"\n",(0,t.jsx)(n.p,{children:"All taint info must match to schedule Enforcers on nodes. To check the taint info on a node (e.g. Master):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get node taintnodename -o yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spec:\n  taints:\n  - effect: NoSchedule\n    key: node-role.kubernetes.io/master\n  # there may be an extra info for taint as below\n  - effect: NoSchedule\n    key: mykey\n    value: myvalue\n"})}),"\n",(0,t.jsx)(n.p,{children:"If there is additional taints as above, add these to the sample yaml tolerations section:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spec:\n  template:\n    spec:\n      tolerations:\n        - effect: NoSchedule\n          key: node-role.kubernetes.io/master\n        - effect: NoSchedule\n          key: node-role.kubernetes.io/control-plane\n        # if there is an extra info for taints as above, please add it here. This is required to match all the taint info defined on the taint node. Otherwise, the Enforcer won't deploy on the taint node\n        - effect: NoSchedule\n          key: mykey\n          value: myvalue\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-node-labels-for-manager-and-controller-nodes",children:"Using Node Labels for Manager and Controller Nodes"}),"\n",(0,t.jsx)(n.p,{children:"To control which nodes the Manager and Controller are deployed on, label each node. Replace nodename with the appropriate node name (\u2018kubectl get nodes\u2019). Note: By default Kubernetes will not schedule pods on the master node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl label nodes nodename nvcontroller=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then add a nodeSelector to the yaml file for the Manager and Controller deployment sections. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'          - mountPath: /host/cgroup\n              name: cgroup-vol\n              readOnly: true\n      nodeSelector:\n        nvcontroller: "true"\n      restartPolicy: Always\n'})}),"\n",(0,t.jsx)(n.p,{children:"To prevent the enforcer from being deployed on a controller node, if it is a dedicated management node (without application containers to be monitored), add a nodeAffinity to the Enforcer yaml section. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'  app: neuvector-enforcer-pod\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n              - matchExpressions:\n                - key: nvcontroller\n                  operator: NotIn\n                  values: ["true"]\n      imagePullSecrets:\n'})}),"\n",(0,t.jsx)(n.h3,{id:"rolling-updates",children:"Rolling Updates"}),"\n",(0,t.jsx)(n.p,{children:"Orchestration tools such as Kubernetes, RedHat OpenShift, and Rancher support rolling updates with configurable policies. You can use this feature to update the NeuVector containers. The most important will be to ensure that there is at least one Controller (or Allinone) running so that policies, logs, and connection data is not lost. Make sure that there is a minimum of 120 seconds between container updates so that a new leader can be elected and the data synchronized between controllers."}),"\n",(0,t.jsx)(n.p,{children:"The provided sample deployment yamls already configure the rolling update policy. If you are updating via the NeuVector Helm chart, please pull the latest chart to properly configure new features such as admission control, and delete the old cluster role and cluster role binding for NeuVector. If you are updating via Kubernetes you can manually update to a new version with the sample commands below."}),"\n",(0,t.jsx)(n.h4,{id:"sample-kubernetes-rolling-update",children:"Sample Kubernetes Rolling Update"}),"\n",(0,t.jsx)(n.p,{children:"For upgrades which just need to update to a new image version, you can use this simple approach."}),"\n",(0,t.jsx)(n.p,{children:"If your Deployment or Daemonset is already running, you can change the yaml file to the new version, then apply the update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f <yaml file>\n"})}),"\n",(0,t.jsx)(n.p,{children:"To update to a new version of NeuVector from the command line."}),"\n",(0,t.jsx)(n.p,{children:"For controller as Deployment (also do for manager)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl set image deployment/neuvector-controller-pod neuvector-controller-pod=neuvector/controller:2.4.1 -n neuvector\n"})}),"\n",(0,t.jsx)(n.p,{children:"For any container as a DaemonSet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl set image -n neuvector ds/neuvector-enforcer-pod neuvector-enforcer-pod=neuvector/enforcer:2.4.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"To check the status of the rolling update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl rollout status -n neuvector ds/neuvector-enforcer-pod\nkubectl rollout status -n neuvector deployment/neuvector-controller-pod\n"})}),"\n",(0,t.jsx)(n.p,{children:"To rollback the update:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl rollout undo -n neuvector ds/neuvector-enforcer-pod\nkubectl rollout undo -n neuvector deployment/neuvector-controller-pod\n"})}),"\n",(0,t.jsx)(n.h3,{id:"expose-rest-api-in-kubernetes",children:"Expose REST API in Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"To expose the REST API for access from outside of the Kubernetes cluster, here is a sample yaml file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-service-rest\n  namespace: neuvector\nspec:\n  ports:\n    - port: 10443\n      name: controller\n      protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-controller-pod\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please see the Automation section for more info on the REST API."}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-deployment-in-non-privileged-mode",children:"Kubernetes Deployment in Non-Privileged Mode"}),"\n",(0,t.jsx)(n.p,{children:"The following instructions can be used to deploy NeuVector without using privileged mode containers. The controller is already in non-privileged mode and enforcer deployment should be changed, which is shown in the excerpted snippets below."}),"\n",(0,t.jsx)(n.p,{children:"Enforcer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spec:\n  template:\n    metadata:\n      annotations:\n        container.apparmor.security.beta.kubernetes.io/neuvector-enforcer-pod: unconfined\n        # this line is required to be added if k8s version is pre-v1.19\n        # container.seccomp.security.alpha.kubernetes.io/neuvector-enforcer-pod: unconfined\n    spec:\n      containers:\n          securityContext:\n            # the following two lines are required for k8s v1.19+. pls comment out both lines if version is pre-1.19. Otherwise, a validating data error message will show\n            seccompProfile:\n              type: Unconfined\n            capabilities:\n              add:\n              - SYS_ADMIN\n              - NET_ADMIN\n              - SYS_PTRACE\n              - IPC_LOCK\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following sample is a complete deployment reference (Kubernetes 1.19+)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-svc-crd-webhook\n  namespace: neuvector\nspec:\n  ports:\n  - port: 443\n    targetPort: 30443\n    protocol: TCP\n    name: crd-webhook\n  type: ClusterIP\n  selector:\n    app: neuvector-controller-pod\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-svc-admission-webhook\n  namespace: neuvector\nspec:\n  ports:\n  - port: 443\n    targetPort: 20443\n    protocol: TCP\n    name: admission-webhook\n  type: ClusterIP\n  selector:\n    app: neuvector-controller-pod\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-service-webui\n  namespace: neuvector\nspec:\n  ports:\n    - port: 8443\n      name: manager\n      protocol: TCP\n  type: LoadBalancer\n  selector:\n    app: neuvector-manager-pod\n\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: neuvector-svc-controller\n  namespace: neuvector\nspec:\n  ports:\n  - port: 18300\n    protocol: "TCP"\n    name: "cluster-tcp-18300"\n  - port: 18301\n    protocol: "TCP"\n    name: "cluster-tcp-18301"\n  - port: 18301\n    protocol: "UDP"\n    name: "cluster-udp-18301"\n  clusterIP: None\n  selector:\n    app: neuvector-controller-pod\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-manager-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-manager-pod\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: neuvector-manager-pod\n    spec:\n      serviceAccountName: basic\n      serviceAccount: basic\n      containers:\n        - name: neuvector-manager-pod\n          image: neuvector/manager:5.3.2\n          env:\n            - name: CTRL_SERVER_IP\n              value: neuvector-svc-controller.neuvector\n      restartPolicy: Always\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-controller-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-controller-pod\n  minReadySeconds: 60\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: neuvector-controller-pod\n    spec:\n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: app\n                  operator: In\n                  values:\n                  - neuvector-controller-pod\n              topologyKey: "kubernetes.io/hostname"\n      serviceAccountName: controller\n      serviceAccount: controller\n      containers:\n        - name: neuvector-controller-pod\n          image: neuvector/controller:5.3.2\n          securityContext:\n            runAsUser: 0\n          readinessProbe:\n            exec:\n              command:\n              - cat\n              - /tmp/ready\n            initialDelaySeconds: 5\n            periodSeconds: 5\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n            - name: CLUSTER_ADVERTISED_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: CLUSTER_BIND_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            # - name: CTRL_PERSIST_CONFIG\n            #   value: "1"\n          volumeMounts:\n            # - mountPath: /var/neuvector\n            #   name: nv-share\n            #   readOnly: false\n            - mountPath: /etc/config\n              name: config-volume\n              readOnly: true\n      terminationGracePeriodSeconds: 300\n      restartPolicy: Always\n      volumes:\n        # - name: nv-share\n        #   persistentVolumeClaim:\n        #     claimName: neuvector-data\n        - name: config-volume\n          projected:\n            sources:\n              - configMap:\n                  name: neuvector-init\n                  optional: true\n              - secret:\n                  name: neuvector-init\n                  optional: true\n              - secret:\n                  name: neuvector-secret\n                  optional: true\n\n---\n\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: neuvector-enforcer-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-enforcer-pod\n  updateStrategy:\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: neuvector-enforcer-pod\n      annotations:\n        container.apparmor.security.beta.kubernetes.io/neuvector-enforcer-pod: unconfined\n      # Add the following for pre-v1.19\n      # container.seccomp.security.alpha.kubernetes.io/neuvector-enforcer-pod: unconfined\n    spec:\n      tolerations:\n        - effect: NoSchedule\n          key: node-role.kubernetes.io/master\n        - effect: NoSchedule\n          key: node-role.kubernetes.io/control-plane\n      hostPID: true\n      serviceAccountName: enforcer\n      serviceAccount: enforcer\n      containers:\n        - name: neuvector-enforcer-pod\n          image: neuvector/enforcer:5.3.2\n          securityContext:\n            # the following two lines are required for k8s v1.19+. pls comment out both lines if version is pre-1.19. Otherwise, a validating data error message will show\n            seccompProfile:\n              type: Unconfined\n            capabilities:\n              add:\n              - SYS_ADMIN\n              - NET_ADMIN\n              - SYS_PTRACE\n              - IPC_LOCK\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n            - name: CLUSTER_ADVERTISED_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: CLUSTER_BIND_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n          volumeMounts:\n            - mountPath: /lib/modules\n              name: modules-vol\n              readOnly: true\n            # - mountPath: /run/runtime.sock\n            #   name: runtime-sock\n            #   readOnly: true\n            # - mountPath: /host/proc\n            #   name: proc-vol\n            #   readOnly: true\n            # - mountPath: /host/cgroup\n            #   name: cgroup-vol\n            #   readOnly: true\n            - mountPath: /var/nv_debug\n              name: nv-debug\n              readOnly: false\n      terminationGracePeriodSeconds: 1200\n      restartPolicy: Always\n      volumes:\n        - name: modules-vol\n          hostPath:\n            path: /lib/modules\n        # - name: runtime-sock\n        #   hostPath:\n        #     path: /var/run/docker.sock\n        #     path: /var/run/containerd/containerd.sock\n        #     path: /run/dockershim.sock\n        #     path: /run/k3s/containerd/containerd.sock\n        #     path: /var/run/crio/crio.sock\n        #     path: /var/vcap/sys/run/docker/docker.sock\n        # - name: proc-vol\n        #   hostPath:\n        #     path: /proc\n        # - name: cgroup-vol\n        #   hostPath:\n        #     path: /sys/fs/cgroup\n        - name: nv-debug\n          hostPath:\n            path: /var/nv_debug\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: neuvector-scanner-pod\n  namespace: neuvector\nspec:\n  selector:\n    matchLabels:\n      app: neuvector-scanner-pod\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        app: neuvector-scanner-pod\n    spec:\n      serviceAccountName: scanner\n      serviceAccount: scanner\n      containers:\n        - name: neuvector-scanner-pod\n          image: neuvector/scanner:latest\n          imagePullPolicy: Always\n          env:\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n      restartPolicy: Always\n\n---\n\napiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: neuvector-updater-pod\n  namespace: neuvector\nspec:\n  schedule: "0 0 * * *"\n  jobTemplate:\n    spec:\n      template:\n        metadata:\n          labels:\n            app: neuvector-updater-pod\n        spec:\n          serviceAccountName: updater\n          serviceAccount: updater\n          containers:\n          - name: neuvector-updater-pod\n            image: neuvector/updater:latest\n            imagePullPolicy: Always\n            command:\n            - /bin/sh\n            - -c\n            - TOKEN=`cat /var/run/secrets/kubernetes.io/serviceaccount/token`; /usr/bin/curl -kv -X PATCH -H "Authorization:Bearer $TOKEN" -H "Content-Type:application/strategic-merge-patch+json" -d \'{"spec":{"template":{"metadata":{"annotations":{"kubectl.kubernetes.io/restartedAt":"\'`date +%Y-%m-%dT%H:%M:%S%z`\'"}}}}}\' \'https://kubernetes.default/apis/apps/v1/namespaces/neuvector/deployments/neuvector-scanner-pod\'\n          restartPolicy: Never\n'})}),"\n",(0,t.jsx)(n.p,{children:"PKS Change"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"PKS is field tested and requires enabling privileged containers to the plan/tile, and changing the yaml hostPath as follows for Allinone, Enforcer:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"      hostPath:\n            path: /var/vcap/sys/run/docker/docker.sock\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);