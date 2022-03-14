import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cardSchema = new Schema({
  name: String,
  joke: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Card = mongoose.model('Card', cardSchema)

export {
  Card
}