angular.module('video-player')
.component('app', {
  controller : function(){
    this.videoData = window.exampleVideoData;
    this.onClick = ()=>{
      console.log("jhdf")
    }
    console.log(this.videoData)
  },
  templateUrl: '../src/templates/app.html'
});
