'use strict'
/*User list component. This module is going to take data about the 
user form UserService and generate a functional list with users information*/

angular.
module('UserModule').
component('userList', {
  templateUrl: 'usermodule/user.template.html',  
  controller: ['UserService', UserListController] 
});
function UserListController(UserService) {
    var ctrl = this;
  
    ctrl.users = [];
    ctrl.getUserList = getUserList;    
    ctrl.selectAll = selectAll;
    ctrl.deleteUsers = deleteUsers;
    ctrl.unSelectAll = unSelectAll;
    ctrl.showselecteall = true;
    ctrl.getUserList();    
    function getUserList(){
        
        UserService.getUsers().then(function(data){
            
            if(data)
                ctrl.users = data.map(item => { 
                    item.selected = false;
                    return item    
                })
        });        
        
    }
    
    function selectAll(){

        angular.forEach(ctrl.users, function(item){
            item.selected = item.selected || true;            
        })
        ctrl.showselecteall = !ctrl.showselecteall;
    }
    
    function unSelectAll(){

        angular.forEach(ctrl.users, function(item){
            item.selected = false;            
        })
        ctrl.showselecteall = !ctrl.showselecteall;
    }

    function deleteUsers(){
        var userdata = ctrl.users;
        ctrl.users = userdata.filter( item => !item.selected );    
    }

   
}