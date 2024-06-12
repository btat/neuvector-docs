"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1289],{64337:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>g});var n=t(74848),i=t(28453);const o={title:"OpenID Connect Azure/Okta",taxonomy:{category:"docs"},slug:"/integration/openid"},s=void 0,r={id:"integration/openid/openid",title:"OpenID Connect Azure/Okta",description:"Integrating with OpenID Connect (OIDC) for Azure and Okta",source:"@site/versioned_docs/version-5.2/08.integration/07.openid/07.openid.md",sourceDirName:"08.integration/07.openid",slug:"/integration/openid",permalink:"/5.2/integration/openid",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/08.integration/07.openid/07.openid.md",tags:[],version:"5.2",sidebarPosition:7,frontMatter:{title:"OpenID Connect Azure/Okta",taxonomy:{category:"docs"},slug:"/integration/openid"},sidebar:"tutorialSidebar",previous:{title:"SAML (ADFS)",permalink:"/5.2/integration/adfs"},next:{title:"OpenID Connect (OIDC) for ADFS",permalink:"/5.2/integration/oidc_adfs"}},a={},g=[{value:"Integrating with OpenID Connect (OIDC) for Azure and Okta",id:"integrating-with-openid-connect-oidc-for-azure-and-okta",level:3},{value:"Microsoft Azure Configuration",id:"microsoft-azure-configuration",level:4},{value:"Okta Configuration",id:"okta-configuration",level:4},{value:"NeuVector OpenID Connect Configuration",id:"neuvector-openid-connect-configuration",level:4},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function c(A){const e={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h3,{id:"integrating-with-openid-connect-oidc-for-azure-and-okta",children:"Integrating with OpenID Connect (OIDC) for Azure and Okta"}),"\n",(0,n.jsxs)(e.p,{children:["To enable OpenID Connect authentication, the ",(0,n.jsx)(e.strong,{children:"Issuer"}),", ",(0,n.jsx)(e.strong,{children:"Client ID"})," and ",(0,n.jsx)(e.strong,{children:"Client secret"})," settings are required. With the issuer URL, NeuVector will call the discovery API to retrieve the Authenorization, Token and User info endpoints."]}),"\n",(0,n.jsxs)(e.p,{children:["Locate the OpenID Connect Redirect URI on the top of the NeuVector OpenID Connect Setting page. You will need copy this URI to the ",(0,n.jsx)(e.strong,{children:"Login redirect URIs"})," for Okta and ",(0,n.jsx)(e.strong,{children:"Reply URLs"})," for Microsoft Azure."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"OpenID1",src:t(13607).A+"",width:"975",height:"175"})}),"\n",(0,n.jsx)(e.h4,{id:"microsoft-azure-configuration",children:"Microsoft Azure Configuration"}),"\n",(0,n.jsx)(e.p,{children:"In Azure Active Directory > App registrations > Application name > Settings Page, locate Application ID string. This is used to set the Client ID in NeuVector. The Client secret can be located in Azure's Keys setting."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"OpenID3",src:t(28021).A+"",width:"975",height:"320"})}),"\n",(0,n.jsxs)(e.p,{children:["The Issuer URL takes ",(0,n.jsx)(e.a,{href:"https://login.microsoftonline.com/%7BtenantID%7D/v2.0",children:"https://login.microsoftonline.com/{tenantID}/v2.0"})," format. To locate the tenantID, go to ",(0,n.jsx)(e.strong,{children:"Azure Active Directory > Properties Page"})," and found the Directory ID, replace it with the tenantID in the URL"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"OpenID4",src:t(53722).A+"",width:"955",height:"484"})}),"\n",(0,n.jsxs)(e.p,{children:["If the users are assigned to the groups in the active directory, their group membership can be added to the claim. Find the application in ",(0,n.jsx)(e.strong,{children:"Azure Active Directory -> App registrations"}),' and edit the manifest. Modify value of "groupMembershipClaims" to "Application Group".  There is a maximum number of groups that will get emitted into a token.  If the user belongs to a large number of groups ( > 200) and the value "All" is used, the token will not include the groups and authorization will failed.  Using the value "Application Group" instead of "All" will reduce the number of applicable groups returned in the token.']}),"\n",(0,n.jsx)(e.p,{children:"By default, NeuVector looks for \"groups\" in the claim to identify the user's group membership. If other claim name is used, you can customize the claim name in NeuVector's OpenID Connect Setting page."}),"\n",(0,n.jsxs)(e.p,{children:['The group claim returned by Azure are identified by the "Object ID" instead of the name. The group\'s object ID can be located in ',(0,n.jsx)(e.strong,{children:"Azure Active Directory > Groups > Group name Page"}),". You should use this value to configure group-based role mapping in NeuVector -> Settings."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"OpenID5",src:t(75299).A+"",width:"975",height:"238"})}),"\n",(0,n.jsx)("strong",{children:"Verify Permissions"}),"\n",(0,n.jsx)(e.p,{children:"Make sure the following permissions have been set from Microsoft Graph"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"email - View users' email address"}),"\n",(0,n.jsx)(e.li,{children:"openid - Sign users in"}),"\n",(0,n.jsx)(e.li,{children:"profile - View users' basic profile"}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"okta-configuration",children:"Okta Configuration"}),"\n",(0,n.jsx)(e.p,{children:"Login to your Okta account."}),"\n",(0,n.jsx)(e.p,{children:"On the lefthand side menu, click \u201cApplications -> Applications\u201c\nIn the center pane, click \u201cCreate App Integration\u201d:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"create",src:t(78995).A+"",width:"780",height:"475"})}),"\n",(0,n.jsx)(e.p,{children:"A new pane will pop up to select the \u201cSign-in method\u201d:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"newapp",src:t(67032).A+"",width:"780",height:"458"})}),"\n",(0,n.jsx)(e.p,{children:"Select \u201cOIDC \u2013 OpenID Connect\u201d option."}),"\n",(0,n.jsx)(e.p,{children:"A derived pane will appear, for \u201cApplication Type\u201d selection:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"apptype",src:t(88161).A+"",width:"780",height:"245"})}),"\n",(0,n.jsx)(e.p,{children:"Select \u201cNative Application\u201d option."}),"\n",(0,n.jsx)(e.p,{children:"The central pane will now show the Native App Integration form where you have to fill in accordingly the following values:"}),"\n",(0,n.jsx)(e.p,{children:"For General Settings section:"}),"\n",(0,n.jsx)(e.p,{children:"App. Integration Name: Name for this integration. Freely choose any name\nGrant Type (check):"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Authorization Code"}),"\n",(0,n.jsx)(e.li,{children:"Refresh Token"}),"\n",(0,n.jsx)(e.li,{children:"Resource Owner Password"}),"\n",(0,n.jsx)(e.li,{children:"Implicit (hybrid)"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"For Sign-in redirect URIs section:"}),"\n",(0,n.jsx)(e.p,{children:"Go to your NeuVector console and navigate to \u201cSettings\u201d -> \u201cOpenId Connect Settings\u201d.  At the top of the page, next to \u201cOpenID Connect Redirect URI\u201d label click \u201cCopy to Clipboard\u201d."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"copy",src:t(89678).A+"",width:"780",height:"135"})}),"\n",(0,n.jsx)(e.p,{children:"This will copy to the redirect URI to memory.\nPaste it in its corresponding textbox:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"paste",src:t(89175).A+"",width:"780",height:"133"})}),"\n",(0,n.jsx)(e.p,{children:"For Assignments section:"}),"\n",(0,n.jsx)(e.p,{children:"Select \u201cAllow everyone in your organization to access\u201d to have this integration available for everyone in your org."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"assignments",src:t(81596).A+"",width:"780",height:"195"})}),"\n",(0,n.jsx)(e.p,{children:"Then click the save button at the bottom of the page."}),"\n",(0,n.jsx)(e.p,{children:"Once your general setting are saved, you will be taken to your new application integration setup and a client Id will be generated automatically."}),"\n",(0,n.jsx)(e.p,{children:"In \u201cClient Credentials\u201d section, click edit and modify the \u201cClient Authentication\u201d section from \u201cUse PKCE (for public clients)\u201d to \u201cUse Client Authentication\u201d, and hit save. This will generate a new secret automatically which we will need in upcoming NeuVector setup steps:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"clientauth",src:t(17509).A+"",width:"780",height:"315"})}),"\n",(0,n.jsx)(e.p,{children:"Navigate to the \u201cSign On\u201d tab and edit the \u201cOpenID Connect ID Token\u201d section:\nChange the Issuer from \t\u201cDynamic (based on request domain)\u201d to the fixed \u201cOkta URL\u201d:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"token",src:t(96130).A+"",width:"780",height:"163"})}),"\n",(0,n.jsx)(e.p,{children:"The Okta console can operate in two modes, Classic Mode and Developer Mode.\nIn classic mode, the issuer URL is located at Okta Application page's Sign On Tab. To have the user's group membership returned in the claim, you need to add \"groups\" scope in the NeuVector OpenID Connect configuration page:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"claims",src:t(86635).A+"",width:"705",height:"135"})}),"\n",(0,n.jsx)(e.p,{children:"In the Developer Mode, Okta allows you to customize the claims. This is done in the API page by managing Authorization Servers (navigate to left hand menu -> Security -> API). The issuer URL is located in each authorization server's Settings tab:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"api",src:t(25947).A+"",width:"780",height:"270"})}),"\n",(0,n.jsx)(e.p,{children:"Claims are name/value pairs that contain information about a user as well as meta-information about the OIDC service.\nIn \u201cOpenID Connect ID Token\u201d section, you can create new claims for user's Groups and carry the claim in the ID Token (an ID Token is a JSON Web Token, a compact URL-Safe means of representing claims to be transferred between two parties, so identity information about the user is encoded right into the token and the token can be definitively verified to prove that is hasn\u2019t been tampered with). If a specific scope is configured, make sure to add the scope to NeuVector OpenID Connect setting page, so that the claim can be included after the user is authenticated:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"scopes",src:t(76946).A+"",width:"780",height:"65"})}),"\n",(0,n.jsx)(e.p,{children:"By default, NeuVector looks for \"groups\" in the claim to identify the user's group membership. If other claim name is used, you can customize the claim name in NeuVector's OpenID Connect Setting page. To configure claims, edit the \u201cOpenID Connect ID Token\u201d section as shown in the next image:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"claims",src:t(42089).A+"",width:"780",height:"250"})}),"\n",(0,n.jsx)(e.p,{children:"In your application integration page, navigate to \u201cAssignments\u201d tab and make sure you have the corresponding assignments listed:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"assignments",src:t(70912).A+"",width:"967",height:"312"})}),"\n",(0,n.jsx)(e.h4,{id:"neuvector-openid-connect-configuration",children:"NeuVector OpenID Connect Configuration"}),"\n",(0,n.jsx)(e.p,{children:"Configure the proper Issuer URL, Client ID and Client secret in the page."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"OpenID9",src:t(44991).A+"",width:"975",height:"328"})}),"\n",(0,n.jsx)(e.p,{children:"After the user is authenticated, the proper role can be derived with group-based role mapping configuration. To setup group-based role mapping,"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"If group-based role mapping is not configured or the matched groups cannot be located, the authenticated user will be assigned with the Default role. If the Default role is set to None, when group-based role mapping fails, the user is not able to login."}),"\n",(0,n.jsx)(e.li,{children:"Specify a list of groups respectively in Admin and Reader role map. The user's group membership is returned by the claims in the ID Token after the user is authenticated. If the matched group is located, the corresponding role will be assigned to the user."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"The group can be mapped to the Admin role in NeuVector. Individual users can be 'promoted' to a Federated Admin role by logging in as a local cluster admin, selecting the user with Identify Provider 'OpenID', and editing their role in Settings -> Users/Roles."}),"\n",(0,n.jsx)(e.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,n.jsxs)(e.p,{children:["Please see the ",(0,n.jsx)(e.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function l(A={}){const{wrapper:e}={...(0,i.R)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(c,{...A})}):c(A)}},78995:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta1-3067220911ec40ac2e8084f9e34e4872.png"},25947:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta10-cd4d47376e8fa9c47f8e2bfe2d51f7f4.png"},76946:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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oAAFKEABClCAAmcVYMBwViL+gAIUoAAFKEABClCAAg1XgAFDw732rDkFKEABClCAAhSgAAXOKsCA4axE/AEFKEABClCAAhSgAAUargADhoZ77VlzClCAAhSgAAUoQAEKnFVAf9Zf8AcNSuDOBf9C6pfZDarOrCwFKEABClCAAhRo6AJffXglzCZdSAa+hyEkS8NdefhoKUpK3Q0XgDWnAAUoQAEKUIACDVCgZ3JjaLWakDVnwBCShSspQAEKUIACFKAABShAAVWAYxh4H1CAAhSgAAUoQAEKUIACYQUYMISl4QYKUIACFKAABShAAQpQgAED7wEKUIACFKAABShAAQpQIKwAA4awNNxAAQpQgAIUoAAFKEABCjBg4D1AAQpQgAIUoAAFKEABCoQVYMAQloYbKEABClCAAhSgAAUoQAEGDLwHKEABClCAAhSgAAUoQIGwAgwYwtJwAwUoQAEKUIACFKAABSjAgIH3AAUoQAEKUIACFKAABSgQVoABQ1gabqAABShAAQpQgAIUoAAFGDDwHqAABShAAQpQgAIUoAAFwgowYAhLww0UoAAFKEABClCAAhSgAAMG3gMUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQqcD4H/B4GonT93gqz7AAAAAElFTkSuQmCC"},42089:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta12-96a3c02a49117a027dfb1a086d3e39ac.png"},70912:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta13-33237c70dd3a63b670f9b3d808c0404b.png"},67032:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta2-b19d08dcecc613e02a743b02c0d226c3.png"},88161:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta3-a467e37eda02672e6bfb7284cadb0b12.png"},89678:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta4-c0253e8057fd7d662b84c19864520a94.png"},89175:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta5-6b207cac5a0c1a1cebb6a5f31413cd80.png"},81596:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta6-fe1cd2c474496fb7eed92ba9f592f9a2.png"},17509:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta7-927d1cf563c99c5e3d9dc97ca778f6ca.png"},96130:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/okta8-97054b971d1b8ce24a47b7504727f9fc.png"},86635:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsEAAACHCAYAAAD3L4QsAAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAAB4AAAAAQAAAHgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAsGgAwAEAAAAAQAAAIcAAAAAo4OeHgAAAAlwSFlzAAASdAAAEnQB3mYfeAAAG1RJREFUeAHt3XtwlfWdx/EPJOEkBCK3oAtSL6BUuQihlsbKArYQ6gVkiayOo9sqtaXa6XbZWurslLEXym6Hdbv1MqOtUxedrSzoQJXlYgsdL9hFA1IBlYtIECVpuARCcshtf98nOU9PbuSc5DzJCef9zNA85znP8/x+v9fzz8dfv+f39Kp3m9gQQAABBBBAAAEEEEgRgV5u650iY2WYCCCAAAIIIIAAAgj4AoRgn4IdBBBAAAEEEEAAgVQRIASnypNmnAgggAACCCCAAAK+ACHYp2AHAQQQQAABBBBAIFUECMGp8qQZJwIIIIAAAggggIAvQAj2KdhBAAEEEEAAAQQQSBUBQnCqPGnGiQACCCCAAAIIIOALEIJ9CnYQQAABBBBAAAEEUkWAEJwqT5pxIoAAAggggAACCPgChGCfgh0EEEAAAQQQQACBVBEgBKfKk2acCCCAAAIIIIAAAr4AIdinYAcBBBBAAAEEEEAgVQQIwanypBknAggggAACCCCAgC9ACPYp2EEAAQQQQAABBBBIFQFCcKo8acaJAAIIIIAAAggg4AsQgn0KdhBAAAEEEEAAAQRSRYAQnCpPmnEigAACCCCAAAII+AKEYJ+CHQQQQAABBBBAAIFUESAEp8qTZpwIIIAAAggggAACvgAh2KdgBwEEEEAAAQQQQCBVBAjBqfKkGScCCCCAAAIIIICAL0AI9inYQQABBBBAAAEEEEgVAUJwqjxpxokAAggggAACCCDgCxCCfQp2EEAAAQQQQAABBFJFgBCcKk+acSKAAAIIIIAAAgj4AoRgn4IdBBBAAAEEEEAAgVQRIASnypNmnAgggAACCCCAAAK+ACHYp2AHAQQQQAABBBBAIFUECMGp8qQZJwIIIIAAAggggIAvQAj2KdhBAAEEEEAAAQQQSBUBQnCqPGnGiQACCCCAAAIIIOALEIJ9CnYQQAABBBBAAAEEUkWAEJwqT5pxIoAAAggggAACCPgChGCfgh0EEEAAAQQQQACBVBEgBKfKk2acCCCAAAIIIIAAAr4AIdinYAcBBBBAAAEEEEAgVQQIwanypBknAggggAACCCCAgC9ACPYp2EEAAQQQQAABBBBIFQFCcIBPuq6uTqWlpfrwww9VXl6u+vr6AFuL79a1tbU6cuSI17dTp075faupqdGGDRu0atUqVVZWnvOmFRUVevPNN3XixIlznseXCCCAAAIIIIBAsgmkJ1uHzpf+fPzxx1qzZo0OHjzoDykvL0+33HKLsrOz/WPdsdNa32644QbZv169esnCrQXb9kL7vn379MILL6iwsFCf//znu2MotIkAAggggAACCHRIgBDcIbZzX3T69Glt2rRJ4XBY9957ry6++GK9++67eumllzRs2DBNmTLFC5vnvksw39qM9Lp162Sz1Pfff78GDx6st99+W6+88ooGDRqkiRMnxtzwuHHj9IMf/EAXXHBBzNdwIgIIIIAAAgggkAwChOAAnsInn3yi3bt36+abb9aVV17pBd5rrrlGdtxmWM+ePSubRd26datGjhyp7du3a9asWbr00kv16quvqqioyOuVzRxbYO7bt6927drlnW/nWaiOfM7Pz/dC6Pr1672AffjwYa/M4Ytf/KKmTp2qPn36NBmhfb93717dcccduuSSS7zvrr32WpWUlOjYsWOqrq5ucr6F5Z07d+oPf/iDPv30U40dO1Zf/vKXvbasnMLatT5cfvnlevnll5Wenu79e+utt7xzZs6c6VnYWEeMGKG5c+cqNze3SRt8QAABBBBAAAEEulqAmuAAxG0m2DYLq1ZeYFtmZqZuvfVWzZ49W6FQyAvCH3zwgf74xz965RFWImFB08LipEmTvH+2b8esTteCs51v+7ZFPttfO2bf7d+/3wujo0aN8maiLSg338rKyrxDAwcO9L+ykH3bbbd5QTwjI8M/bjvvv/++Vq9erfHjx+vuu+/2apt///vfq6qqym/X+mClExbwd+zY4V1vAb64uFi//vWvvfMsaNtnqyG2emQ2BBBAAAEEEECgOwWYCQ5Qv3fvhv/GeP3117Vnzx6vpQEDBuimm27yW7399tv12c9+VhZODxw4oMmTJ3szrXaChUWbtT158qR//rl2rr/+eq+c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"},13607:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/openid1-94fc13e3581e5db31f98da5656b470e9.png"},28021:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/openid3-38c8d36c04b43909a8b09bb5d2cfb3f8.png"},53722:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/openid4-bec3bcbb5d1cb3e9ee4fe4fa3eb8e591.png"},75299:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/openid5-7ce8d551ea3ceed8ad50ce5b6cbe7a0d.png"},44991:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/openid9-c109c708991edb978143d0c676e210ef.png"},28453:(A,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var n=t(96540);const i={},o=n.createContext(i);function s(A){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:s(A.components),n.createElement(o.Provider,{value:e},A.children)}}}]);