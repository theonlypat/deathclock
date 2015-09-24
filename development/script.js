var deathClock = angular.module('deathClock', []);
                                 
deathClock.controller('MyController', ['$scope', function($scope){
//Change the starting date so see what would happen with different dates
  
  var startingDate = new Date("2012-06-28")
  var day = 86400000
  //rate of Death that someone dies every 3 days because of lack of heathcare feel free to mess around with the ratio
  var rateOfDeath = 1.825 * day
  
  $scope.clock = {
    clock : new Date()
  }
  

  var start = Date.parse(startingDate);
  
  function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
  };
  
  
  
  var updateClock = function () {
        $scope.clock.now = new Date();
    var time = Date.parse($scope.clock.now)
    var count = time - start
    $scope.amountOfDeath = Math.floor(count/rateOfDeath)
    var leftOver = count % rateOfDeath
    var deathClock = rateOfDeath - leftOver
    $scope.deathClock = convertMS(deathClock)
    $scope.count = convertMS(count);
    };


    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);

    updateClock(); 

}]);
