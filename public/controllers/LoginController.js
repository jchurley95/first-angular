app.controller('LoginController', ['$scope', function($scope) {
    $scope.title = "Log in to your account"
    $scope.users = [
        {
            username: 'joeyhurley',
            password: 'shouldgotosleep'
        },
        {
            username: 'josephhurley',
            password: 'shouldgotosleep'
        },
        {
            username: 'joehurley',
            password: 'shouldgotosleep'
        },
        {
            username: 'josephcasperhurley',
            password: 'shouldgotosleep'
        },
        {
            username: 'jchurley95',
            password: 'shouldgotosleep'
        }
    ],
    $scope.isLoggedIn = false
}]);