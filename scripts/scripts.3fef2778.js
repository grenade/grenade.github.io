"use strict";angular.module("grenadeNgRootApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).otherwise({redirectTo:"/"})}]),angular.module("grenadeNgRootApp").controller("MainCtrl",["$scope","$window","$location","GistApi","GitHubEventsApi","BugzillaApi",function(a,b,c,d,e,f){var g="https://raw.githubusercontent.com/grenade/grenade-ng-root/master/app/images/";"localhost"===c.host()&&(g="images/"),a.go=function(a){b.location.href=a};var h=function(a,b){for(var c in b)if(b.hasOwnProperty(c)&&b[c].language===a)return!0;return!1},i=function(a){return h("PowerShell",a)?g+"icon-powershell.png":h("Python",a)?g+"icon-python.png":h("Shell",a)?g+"icon-bash.png":h("Markdown",a)?g+"icon-markdown.png":g+"icon-gist.png"};a.things=[],d.query({username:"grenade"},function(b){for(var c in b)b[c].description&&(a.things.push({date:b[c].created_at,summary:b[c].description,comments:b[c].comments,files:b[c].files,url:b[c].html_url,icon:i(b[c].files)}),a.things.sort(function(a,b){return a=new Date(a.date),b=new Date(b.date),a>b?-1:b>a?1:0}))}),e.query({username:"grenade"},function(b){for(var c in b){switch(b[c].type){case"PullRequestEvent":a.things.push({date:b[c].created_at,summary:"Pull Request "+b[c].payload.number+" to: "+b[c].repo.name,description:b[c].payload.pull_request.body,url:b[c].payload.pull_request.html_url,icon:g+"icon-pull-request.png"});break;case"CreateEvent":a.things.push({date:b[c].created_at,summary:"Branched: "+b[c].repo.name+"/"+b[c].payload.ref,url:"https://github.com/"+b[c].repo.name+"/tree/"+b[c].payload.ref,icon:g+"icon-branch.png"});break;case"DeleteEvent":a.things.push({date:b[c].created_at,summary:"Deleted: "+b[c].repo.name+"/"+b[c].payload.ref,url:"https://github.com/"+b[c].repo.name+"/tree/"+b[c].payload.ref,icon:g+"icon-delete.png"});break;case"PushEvent":a.things.push({date:b[c].created_at,summary:"Pushed to: "+b[c].repo.name+"/"+b[c].payload.ref,commits:b[c].payload.commits,url:"https://github.com/"+b[c].repo.name+"/commit/"+b[c].payload.commits[0].sha,icon:g+"icon-commit.png"});break;case"ForkEvent":a.things.push({date:b[c].created_at,summary:"Forked: "+b[c].repo.name+", to: "+b[c].payload.forkee.full_name,url:"https://github.com/"+b[c].payload.forkee.full_name,icon:g+"icon-fork.png"})}a.things.sort(function(a,b){return a=new Date(a.date),b=new Date(b.date),a>b?-1:b>a?1:0})}a.ghdata=b}),f.query({assigned_to:"rthijssen"},function(b){for(var c in b.bugs)a.things.push({date:b.bugs[c].last_change_time,summary:b.bugs[c].summary,url:"https://bugzilla.mozilla.org/show_bug.cgi?id="+b.bugs[c].id,icon:g+"icon-bugzilla.png"}),a.things.sort(function(a,b){return a=new Date(a.date),b=new Date(b.date),a>b?-1:b>a?1:0});a.bzdata=b})}]),angular.module("grenadeNgRootApp").controller("BlogCtrl",["$scope","GistApi",function(a,b){a.gists=b.query({username:"grenade"}),a.gistFilter=function(a){return a.description?!0:!1}}]),angular.module("grenadeNgRootApp").factory("GistApi",["$resource",function(a){var b="https://api.github.com/users/:username/gists";return a(b,{username:"@_username",id:"@_id"},{headers:{Accept:"application/vnd.github.v3+json"},get:{url:b+"/:id"},query:{isArray:!0}})}]),angular.module("grenadeNgRootApp").factory("GitHubEventsApi",["$resource",function(a){var b="https://api.github.com/users/:username/events";return a(b,{username:"@_username",id:"@_id"},{headers:{Accept:"application/vnd.github.v3+json"},get:{url:b+"/:id"},query:{isArray:!0}})}]),angular.module("grenadeNgRootApp").service("BugzillaApi",["$resource",function(a){return a("https://bugzilla.mozilla.org/rest/bug/:id",{id:"@_id"},{query:{isArray:!1}})}]),angular.module("grenadeNgRootApp").run(["$templateCache",function(a){a.put("views/blog.html",'<ul> <li ng-repeat="gist in gists | filter:gistFilter"> <strong>{{gist.created_at | date : format : shortDate}}</strong><br> <a href="{{gist.html_url}}"> <em>{{gist.description}}</em> </a> <span class="badge" ng-show="gist.comments">{{gist.comments}}</span> <ul ng-show="false"> <li ng-repeat="file in gist.files"> <span>{{file.filename}}</span> </li> </ul> </li> </ul>'),a.put("views/main.html",'<div class="jumbotron" ng-show="show.jumbotron" ng-click="show.jumbotron=!show.jumbotron"> <p class="lead"> <img src="images/gitninja360.fda0a75d.png" alt="I\'m GitNinja"> </p> <h1>Yo!</h1> </div> <div ng-hide="show.jumbotron" ng-click="show.jumbotron=!show.jumbotron" class="clearfix text-center"> <img src="images/gitninja360.fda0a75d.png" alt="I\'m GitNinja" style="width: 36px; height: 36px"> </div> <div class="row text-center"> <p> I\'m Rob. </p> <p> I have a <a href="/cv">CV</a> here but I mostly do online stuff elsewhere. </p> <ul class="list-inline"> <li> <a href="https://plus.google.com/+RobThijssen/photos"> <img ng-src="images/plus.1c560a78.png"> </a> </li> <li> <a href="https://twitter.com/grenade"> <img ng-src="images/twitter.3c249aa9.png"> </a> </li> <li> <a href="https://www.linkedin.com/in/thijssen"> <img ng-src="images/in.07af6e45.png"> </a> </li> <li> <a href="https://github.com/grenade"> <img ng-src="images/github.f32612bb.png"> </a> </li> <li> <a href="https://mozillians.org/u/grenade"> <img ng-src="images/mozilla.3851055d.png"> </a> </li> </ul> </div> <div class="row"> <hr> <div class="col-md-9"> <p style="margin-top: 20px" class="text-center">Some stuff I\'ve been working on:</p> <ul class="timeline"> <li ng-repeat="thing in things" ng-class-odd="\'timeline-inverted\'" ng-click="go(thing.url)"> <div class="timeline-badge"> <img src="{{thing.icon}}"> </div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title"> {{thing.summary}} </h4> <p class="small text-muted"> <i class="glyphicon glyphicon-time"></i> <span>{{thing.date | date : format : shortDate}}</span> </p> </div> <div class="timeline-body"> <p ng-show="thing.description"> {{thing.description}} </p> <ul ng-show="thing.commits"> <li ng-repeat="commit in thing.commits"> <span>{{commit.message}}</span> </li> </ul> <ul ng-show="thing.files"> <li ng-repeat="file in thing.files"> <span>{{file.filename}}</span> </li> </ul> </div> </div> </li> </ul> </div> <div class="col-md-3"> <a class="twitter-timeline" href="https://twitter.com/grenade" data-widget-id="631044555765190656">Tweets by @grenade</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> </div> </div>')}]);