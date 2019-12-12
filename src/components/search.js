angular.module('video-player')
.component('search', {
  controller: function($scope, youTube) {
    this.search = ()=>{
      // Call the method passed from parent on input
      // console.log('searching...', $scope.input);
      
      let options = {
        key: window.YOUTUBE_API_KEY,
        max: 5,
        q: $scope.input
      }
      // console.log(options)
      youTube.search(options, this.result);
    }
  },
  bindings: {
    service: '<',
    result: '=',
  },
  templateUrl:'src/templates/search.html',
});
