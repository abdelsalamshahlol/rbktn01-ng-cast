angular.module('video-player')
.component('app', {
  controller : function($scope) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video)=>{
      this.currentVideo = video;
      console.log("Video selected " + JSON.stringify({video}));
    }

    this.searchResults = ()=> {
    }
  
    this.result = ()=> {
    }
    console.log(this.videos)
},
  templateUrl: 'src/templates/app.html'
});
