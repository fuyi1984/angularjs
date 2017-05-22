var app = angular.module('myApp', []);

app.controller('personCtrl', function ($scope) {
    $scope.firstName = "John",
        $scope.lastName = "Doe",
        $scope.fullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        }
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Hege', country: 'Sweden' },
        { name: 'Kai', country: 'Denmark' }
    ];
});


app.controller('costCtrl', function ($scope) {
    $scope.quantity = 1;
    $scope.price = 9.99;
});

app.controller("myCtrl", function ($scope, $location, $timeout, $interval,hexafy) {
    $scope.msg = "Runoob";
    $scope.myUrl = $location.absUrl();
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
    $scope.hex = hexafy.myFunc(255);
    $scope.counts = [255, 251, 200];
});

app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

