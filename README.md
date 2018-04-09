# Angularjs — User Managment App

To build this App I used angular-seed project as boilerplate.
## To install this app
```
$git clone https://github.com/dismel-eng/angularjstest
$npm install
$npm start
```

## To run E2E test  

To run e2e test I first set up my enviroment to use [Protractor](http://www.protractortest.org/#/tutorial) and I run either of this commands:

`$npm run protractor` or
`$protractor e2e-tests\protractor.conf.js`

## Main functions

Create an Angularjs project to manage the user information using a hardcoded json:
- List all the users in the json file.
- Remove one or multiple users.
- Search users by name.
- Show only Females.

### Implementation notes:
- Testing (Optional).
- Use a fake json hardcoded with 10 elements.
Json example:

```
[{
  "id": 1,
  "first_name": "FirstName",
  "last_name": "LastName",
  "email": "username@mail.com",
  "gender": "Female"
}]
```

## Folder structure
```
app
  /userdata
    userdata.json
  /usermodule 
    userFilter.js
    userList.js
    userModule.js
    userService.js
  app.js
```

I created a main module 'UserMngApp' in the app.js file as entry point for this App. In the folder 'userdata' is a hard-coded json `userdata.json` that contain the mockup data for this project. In the folder usermodule I created `UserModule` as the module in charge for manage the data about the users in the app.

On the other hand I created a service `UserService` that is going to fetch and return the user data. This
service can have more function but for now only have the functionality to get the users from a json file
using `$http` angularjs built in service. Also I built a `UserList` component to show and manage user information. The last file in this folder is `UserFilter` that have a filter service that help to filter user by gender.