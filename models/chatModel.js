import mongoose, { Schema } from 'mongoose'

const DataSchema = new Schema({
  name: { type: String, required: false },
  mail: { type: String, required: false },
  hiddenText: { type: String, required: false },
})

const DataModel = mongoose.model('Data', DataSchema)

export default DataModel
