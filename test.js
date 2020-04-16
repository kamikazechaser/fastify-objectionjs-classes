const test = require('tap').test;
const Fastify = require('fastify');
const fastifyObjectionJsClasses = require('./plugin');

test('invalid models option', (t) => {
  register(t, {}, function (err, fastify) {
    t.throws(function () {
      throw err;
    });
    t.notOk(fastify.objection);
    t.end();
  });
});

test('classes option is not Array', (t) => {
  register(t, { classes: {} }, function (err, fastify) {
    t.throws(function () {
      throw err;
    });
    t.notOk(fastify.objection);
    t.end();
  });
});

test('empty classes option', (t) => {
  register(t, { classes: [] }, function (err, fastify) {
    t.throws(function () {
      throw err;
    });
    t.notOk(fastify.objection);
    t.end();
  });
});

test('supplied classes option are invalid ', (t) => {
  register(t, { classes: ['lodash'] }, function (err, fastify) {
    t.throws(function () {
      throw err;
    });
    t.notOk(fastify.objection);
    t.end();
  });
});

test('double register of the same plugin', (t) => {
  const fastify = Fastify();
  t.teardown(() => fastify.close());

  fastify
    .register(fastifyObjectionJsClasses, {
      classes: ['fn'],
    })
    .register(fastifyObjectionJsClasses, {
      classes: ['fn'],
    })
    .ready((err) => {
      t.ok(err);
      t.equal(
        err.message,
        'fastify-objectionjs-classes has already registered.'
      );
      t.end();
    });
});

test('load a valid class', (t) => {
  register(t, { classes: ['fn'] }, function (err, fastify) {
    t.error(err);
    t.ok(fastify.objectionjs);
    t.ok(fastify.objectionjs.fn);
    t.end();
  });
});

function register(t, options, callback) {
  const fastify = Fastify();
  t.teardown(() => fastify.close());

  fastify
    .register(fastifyObjectionJsClasses, options)
    .ready((err) => callback(err, fastify));
}
