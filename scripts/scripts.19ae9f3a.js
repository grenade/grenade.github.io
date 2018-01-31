"use strict";angular.module("grenadeNgRootApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).otherwise({redirectTo:"/"})}]),angular.module("grenadeNgRootApp").controller("MainCtrl",["$scope","$window","$location","GistApi","GitHubEventsApi","BugzillaApi","SoUserApi","SoQuestionApi","MozHgApi","MozHgOrgApi","RbMozHgApi",function(e,t,n,i,s,r,a,o,l,g,u){e.showThing=function(e){return["yoga","steel","bansko","borderless","crypto","snapr","grenade-ng","grenade.github.io"].every(function(t){return e.indexOf(t)<0})};var c="https://raw.githubusercontent.com/grenade/grenade-ng-root/master/app/images/";"localhost"===n.host()&&(c="images/"),e.go=function(e){t.location.href=e};var p=function(e,t){for(var n in t)if(t.hasOwnProperty(n)&&t[n].language===e)return!0;return!1};e.things=[],r.query({assigned_to:"rthijssen"},function(t){for(var n in t.bugs)e.things.filter(function(e){return e.summary===t.bugs[n].summary}).length<1&&e.things.push({date:t.bugs[n].last_change_time,summary:t.bugs[n].summary,url:"https://bugzilla.mozilla.org/show_bug.cgi?id="+t.bugs[n].id,icon:c+"icon-bugzilla.png"});e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0}),e.bzdata=t}),r.query({reporter:"rthijssen"},function(t){for(var n in t.bugs)e.things.filter(function(e){return e.summary===t.bugs[n].summary}).length<1&&e.things.push({date:t.bugs[n].last_change_time,summary:t.bugs[n].summary,url:"https://bugzilla.mozilla.org/show_bug.cgi?id="+t.bugs[n].id,icon:c+"icon-bugzilla.png"});e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0}),e.bzdata=t}),i.query({username:"grenade"},function(t){for(var n in t)t[n].description&&e.things.push({date:t[n].created_at,summary:t[n].description,comments:t[n].comments,files:t[n].files,url:t[n].html_url,icon:(i=t[n].files,p("PowerShell",i)?c+"icon-powershell.png":p("Python",i)?c+"icon-python.png":p("Shell",i)?c+"icon-bash.png":p("Markdown",i)?c+"icon-markdown.png":c+"icon-gist.png")});var i;e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0})}),s.query({username:"grenade"},function(t){for(var n in t)switch(t[n].type){case"PullRequestEvent":e.things.push({date:t[n].created_at,summary:"Pull Request "+t[n].payload.number+" to: "+t[n].repo.name,description:t[n].payload.pull_request.body,url:t[n].payload.pull_request.html_url,icon:c+"icon-pull-request.png"});break;case"CreateEvent":e.things.push({date:t[n].created_at,summary:"Branched: "+t[n].repo.name+"/"+t[n].payload.ref,url:"https://github.com/"+t[n].repo.name+"/tree/"+t[n].payload.ref,icon:c+"icon-branch.png"});break;case"DeleteEvent":e.things.push({date:t[n].created_at,summary:"Deleted: "+t[n].repo.name+"/"+t[n].payload.ref,url:"https://github.com/"+t[n].repo.name+"/tree/"+t[n].payload.ref,icon:c+"icon-delete.png"});break;case"PushEvent":e.things.push({date:t[n].created_at,summary:"Pushed to: "+t[n].repo.name+"/"+t[n].payload.ref,commits:t[n].payload.commits,url:"https://github.com/"+t[n].repo.name+"/commit/"+t[n].payload.commits[0].sha.substring(0,7),icon:c+"icon-push-github.png"});break;case"ForkEvent":e.things.push({date:t[n].created_at,summary:"Forked: "+t[n].repo.name+", to: "+t[n].payload.forkee.full_name,url:"https://github.com/"+t[n].payload.forkee.full_name,icon:c+"icon-fork.png"})}e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0}),e.ghdata=t}),a.query({userid:"68115",interaction:"questions"},function(t){for(var n in t.items){var i=new Date(0);t.items[n].last_edit_date?i.setUTCSeconds(t.items[n].last_edit_date):i.setUTCSeconds(t.items[n].creation_date),e.things.push({date:i.toISOString(),summary:t.items[n].title,url:t.items[n].link,icon:c+"icon-so.png",tags:t.items[n].tags})}e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0})}),[{org:"build",repo:"buildbot"},{org:"build",repo:"buildbot-configs"},{org:"build",repo:"puppet"},{org:"build",repo:"slave_health"},{org:"build",repo:"tools"},{org:"integration",repo:"mozilla-inbound"}].map(function(t){g.get({org:t.org,repo:t.repo,email:"rthijssen@mozilla.com"},function(n){for(var i in n)if(n.hasOwnProperty(i)&&i.length<=6){var s=new Date(0);s.setUTCSeconds(n[i].date),e.things.push({date:s.toISOString(),summary:"Pushed to: hg.m.o/"+t.org+"/"+t.repo+" ("+n[i].changesets.map(function(e){return e.branch}).join(", ")+")",changesets:n[i].changesets,url:"https://hg.mozilla.org/"+t.org+"/"+t.repo+"/pushloghtml?changeset="+n[i].changesets[0].node.substring(0,12),icon:c+"icon-push-mozilla.png"})}e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0})})}),["try","mozilla-central"].map(function(t){l.get({repo:t,email:"rthijssen@mozilla.com"},function(n){for(var i in n)if(n.hasOwnProperty(i)&&i.length<=6){var s=new Date(0);s.setUTCSeconds(n[i].date),e.things.push({date:s.toISOString(),summary:"Pushed to: hg.m.o/"+t+" ("+n[i].changesets.map(function(e){return e.branch}).join(", ")+")",changesets:n[i].changesets,url:"https://hg.mozilla.org/"+t+"/pushloghtml?changeset="+n[i].changesets[0].node.substring(0,12),icon:c+"icon-push-mozilla.png"})}e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0})})}),["gecko"].map(function(t){u.get({repo:t,email:"rthijssen@mozilla.com"},function(n){for(var i in n)if(n.hasOwnProperty(i)&&i.length<=6){var s=new Date(0);s.setUTCSeconds(n[i].date),e.things.push({date:s.toISOString(),summary:"Pushed to: rb-hg.m.o/"+t+" ("+n[i].changesets.map(function(e){return e.branch}).join(", ")+")",changesets:n[i].changesets,url:"https://reviewboard-hg.mozilla.org/"+t+"/pushloghtml?changeset="+n[i].changesets[0].node.substring(0,12),icon:c+"icon-push-review-mozilla.png"})}e.things.sort(function(e,t){return(e=new Date(e.date))>(t=new Date(t.date))?-1:e<t?1:0})})})}]),angular.module("grenadeNgRootApp").controller("BlogCtrl",["$scope","GistApi",function(e,t){e.gists=t.query({username:"grenade"}),e.gistFilter=function(e){return!!e.description}}]),angular.module("grenadeNgRootApp").factory("GistApi",["$resource",function(e){var t="https://api.github.com/users/:username/gists";return e(t,{username:"@_username",id:"@_id"},{headers:{Accept:"application/vnd.github.v3+json"},get:{url:t+"/:id"},query:{isArray:!0}})}]),angular.module("grenadeNgRootApp").factory("GitHubEventsApi",["$resource",function(e){var t="https://api.github.com/users/:username/events";return e(t,{username:"@_username",id:"@_id"},{headers:{Accept:"application/vnd.github.v3+json"},get:{url:t+"/:id"},query:{isArray:!0}})}]),angular.module("grenadeNgRootApp").service("BugzillaApi",["$resource",function(e){return e("https://bugzilla.mozilla.org/rest/bug/:id",{id:"@_id"},{query:{isArray:!1}})}]),angular.module("grenadeNgRootApp").factory("SoUserApi",["$resource",function(e){return e("https://api.stackexchange.com/2.2/users/:userid/:interaction?order=desc&sort=activity&site=stackoverflow",{userid:"@_userid",interaction:"@_interaction"},{query:{isArray:!1}})}]),angular.module("grenadeNgRootApp").factory("SoQuestionApi",["$resource",function(e){return e("https://api.stackexchange.com/2.2/questions/:questionid?order=desc&sort=activity&site=stackoverflow",{questionid:"@_questionid"},{query:{isArray:!1}})}]),angular.module("grenadeNgRootApp").factory("MozHgApi",["$resource",function(e){return e("https://hg.mozilla.org/:repo/json-pushes?full=1&user=:email",{repo:"@_repo",email:"@_email"})}]).factory("MozHgOrgApi",["$resource",function(e){return e("https://hg.mozilla.org/:org/:repo/json-pushes?full=1&user=:email",{repo:"@_org",repo:"@_repo",email:"@_email"})}]).factory("RbMozHgApi",["$resource",function(e){return e("https://reviewboard-hg.mozilla.org/:repo/json-pushes?full=1&user=:email",{repo:"@_repo",email:"@_email"})}]),angular.module("grenadeNgRootApp").run(["$templateCache",function(e){e.put("views/blog.html",'<ul> <li ng-repeat="gist in gists | filter:gistFilter"> <strong>{{gist.created_at | date : format : shortDate}}</strong><br> <a href="{{gist.html_url}}"> <em>{{gist.description}}</em> </a> <span class="badge" ng-show="gist.comments">{{gist.comments}}</span> <ul ng-show="false"> <li ng-repeat="file in gist.files"> <span>{{file.filename}}</span> </li> </ul> </li> </ul>'),e.put("views/main.html",'<div class="jumbotron" ng-show="show.jumbotron" ng-click="show.jumbotron=!show.jumbotron"> <p class="lead"> <img src="images/gitninja360.fda0a75d.png" alt="I\'m GitNinja"> </p> <h1>Yo!</h1> </div> <div ng-hide="show.jumbotron" ng-click="show.jumbotron=!show.jumbotron" class="clearfix text-center"> <img src="images/gitninja360.fda0a75d.png" alt="I\'m GitNinja" style="width: 36px; height: 36px"> </div> <div class="row text-center"> <p> I\'m Rob. </p> <p> I have a <a href="/cv">CV</a> here but I mostly do online stuff elsewhere. </p> <ul class="list-inline"> <li> <a href="https://plus.google.com/+RobThijssen/photos"> <img ng-src="images/plus.1c560a78.png"> </a> </li> <li> <a href="https://twitter.com/grenade"> <img ng-src="images/twitter.3c249aa9.png"> </a> </li> <li> <a href="https://www.facebook.com/rob.thijssen"> <img ng-src="images/facebook.8130af1e.png"> </a> </li> <li> <a href="https://www.linkedin.com/in/thijssen"> <img ng-src="images/in.07af6e45.png"> </a> </li> <li> <a href="http://stackoverflow.com/users/68115/grenade"> <img ng-src="images/so.6cbf6941.png"> </a> </li> <li> <a href="https://github.com/grenade"> <img ng-src="images/github.f32612bb.png"> </a> </li> <li> <a href="https://mozillians.org/u/grenade"> <img ng-src="images/mozilla.9fea5422.png"> </a> </li> <li> <a href="http://steelhorseadventures.com"> <img src="https://raw.githubusercontent.com/steelhorseadventures/sha-ng/master/app/images/bike36.png"> </a> </li> </ul> </div> <div class="row"> <hr> <div class="col-md-9"> <p style="margin-top: 20px" class="text-center">Some stuff I\'ve been working on:</p> <ul class="timeline"> <li ng-repeat="thing in things" ng-class-odd="\'timeline-inverted\'" ng-click="go(thing.url)" ng-show="showThing(thing.summary)"> <div class="timeline-badge"> <img ng-src="{{thing.icon}}"> </div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title"> {{thing.summary}} </h4> <p class="small text-muted"> <i class="glyphicon glyphicon-time"></i> <span>{{thing.date | date : format : shortDate}}</span> </p> </div> <div class="timeline-body"> <p ng-show="thing.description"> {{thing.description}} </p> <ul ng-show="thing.commits"> <li ng-repeat="commit in thing.commits"> <span>{{commit.message}}</span> </li> </ul> <ul ng-show="thing.changesets"> <li ng-repeat="changeset in thing.changesets"> <span>{{changeset.desc}}</span> <ul> <li ng-repeat="file in changeset.files"> <span>{{file}}</span> </li> </ul> </li> </ul> <ul ng-show="thing.files"> <li ng-repeat="file in thing.files"> <span>{{file.filename}}</span> </li> </ul> <ul ng-show="thing.tags" class="list-inline"> <li ng-repeat="tag in thing.tags"> <span class="badge">{{tag}}</span> </li> </ul> </div> </div> </li> </ul> </div> <div class="col-md-3"> <a class="twitter-timeline" href="https://twitter.com/grenade" data-widget-id="631044555765190656">Tweets by @grenade</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");<\/script> </div> </div>')}]);