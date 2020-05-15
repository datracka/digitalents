export default (init, ...rest) => (...args) => rest.reduce((acc, next) => next(acc), init(...args));
