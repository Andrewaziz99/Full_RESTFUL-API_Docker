# Full_RESTFUL-API_Docker

## Description

This is the full RESTFUL API with Docker frontend. This is a simple frontend app that allows you to create, read, update, and delete persons. The API is built with Node.js and Express.js. The API is connected to the frontend app with the Fetch API. The frontend app is built with HTML, bootstrap, and JavaScript. The frontend app is hosted on nginx.

## Installation

1. Clone the repository
2. Go to the scripts.js file and change the url to your own API url
3. Run the index.html file in your browser
4. You can use my API or you can create your own API.
5. You can find my API here: <a href="https://hub.docker.com/r/andrewaziz99/backend-api" target="_blank">backend-api</a>
6. Pull this image from Docker Hub: `docker pull andrewaziz99/backend-api`
7. Run the image: `docker run -p 9000:9000 andrewaziz99/backend-api`
8. You can now use the API on CONTAINER_IP:9000
9. You can find the CONTAINER_IP by running `docker inspect CONTAINER_ID`
10. Finally, run the index.html file in your browser
11. You can docker-ize this code by `docker-compose up`
12. Then run the image `docker run --name frontend <image_name>`
13. To get the container ip `docker inspect <container_name>`

## Usage

1. You can create a person by entering a name and age and clicking the create button
2. You can update a person by entering name, age and email and clicking the update button
3. You can delete a person by entering an id and clicking the delete button
