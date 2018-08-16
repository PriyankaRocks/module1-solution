(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Priyanka";
  $scope.sayMessage = function() {
    return " loves to play badminton!";
  }
  $scope.stateofbeing = "happy";
  $scope.feedPriyanka = function() {
    $scope.stateofbeing = "disgust";
  };
}

})();
