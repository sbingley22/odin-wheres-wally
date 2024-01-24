const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LeaderboardSchema = new Schema({
  level: { type: Number, required: true },
  name: { type: String, required: true },
  time: { type: Number, required: true },
})

module.exports = mongoose.model("Leaderboard", LeaderboardSchema)