(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=(a(175),a(152)),o=a(55),i=a(153),c=a(176),s=(a(147),a(155)),m=a.n(s);var d=function(e){var t=e.repository,a=Object(l.useContext)(o.a).state.style;return r.a.createElement("div",{className:"github-component height-full text-left "+("dark"===a?"box-shadow":"border border-gray-light")+" bg-white rounded-1 p-3"},r.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},r.a.createElement("h1",{className:"f4 lh-condensed mb-1"},r.a.createElement("a",{href:t.url},r.a.createElement("span",{className:"text-normal"},t.owner.login," /"),t.name))),r.a.createElement("div",{className:"text-gray mb-2 ws-normal"},r.a.createElement(m.a,{text:t.description||""})),r.a.createElement("div",{className:"d-flex f6"},r.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},r.a.createElement("svg",{className:"octicon octicon-star mr-1",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),t.stargazers.totalCount),r.a.createElement("a",{href:t.url,className:"d-inline-block link-gray mr-4"},r.a.createElement("svg",{className:"octicon octicon-git-branch mr-1",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),t.forkCount)))};var u=function(){var e=Object(l.useContext)(o.a).state.style,t=c.data.github.viewer.repositories;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Projects"),r.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"GitHub repositories that I've built."),r.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.nodes.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},r.a.createElement(d,{repository:e}))})))};a(177);var g=a(178),h=a(157);var b=function(){var e=Object(l.useContext)(o.a).state.style,t=g.data.allMarkdownRemark.edges;return t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"dark"===e?"text-white":""},"My Thoughts"),r.a.createElement("p",{className:"f4 mb-4 "+("dark"===e?"text-white":"text-gray")},"Articles I've written."),r.a.createElement("div",{className:"d-sm-flex flex-wrap gutter-condensed mb-4"},t.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3"},r.a.createElement(h.a,{post:e.node}))}))):null},p=a(179),f=a(180),A=a.n(f);var v=function(){var e=p.data.github.viewer.name;return r.a.createElement(A.a,{htmlAttributes:{lang:"en"},title:e})},y=a(148);t.default=function(){var e=Object(l.useContext)(o.a).state.style,t=Object(y.a)().layout;return r.a.createElement(n.a,null,r.a.createElement(v,null),"stacked"===t?r.a.createElement("div",{className:"container-lg py-6 p-responsive text-center"},r.a.createElement(i.a,{metaData:!0}),r.a.createElement("div",{className:"my-6"},r.a.createElement(b,null)),r.a.createElement("div",{className:"my-6"},r.a.createElement(u,null))):r.a.createElement("div",{className:"d-md-flex "+("dark"!==e&&"border-md-bottom")},r.a.createElement("div",{className:"flex-self-stretch "+("dark"===e?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6"},r.a.createElement(i.a,{metaData:!0})),r.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===e?"#2f363d":"#fafbfc"}},r.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},r.a.createElement(b,null),r.a.createElement(u,null)))))}},146:function(e,t,a){var l;e.exports=(l=a(150))&&l.default||l},148:function(e,t,a){"use strict";var l=a(156),r="undefined"!=typeof window&&window;t.a=function(){var e=l.data.site;return r.localStorage&&!r.localStorage.getItem("theme")&&r.localStorage.setItem("theme",e.siteMetadata.style),e.siteMetadata}},149:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(4),o=a.n(n),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(146),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},150:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),r=a.n(l),n=a(4),o=a.n(n),i=a(57),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(55);a(158);t.a=function(e){var t=e.children,a=Object(l.useContext)(n.a).state.theme;return Object(l.useEffect)(function(){document.body.style.backgroundColor=a.background},[a.background]),r.a.createElement("main",null,t)}},153:function(e,t,a){"use strict";a(147);var l=a(154),r=a(0),n=a.n(r),o=a(155),i=a.n(o),c=a(151),s=a(162),m=a.n(s),d=a(148),u=a(55);t.a=function(e){var t=e.metaData,a=Object(d.a)().layout,o=Object(r.useContext)(u.a),s=o.state,g=s.style,h=s.theme,b=o.dispatch,p=l.data.github.viewer,f="stacked"===a?"d-md-inline-block mr-3":"d-flex flex-items-center mb-3";return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:p.avatarUrl,alt:"user-avatar",className:"circle mb-3",style:{maxWidth:"150px"}}),n.a.createElement("h1",{className:"dark"===g?"text-white":"mb-2 lh-condensed"},p.name?p.name:p.login),n.a.createElement("p",{className:"mb-3 f4 "+("dark"===g?"text-white":"text-gray")},n.a.createElement(i.a,{text:p.bio||""})),t&&n.a.createElement("div",{className:"f4 mb-6"},p.name&&n.a.createElement("div",{className:f},n.a.createElement("span",{style:{color:h.iconColor}},n.a.createElement(c.e,{icon:c.d,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"GitHub"})),n.a.createElement("a",{href:"https://github.com/"+p.login,className:"dark"===g?"text-white":""},"@",p.login)),p.email&&n.a.createElement("div",{className:f},n.a.createElement("span",{style:{color:h.iconColor}},n.a.createElement(c.e,{icon:c.c,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"email"})),n.a.createElement("a",{href:"mailto:"+p.email,className:"dark"===g?"text-white":""},p.email)),p.location&&n.a.createElement("div",{className:f+" "+("dark"===g&&"text-white")},n.a.createElement("span",{style:{color:h.iconColor}},n.a.createElement(c.e,{icon:c.b,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"Location"})),p.location),p.isHireable&&n.a.createElement("span",{title:"Hire me",className:"d-inline-block f5 rounded-2 text-white bg-green py-1 px-2"},"amam"),n.a.createElement("div",{style:{marginTop:16}},n.a.createElement(m.a,{defaultChecked:"dark"===g,onChange:function(e){var t=e.target.checked?"dark":"light";b({type:"CHANGE_THEME",value:t})},icons:{checked:n.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16}),unchecked:n.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16})}}))))}},154:function(e){e.exports={data:{github:{viewer:{name:"Mark Kang",email:"kangm210@gmail.com",bio:"I like building useful stuff.",login:"kortfolio",url:"https://github.com/kortfolio",avatarUrl:"https://avatars2.githubusercontent.com/u/8669602?v=4",isHireable:!0,location:"Puyallup, WA"}}}}},156:function(e){e.exports={data:{site:{siteMetadata:{style:"light",layout:"sidebar"}}}}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var l=a(0),r=a.n(l),n=a(149),o=a(55);function i(e){var t=new Date(e);return t.toLocaleDateString("en-GB",{month:"short"})+" "+t.toLocaleDateString("en-GB",{day:"numeric"})+", "+t.toLocaleDateString("en-GB",{year:"numeric"})}t.a=function(e){var t=e.post,a=Object(l.useContext)(o.a).state.style;return r.a.createElement("div",{className:"height-full text-left "+("dark"===a?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},r.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},r.a.createElement("h1",{className:"f4 lh-condensed mb-1"},r.a.createElement(n.a,{to:t.fields.slug},t.frontmatter.title))),r.a.createElement("div",{className:"text-gray mb-2 ws-normal"},i(""+t.fields.postDate)))}},176:function(e){e.exports={data:{github:{viewer:{repositories:{nodes:[{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"testingGatsby",url:"https://github.com/kortfolio/testingGatsby",description:null,stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"kortfolio.github.io",url:"https://github.com/kortfolio/kortfolio.github.io",description:"Testing GatsbyJS",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"blog",url:"https://github.com/kortfolio/blog",description:null,stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"mediumish",url:"https://github.com/kortfolio/mediumish",description:"Jekyll Template - Mediumish",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"pinetree",url:"https://github.com/kortfolio/pinetree",description:"Freelancing web development project - [2017 Spring] ",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"graphqldesigner.com",url:"https://github.com/kortfolio/graphqldesigner.com",description:"A developer web-app tool to rapidly prototype a full stack implementation of GraphQL with React.",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"javascript",url:"https://github.com/kortfolio/javascript",description:"JavaScript Style Guide",stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"react-gh-pages",url:"https://github.com/kortfolio/react-gh-pages",description:null,stargazers:{totalCount:0},forkCount:0},{owner:{__typename:"GitHub_User",login:"kortfolio"},name:"markLaravelPortfolio",url:"https://github.com/kortfolio/markLaravelPortfolio",description:"Responsive personal portfolio developed using Laravel [2016 Summer]",stargazers:{totalCount:0},forkCount:0}]}}}}}},177:function(e){e.exports={data:{allDataYaml:{edges:[{node:{topics:[{name:"React",web_url:"https://github.com/topics/css",image_url:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"},{name:"GraphQL",web_url:null,image_url:null},{name:"Sass",web_url:"https://github.com/topics/sass",image_url:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/sass/sass.png"}]}}]}}}},178:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Why I started Blog",published:!0},fields:{slug:"/2019/05/18/why-I-started-blog/",postDate:"2019-05-18"},html:"<p>I was looking for a web blog platforms, and one thing led to another, I found GatsbyJS. After reading some reviews from Medium and official documentation, I wanted to give it a try. It looks pretty cool that Gatsby uses GraphQL to pull the data directly into my blog.</p>\n<p>I want to use this blog platform to write and organize my notes (At least one meaningful blog post per week). I believe keeping a polished note/blog would be pretty helpful to keep track of my progress.</p>"}},{node:{frontmatter:{title:"Updated Gatsby Theme",published:!0},fields:{slug:"/2019/05/25/Updated-gatsby-theme/",postDate:"2019-05-25"},html:""}}]}}}},179:function(e){e.exports={data:{github:{viewer:{name:"Mark Kang"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-6c9954a79b6a5066ad94.js.map