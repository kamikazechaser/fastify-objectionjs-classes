const fastifyPlugin = require('fastify-plugin');

function fastifyObjectionJsClasses(fastify, options, next) {
  if (
    !options.classes ||
    !Array.isArray(options.classes) ||
    options.classes.length < 1
  ) {
    next(
      new Error('You need to provide a valid array of `objection.js` classes.')
    );
    return;
  }

  const injectableClasses = pick(require('objection'), options.classes);

  if (injectableClasses.error) {
    next(new Error(injectableClasses.message));
    return;
  }

  fastify.decorate('objectionjs', injectableClasses);

  next();
}

function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    } else {
      return {
        error: true,
        message: `${key} is not a valid 'objection.js' class.`,
      };
    }
    return obj;
  }, {});
}

module.exports = fastifyPlugin(fastifyObjectionJsClasses, {
  fastify: '>=2.0.0',
  name: 'fastify-objectionjs-classes',
});
