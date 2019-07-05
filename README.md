# React Assignment

## Description

An application to get user data.

## Getting Started

### Dependencies

- React
- Redux
- Bootstrap
- Webpack, Webpack-dev-server

### Installation

- Run `git clone`
- `cd react-assignment/`
- Run `npm install`
- Run `npm start` and open `localhost:3000` in browser

## Authors

Contributors names and contact info
Dilip Reddy

## Top level directory layout

    .
    ├── apis                                    # Modules act as backend (stub or mock)
    ├── config                                  # Configuration files (eg. webpack)
    ├── src                                     # Source files
    │   ├──── app
    │   │     ├──── core                        # Contains root reducer
    │   │     ├──── features
    │   │     │      └──── [feature name]
    │   │     │            ├──── actions        # Contains Action creators
    │   │     │            ├──── components     # Contains View part
    │   │     │            ├──── assests        # Contains static data (eg. Actions)
    │   │     │            ├──── reducers       # Contains reducers
    │   │     │            └──── index.js       # Feature main file
    │   │     │            .
    │   │     │            .
    │   │     │            .
    │   │     │
    │   │     ├──── store                       # Contains store
    │   │     ├──── utils                       # Contains action creator
    │   │     └──── index.js                    # Entry JavaScript file
    │   └──── index.html                        # HTML file
    ├── package.json
    └── README.md
