'use strict'
angular.module('UserModule')
.factory('UserService',['$http', '$q', UserService])

function UserService($http, $q){
    return {
        getUsers:function(){
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'userdata/userdata.js'
              }).then(function sussces(response) {
                
                deferred.resolve( response.data !== undefined ? response.data : [] );

              }, function error(response){
                  //Show error mesage
              })
            return deferred.promise;
        }
    }
}