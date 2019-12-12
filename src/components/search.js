angular.module('video-player')
.component('search', {
  controller: function($scope) {
    this.search = ()=>{
      // Call the method passed from parent on input
      // console.log('searching...', $scope.input);
      
      let options = {
        max: 5,
        q: $scope.input
      }
      // console.log(options)
      this.service.search(options, this.result);
    }
  },
  bindings: {
    service: '<',
    result: '=',
  },
  templateUrl:'src/templates/search.html',
});
