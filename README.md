# Task Details 
<!-- For this assessment, you will build an app using the following concepts:

State
Event Handlers
Fetch
Conditional Rendering
Component Library
For the past couple of assessments, we have been giving you a scaffold project for you to fork and clone, however, you will build this project from scratch using create-react-app.

See the bottom of the page for the Final Product.

Getting Started
Part 1 - Create a Button with a Basic Event Handler

Create an App using create-react-app
Spin up your app and view it in the browser to make sure it works
Clear out the default content of the render() method of the App Component
Render a button element in your App Component
Add a handleToggle function to your App Component
Add the handleToggle function to your button's click event
We recommend having the handler console.log() to verify it is hooked up correctly
At this point, you should have a simple button that will fire a console.log when clicked.

Part 2 - Get Data from the Github API and Update State

Add state to your app with 2 keys: user: {} and active: false

In your handleToggle event handler, create a fetch that performs a GET request on this url

https://api.github.com/users/a-github-username

Note: be sure to replace a-github-username with an actual username

Update state with the result of this fetch

At this point, when you click the button it should add the Github information to state. (Use React Dev Tools Chrome Extension to verify)

Part 3 - Render Github User Info on the Page

Use conditional rendering to display the Github user information from state once the button is clicked

Specifically Render:

Your profile image using avatar_url
Your name
At least 2 other pieces of information from the Github user information.
Make sure that when you click your button it toggles between showing the user information and hiding the information.

hint: this is where state.active could be useful
At this point the core functionality of your app should align with the final product video at the bottom of this page. Namely, a button that toggles showing your information on the page.

Part 4 - Component Library

You must use a component library. You can use any component library you like, however, it should have components that you can actually use for this assessment. The component libraries below are some great options. They have a component called "Card" that you should highly consider using for this assessment. Also, "Button" component is another good one for this assessment.

React Bootstrap (Links to an external site.)
Material-UI -->

<!-- Happy Hacking!!
Example Final Product:

https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/github-card.mp4 -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
