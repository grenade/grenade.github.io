(this["webpackJsonpgrenade-events-react"]=this["webpackJsonpgrenade-events-react"]||[]).push([[0],{111:function(e,t,n){e.exports=n(271)},116:function(e,t,n){},268:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(11),l=n.n(r),s=(n(116),n(33)),o=n(34),c=n(37),u=n(25),m=n(51),h=n(35),g=n(56),p=n(53),d=(n(131),n(102)),f=n(101),b=n.n(f),v=function(e){function t(e){var n,a,i;switch(Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).props.timelineEvent.action){case"GitHub_PullRequestEvent":case"GitHub_PullRequestReviewCommentEvent":case"GitHub_ForkEvent":case"GitHub_IssueCommentEvent":a="blue";break;case"GitHub_PushEvent":a="green";break;case"GitHub_DeleteEvent":a="red opaque";break;default:a="gray"}switch(n.props.timelineEvent.action){case"GitHub_PullRequestEvent":case"GitHub_PullRequestReviewCommentEvent":case"GitHub_IssueCommentEvent":case"GitHub_PushEvent":case"GitHub_DeleteEvent":case"GitHub_ForkEvent":i="https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png";break;case"Bugzilla_BugChange":case"Bugzilla_BugComment":i="https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-bugzilla.png";break;default:i="https://github.com/grenade/grenade-ng-root/raw/master/app/images/icon-push-github.png"}return n.state={id:n.props.timelineEvent.id,className:a,date:n.props.timelineEvent.date,url:n.props.timelineEvent.body&&n.props.timelineEvent.body.content.url?n.props.timelineEvent.body.content.url:null,iconUrl:i,iconHeight:"60px",iconWidth:"60px",title:{prefix:n.props.timelineEvent.title.prefix,link:{text:n.props.timelineEvent.title.text,url:n.props.timelineEvent.title.url},suffix:n.props.timelineEvent.title.suffix},subtitle:n.props.timelineEvent.subtitle?{prefix:n.props.timelineEvent.subtitle.prefix,link:{text:n.props.timelineEvent.subtitle.text,url:n.props.timelineEvent.subtitle.url},suffix:n.props.timelineEvent.subtitle.suffix}:{},body:"",commits:n.props.timelineEvent.body&&"UnorderedList"===n.props.timelineEvent.body.tag?n.props.timelineEvent.body.content:[]},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;switch(this.props.timelineEvent.body?this.props.timelineEvent.body.tag:null){case"UnorderedList":e=i.a.createElement("ul",null,this.props.timelineEvent.body.content.map((function(e,t){return i.a.createElement("li",{key:t},e.prefix,i.a.createElement("a",{href:e.url},e.text),e.suffix)})));break;case"Markdown":e=this.props.timelineEvent.body.content.map((function(e,t){return i.a.createElement(b.a,{source:e.text,key:t})}));break;default:e=this.props.timelineEvent.body?this.props.timelineEvent.body.content.map((function(e,t){return i.a.createElement("p",{key:t},e.text)})):""}return i.a.createElement(p.VerticalTimelineElement,{className:this.state.className,key:this.state.id,date:new Date(this.state.date).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).toLowerCase()+" - "+new Date(this.state.date).toLocaleTimeString("en-GB",{timeStyle:"full",timeZone:"UTC",timeZoneName:"short"}).toLowerCase(),icon:i.a.createElement(d.a,{src:this.state.iconUrl,style:{width:this.state.iconWidth,height:this.state.iconHeight},fluid:!0,roundedCircle:!0})},i.a.createElement("h4",{className:"vertical-timeline-element-title "+this.state.className},null===this.state.title.link?this.state.title.prefix:i.a.createElement("span",null,this.state.title.prefix," ",i.a.createElement("a",{href:this.state.title.link.url},this.state.title.link.text)," ",this.state.title.suffix)),i.a.createElement("h5",{className:"vertical-timeline-element-subtitle "+this.state.className},null===this.state.subtitle.link||void 0===this.state.subtitle.link?this.state.subtitle.prefix:i.a.createElement("span",null,this.state.subtitle.prefix," ",i.a.createElement("a",{href:this.state.subtitle.link.url},this.state.subtitle.link.text)," ",this.state.subtitle.suffix)),i.a.createElement("div",null,e))}}]),t}(i.a.Component),E=n(110),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"addDays",value:function(e){var t=new Date(this.getTime());return t.setDate(t.getDate()+(e||0)),this.setTime(t.getTime()),this}},{key:"floor",value:function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate()));return this.setTime(e.getTime()),this}},{key:"ceil",value:function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate()+1));return this.setTime(e.getTime()),this}}]),t}(Object(E.a)(Date)),y=n(108),k=n(107),x=n(55),D=n(39),C=n(109),O=(n(266),n(267),n(268),Math.floor((new w).floor().addDays(-1460).getTime())),j=Math.floor((new w).ceil().getTime()),T=[{name:"bugzilla",pattern:new RegExp("bugzilla","i")},{name:"github",pattern:new RegExp("github","i")},{name:"hg",pattern:new RegExp("hg","i")}],S=[{url:"https://twitter.com/grenade",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/twitter.png",alt:"random musings at twitter"},{url:"https",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/facebook.png",alt:"social life and photos on facebook"},{url:"https",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/in.png",alt:"career history and linkedin connections and profile"},{url:"https",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/so.png",alt:"giving and receiving technical advice at stackoverflow"},{url:"https",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/github.png",alt:"code contribution at github"},{url:"https://mozillians.org/en-US/u/grenade/",icon:"https://github.com/grenade/grenade-ng-root/raw/master/app/images/mozilla.png",alt:"working at mozilla"},{url:"https",icon:"https://raw.githubusercontent.com/steelhorseadventures/sha-ng/master/app/images/bike36.png",alt:"solo adventure biking in europe on a yamaha fzs 1000"},{url:"https",icon:"https://raw.githubusercontent.com/steelhorseadventures/sha-ng/master/app/images/sail36.png",alt:"sailing solo on a magnifik midget"}];function G(e){return new Date(e).toISOString().split(".")[0]+"Z"}var L=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onSliderChange=function(t){e.setState((function(e,n){return{filterDateStart:new w(t[0]).floor().getTime(),filterDateEnd:new w(t[1]).ceil().getTime(),filters:[{date:{$gte:G(t[0])}},{date:{$lt:G(t[1])}},e.filters[2]]}}),(function(){e.displayEvents()}))},e.onCheckboxChange=function(t){var n=t.target;e.setState((function(e,t){return{filterAction:{bugzilla:"bugzilla"===n.id?n.checked:e.filterAction.bugzilla,github:"github"===n.id?n.checked:e.filterAction.github,hg:"hg"===n.id?n.checked:e.filterAction.hg},filters:[e.filters[0],e.filters[1],{$or:T.filter((function(t){return t.name===n.id&&n.checked||t.name!==n.id&&e.filterAction[t.name]})).map((function(e){return{action:e.pattern}}))}]}}),(function(){e.displayEvents()}))};var n=Math.floor((new w).floor().addDays(-30).getTime()),a=Math.floor((new w).ceil().getTime());return e.state={events:[],filterDateStart:n,filterDateEnd:a,filterAction:{bugzilla:!0,github:!0,hg:!0},filters:[{date:{$gte:G(n)}},{date:{$lt:G(a)}},{$or:T.map((function(e){return{action:e.pattern}}))}]},e.displayEvents=e.displayEvents.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.client=g.c.initializeDefaultAppClient("grenade-tnats");var e=this.client.getServiceClient(g.b.factory,"mongodb-atlas-grenade-stitch");this.db=e.db("grenade"),this.displayEventsOnLoad()}},{key:"displayEvents",value:function(){var e=this;this.db.collection("moment").find({$and:this.state.filters},{limit:250,sort:{date:-1}}).asArray().then((function(t){e.setState({events:t})}))}},{key:"displayEventsOnLoad",value:function(){this.client.auth.loginWithCredential(new g.a).then(this.displayEvents).catch(console.error)}},{key:"getFriendlyWordList",value:function(e){if(!e||0===e.length)return"";var t=e.join(", "),n=t.lastIndexOf(", ");return t.slice(0,n)+t.slice(n).replace(", "," and ")}},{key:"render",value:function(){var e=this;return i.a.createElement(k.a,null,i.a.createElement(x.a,{className:"white-text"},i.a.createElement(D.a,null,i.a.createElement("h1",null,"hi, i'm rob")),i.a.createElement(D.a,null,i.a.createElement("div",{className:"rounded",style:{backgroundColor:"white",width:"100%"}},S.map((function(e,t){return i.a.createElement("a",{href:e.link,title:e.alt,key:t},i.a.createElement("img",{src:e.icon,alt:e.alt,className:"float-right",style:{marginLeft:"10px"}}))}))))),i.a.createElement(x.a,{className:"white-text"},i.a.createElement("p",null,"i rarely say anything that requires capital letters. if you're here to see my resume, please go to: ",i.a.createElement("a",{className:"hot-pink-text",href:"https://grenade.github.io/cv/"},"https://grenade.github.io/cv"),". \xa0much of what you never wanted to know about me, can be found by following the icon links above. \xa0a peek into the projects i'm working on, is below.")),i.a.createElement(x.a,null,i.a.createElement(D.a,null,T.map((function(e){return e.name})).map((function(t){return i.a.createElement(C.a.Check,{className:"white-text",type:"switch",id:t,label:t,checked:e.state.filterAction[t],onChange:e.onCheckboxChange})})),i.a.createElement(y.a,{allowCross:!1,value:[this.state.filterDateStart,this.state.filterDateEnd],min:O,max:j,onChange:this.onSliderChange}),i.a.createElement("p",{className:"white-text text-center"},"showing ",i.a.createElement("em",null,250===this.state.events.length?"latest 250":"all "+this.state.events.length)," activities from ",i.a.createElement("em",null,this.getFriendlyWordList(T.filter((function(t){return e.state.filterAction[t.name]})).map((function(e){return e.name}))))," that took place between \xa0",i.a.createElement("em",null,new Date(this.state.filterDateStart).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).toLowerCase()),"\xa0and ",i.a.createElement("em",null,new Date(this.state.filterDateEnd).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).toLowerCase()),"."),i.a.createElement(p.VerticalTimeline,null,this.state.events.map((function(e){return i.a.createElement(v,{timelineEvent:e,key:e._id})}))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.d27aa3ad.chunk.js.map