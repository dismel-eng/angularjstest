/*eslint-disable*/
'use strict'
angular.module('UserModule')
directive('myUser', function () {
  return {
    template: '<h2>Name: {{user.first_name}} email: {{user.email}}</h2>'
  }
})
