const mongoose = require("mongoose")
const Schema = mongoose.Schema

const levelData = new mongoose.Schema({
  character: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
})

const LevelSchema = new Schema({
  level: { type: Number, required: true },
  levelData: [levelData]
})

module.exports = mongoose.model("Level", LevelSchema)