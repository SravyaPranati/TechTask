const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");
const colors = require("colors");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
const request = require("http");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express(); // main thing
app.use(cors());
app.use(express.json()); // to accept json data

app.use("/api/users", userRoutes);

 __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(5000, console.log(`Server running on port ${PORT}..`.yellow.bold));
