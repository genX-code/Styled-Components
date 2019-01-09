const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) =>{
  axios.get("http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool")
    .then(response => res.status(200).json(response.data))
    .catch(err => console.log(err))
})

router.get("/ycomb", (req, res) =>{
  axios.get("http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=ycombinator")
    .then(response => res.status(200).json(response.data))
    .catch(err => console.log(err))
})

router.get("/news", (req, res) =>{
  axios.get("http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=newsycombinator")
    .then(response => res.status(200).json(response.data))
    .catch(err => console.log(err))
})





module.exports = router;