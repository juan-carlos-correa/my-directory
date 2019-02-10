# Firebase functions
In this section you can define firebase functions.  Firebase functions are code for backend and served by Google. You can read more [here](https://firebase.google.com/docs/functions/)

In this project, when an admin invite a new user, we need to register that user in firebase auth.  Here is where we register new users in Auth firebase.


# Setup

This part is a resume of this [doc](https://firebase.google.com/docs/functions/get-started).

You need to install firebase-cli with the [corresponding permissions:](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

```
npm install -g firebase-tools
```
Then, execute the following:

```
firebase login
```
You need to use your google credentials here.

Since in this repo we have our functions already defined, we can skip the others commands of initialization. In fact, you must run:

```
npm install
```
for install firebase-functions and others dependencies.

## How to test locally

You can test your functions locally before deploy:

```
npm run shell
```

If you catch an error here, maybe you need to check your npm permissions.

If all is success, you can test the function **createUser** expoted in index.js.

In the console, just type:

```
> createUser({ email: 'john.doe@mail.com ',  password: '123456', isAdmin: false })
```

And you'll the output 'user created'. This output is a console.log in the index file.

## Deploy functions

All you have to do is run:

```
npm run deploy
```