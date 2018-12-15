//控制层
app.controller('brandController', function ($scope, $controller, brandService) {
    //继承
    $controller('baseController', {$scope: $scope});

    //查询所有
    $scope.findAll = function () {
        brandService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        )
    }

    //分页
    $scope.findPage = function (page, rows) {
        brandService.findPage(page, rows).success(
            function (response) {
                $scope.list = response.rows;//显示当前页数据
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        )
    }

    //查询实体
    $scope.findOne = function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        )
    }

    //保存
    $scope.save = function () {
        var serviceObject;//服务层对象
        //判断是否有id
        if ($scope.entity.id != null) {
            serviceObject = brandService.update($scope.entity)//修改
        } else {
            serviceObject = brandService.add($scope.entity)//增加
        }
        serviceObject.success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//刷新
                } else {
                    alert(response.message);
                }
            }
        )
    }

    //批量删除
    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function(response){
                if(response.success){
                    $scope.reloadList();//刷新
                    $scope.selectIds=[];//清空勾选的ID集合
                }else{
                    alert(response.message);
                }
            }
        )
    }

    //搜索
    $scope.searchEntity={};
    $scope.search=function (page, roes) {
        brandService.search(page,roes,$scope.searchEntity).success(
            function(response){
                $scope.list=response.rows;//显示当前页数据
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        )
    }

})