angular.module('video-player')
.component('videoList', {
  controller : function($scope){
    //  this.onClick = ()=> {
    //    console.log('clicked')
    //  }
  },
  bindings : {
    videos: "=",
    onClick: "<"
  },
  templateUrl: "src/templates/videoList.html"
});
