"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8774],{40063:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(74848),c=i(28453);const o={title:"Custom Compliance Checks",taxonomy:{category:"docs"},slug:"/policy/customcompliance"},s=void 0,r={id:"policy/customcompliance/customcompliance",title:"Custom Compliance Checks",description:"Creating Custom Scripts for Compliance Checks",source:"@site/docs/05.policy/11.customcompliance/11.customcompliance.md",sourceDirName:"05.policy/11.customcompliance",slug:"/policy/customcompliance",permalink:"/next/policy/customcompliance",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/05.policy/11.customcompliance/11.customcompliance.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Custom Compliance Checks",taxonomy:{category:"docs"},slug:"/policy/customcompliance"},sidebar:"tutorialSidebar",previous:{title:"Network Threat Signatures",permalink:"/next/policy/threats"},next:{title:"Federated Policy",permalink:"/next/policy/federated"}},a={},l=[{value:"Creating Custom Scripts for Compliance Checks",id:"creating-custom-scripts-for-compliance-checks",level:3},{value:"Sample script to check if container has root account with no password.",id:"sample-script-to-check-if-container-has-root-account-with-no-password",level:4},{value:"Sample script to check dirty cow file in the container.",id:"sample-script-to-check-dirty-cow-file-in-the-container",level:4},{value:"Creating a custom check script",id:"creating-a-custom-check-script",level:3},{value:"Samples",id:"samples",level:4},{value:"Creating a response rule for compliance report",id:"creating-a-response-rule-for-compliance-report",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"creating-custom-scripts-for-compliance-checks",children:"Creating Custom Scripts for Compliance Checks"}),"\n",(0,t.jsx)(n.p,{children:"Custom scripts can be run on containers and hosts for use in compliance checks and other assessments. The Custom Compliance check is a bash script that can be run on any container to validate a condition and report result in the container or node compliance section."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ability to create custom scripts is disabled by default to protect against misuse. This can be enabled be setting the CUSTOM_CHECK_CONTROL ",(0,t.jsx)(n.a,{href:"/deploying/production/details#environment-variables",children:"environment variable"}),' in the Controller and Enforcer. Values are "disable" (default, not allowed), "strict" (admin role only), or "loose" (admin, compliance, and runtime-policy roles).']})}),"\n",(0,t.jsx)(n.admonition,{title:"caution",type:"danger",children:(0,t.jsx)(n.p,{children:"Custom scripts should be used with extreme caution. The custom script can run any executable in the container namespace with container privilege. Executables can be very destructive, such as rm, format, fdisk etc. This caution applies to hosts/nodes as well. Custom check scripts on hosts can be even more destructive if they can access the master node in the cluster."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A custom script is controlled by the run-time policy permission with namespaced RBAC; users should setup the Kubernetes user roles properly."}),"\n",(0,t.jsx)(n.li,{children:"Custom scripts are run with the same privilege as the running container."}),"\n",(0,t.jsx)(n.li,{children:"The compliance result is removed once a custom script is deleted."}),"\n",(0,t.jsxs)(n.li,{children:["Custom Compliance checks need to follow a format in order to report the result correctly in the compliance report for the container or node.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Script starts with 'if' statement to check some condition"}),"\n",(0,t.jsx)(n.li,{children:"Custom check is pass if exit code is 0"}),"\n",(0,t.jsx)(n.li,{children:"Custom check is fail if exit code is 1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sample-script-to-check-if-container-has-root-account-with-no-password",children:"Sample script to check if container has root account with no password."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'if [ $(cat /etc/shadow | grep  \'root:::0:::::\') ]; then\n     DESCRIPTION="CVE-2019-5021 fails."\n     echo $DESCRIPTION;\n     exit 1;\nelse\n     echo "CVE-2019-5021 pass";\n     exit 0;\nfi\n'})}),"\n",(0,t.jsx)(n.h4,{id:"sample-script-to-check-dirty-cow-file-in-the-container",children:"Sample script to check dirty cow file in the container."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'if [ $(find . / | grep -w \'cow\') ]; then\n     DESCRIPTION="dirty cow seen in the container"\n    echo $DESCRIPTION;\n    exit 1;\nelse\n    echo "no dirty cow found pass";\n    exit 0;\nfi\n'})}),"\n",(0,t.jsx)(n.p,{children:"Other Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Scripts have a timeout of 1 minute to complete, otherwise they are killed and reported as an error in the compliance result."}),"\n",(0,t.jsx)(n.li,{children:"Script can be executed when in all 3-operating modes, Discover, Monitor, and Protect."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-custom-check-script",children:"Creating a custom check script"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select the service group (user created or auto learned) from Policy -> Group."}),"\n",(0,t.jsx)(n.li,{children:"Click custom check tab."}),"\n",(0,t.jsx)(n.li,{children:"Enter name of the script. Spaces are not allowed."}),"\n",(0,t.jsx)(n.li,{children:"Copy and paste script to script section."}),"\n",(0,t.jsx)(n.li,{children:"Click ADD button to add script."}),"\n",(0,t.jsx)(n.li,{children:"Multiple scripts can be created and managed from the option provided in the right side corner."}),"\n",(0,t.jsx)(n.li,{children:"Scripts are run on the containers covered by the service group as soon as script is created as well as when the script is updated."}),"\n",(0,t.jsx)(n.li,{children:"View the script result from Assets -> Container -> Compliance, or Assets -> Nodes -> Compliance."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"samples",children:"Samples"}),"\n",(0,t.jsx)(n.p,{children:"Creating a custom check script on demo group comprised of 3 containers"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceDemo",src:i(79859).A+"",width:"972",height:"483"})}),"\n",(0,t.jsx)(n.p,{children:"Showing compliance results for nginx container, which has a dirty cow file, so a warning is reported."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceNginx",src:i(5368).A+"",width:"962",height:"414"})}),"\n",(0,t.jsx)(n.p,{children:"Showing compliance result for nodejs container, which does not have a dirty cow file, so a pass is reported from the script."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceNodejs",src:i(30444).A+"",width:"956",height:"422"})}),"\n",(0,t.jsx)(n.p,{children:"Showing compliance result for nginx container for a custom check that had a timeout."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceTimeout",src:i(42524).A+"",width:"949",height:"452"})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-response-rule-for-compliance-report",children:"Creating a response rule for compliance report"}),"\n",(0,t.jsx)(n.p,{children:"Response rules can be created in Policy -> Response Rules that are based on results of custom compliance check results. The results are part of the category Compliance, and responses can be created for all events of a certain level."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Choose category compliance"}),"\n",(0,t.jsx)(n.li,{children:"Type service group name in group option and choose desired group from auto select option"}),"\n",(0,t.jsxs)(n.li,{children:["Type level and choose level",":Warning"," from auto select option"]}),"\n",(0,t.jsx)(n.li,{children:"Enable desired actions Quarantine, webhook and/or suppress log"}),"\n",(0,t.jsx)(n.li,{children:"Enable status button"}),"\n",(0,t.jsx)(n.li,{children:"Click Add button to add the response rule"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The next compliance event with result warning will trigger the corresponding response rule action."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceResponse",src:i(35588).A+"",width:"999",height:"525"})}),"\n",(0,t.jsx)(n.p,{children:"Create a response rule for compliance report and custom check script by name:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Choose category compliance"}),"\n",(0,t.jsx)(n.li,{children:"Type service group name in the group option and choose the desired group from drop down options, or leave the group name blank to apply to all"}),"\n",(0,t.jsx)(n.li,{children:"Type 'n' and choose custom check script name from the drop down menu of options"}),"\n",(0,t.jsx)(n.li,{children:"Enable desired actions Quarantine, webhook and/or suppress log"}),"\n",(0,t.jsx)(n.li,{children:"Enable status button"}),"\n",(0,t.jsx)(n.li,{children:"Click Add button to add the response rule"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The next compliance event with warning will trigger the corresponding response rule action."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ComplianceResponse",src:i(100).A+"",width:"985",height:"514"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},79859:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance1-b68ccb56bebd162fd41eb2e1b7357f24.png"},5368:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance2-cdcd35f7f37c92fd31b7f96bb4d1ea91.png"},30444:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance_nodejs-9b8309c3a4825af744e4cc90e8fc2cbb.png"},100:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance_report_2-4e8a3e3942271f13fbfc360f9bd61f02.png"},35588:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance_response_1-060c38551c2c4b2f01d56f8671f5a8aa.png"},42524:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compliance_timeout-2401407306460d2ea859a4c1b4f16e02.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const c={},o=t.createContext(c);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);