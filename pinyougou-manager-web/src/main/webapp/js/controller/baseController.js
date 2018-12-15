//品牌控制层
app.controller('baseController',function ($scope) {
    //刷新列表
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            $scope.reloadList();
        }
    };

    //用户勾选复选框
    $scope.selectIds=[];//初始化
    $scope.updateSelection=function($event,id){
        if($event.target.checked){
            $scope.selectIds.push(id);//push向集合添加元素
        }else{
            var index= $scope.selectIds.indexOf(id);//查找值的 位置
            $scope.selectIds.splice(index,1);//参数1：移除的位置 参数2：移除的个数
        }
    }

    //json转字符串
    $scope.jsonToString=function(jsonString,key){
        var json= JSON.parse(jsonString);
        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=",";
            }
            value +=json[i][key];
        }
        return value;
    }
})
