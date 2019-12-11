angular.module('video-player')
.component('app', {
  controller : function($scope){
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video)=> {
      this.currentVideo = video;
    }

    this.searchResults = ()=> {

    }

    this.result = ()=> {
      
    }

    console.log(this.videoData)
  },
  templateUrl: 'src/templates/app.html'
});
