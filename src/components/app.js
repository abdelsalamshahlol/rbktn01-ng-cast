angular.module('video-player')
.component('app', {
  controller : function(){
    this.videoData = window.exampleVideoData;
    console.log(this.videoData)
  },
  templateUrl: '../src/templates/app.html'
  // template: '<h1>Test</h1>',
});
