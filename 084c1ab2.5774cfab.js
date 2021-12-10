(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),g=r,h=p["".concat(o,".").concat(g)]||p[g]||u[g]||a;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(229)),o=["components"],c={title:"Types of Web Behavior Triggers",sidebar_label:"Types of Web behavior triggers"},s={unversionedId:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",id:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",isDocsHomePage:!1,title:"Types of Web Behavior Triggers",description:"In this guide",source:"@site/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType.md",slug:"/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",version:"current",sidebar_label:"Types of Web behavior triggers",sidebar:"platform_concepts",previous:{title:"Types of Widget Buttons",permalink:"/docs/platform_concepts/engagement/inbound/inboundWidgets/typesOfWidgetButtons"},next:{title:"Web Behavior Triggers to identify in E-commerce",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm"}},l=[{value:"In this guide",id:"in-this-guide",children:[{value:"Here are the types of triggers you can choose:",id:"here-are-the-types-of-triggers-you-can-choose",children:[]}]},{value:"Creating multiple conditions and condition sets",id:"creating-multiple-conditions-and-condition-sets",children:[]},{value:"Up next",id:"up-next",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"in-this-guide"},"In this guide"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"This guide introduces you to the various types of Web Behaviour Triggers and what each of them mean. A Web Behaviour Trigger is used to define ",Object(a.b)("strong",{parentName:"li"},"When")," the campaign will be executed"),Object(a.b)("li",{parentName:"ol"},"This guide also gives a quick walkthrough of how to set up multiple conditions and condition sets, and how they can be used to create ",Object(a.b)("strong",{parentName:"li"},"AND"),", or ",Object(a.b)("strong",{parentName:"li"},"OR")," Conditions")),Object(a.b)("h3",{id:"here-are-the-types-of-triggers-you-can-choose"},"Here are the types of triggers you can choose:"),Object(a.b)("p",null,"You will have various Web Behaviour Triggers to choose from:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"URL"),' \u2013 When the visitor is on the URL defined, display the campaign. There are a few ways to target by URL, some of which are \u201cis/is not\u201d, and "includes / does not include."'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"URL Path"),' \u2013 This is the /path (in this example" ',Object(a.b)("strong",{parentName:"li"},"/pricing"),")that displays after the core URL (",Object(a.b)("a",{parentName:"li",href:"https://yellow.ai/pricing"},"https://yellow.ai/pricing"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"URL Host")," \u2013 This is the subdomain or core domain of the URL (",Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://yellow.ai"},"https://yellow.ai")),"/pricing)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"URL Query Param")," \u2013 This is any query parameter within a URL. You will have to define the Query Param using ",Object(a.b)("em",{parentName:"li"},"key=value")," pair")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/d3FDOkTJVTmR1626110277617.gif",alt:null})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Referrer")," \u2013 This is the URL that refers the website to the page they're on now (",Object(a.b)("a",{parentName:"li",href:"http://google.com"},"google.com"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Number of Site Visits")," \u2013 The number of times a user has visited your site (",Object(a.b)("em",{parentName:"li"},"sessions"),", not page views)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Device")," \u2013 The options here are mobile, desktop, or tablet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Seconds on Page")," \u2013 After somebody has been on the page for a certain number of seconds, the campaign will get triggered."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Scroll percentage")," \u2013 After a visitor scrolls X percent of a page, the campaign will get triggered."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"On Exit Intent")," \u2013 This triggers when a user's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close this tab/window."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Cookie")," \u2013 display your campaign to users who have or don't have a specific cookie attached to them! You will have to define the cookies using ",Object(a.b)("em",{parentName:"li"},"key=value")," pairs"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CTA")," - here you define an element of the page, which when clicked, will execute the campaign. Use the selector here and define the ",Object(a.b)("em",{parentName:"li"},"key=value")," pair.")),Object(a.b)("h2",{id:"creating-multiple-conditions-and-condition-sets"},"Creating multiple conditions and condition sets"),Object(a.b)("p",null,'When to use "',Object(a.b)("strong",{parentName:"p"},"AND"),'\u201d or "',Object(a.b)("strong",{parentName:"p"},"OR"),"\u201d:"),Object(a.b)("p",null,"By default, every \u201ccondition\u201d within a \u201ccondition set\u201d will have an ",Object(a.b)("strong",{parentName:"p"},"AND")," between them. Every \u201ccondition set\u201d will have an ",Object(a.b)("strong",{parentName:"p"},"OR")," between them. When all conditions in any of the condition sets are met, the campaign will get triggered."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/xRDoOqdVPvPI1626110808224.gif",alt:null})),Object(a.b)("h2",{id:"up-next"},"Up next"),Object(a.b)("p",null,"We will talk about ",Object(a.b)("a",{parentName:"p",href:"http://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm"},"Web Behavior triggers to identify in e-commerce.")))}p.isMDXComponent=!0}}]);