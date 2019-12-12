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

    this.searchResults = (query)=> {
    // Call search service and return the results
    console.log($scope.input,query);

      let options = {
        key: window.YOUTUBE_API_KEY,
        max: 5,
        q: $scope.input
      }

      let data = youTube.getData(options);
      console.log(data)

    }
    
    // this.result = ()=> {
    // }
    console.log(this.videos)
},
  templateUrl: 'src/templates/app.html'
});
