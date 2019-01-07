const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./route");
const { key, secret } = require("./config");
const cors = require("cors");

const twitterProxyServer = require('twitter-proxy');
twitterProxyServer({
  consumerKey: key,
  consumerSecret: secret
});

app.use(cors());
app.use("/tweets", route);


app.listen(port, () => console.log(`Server is listening on ${port}`) )



// console.log('Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool');

