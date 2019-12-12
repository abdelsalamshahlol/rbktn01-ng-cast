angular.module('video-player')
.component('search', {
  controller: function($scope) {
    // this.getVideos = ()=>{
    //   // Call the method passed from parent on input
    //   console.log('searching...');
    //   console.log($scope.input);
    // }
  },
  bindings: {
    // search: '<',
    result: '=',
  },
  templateUrl:'src/templates/search.html',
});
