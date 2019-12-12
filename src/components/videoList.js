angular.module('video-player')
.component('videoList', {
  controller : function($scope){
    //  this.onVideoList = (video)=> {
    //    $ctrl.onClick({video:video});
    //    console.log('clicked', video)
    //  }
  },
  bindings : {
    videos: "=",
    onClick: "<"
  },
  templateUrl: "src/templates/videoList.html"
});
