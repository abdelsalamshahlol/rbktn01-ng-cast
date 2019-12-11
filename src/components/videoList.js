angular.module('video-player')
.component('videoList', {
  controller : function(){
    // console.log(this.videos)
    // this.videos = []
  },
  bindings : {
    videos: "<"
  },
  templateUrl: "src/templates/videoList.html"
});
