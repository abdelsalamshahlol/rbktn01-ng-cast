angular.module('video-player')
.component('app', {
  controller : function($scope, youTube) {
    // State of the component
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video)=>{
      this.currentVideo = video;
      console.log("Video selected " + JSON.stringify({video}));
    }

    // This is the callback fuction
    this.searchResults = (data)=> {
      this.videos = data;
      console.log('search result '+ data);
    }
    
    // this.result = ()=> {
    // }
    console.log(this.videos)
},
  templateUrl: 'src/templates/app.html'
});
