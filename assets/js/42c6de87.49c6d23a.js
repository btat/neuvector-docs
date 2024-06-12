"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2272],{76108:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(74848),t=i(28453);const r={title:"Security Policy Overview",taxonomy:{category:"docs"},slug:"/policy/overview"},s=void 0,a={id:"policy/overview/overview",title:"Security Policy Overview",description:"NeuVector Security Policy",source:"@site/versioned_docs/version-5.2/05.policy/01.overview/01.overview.md",sourceDirName:"05.policy/01.overview",slug:"/policy/overview",permalink:"/5.2/policy/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/05.policy/01.overview/01.overview.md",tags:[],version:"5.2",sidebarPosition:1,frontMatter:{title:"Security Policy Overview",taxonomy:{category:"docs"},slug:"/policy/overview"},sidebar:"tutorialSidebar",previous:{title:"5. Security Policy",permalink:"/5.2/policy"},next:{title:"Modes: Discover, Monitor, Protect",permalink:"/5.2/policy/modes"}},c={},l=[{value:"NeuVector Security Policy",id:"neuvector-security-policy",level:3},{value:"Groups",id:"groups",level:4},{value:"Network Rules",id:"network-rules",level:4},{value:"Process Profile and File Access Rules",id:"process-profile-and-file-access-rules",level:4},{value:"Response Rules",id:"response-rules",level:4},{value:"Admission Control Rules",id:"admission-control-rules",level:4},{value:"DLP and WAF Sensors",id:"dlp-and-waf-sensors",level:4},{value:"Migration, Backup, Import/Export",id:"migration-backup-importexport",level:4}];function d(e){const o={a:"a",admonition:"admonition",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"neuvector-security-policy",children:"NeuVector Security Policy"}),"\n",(0,n.jsx)(o.p,{children:"To detect Violations of normal behavior, NeuVector maintains a security Policy which can be managed from the GUI, CLI, CRD, or REST API."}),"\n",(0,n.jsx)(o.h4,{id:"groups",children:"Groups"}),"\n",(0,n.jsxs)(o.p,{children:["This provides the primary view of service Groups and custom Groups to set the mode (Discover, Monitor, Protect) for each service and to manage rules. Groups are automatically created by NeuVector, but custom groups can be added. Rules for each Group are automatically created by NeuVector when containers begin running. Container Groups can have a Split Policy Mode where the Process/File rules are in a different enforcement mode than the Network rules, as described ",(0,n.jsx)(o.a,{href:"/policy/modes#network-service-policy-mode",children:"here"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"To select a Group to view or manage, select the check box next to it. This is where Process Profile Rules, File Access Rules, DLP, and Custom Compliance checks are managed. Network Rules can be viewed here but are managed in a separate menu.\nNetwork and Response Rules in NeuVector are created using a \u2018from\u2019 and \u2018to\u2019 field, which requires a Group as input. A group can be an application, derived from image labels, DNS name or other customized grouping. DNS subdomains are supported, e.g. *.foo.com. IP addresses or subnets can also be used which is useful to control ingress and egress from non-containerized workloads."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"groups",src:i(32657).A+"",width:"2380",height:"1210"})}),"\n",(0,n.jsx)(o.p,{children:"Reserved group names created automatically by NeuVector include:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Containers. All running containers."}),"\n",(0,n.jsx)(o.li,{children:"External. Connections coming into the cluster (ingress)."}),"\n",(0,n.jsx)(o.li,{children:"Nodes. Nodes or hosts identified by NeuVector."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'The Groups menu is also where the "Export Group Policy" can be performed. This exports the security policy (rules) for the selected groups as a yaml file in the format of the NeuVector custom resource definition (CRD) which can be reviewed and then deployed into other clusters.'}),"\n",(0,n.jsx)(o.p,{children:"Note that the Status of a Group's containers is shown in Policy -> Groups -> Members, which indicates the NeuVector protection mode (Discover, Monitor, Protect). If the container is shown in an 'Exit' state, it is still on the host but is stopped. Removing the container will remove it from an Exit state."}),"\n",(0,n.jsx)(o.h4,{id:"network-rules",children:"Network Rules"}),"\n",(0,n.jsx)(o.p,{children:"A list of whitelist and blacklist rules for NeuVector to enforce. NeuVector can auto-discover and create a set of whitelist rules while in Discover mode. Rules can be added manually if desired."}),"\n",(0,n.jsx)(o.p,{children:"NeuVector automatically creates Layer 7 (application layer) whitelist rules when in Discover mode, by observing the network connections and creating rules which enforce application protocols."}),"\n",(0,n.jsx)(o.p,{children:"NeuVector also has built-in network attack detection which is enabled all the time, regardless of mode (Discover, Monitor, Protect). The network threats detected include DDoS attacks, tunneling and SQL injection. Please see the section Network Rules for a full list of built-in threat detection."}),"\n",(0,n.jsx)(o.p,{children:"DLP (Data Loss Prevention) rules can also be applied to container Groups to inspect the network payload for potential data stealing or privacy violations such as unencrypted credit card data. Violations can be blocked. Please see the section on DLP for details on how to create and apply DLP filters."}),"\n",(0,n.jsx)(o.h4,{id:"process-profile-and-file-access-rules",children:"Process Profile and File Access Rules"}),"\n",(0,n.jsx)(o.p,{children:"NeuVector has built-in detection of suspicious processes and file activity as well as a baselining technology for containers. Built-in detection includes processes such as port scanning (e.g. NMAP), reverse shell, and even privilege escalations to root. System files and directories are automatically monitored. Each service discovered by NeuVector will create a baseline of \u2018normal\u2019 process and file behavior for that container service. These rules can be customized if desired."}),"\n",(0,n.jsx)(o.h4,{id:"response-rules",children:"Response Rules"}),"\n",(0,n.jsx)(o.p,{children:"Response Rules enable users to define actions to respond to security events. Events include Threats, Violations, Incidents, and Vulnerability Scan results. Actions include container quarantine, webhooks, and suppression of alerts."}),"\n",(0,n.jsx)(o.p,{children:"Response Rules provide a flexible, customizable rule engine to automate responses to important security events."}),"\n",(0,n.jsx)(o.h4,{id:"admission-control-rules",children:"Admission Control Rules"}),"\n",(0,n.jsx)(o.p,{children:"Admission control rules allow or block deployments. More details can be found in this section under Admission Controls."}),"\n",(0,n.jsx)(o.h4,{id:"dlp-and-waf-sensors",children:"DLP and WAF Sensors"}),"\n",(0,n.jsx)(o.p,{children:"Data Loss Prevention (Data Leak Protection) and WAF rules can be enabled on any selected container Group. This utilizes Deep Packet Inspection to apply regular expression based matching to the network payload entering or leaving the selected container group. Built-in sensors for credit card and US social security number are included for examples, and custom regular expressions can be added."}),"\n",(0,n.jsx)(o.h4,{id:"migration-backup-importexport",children:"Migration, Backup, Import/Export"}),"\n",(0,n.jsx)(o.p,{children:"Migration of the security policy can be accomplished by CRD, REST API, or import/export. For example, learned and custom rules can generate a CRD yaml file(s) in a staging environment for deployment to the production environment."}),"\n",(0,n.jsx)(o.p,{children:"The Security Policy for NeuVector can be exported and imported in Settings -> Configuration. It is recommended to backup All configuration prior to any update of NeuVector to a new version."}),"\n",(0,n.jsx)(o.admonition,{title:"important",type:"warning",children:(0,n.jsx)(o.p,{children:"Importing ALL (Config and Policy) will overwrite everything, including the main admin login credential. Be sure you know the main admin login for the imported file before importing."})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},32657:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/groups_node_demo-966899cb4aff181c8254bbdfe0bdce3a.png"},28453:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>a});var n=i(96540);const t={},r=n.createContext(t);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);