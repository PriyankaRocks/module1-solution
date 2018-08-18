(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
    $scope.name = "Priyanka!";
    $scope.checkItemCounts = function() {
      let inputString = ($scope.name).split(",");
      let count = inputString.filter(function(val) {
        return val.trim() != "";
      }).length;
      $scope.displayMessage = (count > 3) ? "Too much!": "Enjoy!";
    };
});

})();
