const session = require("express-session");
const MongoStore = require("connect-mongo");

/* module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      },
      store: MongoStore.create({
        mongoUrl:
          process.env.MONGODB_URI_SESSIONS ||
          "mongodb://localhost:27017/tiny-treats-sessions",
        ttl: 24 * 60 * 60, // Time-to-live for the session data (1 day in seconds)
      }),
    })
  );
}; /*