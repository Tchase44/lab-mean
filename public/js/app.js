(function(){
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

function ImgFactory ($resource) {
  return $resource('/api/images/:id', {}, {
    update: {method: "PUT"}
  })
}

function IndexControllerFunction($state, Img ) {
  this.hide = false;
  this.images = Img.query()
  this.newImage = new Img()

  this.create = function() {
    this.newImage.tags = {hashtag: []}
    this.newImage.$save().then (function(image) {
      $state.reload()
    })
  }
}

function ShowControllerFunction($state, $stateParams, Img ) {
  this.hide = false
  this.hideDel = false
  this.hideDelFun = false
  this.image = Img.get({id: $stateParams.id})

  // this.tags = ''
  this.update = function() {
    this.image.$update({id: $stateParams.id}).then(function(image) {
      $state.go("index")
    })
  }
  this.addTags = function(){
    this.image.tags[0].hashtag.push(this.tags)
    this.image.$update({id: $stateParams.id}).then((image)=>{
      $state.reload()
    })
  }
  this.destroy = function(){
    this.image.$delete({id: $stateParams.id}).then(function() {
      $state.go("index")
    })
  }
  this.deleteTag = function(idx){
    this.image.tags[0].hashtag.splice(idx,1)
    this.image.$update({id: $stateParams.id}).then(()=>{
      $state.reload()
    })
  }
}


})()
