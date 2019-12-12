angular.module('video-player')
.component('search', {
  controller: function($scope, youTube) {
    this.test = 'IM normal'
    this.search = (query)=>{
      // Call the method passed from parent on input
      console.log('searching...');
      console.log($scope.input);
      console.log($scope.input, query);
      
      let options = {
        key: window.YOUTUBE_API_KEY,
        max: 5,
        q: $scope.input
      }

      youTube.search(options, this.result);
      // console.log(data)
    }
  },
  bindings: {
    service: '<',
    result: '=',
  },
  templateUrl:'src/templates/search.html',
});
