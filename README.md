# Falcor Universal Demo

This is a sample repository of working demonstration for Server Side Renderring(SSR) with Falcor.

## Why and How ?
Falcor is a middleware for data fetching. And it's [**Universal**](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.4kncmf2cr).

There are 2 major implementation `falcor.dataSource`:

* [falcor-router](https://www.npmjs.com/package/falcor-router)
* [falcor-http-datasource](https://www.npmjs.com/package/falcor-http-datasource)

So, you can use `Falcor.model` universally 
* On server side, you can use `new Model(source: dataSourceFromRouter)`
* On client side, you can use `new Model(source: httpDataSource)`

Integrateing SSR framework(e.g. [angular-universal](https://github.com/angular/universal) or [ember-fastboot](https://github.com/tildeio/ember-cli-fastboot)), you can render same data and same view on both client-side and server-side.

## Build

```sh
npm i
npm start
```

Then go to localhost:4000 .
