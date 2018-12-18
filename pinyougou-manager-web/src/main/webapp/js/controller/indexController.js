//登陆控制层
app.controller('indexController',function ($scope, loginService) {
    //读取当前登陆用户名
    $scope.showLoginName=function () {
        loginService.loginName().success(
            function (response) {
                $scope.loginName=response;
            }
        )
    }
})

