(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return A});var l=a(0),n=a.n(l),r=a(149),c=a(151),i=a(152),m=a(153),s=a(148),o=a(55),d=a(157);t.default=function(e){var t=e.data,a=Object(l.useContext)(o.a).state.style,A=Object(s.a)().layout,g=t.markdownRemark;return n.a.createElement(i.a,null,"stacked"===A?n.a.createElement("div",{className:"container-lg py-6 p-responsive text-center"},n.a.createElement(m.a,{metaData:!1}),n.a.createElement("div",{className:"container-md f4 text-left border rounded-2 bg-white p-3 p-sm-5 mt-6"},n.a.createElement("p",{className:"f5"},n.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},n.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),n.a.createElement(r.a,{to:"/"},"Home"))),n.a.createElement("h1",{className:"f00-light lh-condensed"},g.frontmatter.title),n.a.createElement("p",{className:"mb-5 "+("dark"===a?"text-white":"text-gray")},"Published"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.html}}))):n.a.createElement("div",{className:"d-md-flex "+("dark"!==a?"border-md-bottom":"")},n.a.createElement("div",{className:"flex-self-stretch "+("dark"===a?"bg-gray-dark":"border-md-right border-gray-light bg-white")+" col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6"},n.a.createElement(m.a,{metaData:!0})),n.a.createElement("div",{className:"col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0",style:{backgroundColor:"dark"===a?"#2f363d":"#fafbfc"}},n.a.createElement("div",{className:"mx-auto",style:{maxWidth:"900px"}},n.a.createElement("div",{className:"f4 "+("dark"===a?"text-white":"")+" mb-6"},n.a.createElement("div",{className:"f4 "+("dark"===a&&"text-white")},n.a.createElement("p",{className:"f5"},n.a.createElement("span",{className:"d-flex flex-items-center",style:{color:"#0366d6"}},n.a.createElement(r.a,{to:"/",className:"d-flex flex-items-center "+("dark"===a&&"text-white")},n.a.createElement(c.e,{icon:c.a,size:16,verticalAlign:"middle",ariaLabel:"Home",className:"mr-2"}),"Home"))),n.a.createElement("h1",{className:"f00-light lh-condensed"},g.frontmatter.title),n.a.createElement("p",{className:("dark"===a?"text-white":"text-gray")+" mb-5"},"Published ",Object(d.b)(""+g.fields.postDate)),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:g.html}})))))))};var A="1001958473"},146:function(e,t,a){var l;e.exports=(l=a(150))&&l.default||l},148:function(e,t,a){"use strict";var l=a(156),n="undefined"!=typeof window&&window;t.a=function(){var e=l.data.site;return n.localStorage&&!n.localStorage.getItem("theme")&&n.localStorage.setItem("theme",e.siteMetadata.style),e.siteMetadata}},149:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(4),c=a.n(r),i=a(33),m=a.n(i);a.d(t,"a",function(){return m.a});a(146),n.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},150:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),n=a.n(l),r=a(4),c=a.n(r),i=a(57),m=a(2),s=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(55);a(158);t.a=function(e){var t=e.children,a=Object(l.useContext)(r.a).state.theme;return Object(l.useEffect)(function(){document.body.style.backgroundColor=a.background},[a.background]),n.a.createElement("main",null,t)}},153:function(e,t,a){"use strict";a(147);var l=a(154),n=a(0),r=a.n(n),c=a(155),i=a.n(c),m=a(151),s=a(162),o=a.n(s),d=a(148),A=a(55);t.a=function(e){var t=e.metaData,a=Object(d.a)().layout,c=Object(n.useContext)(A.a),s=c.state,g=s.style,u=s.theme,h=c.dispatch,b=l.data.github.viewer,f="stacked"===a?"d-md-inline-block mr-3":"d-flex flex-items-center mb-3";return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:b.avatarUrl,alt:"user-avatar",className:"circle mb-3",style:{maxWidth:"150px"}}),r.a.createElement("h1",{className:"dark"===g?"text-white":"mb-2 lh-condensed"},b.name?b.name:b.login),r.a.createElement("p",{className:"mb-3 f4 "+("dark"===g?"text-white":"text-gray")},r.a.createElement(i.a,{text:b.bio||""})),t&&r.a.createElement("div",{className:"f4 mb-6"},b.name&&r.a.createElement("div",{className:f},r.a.createElement("span",{style:{color:u.iconColor}},r.a.createElement(m.e,{icon:m.d,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"GitHub"})),r.a.createElement("a",{href:"https://github.com/"+b.login,className:"dark"===g?"text-white":""},"@",b.login)),b.email&&r.a.createElement("div",{className:f},r.a.createElement("span",{style:{color:u.iconColor}},r.a.createElement(m.e,{icon:m.c,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"email"})),r.a.createElement("a",{href:"mailto:"+b.email,className:"dark"===g?"text-white":""},b.email)),b.location&&r.a.createElement("div",{className:f+" "+("dark"===g&&"text-white")},r.a.createElement("span",{style:{color:u.iconColor}},r.a.createElement(m.e,{icon:m.b,size:20,verticalAlign:"middle",className:"mr-2",ariaLabel:"Location"})),b.location),b.isHireable&&r.a.createElement("span",{title:"Hire me",className:"d-inline-block f5 rounded-2 text-white bg-green py-1 px-2"},"amam"),r.a.createElement("div",{style:{marginTop:16}},r.a.createElement(o.a,{defaultChecked:"dark"===g,onChange:function(e){var t=e.target.checked?"dark":"light";h({type:"CHANGE_THEME",value:t})},icons:{checked:r.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAABlJJREFUWAm1V3tsFEUcntnXvXu0tBWo1ZZHihBjCEWqkHiNaMLDRKOtQSKaiCFKQtS/SbxiFCHGCIkmkBSMwZhQNTFoQZD0DFiwtCDFAkdDqBBBKFj63rvdnfH7zfVo5aFBj0l2Z/dm5vd98/0es8dYjlpr62azufnDQNZcU1PciMfjWvb9rvZSMk4Ayfb36pLH13189GC8LAtIRLLPt+pzwrCuLq4ISEv/gHmitrAwfPbEkXc/ad4dL6iujrvyX0jcitgd/yZlZqftP6995Mr5TVLa22Tn8XVX2g/XLSRjUu7Q79jonS7I7hS7/0oOb5VyqF52n98oj7esXX07EjlxwXWisRmSnm3b29TTM8iYrjmFBWExubxwY/uhNas4r/WySl1fc5cetDMd7ydl+lMJJRw5WC8ud62Xx5rfepzwxgZmbhUYNS5Stvsj4yo2GXJEFBVHWDBkfdbR9HpYBaaUajDnBLKKpl1xRKYcgGtMCqEzTaSnThk/SQT0uJqTqFNBmXMCsZE48DzRZRMBRjv1GHNdk3HBImF9ZUvTyxM40pMKVc4JZBXQOLOFoDeKSxdp6HIQcO4rjYT9fn0pjbz9GLt7BAAODmjSVReXUMFzNW5x5vfxp2mIxZjIuQKJxAmFa+is2DQJJQ0JyBVExNOYcJnPxx/6/utnijmP555ALEagKAGGnGn64QORBjARcIA/yJk7JMJBLRrNtybTvH88KGjCf2jK86bhzmMcwDKFZEQvbIhxFYhChoMWMzU2iWznlIBEVJOsP+1bdX/ALx9l7jApADeDAEcMkE90JnUmmGl4USKQ0xhoW3JB5XY0YrxYWhLwMZZypUyjDGH35AbNwgUGiFBPpuGbHCpAOV1ZGXf2f/taftAv31DyeymN2d1IhAFAwTOmnzF/kKcdh3me7CYCOVNgycju84u8DeVlwfFq9/ZlTfldYrMUjOlrkjkD+rU+WzCROkcEchIDHR011syZW9JHD7y07N6JvhWMpz3pugaTkB6lWFVCKkhck0zzeMp2utq+uHrmfxOgoCO/Z8CXPlEQ1bdH8wgvhSIkEG0ICcQeExIFGdimjvKka7btJFZuaXOammIGKUCFQ53j9EN1dYKWqHf0t2w407W2tgs6h89ZnImjB55flh81tt9XirjjDuSl+oIPRQ0iWPgNZ5GqTqbBe3vSzEl5n5PhWKwocyR2HlqYN61qV18WjYjE8JLARZPQsUSim8foIRYTlGr02Ly7piASFRtKJ4VfieYhxdS2JcDVMN6xVOKZyrCGm8b108lrLRVzvptLH7IoEFLFANes6KnDi+uxfmvFnF17oALq5u1agu3/YfHkcSFzeSggV5eXRfIB7CHNcO5SUI+Ih5Ir7f4MAV9IqdFzdZgNpZw1Gcs1mNvgGbTbqQ9/cz7ZuuhgyYRQ49ljTyWHhr2DwpNHHFf+5gnWZ3Bharo+0TD5dNMw5vv9RlVpSRDHK4TlnoukhtYApuOHejSZQuo5g/A9BysdKRCyLl6062fN37OXMDlvUJtUrtmxo0avrW3wTrYs3jJ9RvRVChrmSmanPMpX2OXMsmDGh6AiEIwBAlvkOqIdBy+8JyAz8pz7QxiDth4KDy5uAlwzrWTnwC8Vc4KVAMZ3YUZ+IqoIjP3h5KFFX1ZMy3uW+7RhEDHgTi0zC9rS7uhPCDiNrGFyqBeERtKN/B0YlyFCkw0NJ5C0Ojv7zvT1a1WV1TuvZDdL4NTgB7CASYpsen6gqvG5jmTf5qHedADgkBl3D0nkSgNhZACDyi0FUKZRr3IdRjgN4WPPoFMIIegIK3mqd38fS80mcJKelM4szNyzZtQbkchGePuBRS8Eg9pHU8ojRQpSqs+ajAIwTjjUMQ/nvTNM0kicwYxZIYMh/891DYi+fvedB+c1xsm4lDU6ya+Axtz+RiAzEVYbajQOpq17F0R9QevNcEhfcU+xvyQQUalGJBSesqOkgPQ4YNyUZL9fSvUPDjoNAwN8/dwFjaczNkc3ptaMud1EIDtGcmXTcefO2cGSvKIFfp/2JIJxlq7xEl3nVPM4fDeIbPkD16/ptNc0bDu7qxbsu0R2JGywWMIjF2ft3tjfloAyQAGXiOn8hrqwbVvMXzaO+QeHXP6nF0wvX74Hf4NGG5GPjSlYoyM3P/0FbCT6zvM/yYoAAAAASUVORK5CYII=",width:16,height:16}),unchecked:r.a.createElement("img",{src:"data:image/png;base64,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",width:16,height:16})}}))))}},154:function(e){e.exports={data:{github:{viewer:{name:"Mark Kang",email:"kangm210@gmail.com",bio:"I like building useful stuff.",login:"kortfolio",url:"https://github.com/kortfolio",avatarUrl:"https://avatars2.githubusercontent.com/u/8669602?v=4",isHireable:!0,location:"Puyallup, WA"}}}}},156:function(e){e.exports={data:{site:{siteMetadata:{style:"light",layout:"sidebar"}}}}},157:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var l=a(0),n=a.n(l),r=a(149),c=a(55);function i(e){var t=new Date(e);return t.toLocaleDateString("en-GB",{month:"short"})+" "+t.toLocaleDateString("en-GB",{day:"numeric"})+", "+t.toLocaleDateString("en-GB",{year:"numeric"})}t.a=function(e){var t=e.post,a=Object(l.useContext)(c.a).state.style;return n.a.createElement("div",{className:"height-full text-left "+("dark"===a?"box-shadow":"border border - gray - light")+" bg-white rounded-1 p-3"},n.a.createElement("div",{className:"d-flex flex-justify-between flex-items-start mb-1"},n.a.createElement("h1",{className:"f4 lh-condensed mb-1"},n.a.createElement(r.a,{to:t.fields.slug},t.frontmatter.title))),n.a.createElement("div",{className:"text-gray mb-2 ws-normal"},i(""+t.fields.postDate)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-8dd2cc4dfd8c06181c7b.js.map