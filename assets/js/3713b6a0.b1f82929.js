"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9042],{47717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453);const o={title:"GCR Scanning using Service Accounts",taxonomy:{category:"docs"},slug:"/scanning/registry/gcr-sa"},i=void 0,c={id:"scanning/registry/gcr-sa/gcr-sa",title:"GCR Scanning using Service Accounts",description:"Google GCR - Authentication/Scanning with GCP Service Accounts",source:"@site/docs/06.scanning/02.registry/03.gcr-sa/03.gcr-sa.md",sourceDirName:"06.scanning/02.registry/03.gcr-sa",slug:"/scanning/registry/gcr-sa",permalink:"/next/scanning/registry/gcr-sa",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/02.registry/03.gcr-sa/03.gcr-sa.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"GCR Scanning using Service Accounts",taxonomy:{category:"docs"},slug:"/scanning/registry/gcr-sa"},sidebar:"tutorialSidebar",previous:{title:"ECR Scanning using IAM Roles",permalink:"/next/scanning/registry/ecr-iam"},next:{title:"Build Phase Image Scanning",permalink:"/next/scanning/build"}},a={},l=[{value:"Google GCR - Authentication/Scanning with GCP Service Accounts",id:"google-gcr---authenticationscanning-with-gcp-service-accounts",level:3},{value:"Obtain the Access Token Using the REST API",id:"obtain-the-access-token-using-the-rest-api",level:4},{value:"Use the Token with NeuVector Repository Scanning",id:"use-the-token-with-neuvector-repository-scanning",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"google-gcr---authenticationscanning-with-gcp-service-accounts",children:"Google GCR - Authentication/Scanning with GCP Service Accounts"}),"\n",(0,s.jsx)(t.p,{children:"It is a best practice to not depend on user attributed accounts for integrations.  GCP supports using a service account to access GCR.  Here are the steps to enable a service account for GCR and use it to trigger repository scans from NeuVector."}),"\n",(0,s.jsx)(t.p,{children:"Start in NeuVector, where one first sets up a new registry:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(16084).A+"",width:"2145",height:"1113"})}),"\n",(0,s.jsx)(t.p,{children:"By selecting Google Container Registry as the repo type, this panel is customized to accept the input required to use your GCR."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Name - Here\u2019s where you give this particular repo entry a name of your choosing. It\u2019s merely to identify it in the NeuVector interface later on."}),"\n",(0,s.jsxs)(t.li,{children:["Registry - This is the first place where you\u2019ll want to be sure the correct data is collected from your GCR instance. While the example of ",(0,s.jsx)(t.a,{href:"https://gcr.io",children:"https://gcr.io"})," is the most common, we will want to be sure it accurately reflects how your GCR was set up in GCP. It might be ",(0,s.jsx)(t.a,{href:"https://us.gcr.io",children:"https://us.gcr.io"})," for example. We\u2019ll go check it in the next section."]}),"\n",(0,s.jsx)(t.li,{children:"JSON Key - As is pretty self-evident, this will be a JSON-formatted key. And, as you\u2019re probably seeing a pattern set up for, we\u2019ll be finding that via GCP."}),"\n",(0,s.jsxs)(t.li,{children:["Filter - Be mindful that you will likely need to replace any filters here with the actual name of the repo. Again, that\u2019s in the GCR interface.\n\u2003\n",(0,s.jsx)(t.img,{alt:"GCR",src:n(34991).A+"",width:"2145",height:"1246"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Now let\u2019s head on over to that GCR screen in GCP. Much of what we need is right here on this page."}),"\n",(0,s.jsx)(t.p,{children:"A. See the \u201cgcr.io\u201d under Hostname? That\u2019s what belongs in item #2, Registry in the NeuVector interface. (Don\u2019t forget the https:// part)\nB. The ID of the repo is actually under the top level project. This is what you will be using in #3, Filter. See example of env-demo below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(95974).A+"",width:"2145",height:"1100"})}),"\n",(0,s.jsx)(t.p,{children:"The JSON Key leads us to explore another very important step, and that takes us to the IAM & Admin section of GCP where we will create (or confirm the setting of) a Service Account. See below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(89049).A+"",width:"2145",height:"1769"})}),"\n",(0,s.jsx)(t.p,{children:"Once you enter the data for the first step of creating a service account, you need to press the \u201cCREATE\u201d button to get step 2 to be willing to accept input."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(92144).A+"",width:"2154",height:"1980"})}),"\n",(0,s.jsx)(t.p,{children:"Be sure to select Basic \u2014> Viewer for the access. If you have an existing service account, ensure that the access is set this way. (Hint: Even access permissions that appear to be more powerful don\u2019t seem to allow for proper access. Don't skip this step."}),"\n",(0,s.jsx)(t.p,{children:"Once you\u2019ve done this step, you can breeze past Step 3 and proceed with creating the Service Account."}),"\n",(0,s.jsx)(t.p,{children:"If you don\u2019t immediately land on the info panel for your new service account, be sure to go there on the Service Accounts list. See figure 5 below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(61995).A+"",width:"2053",height:"1741"})}),"\n",(0,s.jsx)(t.p,{children:"Click \u201cADD KEY\u201d \u2014> \u201cCreate New Key\u201d"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(40866).A+"",width:"2154",height:"1530"})}),"\n",(0,s.jsx)(t.p,{children:"As you have already concluded, JSON is the go-to here. Selecting \u201cCREATE\u201d will result in a file that you can download in your browser. The contents of this file should be pasted into the 3, JSON Key field in NeuVector; see figure 1."}),"\n",(0,s.jsx)(t.p,{children:"Before you get too excited there\u2019s one more thing to ensure. In order for the scanner in NeuVector to use the API to scan and protect your images, said API must be enabled in your GCP account. You can either enable it via the command line via"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"gcloud services enable artifactregistry.googleapis.com\n"})}),"\n",(0,s.jsx)(t.p,{children:"Or you can use the GCP gui. Head to \u201cAPI Library\u201d and search for \u201cArtifact Registry API\u201d and ensure it is turned on for your project. See figure 7."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(87813).A+"",width:"2154",height:"1668"})}),"\n",(0,s.jsx)(t.p,{children:"You should be set! See figure 8 below for a properly-configured registry using the data from our example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCR",src:n(58396).A+"",width:"2145",height:"1155"})}),"\n",(0,s.jsx)(t.h4,{id:"obtain-the-access-token-using-the-rest-api",children:"Obtain the Access Token Using the REST API"}),"\n",(0,s.jsx)(t.p,{children:"The NeuVector REST API may be used to authenticate using the service account. The below example uses gcloud to obtain the access token.  The username is \u201coauth2accesstoken\u201d."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"gcloud auth print-access-token\nya29.a0AfH6SMAvyZ2zkD3MZD_K8Lqr7qkIsRkGNqhAGthJ_A7lp8OGRe7xh5KmuQY-VJfqu83C9e1gi7A_m1InNm8QIoTGf9WHXnOeAr1gT_O6b6K667NUz1_YDunjdW09jt0XvcBGQaxjJ3c4aHlxdehBFiE_9PMk13JDt_T6f0_6vzS7\n"})}),"\n",(0,s.jsx)(t.h4,{id:"use-the-token-with-neuvector-repository-scanning",children:"Use the Token with NeuVector Repository Scanning"}),"\n",(0,s.jsx)(t.p,{children:"The below example script incorporates the access token to trigger GCR repository scan."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'_curCase_=`echo $0 | awk -F"." \'{print $(NF-1)}\' | awk -F"/" \'{print $NF}\'`\n_DESC_="able to scan ubuntu:16.04 image"\n_ERRCODE_=0\n_ERRTYPE_=1\n_RESULT_="pass"\n\n# please remember to specify the controller ip address here\n_controllerIP_="10.1.24.252"\n_controllerRESTAPIPort_="10443"\n_neuvectorUsername_="admin"\n_neuvectorPassword_="admin"\n_registryURL_="https://us.gcr.io/"\n\n# registry urls could also be gcr.io, eu.gcr.io, asia.gcr.io etc\n_registryUsername_="oauth2accesstoken"\n_registryPassword_=$(gcloud auth print-access-token)\n_repository_="bionic-union-271100/alpine"\n_tag_="latest"\n\ncurl -k -H "Content-Type: application/json" -d \'{"password": {"username": "\'$_neuvectorUsername_\'", "password": "\'$_neuvectorPassword_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1 > token.json\n_TOKEN_=`cat token.json | jq -r \'.token.token\'`\necho `date +%Y%m%d_%H%M%S` scanning an image ...\ncurl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "\'$_registryURL_\'", "username": "\'$_registryUsername_\'", "password": "\'$_registryPassword_\'", "repository": "\'$_repository_\'", "tag": "\'$_tag_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/scan/repository" > /dev/null 2>&1 > scan_repository.json\n\nwhile [ `wc -c < scan_repository.json` = "0" ]; do\n echo `date +%Y%m%d_%H%M%S` scanning is still in progress ...\n    sleep 5\n    curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" -d \'{"request": {"registry": "\'$_registryURL_\'", "username": "\'$_registryUsername_\'", "password": "\'$_registryPassword_\'", "repository": "\'$_repository_\'", "tag": "\'$_tag_\'"}}\' "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/scan/repository" > /dev/null 2>&1 > scan_repository.json\ndone\n\necho `date +%Y%m%d_%H%M%S` log out\ncurl -k -X \'DELETE\' -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://$_controllerIP_:$_controllerRESTAPIPort_/v1/auth" > /dev/null 2>&1\ncat scan_repository.json | jq .\nrm *.json\necho `date +%Y%m%d_%H%M%S` [$_curCase_] $_DESC_: $_RESULT_-$_ERRCODE_\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16084:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr1-0d22434337dad2853ac57986c57982a2.png"},34991:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr2-30db3fc1ab89f426edc737d21af8aeea.png"},95974:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr3-2987adbe0c13266a8a9cd6f8c75a1c70.png"},89049:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr4-671480ddf075936380c04bf782bb1803.png"},92144:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr5-84fafdc269ad4ecdc38ebe919a4ff879.png"},61995:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr6-188c915e0e78aa6054c1bef22dfdc00d.png"},40866:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr7-0424d3dc26018129b54f2b60d4f3320f.png"},87813:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr8-f617a0e44ca389e96873c77b71433a3b.png"},58396:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcr9-6e004b6e5c7f4cfc1bd32bd37935a6f2.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);