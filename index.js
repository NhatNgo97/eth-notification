const Discord = require("discord.js");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { embed } = require("./webhookMsg");

const app = express();
const port = process.env.PORT ?? 3000;

dotenv.config();

var corsOptions = {
  origin: process.env.BASE_URL_FRONT_END,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(morgan("common"));
app.use(cookieParser());

const webhookClient = new Discord.WebhookClient({
  url: process.env.WEBHOOK_URL,
});

app.listen(8000, () => {
  console.log("Server is Running");
});

//ROUTES
app.get("/", (req, res) => {
  return res.json("ETH Backend");
});

app.post("/eth", function (req, res) {
  webhookClient.send({ embeds: [embed] });
  res.send("send to discord webhook");
});

// const webhookClient = new Discord.WebhookClient({
//   url: process.env.WEBHOOK_URL,
// });
