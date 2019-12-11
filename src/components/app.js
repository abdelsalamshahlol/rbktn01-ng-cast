angular.module('video-player')
.component('app', {
  controller : function(){
    this.videoData = window.exampleVideoData;
    this.currentVideo = this.videoData[0];
    this.onClick = (video)=>{
      this.currentVideo = video;
      // console.log("video", video)
    }
    console.log(this.videoData)
  },
  templateUrl: '../src/templates/app.html'
});
