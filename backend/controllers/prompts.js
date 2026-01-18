const promptsRouter = require('express').Router()
const Prompt = require('../models/prompt')

promptsRouter.get('/', (request, response) => {
  Prompt.find({}).then(prompts => {
    response.json(prompts)
  })
})

promptsRouter.post('/', (request, response, next) => {
  const { title, content, username, tags, source, likes} = request.body

  const prompt = new Prompt({
    title: title,
    content: content,
    username: username,
    tags: tags,
    source: source,
    likes: likes,
  })

  prompt.save()
    .then(savedPrompt => {
      response.json(savedPrompt)
    })
    .catch(error => next(error))
})

module.exports = promptsRouter
