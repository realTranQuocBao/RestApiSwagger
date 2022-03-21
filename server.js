// W7Sf7vkhc7kuzyep

const express = require("express");
const connectDb = require("./config/db");
const { catchphrases } = require("./routes/index.js");

const app = express();
connectDb();

app.use(express.json());
app.use("/catchphrases", catchphrases);

// app.get("/", (req, res) => {
//   res.send("hi em!");
// });
// app.get("/clock", (req, res) => {
//   res.sendFile(`${__dirname}/public/clock.html`)
// });

app.listen(process.env.PORT || 1304, () => console.log("Up and running 🚀"));
