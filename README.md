# Stream Chat Application

This repository contains the code for the chat frontend application. This application makes requests to a Django server you can find [here](https://github.com/HackAfro/django-stream-server)

## Getting up and running

- Clone the repository
- Inside the cloned directory, run the following commands:
  - `npm install` or `yarn` - To install all the project's dependencies.
  - Run `yarn start` or `npm start` to start the frontend application

## Project directory

- The frontend application - `./src`

The reusable components that make up the frontend application can be found in the `src/app` directory. Each component serves a single purpose:

- `./src/app/chat/` - renders the chat interface
- `./src/app/join` - renders signup view
