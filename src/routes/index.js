module.exports = app => {
  // const auth = require("./auth.routes");
  const centers = require("./centers.routes");
  const tasks = require("./tasks.routes");

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });  
  
  // app.use(`/api/v1/auth`, auth);
  app.use(`/api/v1/tasks`, tasks);
  app.use(`/api/v1/centers`, centers);
};
