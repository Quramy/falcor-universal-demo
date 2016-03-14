# Falcor Universal Demo

This is a sample repository of working demonstration for Server Side Rendering(SSR) with Falcor.

## Why and How ?
There are some SSR implementation for major client-side MVC's(e.g. [angular-universal](https://github.com/angular/universal) or [ember-fastboot](https://github.com/tildeio/ember-cli-fastboot), [react-router](https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md), etc..). They provide only utilities for rendering View components on server, but don't provide functions for fetching data transparently.

[Falcor](http://netflix.github.io/falcor/) is a middle ware for data fetching. And it's [**Universal**](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.4kncmf2cr).

So, I think that Falcor and SSR libraries are a good match.

### Transparent data access

There are 2 major implementation `falcor.dataSource`:

* [falcor-router](https://www.npmjs.com/package/falcor-router)
* [falcor-http-datasource](https://www.npmjs.com/package/falcor-http-datasource)

So, you can use `Falcor.model` on both server-side and client-side with the same way:
* On server side, use `new Falcor.Model(source: dataSourceFromRouter)`
* On client side, use `new Falcor.Model(source: httpDataSource)`

### Initial data cache

You have initial data for render initial view on server-side, so the following pseudo code prevents initial data fetching:

```html
<!-- it's rendered by server after create views -->
<script>
var __server_cache = <%= serverModel.getCache() %>;
</script>
```

```js
/* bootstrap */
clientModel = new Falcor.Model({
  ...
});
clientModel.setCache(__server_cache);

// Some bootstrap code for MVC framework
```

## How to build

```sh
npm i
npm start
```

Then go to localhost:4000 .
