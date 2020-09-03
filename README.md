![GitHub](https://img.shields.io/github/license/rjcrter11/E-commerce-app?style=plastic)
![GitHub deployments](https://img.shields.io/github/deployments/rjcrter11/E-commerce-app/production?label=vercel&logo=vercel&style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/rjcrter11/E-commerce-app?style=plastic)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/rjcrter11/E-commerce-app?style=plastic)

# Thread Connects 
Thread Connects is an E-commerce app for practicing principles of React and Redux. You can find the deployed project at [Thread Connects](https://thread-connects.vercel.app/)


## Project Overview
Thread Connects is a single page web application built with React and styled using SASS. Data for item collections is stored on Firebase's Cloud Firestore, and is managed on the front end by Redux. 
Authentication of users is accomplished through Firebase Authentication and payment processing is handled by Stripe. 

### Key Features 

- Sign up as a new user, or sign in as an existing user
- Login with email and password, or with Google account 
- View a previews of the clothing collections from the homepage
- See more clothing options on click
- Add items to your cart
- Add or remove items from the cart dropdown, or from the checkout page
- Change item quantities on the fly 
- Pay for your purchase through Stripe

## Build and Installation

### Scripts 

| npm run | Description                                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| start   | Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.                      |
| test    | Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.                                                                                                                             |
| build   | Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed. |

This application uses [Create-React-App](https://github.com/facebook/create-react-app) and runs all build utils through react-scripts.

## Firebase 

#### Authentication

This project uses Firebase to authenticate user accounts. Firebase provides backend services and ready-made UI libraries to authenticate users, and supports authentication using passwords, phone numbers and popular federated identity providers like Google(used in this project), Facebook and Twitter.   
You can find an in depth rundown on how to set up a Firebase Authentication service [here](https://firebase.google.com/docs/web/setup?authuser=0)

#### Data Storage

Data storage for this project is handled through Firebase, which is a flexible and scalable NoSQL cloud database that offers expressive querying and realtime updates.   
Docs for setting up a Cloud Firestore database can be found [here](https://firebase.google.com/docs/firestore/quickstart?authuser=0)

## Stripe
Payment processing is enabled in this project through Stripe, which offres payment processing software and APIs for e-commerce websites and mobile applications.  
Integrating Stipe requires three steps after signup:  
  - Obtain API keys. 
  - Install a client library. 
  - Make a test API request.   
  
Docs for setting up Stripe payment processing can be found [here](https://stripe.com/docs/development/quickstart)


## Styling 

This project uses Sass for styling. Each stylesheet is located in the matching the component and imported in said component. 

## State Management

[Redux](https://www.redux.org) is a predictable state container for JavaScript apps. Applications behave consistently, run in different environments(client, server, and native) and are easy to test. It runs with React or any other view library, and is tiny(2kB).   
A tutorial for Redux can be found [here](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

## Todos for Future Iterations 
- Make the project mobile friendly. 
- Add large amount of seeded data 
- Add User profiles
- Add the ability to see past purchases
- Make another repo to build my own server
- The server will be GraphQL, with Prisma as a database toolkit, and Apollo Server
- Because of this change, this project will be modified to accomodate Apollo client, possibly negating the need for Redux 
  in favor of Apollo Client to handle state management 

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.


### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

I would love to hear from you about new features which would improve this app and further the aims of this project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developer first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
