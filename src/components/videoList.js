angular.module('video-player')
.component('videoList', {
  controller : angular.noop,
  bindings : {
    videos: "=",
    onClick: "<"
  },
  templateUrl: "src/templates/videoList.html"
});
