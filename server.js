const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./route");
const { key, secret } = require("./config");
const cors = require("cors");
const path = require("path");

const twitterProxyServer = require('twitter-proxy');
twitterProxyServer({
  consumerKey: key,
  consumerSecret: secret
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html" ))
  })
}

app.use(cors());
app.use("/tweets", route);


app.listen(port, () => console.log(`Server is listening on ${port}`) )



// console.log('Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool');

