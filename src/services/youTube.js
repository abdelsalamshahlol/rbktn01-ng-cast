angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(options, callback) {
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
  // callback([1,2,3,4]);
  // return [{},{}];
  return $http.get('https://www.googleapis.com/youtube/v3/search', config)
        .then(function successCallback({data}) {
          console.log('Data from API received');
          console.log(data)
          callback(data.items)
        });
  }
});
