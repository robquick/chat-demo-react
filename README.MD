Chat-Demo-React
=====
This real-time chat application was created to demo the following technologies:
* React
* Redux
* ImmutableJS
* Latest ES6/2015+ language features
* Firebase 

This demo was originally created for a brownbag presentation I gave to my co-workers on April 22, 2016.  The presentation slide deck can be found [here](http://www.slideshare.net/RobQuick2/introduction-to-react-71765569).

Requirements
-----
* Node

Getting Started
-----
* Run 'npm install' to install required node packages.
* Login and create a new Firebase project at [console.firebase.google.com](console.firebase.google.com)
* Update the .env file in the project root (or create a new .env.local file) with the correct configuration values from your new Firebase project.
    * These values can be auto-generated from the Firebase console by opening your new project and clicking the "Add Firebase to your web app" link under the "Get Started Here" header.
    * More information on how create-react-app loads .env files can be found [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)
* Run 'npm start' to start the application in a dev server.
* Open http://localhost:3000/
