angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(options) {
    let config = {
      params:{
        key: options.key,
        q: options.query,
        maxResults: options.max,
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video'
      },
  }
  return undefined;
  return $http.get('https://www.googleapis.com/youtube/v3/search', config)
        .then(function successCallback(response) {
          console.log('Data from API received');
          console.log(response)
        });
  }
});
