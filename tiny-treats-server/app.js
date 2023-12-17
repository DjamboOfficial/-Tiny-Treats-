// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

const cors = require("cors");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const { isAuthenticated } = require("./middleware/isAuthenticated"); // <== IMPORT

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const corsOptions = {
  origin: "http://localhost:5173", // Replace your_frontend_port with the actual port
};

app.use(cors(corsOptions));

const IndexRoutes = require("./routes/index.routes");
app.use("/", IndexRoutes);

const AuthRoutes = require("./routes/auth.routes");
app.use("/auth", AuthRoutes);

const DashboardRoutes = require("./routes/dashboard.routes");
app.use("/dashboard", DashboardRoutes);

const CatalogueRoutes = require("./routes/catalogue.routes");
app.use("/catalogue", CatalogueRoutes);

const PaymentRoutes = require("./routes/payment.routes");
app.use("/payment", PaymentRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
