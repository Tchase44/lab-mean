angular
.module("tagMe", [
  "ui.router",
  "ngResource"
])
.config([
  "$stateProvider",
  "$locationProvider",
   Router
])
.factory("Img", [
  "$resource",
  ImgFactory
])
.controller("IndexController", [
  "$state",
  "Img",
    IndexControllerFunction
])
.controller("ShowController", [
  "$state",
  "$stateParams",
  "Img",
  ShowControllerFunction
])

function Router($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: 'assets/js/ng-views/welcome.html'
  })
  .state("index", {
    url: "/images",
    templateUrl: 'assets/js/ng-views/index.html',
    controller: "IndexController",
    controllerAs: "vm"
  })
  .state("show", {
    url: "/images/:id",
    templateUrl: 'assets/js/ng-views/show.html',
    controller: "ShowController",
    controllerAs: "vm"
  })
}
