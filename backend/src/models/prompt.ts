import mongoose from 'mongoose'

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
  author: {
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
  },
  createdAt: {
    type: String,
    required: true
  }
})

promptSchema.set('toJSON', {
  transform: (document, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default mongoose.model('Prompt', promptSchema)
