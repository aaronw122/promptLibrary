const mongoose = require('mongoose')

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5
  },
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  username: {
    type: String,
    required: true,
    minlength: 5
  },
  tags: {
    type: Array,
    required: false,
  },
  source: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    required: false
  }
})

promptSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Prompt', promptSchema)
