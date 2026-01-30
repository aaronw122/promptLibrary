const promptsRouter = require('express').Router()
const Prompt = require('../models/prompt')

promptsRouter.get('/', async (request, response) => {
  const prompts = await Prompt.find({})
  response.json(prompts)
})

promptsRouter.post('/', (request, response, next) => {
  const { title, content, username, tags, source, likes} = request.body


  const prompt = new Prompt({
    title: title,
    content: content,
    username: username,
    tags: tags,
    source: source,
    likes: likes || 0,
  })

  prompt.save()
    .then(savedPrompt => {
      response.json(savedPrompt)
    })
    .catch(error => next(error))
})

promptsRouter.delete('/:id', (request, response, next) => {
  Prompt.findByIDAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

promptsRouter.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  Prompt.findById(request.params.id)
    .then(prompt => {
      if (!prompt) {
        return response.status(204).end()
      }
      prompt.title = body.title
      prompt.content = body.content
      prompt.username = body.username
      prompt.tags = body.tags
      prompt.source = body.source
      prompt.likes = body.likes

      return prompt.save().then(updatedPrompt => {
        response.json(updatedPrompt)
      })
    })
    .catch(error => next(error))
})

module.exports = promptsRouter
