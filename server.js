// W7Sf7vkhc7kuzyep

const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const connectDb = require("./config/db");
const { catchphrases } = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');

const app = express();
connectDb();

app.use(express.json());
app.use(cors());
app.use("/catchphrases", catchphrases);

// app.get("/", (req, res) => {
//   res.send("hi em!");
// });
// app.get("/clock", (req, res) => {
//   res.sendFile(`${__dirname}/public/clock.html`)
// });

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Catchphrases REST API",
      description:
        "A REST API built with Express and MongoDB. This API provides movie catchphrases and the context of the catchphrase in the movie.",
    },
  },
  apis: ["./routes/catchphrases.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 1304, () => console.log("Up and running 🚀"));
