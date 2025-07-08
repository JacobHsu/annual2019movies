# annual2019movies

[Vue CLI](https://cli.vuejs.org/zh/guide/installation.html)  


bootstrap-vue [Vue CLI 3](https://bootstrap-vue.js.org/docs)  

## npm 

[![NPM](https://nodei.co/npm/@fortawesome/vue-fontawesome.png?downloads=true&stars=true)](https://nodei.co/npm/@fortawesome/vue-fontawesome/)  

## References

網站SEO [Facebook的og tag](https://developers.facebook.com/docs/sharing/webmasters/)  
[Ks Vue fullpage demo - JSFiddle](https://jsfiddle.net/romainPouchol/rf7csunm/14/)  
[Eslint: How to disable “unexpected console statement”?](https://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js)  
[Hiding elements](https://getbootstrap.com/docs/4.3/utilities/display/)  

[omdbapi](http://www.omdbapi.com)  
[alphacoders](http://wall.alphacoders.com)  
[imdb](https://www.imdb.com/) Photos 
acmodasi [amdb](https://www.acmodasi.in/amdb)  

## debug

[Vue error: Parsing error: Unexpected token](https://www.cnblogs.com/li1234yun/p/10806904.html)

## deploy

package.json

```js
"homepage": "https://jacobhsu.github.io/annual2019movies/",
  "scripts": {
    "deploy": "yarn build && gh-pages -d dist"
  },
```

vue.config.js

```js
module.exports = {
    publicPath: 'annual2019movies'
}
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
