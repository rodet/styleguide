module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/styleguide/" : "/",
  css: {
    modules: true
  }
};
