"use strict";angular.module("grenadeApp",["ngAnimate","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",activeRoute:"home"}).when("/objective",{templateUrl:"views/objective.html",controller:"ObjectiveCtrl",activeRoute:"objective"}).when("/experience",{templateUrl:"views/experience.html",controller:"ExperienceCtrl",activeRoute:"experience"}).when("/education",{templateUrl:"views/education.html",controller:"EducationCtrl",activeRoute:"education"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",activeRoute:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("grenadeApp").controller("NavCtrl",["$scope","$location","$route",function(a,b,c){a.isActive=function(a){return a&&c&&c.current&&a===c.current.activeRoute}}]),angular.module("grenadeApp").controller("HomeCtrl",["$scope",function(a){}]),angular.module("grenadeApp").controller("ObjectiveCtrl",["$scope",function(a){}]),angular.module("grenadeApp").controller("ExperienceCtrl",["$scope","$http",function(a,b){for(var c=["data/cv/mozilla.json","data/cv/bis.json","data/cv/ihs.json","data/cv/beazley.json","data/cv/maersk.json","data/cv/rwe.json","data/cv/keane.json","data/cv/visa.json","data/cv/charteris.json","data/cv/bt-london.json","data/cv/hpa.json","data/cv/atos.json","data/cv/conchango.json","data/cv/mcorp.json","data/cv/bt-exeter.json","data/cv/centrax.json","data/cv/devon.json","data/cv/txtnation.json"],d=[],e=c.length-1;e>=0;e--)b.get(c[e]).success(function(b){d.push(b),d.length===c.length&&(d.sort(function(a,b){return b.period.start.localeCompare(a.period.start)}),a.experiences=d)})}]),angular.module("grenadeApp").controller("EducationCtrl",["$scope",function(a){}]),angular.module("grenadeApp").controller("ContactCtrl",["$scope",function(a){}]);