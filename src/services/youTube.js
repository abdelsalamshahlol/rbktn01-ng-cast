angular.module('video-player')
.service('youTube', function($http) {
  this.getData = function(params) {
  //   let options = {
  //     params:{
  //       key: options.key,
  //       q: options.query,
  //       maxResults: options.max,
  //       part: 'snippet',
  //       videoEmbeddable: true,
  //       type: 'video'
  //     },
  // }
  return $http.get('https://www.googleapis.com/youtube/v3/search', options)
        .then(function successCallback(response) {

        });
  }
});
