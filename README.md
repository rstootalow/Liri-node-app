# Liri-node-app
This a Language Interpretation and Recognition Interface application using Node.js. 

# Overview
Since this is a CLI(Command Line) application, there will be no reference or links to any external html pages or cascading stylesheets. The application itself makes use of a few different Node packages via [NPMjs](https://www.npmjs.com/). The full list of installed packages can be found [here](https://github.com/rstootalow/Liri-node-app/blob/master/package.json). A more granular look in to those npm packages can be found below. 

## NPM Packages

1. [Axios](https://www.npmjs.com/package/axios): This package was installed to be able to leverage various APIs by making http requests directly from Node.js. 
   <code>npm install axios</code>

2. [Dotenv](https://www.npmjs.com/package/dotenv): This package was used to store variables of api keys and passwords that I would like to keep private as I publish my project on GitHub pages, while still having access to the APIs I used in this project.
  <code>npm install dotenv</code>

3. [Moment](https://www.npmjs.com/package/moment): This package was used to convert dates and times from Axios responses in to more readable formats.
  <code>npm install moment</code>

4. [Node-Spotify-Api](https://www.npmjs.com/package/node-spotify-api): A library of the various API calls users can make to the Spotify API.
  <code>npm install node-spotify-api</code>
   
## APIs Used

