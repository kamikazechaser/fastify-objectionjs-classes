# fastify-objectionjs-classes

![Node.js CI](https://github.com/kamikazechaser/fastify-objectionjs-classes/workflows/Node.js%20CI/badge.svg)

Cherry-pick Objection.js classes for Fastify, complements [fastify-objectionjs](https://github.com/jarcodallo/fastify-objectionjs).

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
