'use strict'
angular.module('UserModule')
.filter('filterByGender', function(){
    return function(input,gender) {
        
        if(gender && gender !== "")
            return input.filter(item => item.gender === gender)
        return input;
    };
})