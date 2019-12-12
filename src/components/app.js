angular.module('video-player')
.component('app', {
  controller : function($scope) {
    this.videoData = window.exampleVideoData;
    this.currentVideo = this.videoData[0];

    this.onClick = (video)=>{
      this.currentVideo = video;
      console.log("jhdf");
    }
    console.log(this.videoData)
  },
  templateUrl: '../src/templates/app.html'
});
