# PicPicker

> A simple picture picker.

## Tools
- front-end: vue2.0 + vue-router + vue-resource + vue-lazyload + element-ui

- back-end: express + mongoose

## Build Setup
First of all, check the '/src/config.js', make sure the api url is right.
``` bash
# install dependencies(both the project and the 'server' path which is the back-end)
npm install

# serve with hot reload at localhost:8080
npm run dev

# run the back-end server
cd server/
node ./bin/www

# start mongodb(on Windows as an example)
mongod --dbpath={your database path}

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
