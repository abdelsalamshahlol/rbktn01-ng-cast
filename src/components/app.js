angular.module('video-player')
.component('app', {
  controller : function($scope, youTube) {
    // State of the component
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video)=>{
      this.currentVideo = video;
      // console.log("Video selected =>", video.snippet.title);
    }

    // This is the callback fuction
    this.searchResults = (data)=> {
      this.videos = data;
      this.currentVideo = data[0];

      // console.log('search result ', data);
    }

    let options = {
        key: window.YOUTUBE_API_KEY,
        max: 5,
        q: 'Cats',
    }

    youTube.search(options, this.searchResults);
    // console.log(this.videos)
},
  templateUrl: 'src/templates/app.html'
});
