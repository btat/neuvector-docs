"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5453],{73775:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=o(74848),r=o(28453);const l={title:"Troubleshooting",taxonomy:{category:"docs"},slug:"/troubleshooting/troubleshooting"},s=void 0,i={id:"troubleshooting/troubleshooting/troubleshooting",title:"Troubleshooting",description:"Troubleshooting NeuVector Deployments",source:"@site/versioned_docs/version-5.3/12.troubleshooting/01.troubleshooting/01.troubleshooting.md",sourceDirName:"12.troubleshooting/01.troubleshooting",slug:"/troubleshooting/troubleshooting",permalink:"/troubleshooting/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/12.troubleshooting/01.troubleshooting/01.troubleshooting.md",tags:[],version:"5.3",sidebarPosition:1,frontMatter:{title:"Troubleshooting",taxonomy:{category:"docs"},slug:"/troubleshooting/troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"12. Troubleshooting",permalink:"/troubleshooting"},next:{title:"Command Line",permalink:"/tronubleshooting/cli"}},c={},a=[{value:"Troubleshooting NeuVector Deployments",id:"troubleshooting-neuvector-deployments",level:3},{value:"Initial Deployment",id:"initial-deployment",level:4},{value:"Login and Initial Configuration",id:"login-and-initial-configuration",level:4},{value:"Ongoing Operation",id:"ongoing-operation",level:4},{value:"Updating",id:"updating",level:4},{value:"Debug Logs",id:"debug-logs",level:3},{value:"Turning on Debug mode for NeuVector Controllers",id:"turning-on-debug-mode-for-neuvector-controllers",level:4},{value:"Kubernetes, OpenShift and Other Orchestration Logs",id:"kubernetes-openshift-and-other-orchestration-logs",level:4},{value:"Support Log",id:"support-log",level:3},{value:"Using the CLI to turn on Debug Mode",id:"using-the-cli-to-turn-on-debug-mode",level:3},{value:"Using the REST API to turn on Debug Mode",id:"using-the-rest-api-to-turn-on-debug-mode",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"troubleshooting-neuvector-deployments",children:"Troubleshooting NeuVector Deployments"}),"\n",(0,t.jsx)(n.p,{children:"The NeuVector containers are deployed, managed, and updated using the same orchestration tool used for application workloads. Please be sure to review the online documentation for each step necessary during deployment. Often deployments are attempted by just copying the sample yaml files and deploying them without reviewing the steps prior, such as properly configuring registries, secrets, or RBACs/rolebindings."}),"\n",(0,t.jsx)(n.h4,{id:"initial-deployment",children:"Initial Deployment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check that the NeuVector containers can be pulled with correct authentication. Check the secret used and make sure the cluster is able to access the appropriate registry."}),"\n",(0,t.jsx)(n.li,{children:"Make sure the changes to the yaml required (e.g. NodePort or LoadBalancer) or Helm values settings are set appropriately."}),"\n",(0,t.jsx)(n.li,{children:"Check the platform and container run-time and make changes as needed (e.g. PKS, containerd, CRI-O)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"login-and-initial-configuration",children:"Login and Initial Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check to make sure appropriate access to the manager (IP address, port, route) is allowed through firewalls."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ongoing-operation",children:"Ongoing Operation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Directory integration. NeuVector supports specific configurations for LDAP/AD and other integrations for groups and roles. Contact NeuVector for additional troubleshooting steps and a tool for AD troubleshooting."}),"\n",(0,t.jsx)(n.li,{children:"Registry scanning. Most issues are related to registry authentication errors or inability for the controller to access the registry from the cluster."}),"\n",(0,t.jsx)(n.li,{children:"For performance issues, make sure the controller is allocated enough memory for scanning large images. Also, CPU and memory minimums can be specified in the pod policy to ensure adequate performance at scale."}),"\n",(0,t.jsx)(n.li,{children:"Admission Control. See the Troubleshooting section in the section Security Risks... -> Admission Controls."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"updating",children:"Updating"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use rolling updates for the controller. If you are rebooting hosts, make sure to monitor the controllers as they move to other hosts, or redeploy on the rebooted hosts, to make sure they are able to start, join the controller cluster, and stabilize/sync. Rebooting all hosts at once or too quickly can result in unknown states for the controllers."}),"\n",(0,t.jsx)(n.li,{children:"Use a persistent volume claim to store the NeuVector configuration for the case that all controllers/nodes go down in the cluster."}),"\n",(0,t.jsx)(n.li,{children:"When updating to a new version, review the online documentation to identify changes/additions to the yaml required, as well as other changes such as rolebindings or new services (e.g. admission control webhook, persistent volume claim etc)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"debug-logs",children:"Debug Logs"}),"\n",(0,t.jsx)(n.p,{children:"To view the logs of a NeuVector container, for example a controller pod"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl logs neuvector-controller-pod-777fdc5668-4jkjn -n neuvector\n"})}),"\n",(0,t.jsx)(n.p,{children:"These logs may show cluster connectivity issues, admin actions, scanning activity and other useful entries. If there are multiple controllers running it may be necessary to inspect each one. These logs can be piped to a file to send to NeuVector support."}),"\n",(0,t.jsx)(n.h4,{id:"turning-on-debug-mode-for-neuvector-controllers",children:"Turning on Debug mode for NeuVector Controllers"}),"\n",(0,t.jsx)(n.p,{children:"For issues that require in-depth investigation, debug mode can be enabled for the controllers/allinones, which will log detailed information. This can increase the log file size by a large amount, so it is recommended to turn it off after collecting them."}),"\n",(0,t.jsx)(n.h4,{id:"kubernetes-openshift-and-other-orchestration-logs",children:"Kubernetes, OpenShift and Other Orchestration Logs"}),"\n",(0,t.jsx)(n.p,{children:"It can be helpful to inspect the logs from orchestration tools to see all deployment activity including pod creation timestamps and status, deployments, daemonsets and other management actions of the NeuVector containers performed by the orchestration tool."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get events -n neuvector\n"})}),"\n",(0,t.jsx)(n.h3,{id:"support-log",children:"Support Log"}),"\n",(0,t.jsx)(n.p,{children:"The support log contains additional information which is useful for NeuVector Support, including system configuration, containers, policies, notifications, and NeuVector container details."}),"\n",(0,t.jsx)(n.p,{children:"To download the support log, go to Settings -> Configuration and select Collect Log."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-cli-to-turn-on-debug-mode",children:"Using the CLI to turn on Debug Mode"}),"\n",(0,t.jsx)(n.p,{children:"Login to NeuVector manager pod with user and password (recommended in a separate terminal window)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl exec -it neuvector-manager-pod-5bb76b6754-rlmnp -n neuvector -- cli \n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#neuvector-svc-controller.neuvector> login\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the list of controllers. Find the controller with the Leader = True."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"show controller\n"})}),"\n",(0,t.jsx)(n.p,{children:"Turn on the debug mode in the leader controller using the ID or name of controller"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"set controller 4fce427cf963 debug -c all\n"})}),"\n",(0,t.jsx)(n.p,{children:"To turn on debug mode on all controllers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"set system controller_debug -c all\n"})}),"\n",(0,t.jsx)(n.p,{children:"Perform the activity in NeuVector which you wish to debug. Then view the controller logs (in a separate terminal window)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl logs <leader_controller_pod_name> -n neuvector\n"})}),"\n",(0,t.jsx)(n.p,{children:"If required, capture the logs and send them to NeuVector."}),"\n",(0,t.jsx)(n.p,{children:"Turn off Debug mode on the controller (back in the CLI window)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"set controller 4fce427cf963 debug\nexit\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check controller debug status."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"show controller setting 289d67396fcb\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-the-rest-api-to-turn-on-debug-mode",children:"Using the REST API to turn on Debug Mode"}),"\n",(0,t.jsx)(n.p,{children:"Set access token with your IP, user, password:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'_controllerIP_="<your_controller_ip>"\n_controllerRESTAPIPort_="10443"\n_neuvectorUsername_="admin"\n_neuvectorPassword_="admin"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For Kubernetes based deployments you can get the Controller IP in the following command output:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get pod -n neuvector -o wide | grep controller\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If accessing the REST API from outside the cluster, see the Automation section instructions."})}),"\n",(0,t.jsx)(n.p,{children:"Get the authentication token"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -d \'{"password": {"username": "\'$_neuvectorUsername_\'", "password": "\'$_neuvectorPassword_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1 > token.json\n_TOKEN_=`cat token.json | jq -r \'.token.token\'`\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You may need to install jq ($sudo yum install jq)"})}),"\n",(0,t.jsx)(n.p,{children:"Enable Debug Mode"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X PATCH -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"controller_debug": ["cpath", "conn"]}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > set_debug.json\n#debug options - cpath, conn, mutex, scan, cluster , all\n'})}),"\n",(0,t.jsx)(n.p,{children:"Disable Debug on all controllers in a cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'curl -X PATCH -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"config": {"controller_debug": []}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > set_debug.json\n'})}),"\n",(0,t.jsx)(n.p,{children:"Check the controller debug status in a cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl  -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_"  "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/system/config"  > /dev/null 2>&1   > system_setting.json\n\ncat system_setting.json | jq .config.controller_debug\n'})}),"\n",(0,t.jsx)(n.p,{children:"Logout"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'echo `date +%Y%m%d_%H%M%S` log out\ncurl -k -X \'DELETE\' -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);