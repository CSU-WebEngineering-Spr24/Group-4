Group 4 - Heather Smith, Nyeisha Pace, Tiara Gibson

Marvel Comics

The Marvel Comics App is a web application and it will allow users to explore the universe of Marvel Comics. This application will provide a user-friendly interface to discover random characters and their related comics using the Marvel Comics API.

Features

Character of the Day: A random Marvel character will be featured as the "Character of the Day." Users will be able to see the character's name, thumbnail image, and description.

Related Comics: Along with the Character of the Day, the application displays four comics related to that character. Users will be able to view the comic thumbnails and titles.

Responsive Design: The application is built with a responsive layout that adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices.

Navigation: There will be links to the Home page, Comics page, and Characters page provided in the navigation bar.

Search Functionality: The search bar is located in the navigation bar. Users will be able to search for different comics and characters.

Technologies Used

React: The frontend of the application is built using React.

React Router: React Router was used to handle the navigation and routing within the application.

Axios: Axios is a promise-based HTTP client that was used in order to make API requests to the Marvel Comics API.

MD5: The MD5 library was used to generate the hash that was required for authentication with the Marvel Comics API.

Bootstrap: Bootstrap was used to style the application and provide a responsive layout.

Marvel Comics API: This application was integrated with the Marvel Comics API in order to fetch data about characters and comics.

Installation

Clone the repository:
git clone https://github.com/CSU-WebEngineering-Spr24/Group-4.git

Navigate to the project directory:
cd /demo/frontend

Install the dependencies:
npm install

Project Setup

Obtain a Marvel Comics API key:
Visit the Marvel Developer Portal to sign up for an account.
Create a new API key and keep track of the public and private keys.
Configure the API keys:
Open the src/services/marvelApi.js file.
You will need to replace the publicKey and privateKey with your own API keys.
Start the development server:
npm start

Project Structure

The project follows a standard structure for a React application:

src/: Contains the source code files.
images/: Contains image assets used in the application.
pages/: Contains individual page components.
services/: Contain the file to make API requests and handle the data.
App.js: The main component that sets up the routing and structure of the application.
index.js: The entry point of the application.
public/: Contains the public assets and index.html file.
package.json: Contains the project dependencies and scripts.
Acknowledgements

Marvel Comics API for providing the data used in this application.
Create React App for providing the initial project setup.
Bootstrap for the responsive design and styling components.
