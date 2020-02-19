# Frontend sandbox application

## Requirements
1. node.js

## Installation
1. ```npm install``` to install dependencies
2. ```npm run build``` to build an application
3. ```npm run server``` to start a webserver

## Configuration
To configure the webserver port, edit ```ecosystem-production.config.json``` or ```ecosystem-development.config.json```.

## Development
For development, instead of ```npm run build```, run ```npm run buildDev``` and instead of ```npm run server```, run ```npm run serverDev```. This starts the automatic rebuilding of the application when changing files. By default, the application is available at localhost:3033.

## Testing
- ```npm run test``` to run tests
- ```npm run testDev``` to run tests with the watcher
