# fastify-objectionjs-classes

![Node.js CI](https://github.com/kamikazechaser/fastify-objectionjs-classes/workflows/Node.js%20CI/badge.svg)
![npm](https://img.shields.io/npm/dt/fastify-objectionjs-classes)

Cherry-pick Objection.js classes for Fastify, complements [fastify-objectionjs](https://github.com/jarcodallo/fastify-objectionjs). This allows you to use any specific or all, Objection.js classes globally through the `objectionjs` decorated namespace.

> Decorator namespace is `objectionjs`

## Install

```
npm i fastify-objectionjs-classes --save
```

## Usage

```js
const fastify = require('fastify')();
const objectionJsClasses = require('fastify-objectionjs-classes');

fastify.register(objectionJsClasses, {
  classes: ['transaction', 'fn', 'snakeCaseMappers', 'ref'],
});

// somehwere in your code
.whereIn(fastify.objectionjs.ref('testColumn').castText()) ,'testValue');
```

## API

### Options

_fastify-objectionjs-classes_ accepts the options object:

```js
{
  classes: [ClassName];
}
```

- `classes` (Default: `undefined`): a collection of objectionjs classes.

## License

Licensed under [MIT](./LICENSE).
