# Real Estate Finder App REACT-REDUX

The app can be run from the client folder.

1. npm build
2. npm i
3. npm start
4. Download and enable CORS extension. See below

## Download CORS extention
Download and enable https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
The API doesn't allow cross-origin requests.

## A note on filtering properties
API params are not supported by the server, but they are sent by React nevertheless. See the dev console when you change the filters. It will show the new API url & js object from Redux containint the filter state.