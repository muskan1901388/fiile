let app = angular.module("myapp", []);

app.controller("myctrl", ($scope) => {
 //this is controller
$scope.title = "My life My rule";

$scope.changevalue = () => {
    $scope.title="My thinking";
};
});